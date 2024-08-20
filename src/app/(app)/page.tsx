import ServerHome from "@/components/home_components/ServerHome";
//import Loading from "@/components/loading/loading";
//import dynamic from "next/dynamic";


//const ServerHome = dynamic(() => import('@/components/home_components/ServerHome'), { ssr: false })
//export const dynamic = 'force-dynamic'
//export const revalidate = 120 //604800 // 1 week

export default function Home() {
  return (
    <ServerHome />
  );
}
