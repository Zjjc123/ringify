import React from "react";

const CLIENT_ID = "9149f32554f7425bac1191a602bb83e7";
const REDIRECT_URL = "https://zjjc123.github.io/ringify";
const SCOPE = "user-follow-read";

const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=" +
    CLIENT_ID +
    "&response_type=code&redirect_uri=" +
    REDIRECT_URL +
    "&scope=" +
    SCOPE;

export default function Login() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col justify-center items-center my-12 text-center">
                <h1 className="flex text-5xl text-center">
                    Get a collection of new releases from artists you follow
                </h1>
                <a
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 my-8 rounded"
                    href={AUTH_URL}
                >
                    Login with Spotify
                </a>
            </div>
            <footer class="fixed bottom-0 right-0 m-2 text-sm">
                Jason Zhang 2021
            </footer>
        </div>
    );
}
