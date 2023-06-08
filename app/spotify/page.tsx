import SpotifyConvertor from "./SpotifyConvertor";

export const metadata = {
    title: 'Spotify Convertor',
    description: 'Home page',
};

export default async function PDF() {
    return(
        <div style={{margin: '0 20px'}}>
            <h1 className="title">Spotify to Deezer Playlist</h1>
            <SpotifyConvertor />
        </div>
    )
}