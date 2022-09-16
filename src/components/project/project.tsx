/* eslint-disable react-hooks/rules-of-hooks */
import { useColorMode, Box, Link, HStack, VStack, Text, Tag, useColorModeValue, Tooltip, Button } from "@chakra-ui/react";
import Image from '@/components/utils/image'
import { HiOutlineDownload, HiServer } from 'react-icons/hi'
import { VscGithubAlt } from 'react-icons/vsc'

const project = ({ name, description, img, link, github, tag, servers, downloads }: Props) => {
    const { colorMode } = useColorMode()
    const background = useColorModeValue('project.background.ligth', 'project.background.dark')
    const border = useColorModeValue('project.ligthBorder', 'project.darkBorder')
    
    // boxShadow='inset 0 0 0 200px rgba(255,255,255,0.05)'
    return (
        <Box p='5'>
            <Link href={link} target='_blank' _hover={{ color: 'white' }}>
                <HStack p={8} rounded='lg' align='start' spacing={4} bgColor={background} _hover={{ bg: border }}>
                <Box rounded='lg' p={2} position="relative" overflow="hidden" lineHeight={0}>
                    <Box position="absolute" opacity={0.25}></Box>
                    <Image src={img} alt={name} height={100} width={100} layout="fixed" rounded="md"></Image>
                </Box>

                    <VStack align='start' justify='flex-start' spacing={1} pt='3.5'>
                        <VStack align="start" >
                            <HStack>
                                <Text fontWeight="bold" fontSize={[ 'md','lg', 'x-large' ]} noOfLines={2} bgClip='text' bgGradient='linear(to-r, rgb(59 130 246), rgb(236 72 153))'>
                                    {name}
                                </Text>
                            </HStack>
                            <HStack>
                                { tag === 'package' ? <HiOutlineDownload /> : <HiServer /> }
                                <Tooltip label={ servers ? 'Guilds' : "last month's downloads" } placement='right-end'>
                                        <Text pr={2.5}>{servers ?? downloads}</Text>
                                </Tooltip>

                                <Tag m={5}>{tag}</Tag>
                            </HStack>
                            <Text fontSize={[ 'sm' ,'md' ]} >
                                {description}
                            </Text>
                        </VStack>
                    </VStack>
                    {
                        github ? (
                                    <Link pt='10' href={github} target='_blank'>
                                        <Button colorScheme='gray' variant='outline' >
                                            <VscGithubAlt size='35px' color='gray' />
                                        </Button>
                                        
                                    </Link>
                                
                        ) : null
                    }
                </HStack>
            </Link>
        </Box>
    )
}

type Props = {
	name: string;
	description: string;
	img: string;
	link: string;
    github?: string
    tag: string;
    downloads?: number
    servers?: number
};

export default project