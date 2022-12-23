import {
	Box,
	Heading,
	VStack,
	Text,
	Grid,
	useColorModeValue,
	HStack,
	Link,
	SimpleGrid,
} from '@chakra-ui/react'
import projects from '@/lib/data/projects'
import Project from '@/components/project/project'
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
	const [botGuilds, setBotGuilds] = useState(0)
	const [packageDownloads, setPackageDownloads] = useState(0)

	useEffect(() => {
		axios
			.get('https://japi.rest/discord/v1/application/847938660095229962')
			.then(({ data }) => {
				setBotGuilds(data.data.bot.approximate_guild_count ?? 0)
			})

		axios
			.get('https://api.npmjs.org/downloads/point/last-month/fietu')
			.then(({ data }) => {
				setPackageDownloads(data.downloads ?? 0)
			})
	}, [botGuilds])

	const hover = useColorModeValue(
		'hover.socialButtons.light',
		'hover.socialButtons.dark'
	)

	return (
		<Box>
			<Box minHeight='90vh'>
				<Grid placeItems='center' pt='28vh'>
					<Heading as='h1' fontSize='9xl'>
						Fietu
					</Heading>
					<Text maxWidth='2xl' fontSize='lg' textAlign='center' px='5'>
						Hi I&#39;m fietu, a programmer with an experience of about a year in
						which most of the time I have programmed discord bots and some webs,
						currently I&#39;m learning typescript, html and css.
					</Text>
					<HStack p='2.5'>
						<Link
							href='https://twitter.com/Elfirul38317910'
							target='_blank'
							_hover={{ color: hover }}
						>
							<FaTwitter size='34' />
						</Link>
						<Link
							href='https://github.com/ElFietulais'
							target='_blank'
							_hover={{ color: hover }}
						>
							<FaGithub size='34' />
						</Link>
						<Link
							href='https://discord.com/users/780876656352559125'
							target='_blank'
							_hover={{ color: hover }}
						>
							<FaDiscord size='34' />
						</Link>
					</HStack>
				</Grid>
			</Box>
			<Box minHeight='85vh' id='projects'>
				<Heading
					as='h2'
					fontSize={['6xl', '7xl', '8xl', '8xl']}
					textAlign='center'
					pt='20'
					pb='10'
				>
					Projects
				</Heading>
				<Grid placeItems='center' pb='10'>
					<VStack align='start' spacing={8}>
						<SimpleGrid columns={1} spacing={4} mt={8} w='100%'>
							{projects.map(
								({ id, name, description, link, tag, servers, downloads }) => {
									{
										id === 0 && (servers = botGuilds)
										id === 1 && (downloads = packageDownloads)
									}
									return (
										<Project
											key={id}
											name={name}
											description={description}
											link={link}
											tag={tag}
											servers={servers}
											downloads={downloads}
										/>
									)
								}
							)}
						</SimpleGrid>
					</VStack>
				</Grid>
			</Box>
		</Box>
	)
}

export default Home
