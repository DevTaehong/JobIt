import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

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
      {/* Just test for components */}
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </>
  );
}
