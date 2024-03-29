import { useColorModeValue, Box, Text } from '@chakra-ui/react'
import Link from 'next/link'

const PageNotFound = () => {
	const bg = useColorModeValue('background.light', 'background.dark')
	return (
		<Box minHeight='88vh' pt='48' bg={bg}>
			<Box textAlign='center'>
				<Text as='h1' fontWeight='extrabold' fontSize='9xl'>
					404
				</Text>
				<Text>You seem to be lost, let me take you</Text>
				<Text>
					<Link href='/'>Home.</Link>
				</Text>
			</Box>
		</Box>
	)
}

export default PageNotFound
