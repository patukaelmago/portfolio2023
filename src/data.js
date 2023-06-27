//  icons
import {
  FiFacebook,
  FiInstagram,
  FiGithub,
  FiLinkedin,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';


// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/p1.webp';
import Project2 from './assets/img/projects/p2.webp';
import Project3 from './assets/img/projects/p3.webp';
import Project4 from './assets/img/projects/p4.webp';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiFacebook />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/patukaelmago',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/patricio-uskaer/',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'World Developers',
    category: 'Henry Bootcamp',
  },
  {
    id: '2',
    image: Project2,
    name: 'Dogs',
    category: 'Henry Bootcamp',
  },
  {
    id: '3',
    image: Project3,
    name: 'Weather App',
    category: 'Henry Bootcamp',
  },
  {
    id: '4',
    image: Project4,
    name: 'Random Quote Machine',
    category: 'freeCodeCamp',
  },
  {
    id: '5',
    image: Project5,
    name: 'Speakify',
    category: 'web development',
  },
  {
    id: '6',
    image: Project6,
    name: 'Nashe Clickler',
    category: 'web development',
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: 'Henry Bootcamp',
  },
  {
    name: 'web development',
  },
  {
    name: 'freeCodeCamp',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      "I specialize in creating custom web designs that are unique, engaging, and effective for your business or project. From planning to implementation, I work with you to understand your needs, goals, and vision for your website and turn it into a reality. I ensure that your website not only looks great, but is also easy to use, navigate, and convert visitors into leads. If you're ready to take your online presence to the next level, contact me to discuss your needs and how I can help you achieve your online goals."
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      "I offer custom web development services to meet your unique needs and ensure that your online presence is effective and attractive. From design to implementation and ongoing maintenance, I can help you build an attractive and functional website that is easy to navigate and tailored to your specific goals and needs. Whether you need an e-commerce website, a blogging platform, or a corporate website, I am here to help. Contact me today to get started on your custom website"      
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'I can help you create a unique and memorable brand that reflects the values and personality of your business or project. From logo design to brand strategy and implementation, I work with you to understand your business needs and goals and create a brand that speaks directly to your audience. My focus is on creating consistent and lasting brands that help you differentiate and create emotional connections with your customers. '
  },
  {
    icon: <FiTag />,
    name: 'Community Managment',
    description:
      "Turn your social media into a tool for business growth! As a Community Manager, I can help you develop and manage an effective social media strategy that reflects your brand's identity and values. From content creation to engaging with followers, I can ensure that your social media is active and attracting your target audience. With a focus on quality over quantity, I can work with you to develop an authentic and meaningful social presence that increases customer loyalty and improves your online reach."
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
   
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Mar Azul, Argentina',
    description: 'Serving clients worldwide',
  },
];
