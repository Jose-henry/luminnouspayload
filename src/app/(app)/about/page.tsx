import ServerAbout from "@/components/about_components/ServerAbout";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About",
}

export default function About() {
  return <ServerAbout />;
}
