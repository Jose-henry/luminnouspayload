import ServerProject from "@/components/project_components/ServerProject";
import { Metadata } from "next";
//import dynamic from "next/dynamic";


//export const dynamic = 'force-dynamic'

export const revalidate = 1 //1 hour //604800  1 week

//const ServerProject = dynamic(() => import('@/components/project_components/ServerProject'), { ssr: true })

export const metadata: Metadata = {
  title: "Projects",
};


export default function Projects() {
  return( 
   
  <ServerProject />
);
}

