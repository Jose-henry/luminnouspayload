import Text1 from "@/components/our_story_components/Text1/text1";
import { Metadata } from "next";




export const metadata: Metadata = {
    title: "Our Story",
};




export default function Story() {
  return (
      <div className="w-full mt-[73px] bg-white">
        <Text1/>
      </div>
  );
}
