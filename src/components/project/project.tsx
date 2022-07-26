import { Box, Link, HStack, VStack, Text, Tag, useColorModeValue, Tooltip } from "@chakra-ui/react";
import Image from '@/components/utils/image'
import { HiOutlineDownload, HiServer } from 'react-icons/hi'

const Project = ({ name, description, img, link, tag, servers, downloads }: Props) => {
    const background = useColorModeValue('project.background.light', 'project.background.dark')
    const border = useColorModeValue('project.border.light', 'project.border.dark')
    let api = false
    if (tag === 'API') api = true
    
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
                            {
                                api ? <Tag>{tag}</Tag> : (                                  
                                    <HStack>
                                        { tag === 'package' ? <HiOutlineDownload /> : <HiServer /> }
                                        <Tooltip label={ servers ? 'Guilds' : "last month's downloads" } placement='right-end'>
                                            <Text pr={2.5}>{servers ?? downloads}</Text>
                                        </Tooltip>     
                                        <Tag>{tag}</Tag>
                                    </HStack>                                   
                                )
                            }
                            <Text fontSize={[ 'sm' ,'md' ]} >
                                {description}
                            </Text>
                        </VStack>
                    </VStack>
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
    tag: string;
    downloads?: number
    servers?: number
};

export default Project