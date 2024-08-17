import ServerProject from "@/components/project_components/ServerProject";
import { Metadata } from "next";



//export const dynamic = 'force-dynamic'

export const revalidate = 60 // 1 minutes


export const metadata: Metadata = {
  title: "Projects",
};


export default function Projects() {
  return( 
   
  <ServerProject />
);
}

