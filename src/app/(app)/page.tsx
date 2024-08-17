import ServerHome from "@/components/home_components/ServerHome";


//export const dynamic = 'force-dynamic'
export const revalidate = 0 // 30 minutes

export default function Home() {
  return (
    <ServerHome />
  );
}
