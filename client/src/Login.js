import React from "react";

const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=9149f32554f7425bac1191a602bb83e7&response_type=code&redirect_uri=http://localhost:3000&scope=user-follow-read";

export default function Login() {
    return (
        <a
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            href={AUTH_URL}
        >
            Login
        </a>
    );
}
