import {
	Box,
	Grid,
	Flex,
	Text,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react'
import Router from '@/components/navbar/router'
import MovilDrawer from '@/components/navbar/mobileDrawer'

const MovilNavbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const bg = useColorModeValue('background.light', 'background.dark')
	const top = useColorModeValue('navBar.bottom.light', 'navBar.bottom.dark')

	return (
		<Box pt='20'>
			<Grid
				bg={bg}
				borderTopWidth='2px'
				borderTopColor={top}
				position='fixed'
				templateColumns='1fr 1fr'
				display={{ base: 'grid', md: 'none' }}
				minH='76'
				w='100%'
				bottom='0'
			>
				<Flex role='button' transition='.2s ease' rounded='lg'>
					<Flex justify='center' align='center' w='full' flexDir='column'>
						<Router />
					</Flex>
				</Flex>
				<Flex
					role='button'
					transition='.2s ease'
					rounded='lg'
					pb='1'
					pt='2'
					display='flex'
					justifyContent='center'
					alignItems='center'
					flexDir='column'
					onClick={onOpen}
				>
					<Text>Menu</Text>
				</Flex>
			</Grid>

			<MovilDrawer isOpen={isOpen} onClose={onClose} />
		</Box>
	)
}

export default MovilNavbar
