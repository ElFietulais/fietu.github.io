import {
	useColorMode,
	useColorModeValue,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerFooter,
	HStack,
	Link,
	IconButton,
	Icon,
} from '@chakra-ui/react'
import { BiSun, BiMoon } from 'react-icons/bi'
import { FaTwitter, FaGithub, FaDiscord } from 'react-icons/fa'

const MovilDrawer = ({
	isOpen,
	onClose,
}: {
	isOpen: boolean
	onClose: () => void
}) => {
	const { colorMode, toggleColorMode } = useColorMode()
	const bg = useColorModeValue('background.light', 'background.dark')

	return (
		<Drawer placement='bottom' onClose={onClose} isOpen={isOpen}>
			<DrawerOverlay />
			<DrawerContent p='2' bg={bg}>
				<DrawerCloseButton />
				<DrawerFooter mt={10} justifyContent={'space-between'}>
					<HStack>
						<Link href='https://twitter.com/Elfirul38317910' target='_blank'>
							<IconButton aria-label='Twitter' icon={<FaTwitter />} />
						</Link>
						<Link href='https://github.com/ElFietulais' target='_blank'>
							<IconButton aria-label='Github' icon={<FaGithub />} />
						</Link>
						<Link
							href='https://discord.com/users/780876656352559125'
							target='_blank'
						>
							<IconButton aria-label='Discord' icon={<FaDiscord />} />
						</Link>
					</HStack>
					<IconButton
						aria-label='switch theme'
						icon={
							colorMode === 'dark' ? <Icon as={BiSun} /> : <Icon as={BiMoon} />
						}
						onClick={toggleColorMode}
					></IconButton>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}

export default MovilDrawer
