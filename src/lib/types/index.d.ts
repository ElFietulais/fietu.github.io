export type SpotifyItem = {
	name: string
	artists: {
		name: string
	}[]
	album: {
		name: string | null | undefined
		images: [
			{
				height: number
				url: string
				width: number
			}
		]
	}
	external_urls: {
		spotify: string
	}
}

export type SpotifyResponse = {
	name: string
	artists: {
		name: string
	}[]
	album: {
		name: string | null | undefined
	}
	images: {
		height: number
		url: string
		width: number
	}
	url: string
}
