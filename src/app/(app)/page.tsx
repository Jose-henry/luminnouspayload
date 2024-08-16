import ServerHome from "@/components/home_components/ServerHome";


//export const dynamic = 'force-dynamic'

export const revalidate = 120 // 2mins
export default function Home() {
  return (
    <ServerHome />
  );
}
