//import ServerAbout from "@/components/about_components/ServerAbout";
import { Metadata } from "next";
import dynamic from "next/dynamic";

//export const dynamic = 'force-dynamic'

//export const revalidate = 60 // 1 week

const ServerAbout = dynamic(() => import('@/components/about_components/ServerAbout'), { ssr: false })


export const metadata: Metadata = {
  title: "About",
}

export default function About() {
  return <ServerAbout />;
}
