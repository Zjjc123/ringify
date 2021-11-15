import React, { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";

import SpotifyWebApi from "spotify-web-api-node";
import Album from "../components/Album";

const spotifyApi = new SpotifyWebApi({
    clientId: "9149f32554f7425bac1191a602bb83e7",
});

export default function Dashboard({ code }) {
    const accessToken = useAuth(code);
    const [albums, setAlbums] = useState();

    useEffect(() => {
        if (!accessToken) return;
        spotifyApi.setAccessToken(accessToken);
    }, [accessToken]);

    useEffect(() => {
        if (!accessToken) return;
        var newAlbums = [];
        spotifyApi
            .getFollowedArtists({ limit: 50 })
            .then((data) => {
                // for each followed artist
                return Promise.all(
                    data.body.artists.items.map((artist) => {
                        return spotifyApi
                            .getArtistAlbums(artist.id)
                            .then((data) => {
                                // for each album by that artist
                                data.body.items.forEach((album) => {
                                    const dateReleased = new Date(
                                        album.release_date
                                    );
                                    const timeDifference =
                                        Date.now() - dateReleased.getTime();
                                    const dayDifference =
                                        timeDifference / (1000 * 3600 * 24);

                                    if (dayDifference < 30) {
                                        newAlbums.push(album);
                                    }
                                });
                            });
                    })
                );
            })
            .then(() => {
                const unsorted = newAlbums.map((album) => {
                    return {
                        artist: album.artists[0].name,
                        title: album.name,
                        url: album.external_urls.spotify,
                        albumUrl: album.images[0].url,
                        releaseDate: album.release_date,
                    };
                });
                const filtered = unsorted.filter(
                    (album) => album.artist !== "Various Artists"
                );
                setAlbums(
                    filtered.sort(
                        (a, b) =>
                            new Date(b.releaseDate).getTime() -
                            new Date(a.releaseDate).getTime()
                    )
                );
            });
    }, [accessToken]);

    return (
        <div>
            <h1 className="text-center text-5xl font-bold pt-16 pb-4">
                New Releases
            </h1>
            <div className="justify-center h-screen w-full px-8 lg:px-48 py-3 lg:py-8">
                {!albums ? (
                    <div className="py-8 text-2xl text-center">Loading...</div>
                ) : albums.length === 0 ? (
                    <div className="py-8 text-4xl text-center">
                        No New Music Found
                    </div>
                ) : (
                    albums.map((album) => <Album album={album} />)
                )}
            </div>
        </div>
    );
}
