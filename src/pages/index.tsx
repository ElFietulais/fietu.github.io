import type { NextPage } from 'next'
import { Box, Heading, VStack, Text, Image, Grid, useColorModeValue, useColorMode, HStack, Link, SimpleGrid } from '@chakra-ui/react'
import projects from '@/data/projects'
import Project from '@/components/project/project'
import { FaDiscord, FaGithub } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Home: NextPage = () => {
  const { colorMode } = useColorMode()
  const [botGuilds, setBotGuilds] = useState(0)
  const [packageDownloads, setPackageDownloads] = useState(0)

  useEffect(() => {
    const fetchBotData = async () => {
      const data = await fetch('https://japi.rest/discord/v1/application/847938660095229962').then((data) => {
        if (!data.ok) return { data: { bot: { approximate_guild_count: 0 } } }
        return data.json()
      }).catch(() => {
        return { data: { bot: { approximate_guild_count: 0 } } }
      })
      const dataType: botFetch = data
      setBotGuilds(dataType.data.bot.approximate_guild_count)
    }

    const fetchPackageData = async () => {
      const data: packageFetch = await fetch('https://api.npmjs.org/downloads/point/last-month/fietu').then((data) => {
        if (!data.ok) return { donwloads: 0 }
        return data.json()
      }).catch(() => {
        return { donwloads: 0 }
      })
      setPackageDownloads(data.downloads)
    }

    fetchBotData()
    fetchPackageData()

  }, [botGuilds])

  const bg1 = useColorModeValue('background.light.1', 'background.dark.1')
  const bg2 = useColorModeValue('background.light.2', 'background.dark.2')
  const hover = useColorModeValue('hover.socialButtons.light', 'hover.socialButtons.dark')

  return (
    <Box>
      <Box bg={bg1} minHeight='75vh'>
        <Grid placeItems='center' pt={[ '5', '32', '56' ]} templateColumns={['1fr', '1fr 1fr']}>
            <Image src='/fietu.png' borderRadius='3xl' boxSize='60' alt='fietu'/>
            <VStack maxWidth={[ '2xl', '3xl', '4xl' ]} pr={[ '0', '0', '40', '60' ]}>
              <Heading as='h1' size='4xl' fontWeight='extrabold' fontSize='9xl' bgClip='text' bgGradient='linear(to-r, rgb(59 130 246), rgb(236 72 153))'>Fietu</Heading>
              <Text fontSize='lg' textAlign='center' px='5'>Hi I&#39;m fietu, a programmer with an experience of about a year in
                  which most of the time I have programmed discord bots and some webs,
                  currently I&#39;m learning typescript, html and css.
              </Text>
              <HStack>               
                <Link href='https://github.com/ElFietulais' target='_blank' _hover={{ color: hover }}>
                  <FaGithub size='34' />
                </Link>
                <Link href='https://discord.com/users/780876656352559125' target='_blank' _hover={{ color: hover }}>
                  <FaDiscord size='34' />
                </Link>
              </HStack>
            </VStack>
          </Grid>
      </Box>
      <Box bg={bg2} minHeight='100vh' id='projects'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill={ colorMode === 'dark' ? '#13274f' : '#CAF0F8' } fillOpacity="1" d="M0,224L48,218.7C96,213,192,203,288,176C384,149,480,107,576,122.7C672,139,768,213,864,229.3C960,245,1056,203,1152,181.3C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
        <Heading as='h2' fontSize={[ '6xl', '7xl', '8xl' ,'8xl']} textAlign='center' pt='20' pb='10'>Projects</Heading>
        <Grid placeItems='center' pb='10'>
          <VStack align="start" spacing={8}>
              <SimpleGrid columns={1} spacing={4} mt={8} w="100%">
                {projects.map(({ id, name, description, img, link, tag, servers, downloads }) => {
                  { id === 0 && (
                      servers = botGuilds
                    )
                    id === 1 && (
                      downloads = packageDownloads
                    )
                  }
                  return (
                    <Project
                      key={id}
                      name={name}
                      description={description}
                      img={img}
                      link={link}
                      tag={tag}
                      servers={servers}
                      downloads={downloads}
                    />
                  );
                })}
              </SimpleGrid>
            </VStack>
        </Grid>
      </Box>
    </Box>
  )
}

interface botFetch {
  data: {
    bot: {
      approximate_guild_count: number
    }
  }
}

interface packageFetch {
  downloads: number
}

export default Home