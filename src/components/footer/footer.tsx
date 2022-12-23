import {
	Box,
	Collapse,
	HStack,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	Portal,
	ScaleFade,
	SimpleGrid,
	Text,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaSpotify, FaDiscord } from 'react-icons/fa'
import { useLanyard } from 'use-lanyard'
import { SpotifyResponse } from '@/lib/types'
import Song from '@/components/footer/song'

const colors = {
	offline: '#737e8d',
	online: '#43b581',
	idle: '#f8a619',
	dnd: '#f44648',
}

const Footer = () => {
	const [track, setTrack] = useState<SpotifyResponse | null | undefined>()
	const user = useLanyard('780876656352559125')

	useEffect(() => {
		axios.get('/api/spotify').then(({ data }) => {
			setTrack(data as SpotifyResponse)
		})
	}, [])
	return (
		<Box>
			<Box>
				<SimpleGrid
					columns={{ base: 1, sm: 2 }}
					gridTemplate={{ base: '1fr', sm: '1fr 1fr' }}
					mx='auto'
					maxW='7xl'
					py={4}
					px={4}
					spacing={4}
					placeItems='center'
				>
					<HStack>
						<FaSpotify size={34} />
						{track ? (
							<Popover
								autoFocus={false}
								placement='auto'
								offset={[-20, 10]}
								isLazy
							>
								<PopoverTrigger>
									<Text color='#1fdf64' cursor='pointer'>
										{track.name}
									</Text>
								</PopoverTrigger>
								<PopoverContent minW={{ md: 'lg' }}>
									<PopoverArrow />
									<Song
										img={track.images.url}
										artists={track.artists}
										album={track.album.name}
										name={track.name}
										url={track.url}
									/>
								</PopoverContent>
							</Popover>
						) : (
							<Text>Not listening</Text>
						)}
					</HStack>
					<HStack>
						<FaDiscord size={34} />
						<Text color={colors[user.data?.discord_status ?? 'offline']}>
							{user.data?.discord_status ?? 'Offline'}
						</Text>
					</HStack>
				</SimpleGrid>
			</Box>
		</Box>
	)
}

export default Footer
