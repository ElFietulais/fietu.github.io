import {
	Box,
	Image,
	SimpleGrid,
	Text,
	useColorModeValue,
	Link,
} from '@chakra-ui/react'

const Song = ({ img, artists, album, name, url }: Props) => {
	const bg = useColorModeValue('background.light', 'background.dark')

	return (
		<Box bg={bg} p='5' borderRadius='10px'>
			<SimpleGrid
				placeItems='center'
				columns={{ base: 1, md: 2 }}
				gridTemplate={{ base: '1fr', md: '1fr 1fr' }}
			>
				<Image
					src={img}
					borderRadius='10%'
					boxSize={{ base: '24', md: '32' }}
				/>
				<Box>
					<Text textAlign='center'>
						{artists.map((a) => a.name).join(', ')}
					</Text>
					{album && <Text textAlign='center'>Album: {album}</Text>}
				</Box>
			</SimpleGrid>
			<Link href={url} target='_blank' _hover={{ color: '#1fdf64' }}>
				<Text pt='3' textAlign='center'>
					{name}
				</Text>
			</Link>
		</Box>
	)
}

type Props = {
	img: string
	artists: {
		name: string
	}[]
	album: string | null | undefined
	name: string
	url: string
}

export default Song
