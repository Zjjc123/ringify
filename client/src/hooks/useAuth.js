import { useState, useEffect } from "react";
import axios from "axios";

const homePath = "/ringify";
const serverUrl = "https://ringify.herokuapp.com";

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        axios
            .post(serverUrl + "/login", {
                code,
            })
            .then((res) => {
                setAccessToken(res.data.accessToken);
                setRefreshToken(res.data.refreshToken);
                setExpiresIn(res.data.expiresIn);
                window.history.pushState({}, null, homePath);
            })
            .catch(() => {
                window.location = homePath;
            });
    }, [code]);

    useEffect(() => {
        if (!refreshToken || !expiresIn) return;
        const interval = setInterval(() => {
            axios
                .post(serverUrl + "refresh", {
                    refreshToken,
                })
                .then((res) => {
                    setAccessToken(res.data.accessToken);
                    setExpiresIn(res.data.expiresIn);
                })
                .catch(() => {
                    window.location = homePath;
                });
        }, (expiresIn - 60) * 1000);
        return () => clearInterval(interval);
    }, [refreshToken, expiresIn]);

    return accessToken;
}
