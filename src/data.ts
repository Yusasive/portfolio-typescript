import worksOne from "./assets/works1.png";
import worksTwo from "./assets/works2.png";
import worksThree from "./assets/uptick.png";
import workFour from  "./assets/poe.png"
import volunteerOne from "./assets/volunteer1.png";
import volunteerTwo from "./assets/volunteer2.png";
import volunteerThree from "./assets/volunteer3.jpg";

interface Project {
  id: number;
  category: string;
  img: string;
  title: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 0,
    category: "works",
    img: worksOne,
    title: "Rumoney Web Template",
    link: "https://rumoney.digital/",
  },
  {
    id: 1,
    category: "works",
    img: worksTwo,
    title: "Zonoxis NFTs minting Website",
    link: "https://ubiquitous-dodol-d27ff4.netlify.app/",
  },
  {
    id: 2,
    category: "works",
    img: worksThree,
    title: "Uptick Talent",
    link: "https://uptick-team-a.netlify.app",
  },
  {
    id: 3,
    category: "works",
    img: workFour,
    title: "Uptick Talent Admin Dashboard",
    link: "https://uptick-teama-admin-dashboard.netlify.app/",
  },
  {
    id: 4,
    category: "volunteer",
    img: volunteerOne,
    title: "Rumoney Blogsite",
    link: "https://example.com/rumoney-web-template",
  },
  {
    id: 5,
    category: "volunteer",
    img: volunteerTwo,
    title: "Paystack payment gateway",
    link: "https://payment-platform.netlify.app/",
  },
  {
    id: 6,
    category: "volunteer",
    img: volunteerThree,
    title: "Agora chat application",
    link: "https://yusasive-chat-application.netlify.app/",
  },

];
