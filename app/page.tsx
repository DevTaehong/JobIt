import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <>
      <h1>Jobit</h1>
      {/* Just test for components */}
      <Input type="email" placeholder="Email" />
      <Button
        type="submit"
        className="flex bg-sky-700 px-4 py-2 text-white sm:px-8"
      >
        Subscribe
      </Button>
    </>
  );
}
