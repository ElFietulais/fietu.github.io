import { Box, Flex, HStack, useColorModeValue, useColorMode, Icon, IconButton } from "@chakra-ui/react"
import Image from "@/components/utils/image"
import { BiSun, BiMoon } from 'react-icons/bi'

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue('navBar.background.light', 'navBar.background.dark')
    const bottom = useColorModeValue('navBar.bottom.light', 'navBar.bottom.dark')
    return (
        <Box bg={bg} borderBottomWidth='1px' borderBottomColor={bottom}>
            <Flex w='100%' px='6' py='5' align='center' justify='space-between'>
                <Image src='/fietu.png' alt='fietu' width={50} height={50} rounded='full'></Image>
                <HStack>
                    <IconButton aria-label='switch theme' icon={colorMode === 'dark' ? <Icon as={BiSun} /> : <Icon as={BiMoon} />} onClick={toggleColorMode} ></IconButton>
                </HStack>
            </Flex>
        </Box>
    )
}

export default Navbar