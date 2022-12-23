import { Box, Heading, SimpleGrid, Text, Image } from '@chakra-ui/react'
import Footer from '@/components/footer/footer'

const PageNotFound = () => {
	return (
		<Box>
			<Box minHeight='70vh' pt={{ base: '5', md: '36' }} pb={{ base: '10' }}>
				<SimpleGrid
					placeItems='center'
					columns={{ base: 1, md: 2 }}
					gridTemplate={{ base: '1fr', md: '1fr 1fr' }}
				>
					<Box placeItems='center' textAlign='center' px='5'>
						<Heading as='h1' fontSize='7xl'>
							About me
						</Heading>
						<Text fontSize='lg' maxWidth='2xl' py='5'>
							Hi, I&apos;m fietu, I&apos;m 14 years old and I live in Colombia.
							<br />I like the world of video games and pc gaming, currently my
							favorite video games are Minecraft and Rocket league.
						</Text>
					</Box>
					<Image
						src='/fietu.png'
						borderRadius='full'
						boxSize={{ base: '48', md: '60' }}
						alt='fietu'
					/>
				</SimpleGrid>
			</Box>
			<Footer />
		</Box>
	)
}

export default PageNotFound
