import ServerHome from "@/components/home_components/ServerHome";


//export const dynamic = 'force-dynamic'
export const revalidate = 0 //604800 // 1 week

export default function Home() {
  return (
    <ServerHome />
  );
}
