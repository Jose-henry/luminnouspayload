import ServerHome from "@/components/home_components/ServerHome";


//export const dynamic = 'force-dynamic'
export const revalidate = 30; // 30s

export default function Home() {
  return (
    <ServerHome />
  );
}
