import type { NextApiRequest, NextApiResponse } from 'next'
import Spotify from '@/lib/spotify'
import { SpotifyItem, SpotifyResponse } from '@/lib/types'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<SpotifyResponse | null | undefined>
) {
	const spotify = new Spotify()
	const data = await spotify.getNowPlaying()

	if (!data?.item) return res.status(200).json(null)

	const { name, artists, album, external_urls } = data.item as SpotifyItem

	res.status(200).json({
		name,
		artists: artists.filter((a) => a.name),
		album: { name: album.name },
		images: album.images[0],
		url: external_urls.spotify,
	})
}
