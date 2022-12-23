// https://github.com/drgatoxd/drgatoxd/blob/main/lib/spotify.ts
import axios from 'axios'

class Spotify {
	public token = ''
	public key = Buffer.from(
		`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
	).toString('base64')

	public constructor() {
		this.getAccessToken()
	}

	public awaitToken() {
		return new Promise((resolve) => {
			const interval = setInterval(() => {
				if (this.token) {
					clearInterval(interval)
					resolve(this.token)
				}
			}, 100)
		})
	}

	public async getAccessToken() {
		const { data } = await axios('https://accounts.spotify.com/api/token', {
			method: `POST`,
			headers: {
				Authorization: `Basic ${this.key}`,
				'Content-Type': `application/x-www-form-urlencoded`,
			},
			data: {
				grant_type: 'refresh_token',
				refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
			},
		})
		this.token = data.access_token
		setTimeout(() => this.getAccessToken(), (data.expires_in - 5) * 1000)
		return data
	}

	public async getNowPlaying() {
		if (!this.token) await this.awaitToken()

		const { data } = await axios(
			'https://api.spotify.com/v1/me/player/currently-playing',
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${this.token}`,
				},
			}
		)
		return data
	}
}

export default Spotify
