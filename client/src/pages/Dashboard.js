import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";

export default function Dashboard({ code }) {
    const accessToken = useAuth(code);

    /*
    useEffect(() => {
        if (!accessToken) return;
        spotifyApi.setAccessToken(accessToken);
    });
    */
    return <div>{accessToken}</div>;
}
