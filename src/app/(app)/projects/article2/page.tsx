import GberefuVisit from "@/components/gberefu_components/gberefu";
import { Metadata } from "next";




export const metadata: Metadata = {
    title: "Gberefu in the Dark",
};




export default function Gberefu() {
  return (
    <div className="w-full mt-[73px] bg-white">
      <GberefuVisit/>
  </div>
  );
}
