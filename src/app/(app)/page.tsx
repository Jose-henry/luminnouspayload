import ServerHome from "@/components/home_components/ServerHome";


//export const dynamic = 'force-dynamic'
export const revalidate = 3600 // 1 hour

export default function Home() {
  return (
    <ServerHome />
  );
}
