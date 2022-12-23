import { Link, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const Router = () => {
	const router = useRouter()
	return (
		<Link href={router.pathname == '/' ? '/about' : '/'}>
			<Text>{router.pathname == '/' ? 'About' : 'Home'}</Text>
		</Link>
	)
}

export default Router
