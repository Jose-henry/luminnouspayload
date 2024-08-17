import ServerAbout from "@/components/about_components/ServerAbout";
import { Metadata } from "next";

//export const dynamic = 'force-dynamic'

export const revalidate = 120 // 1 hr


export const metadata: Metadata = {
  title: "About",
}

export default function About() {
  return <ServerAbout />;
}
