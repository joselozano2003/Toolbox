'use client';

import React, { useState } from 'react';
import styles from '@/styles/Spotify.module.css';

export default function SpotifyConvertor() {
    const [spotifyClient, setSpotifyClient] = useState({
        client: '',
        secret: '',
        token: '',
    });

    const [deezerClient, setDeezerClient] = useState({
        client: '',
        secret: '',
        token: '',
    });

    const [playlist, setPlaylist] = useState('');

    function handleClick() {
        console.log(spotifyClient);
        console.log(deezerClient);
        console.log(playlist);
    }

    return (
        <div className={styles.parent}>
            <h2 className={styles.subtitle}>Insert values to migrate your playlist</h2>
            <div className={styles.formContainer}>
                <div className={styles.subContainer}>
                    <h3 className={styles.subtitle}>Spotify Credentials</h3>
                    <form className={styles.form}>
                        <label htmlFor="spotify-client">Spotify Client ID</label>
                        <input
                        type="text"
                        id="spotify-client"
                        name="spotify"
                        placeholder="Client ID"
                        value={spotifyClient.client}
                        onChange={(e) =>
                            setSpotifyClient({ ...spotifyClient, client: e.target.value })
                        }
                        />
                        <label htmlFor="spotify-secret">Spotify Client Secret</label>
                        <input
                        type="text"
                        id="spotify-secret"
                        name="spotify"
                        placeholder="Client Secret"
                        value={spotifyClient.secret}
                        onChange={(e) =>
                            setSpotifyClient({ ...spotifyClient, secret: e.target.value })
                        }
                        />
                        <label htmlFor="spotify-token">Spotify Access Token</label>
                        <input
                        type="text"
                        id="spotify-token"
                        name="spotify"
                        placeholder="Access Token"
                        value={spotifyClient.token}
                        onChange={(e) =>
                            setSpotifyClient({ ...spotifyClient, token: e.target.value })
                        }
                        />
                    </form>
                </div>
                <div className={styles.subContainer}>
                        <h3 className={styles.subtitle}>Deezer Credentials</h3>
                        <form className={styles.form}>
                            <label htmlFor="deezer-client">Deezer Client ID</label>
                            <input
                            type="text"
                            id="deezer-client"
                            name="deezer"
                            placeholder="Client ID"
                            value={deezerClient.client}
                            onChange={(e) =>
                                setDeezerClient({ ...deezerClient, client: e.target.value })
                            }
                            />
                            <label htmlFor="deezer-secret">Deezer Client Secret</label>
                            <input
                            type="text"
                            id="deezer-secret"
                            name="deezer"
                            placeholder="Client Secret"
                            value={deezerClient.secret}
                            onChange={(e) =>
                                setDeezerClient({ ...deezerClient, secret: e.target.value })
                            }
                            />
                            <label htmlFor="deezer-token">Deezer Access Token</label>
                            <input
                            type="text"
                            id="deezer-token"
                            name="deezer"
                            placeholder="Access Token"
                            value={deezerClient.token}
                            onChange={(e) =>
                                setDeezerClient({ ...deezerClient, token: e.target.value })
                            }
                            />
                        </form>
                    </div>
            </div>
            <h3>Playlist</h3>
            <form className={styles.form}>
                <label htmlFor="playlist">Playlist URL</label>
                <input
                type="text"
                id="playlist"
                name="playlist"
                placeholder="Playlist URL"
                value={playlist}
                onChange={(e) => setPlaylist(e.target.value)}
                />
            </form>
            <button onClick={handleClick} className={styles.button}>
                Convert
            </button>
        </div>
    );
}
