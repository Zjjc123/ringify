import React from "react";

export default function Album({ album }) {
    console.log(album.url);
    return (
        <a
            className="w-full lg:max-w-full lg:flex my-16 shadow-md "
            href={album.url}
        >
            <img
                className="lg:w-48 w-full flex-none object-cover rounded-t rounded-l overflow-hidden"
                alt={album.title}
                src={album.albumUrl}
            ></img>
            <div className="lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-3xl mb-2">
                        {album.title}
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="text-2xl">
                        <p className="text-gray-900 leading-none">
                            {album.artist}
                        </p>
                        <p className="text-gray-600">{album.releaseDate}</p>
                    </div>
                </div>
            </div>
        </a>
    );
}
