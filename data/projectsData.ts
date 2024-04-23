interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Create content',
    description: `Imagine sharing the stories of your life abroad! Japahub is a platform that empowers you to do just that. Share regular posts, journals, and opportunities with a supportive community of like-minded individuals.`,
    imgSrc: '/static/images/japa-logo.png',
    href: '/blog/japahub/japahub-platform',
  },
  {
    title: 'Engaging communities',
    description: `Imagine a global tapestry woven from vibrant online communities, where individuals united by their connection to a specific country can share experiences, empower one another, and forge lifelong bonds.`,
    imgSrc: '/static/images/community-join.png',
    href: '/blog/country-based-communities',
  },
]

export default projectsData
