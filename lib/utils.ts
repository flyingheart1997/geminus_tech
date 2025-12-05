import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Header_Menu = [
  {
    title: "Home",
    link: " ",
  },
  {
    title: "Technology",
    link: "technology",
  },
  {
    title: "Industry",
    link: "industry",
  },
  {
    title: "Services",
    link: "services",
  },
  {
    title: "Company",
    link: "company",
  },
  {
    title: "Careers",
    link: "careers",
  },
];

export const CompaniesList = [
  {
    src: "/companys-logo/antaris.svg",
    // link: "#google",
  },
  {
    src: "/companys-logo/watermalon.svg",
    // link: "#microsoft",
  },
  {
    src: "/companys-logo/primaryio.svg",
    // link: "#apple",
  },
  {
    src: "/companys-logo/oracel.svg",
    // link: "#amazon",
  },
  {
    src: "/companys-logo/diamanti.svg",
    // link: "#facebook",
  },
  {
    src: "/companys-logo/marvel.svg",
    // link: "#facebook",
  },
  {
    src: "/companys-logo/pensando.svg",
    // link: "#facebook",
  },
  {
    src: "/companys-logo/toshiba.svg",
    // link: "#facebook",
  },
  {
    src: "/companys-logo/sonatas.svg",
    // link: "#facebook",
  },
  {
    src: "/companys-logo/k2view.svg",
    // link: "#facebook",
  },
  {
    src: "/companys-logo/movellus.svg",
    // link: "#facebook",
  },
  {
    src: "/companys-logo/xsight.svg",
    // link: "#facebook",
  },
  {
    src: "/companys-logo/apix.svg",
    // link: "#facebook",
  },
  {
    src: "/companys-logo/agito.svg",
    // link: "#facebook",
  },
  {
    src: "/companys-logo/tensormem.svg",
    // link: "#facebook",
  },
];

export const AboutDetails = [
  {
    id: "01",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    name: "John Doe",
    position: "Co-founder",
  },
  {
    id: "02",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    name: "John Doe",
    position: "Co-founder",
  },
  {
    id: "03",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    name: "John Doe",
    position: "Co-founder",
  },
  {
    id: "04",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    name: "John Doe",
    position: "Co-founder",
  },
  {
    id: "05",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    name: "John Doe",
    position: "Co-founder",
  },
];

export const BlogsDetails = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    image: "/blog_1.svg",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    createdAt: "2 weeks ago",
    viewes: "53K views",
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    image: "/blog_2.svg",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    createdAt: "2 weeks ago",
    viewes: "53K views",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    image: "/blog_1.svg",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    createdAt: "2 weeks ago",
    viewes: "53K views",
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    image: "/blog_2.svg",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    createdAt: "2 weeks ago",
    viewes: "53K views",
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    image: "/blog_1.svg",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    createdAt: "2 weeks ago",
    viewes: "53K views",
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    image: "/blog_2.svg",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    createdAt: "2 weeks ago",
    viewes: "53K views",
  },
];

export const LatestNews = [
  {
    title: "Sep-Oct 25 Edition Company newsletter",
    description: "Key Updates : SONATUS INDIA: DRIVING IMPACT Expanding Expertise& Ownership.The Sonatus India team is strengthening its QA and Devel.",
    image: "/news-latter/news_latter.svg",
    createdAt: "Nov 08 • 1 month ago",
    link: '/news-latter/newsletter_sep_oct_25_edition.pdf'
  },
  {
    title: "Sep-Oct 25 Edition Company newsletter",
    description: "Key Updates : SONATUS INDIA: DRIVING IMPACT Expanding Expertise& Ownership.The Sonatus India team is strengthening its QA and Devel.",
    image: "/news-latter/news_latter.svg",
    createdAt: "Nov 08 • 1 month ago",
    link: '/news-latter/newsletter_sep_oct_25_edition.pdf'
  },
  {
    title: "August 2025 Company newsletter",
    description: "Key updates : XSight Labs –QuickHighlights Spotlight: XSight Labs E1 – Next- Gen InfrastructureProcessorThe XSight Labs.",
    image: "/news-latter/news_latter.svg",
    createdAt: "Sept 09 • 3 months ago",
    link: '/news-latter/newsletter_august_25_dition.pdf'
  },
];




