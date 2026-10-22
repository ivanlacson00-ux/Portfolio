export * from './projects'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'


// personal info
export const name = 'Ivan Lacson'
export const headline = 'Aspiring Software engineer and Full-Stack web developer.'
export const introduction = 'I’m Ivan Lacson, an aspiring software engineer based in Daet, Camarines Norte. I like coding, and building interesting things'
export const email = 'ivanlacson00@gmail.com'
export const githubUsername = 'ivanlacson00-ux'

// about page
export const aboutMeHeadline = "I'm Ivan Lacson, an aspriring software engineer based in Daet, Camarines Norte."
export const aboutParagraphs = [
  "I love coding. I learned programming when I in college. I wrote my first program in Java when I was 19.",
  "I have a lot of hobbies, such as travelling, gaming, music and so on.",
  "I'm studying BSIT in Daet, Camarines Norte now. And I'm building a lot of side projects in my spare time."
]


// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro = "I've written something about AI, programming and life."


// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string,
  external?: boolean
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'X',
    icon: 'x',
    href: '',
    external: true
  },

  {
    name: 'Github',
    icon: 'github',
    href: '',
    external: true
  },
  {
    name: 'Wechat',
    icon: 'wechat',
    href: '',
    external: true
  },
  {
    name: 'Discord',
    icon: 'discord',
    href: '',
    external: true
  }
]

// https://simpleicons.org/
export const techIcons = [
  "typescript",
  "javascript",
  "supabase",
  "cloudflare",
  "java",
  "oracle",
  "mysql",
  "react",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "postgresql",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "ios",
  "apple",
  "wechat"
];



