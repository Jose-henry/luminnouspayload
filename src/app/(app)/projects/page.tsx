import ServerProject from "@/components/project_components/ServerProject";
import { Metadata } from "next";



//export const dynamic = 'force-dynamic'

export const revalidate = 1 //1 hour //604800  1 week


export const metadata: Metadata = {
  title: "Projects",
};


export default function Projects() {
  return( 
   
  <ServerProject />
);
}

