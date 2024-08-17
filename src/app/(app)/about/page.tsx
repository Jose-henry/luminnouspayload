import ServerAbout from "@/components/about_components/ServerAbout";
import { Metadata } from "next";

//export const dynamic = 'force-dynamic'

export const revalidate = 60 // 1 minutes


export const metadata: Metadata = {
  title: "About",
}

export default function About() {
  return <ServerAbout />;
}
