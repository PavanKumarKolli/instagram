import { GoHomeFill } from "react-icons/go";
import { IoSearch, IoPersonCircleSharp } from "react-icons/io5";
import { FaRegCompass, FaRegHeart } from "react-icons/fa";
import { RiMovieLine } from "react-icons/ri";
import { BiMessageRounded } from "react-icons/bi";
import { VscDiffAdded } from "react-icons/vsc";
import { CgDetailsMore } from "react-icons/cg";
export const Sidebar = [
  {
    id: "1",
    name: "Home",
    icon: <GoHomeFill size={20} />,
    link: "/Home",
  },
  {
    id: "2",
    name: "Search",
    icon: <IoSearch size={20} />,
    link: "/Search",
  },
  {
    id: "3",
    name: "Explore",
    icon: <FaRegCompass size={20} />,
    link: "/Explore",
  },
  {
    id: "4",
    name: "Reels",
    icon: <RiMovieLine size={20} />,
    link: "/Reels",
  },
  {
    id: "5",
    name: "Messages",
    icon: <BiMessageRounded size={20} />,
    link: "/Messages",
  },
  {
    id: "6",
    name: "Notifications",
    icon: <FaRegHeart size={20} />,
    link: "/Notifications",
  },
  {
    id: "7",
    name: "Create",
    icon: <VscDiffAdded size={20} />,
    link: "/Create",
  },
  {
    id: "8",
    name: "Profile",
    icon: <IoPersonCircleSharp size={20} />,
    link: "/Profile",
  },
  {
    id: "9",
    name: " More",
    icon: <CgDetailsMore size={20} />,
    link: "/More",
  },
];
