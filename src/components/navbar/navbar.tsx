import {
	Box,
	Button,
	Flex,
	useColorMode,
	useColorModeValue,
	Image,
	IconButton,
	Icon,
} from '@chakra-ui/react'
import { BiSun, BiMoon } from 'react-icons/bi'
import Router from '@/components/navbar/router'

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	const bg = useColorModeValue('background.light', 'background.dark')
	const bottom = useColorModeValue('navBar.bottom.light', 'navBar.bottom.dark')
	return (
		<Box
			bg={bg}
			borderBottomWidth='1px'
			borderBottomColor={bottom}
			display={{ base: 'none', md: 'block' }}
		>
			<Flex w='100%' px='6' py='5' align='center' justify='space-between'>
				<Image
					src='/fietu.png'
					alt='fietu'
					width={50}
					height={50}
					rounded='full'
				></Image>
				<Button fontWeight={0}>
					<Router />
				</Button>
				<IconButton
					aria-label='switch theme'
					icon={
						colorMode === 'dark' ? <Icon as={BiSun} /> : <Icon as={BiMoon} />
					}
					onClick={toggleColorMode}
				></IconButton>
			</Flex>
		</Box>
	)
}

export default Navbar
