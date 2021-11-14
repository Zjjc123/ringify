import React from "react";

const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=9149f32554f7425bac1191a602bb83e7&response_type=code&redirect_uri=https://zjjc123.github.io/ringify&scope=user-follow-read";

export default function Login() {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center my-12">
                <a
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    href={AUTH_URL}
                >
                    Login with Spotify
                </a>
            </div>
        </div>
    );
}
