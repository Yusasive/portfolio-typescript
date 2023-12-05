import worksOne from "./assets/works1.png";
import worksTwo from "./assets/works2.png";
import worksThree from "./assets/works3.jpg";
import volunteerOne from "./assets/volunteer1.png";
import volunteerTwo from "./assets/volunteer2.png";
import volunteerThree from "./assets/volunteer3.jpg";

interface Project {
  id: number;
  category: string;
  img: string;
  title: string;
}

export const projects: Project[] = [
  {
    id: 0,
    category: "works",
    img: worksOne,
    title: "Rumoney Web Template",
  },
  {
    id: 1,
    category: "works",
    img: worksTwo,
    title: "Zonoxis NFTs minting Website",
  },
  {
    id: 2,
    category: "works",
    img: worksThree,
    title: "MERNStack eccomerce website",
  },
  {
    id: 3,
    category: "volunteer",
    img: volunteerOne,
    title: "Rumoney Blogsite",
  },
  {
    id: 4,
    category: "volunteer",
    img: volunteerTwo,
    title: "Paystack payment gateway",
  },
  {
    id: 5,
    category: "volunteer",
    img: volunteerThree,
    title: "Agora chat application",
  },
  {
    id: 6,
    category: "volunteer",
    img: volunteerThree,
    title: "Agora chat application",
  },
];
