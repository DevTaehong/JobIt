
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export default function Home() {
  return (
    <>
      <h1>Jobit</h1>
      {/* Just test for components */}
      <Input type="email" placeholder="Email" />
      <Button type="submit" className="flex pt-[12px] pb-[12px] pl-[14px] pr-[14px] bg-[#0BAB7C]">Subscribe</Button>
    </>
  );
}
