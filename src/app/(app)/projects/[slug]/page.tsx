/* import { notFound } from "next/navigation";
import configPromise from '@payload-config'
import { getPayload } from 'payload' //you can use this or the one below
// import { getPayloadHMR } from '@payloadcms/next/utilities' //you can use this or the one above

// import type { Media } from "@/payload-types";



const payload = await getPayload({
  config: configPromise,
})

export async function generateStaticParams() {
  const posts = await payload.find({
    collection: 'post',
  })
  return posts.docs.map((post: any) => ({
    slug: post.slug,
  }))
}


export default async function Projects({ params }: { params: { slug: string } }) {

  const {slug} = params
  const post = await payload.find({
    collection: 'post',
    where: {
      slug: { equals: slug },
    }
  })


  if (post.docs.length===0) {
    notFound()
  }
 //console.log('post docs',post.docs)
  return (
    <div>
    <h1 className="text-3xl font-bold underline text-black">{post.docs[0].title}</h1>
    <h2>
      {post.docs[0].description.root.children.map((child: any) => (
        <span key={child.type}>{child.text}</span>
      ))}
    </h2>
  </div>
  )
}

 */

export const dynamic = 'force-dynamic'
export default function Projects() {


  return(
    <h1>Dynamic post</h1>
  )
}
