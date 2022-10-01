const projects: Project[] = [
    {
        id: 0,
        name: 'Burrito Sabanero',
        description: 'Burrito sabanero is a multipurpose bot that will help your server users to have fun.',
        img: 'https://cdn.discordapp.com/avatars/847938660095229962/befcdfca268fea65fecfebca027ad493.png',
        link: 'https://discord.com/oauth2/authorize?client_id=847938660095229962&permissions=0&scope=bot',
        tag: 'bot'
    },
    {
        id: 1,
        name: 'Fietu',
        description: 'Fietu is a Node.js module that facilitates the generation of images using Canvas and Jimp.',
        img: '/fietu.png',
        link: 'https://www.npmjs.com/package/fietu',
        github: 'https://github.com/ElFietulais/fietu',
        tag: 'package'
    },
    {
        id: 2,
        name: 'Fietu',
        description: 'Fietu is an api that makes it easy for you to generate images using Canvas and Jimp.',
        img: '/fietu.png',
        link: 'https://www.fietulais.tk',
        tag: 'API'
    }
]

type Project = {
    id: number
    name: string
    description: string
    img: string
    link: string
    github?: string
    tag: 'package' | 'bot' | 'API'
    downloads?: number
    servers?: number
};

export default projects