import ServerProject from "@/components/project_components/ServerProject";
import { Metadata } from "next";



//export const dynamic = 'force-dynamic'

export const revalidate = 3600 // 1 hour


export const metadata: Metadata = {
  title: "Projects",
};


export default function Projects() {
  return( 
   
  <ServerProject />
);
}

