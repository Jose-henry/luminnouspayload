
import  { Metadata } from 'next'
import ServerContact from '@/components/contact_components/ServerContact';


//export const dynamic = 'force-dynamic'

export const revalidate = 604800 // 1 week;

export const metadata: Metadata = {
  title: "Contact",
};



export default async function Contact() {



  return <ServerContact />;
}


// base64 data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAMElEQVR4nGPoayy8szlhRZO1sYYqQ02m5/9vSa93OWgpiTH0JBv/P1F3Z325JAMDAFTPEKP6dWadAAAAAElFTkSuQmCC data http://localhost:3000//api/media/file/office2.jpg