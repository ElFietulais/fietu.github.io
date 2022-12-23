import {
	Box,
	Link,
	HStack,
	VStack,
	Text,
	Tag,
	useColorModeValue,
	Tooltip,
} from '@chakra-ui/react'
import { HiOutlineDownload, HiServer } from 'react-icons/hi'

const Project = ({
	name,
	description,
	link,
	tag,
	servers,
	downloads,
}: Props) => {
	const border = useColorModeValue('black', 'white')
	const hover = useColorModeValue('project.border.light', 'project.border.dark')

	return (
		<Box p='5'>
			<Link href={link} target='_blank' _hover={{ color: border }}>
				<HStack
					p='8'
					rounded='lg'
					align='start'
					spacing={4}
					border='1px'
					borderColor={border}
					_hover={{ bg: hover }}
				>
					<VStack align='start' justify='flex-start' spacing={1}>
						<VStack align='start'>
							<HStack>
								<Text
									fontWeight='bold'
									fontSize={['md', 'lg', 'x-large']}
									noOfLines={2}
									pr='2'
								>
									{name}
								</Text>
								<Tag>{tag}</Tag>
								{tag === 'package' ? <HiOutlineDownload /> : <HiServer />}
								<Tooltip
									label={servers ? 'Guilds' : "last month's downloads"}
									placement='right-end'
								>
									<Text pr={2.5}>{servers ?? downloads}</Text>
								</Tooltip>
							</HStack>
							<Text fontSize={['sm', 'md']}>{description}</Text>
						</VStack>
					</VStack>
				</HStack>
			</Link>
		</Box>
	)
}

type Props = {
	name: string
	description: string
	link: string
	tag: string
	downloads?: number
	servers?: number
}

export default Project
