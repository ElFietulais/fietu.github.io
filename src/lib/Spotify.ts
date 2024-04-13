export class Spotify {
    public token: string | undefined;
    public key = btoa(
        `${import.meta.env.SPOTIFY_CLIENT_ID}:${import.meta.env.SPOTIFY_CLIENT_SECRET}`,
    );

    private apiURL = "https://api.spotify.com/v1/";

    public async prepare(): Promise<"OK"> {
        const expire = await this.accessToken();
        setTimeout(
            () => {
                this.token = undefined;
            },
            (expire - 5) * 1000,
        );

        return "OK";
    }

    public async getNowPlaying(): Promise<NowPlaying | undefined> {
        if (!this.token) await this.prepare();

        const response = await fetch(
            this.apiURL + "me/player/currently-playing",
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${this.token}`,
                },
            },
        );

        if (response.status === 204) return undefined;

        const data = (await response.json()) as NowPlayingAPI;
        return { ...data.item, url: data.item.external_urls.spotify };
    }

    private async accessToken(): Promise<number> {
        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                Authorization: `Basic ${this.key}`,
                "Content-Type": `application/x-www-form-urlencoded`,
            },
            body: `grant_type=refresh_token&refresh_token=${import.meta.env.SPOTIFY_REFRESH_TOKEN}`,
        });

        const data = (await response.json()) as AccessTokenData;
        this.token = data.access_token;

        return data.expires_in;
    }
}

const spotify = new Spotify();
export default spotify;

interface AccessTokenData {
    expires_in: number;
    access_token: string;
}

interface NowPlayingAPI {
    item: NowPlaying & {
        external_urls: {
            spotify: string;
        };
    };
}

interface NowPlaying {
    album: {
        name: string;
    };
    name: string;
    artists: string[];
    url: string;
}
