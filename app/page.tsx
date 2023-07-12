"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  const { toast } = useToast();

  return (
    <>
      <h1>Jobit</h1>
      {/* Just test for components */}
      <Input type="email" placeholder="Email" />
      <Button
        type="submit"
        className=" flex bg-green-700 px-4 py-2 text-white sm:px-8"
        onClick={() => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "Thank You for subscribing to our Newsletter",
          });
        }}
      >
        Subscribe
      </Button>
      <Button
        className=" flex bg-teal-500 px-4 py-2 text-white sm:px-8"
        variant="outline"
        onClick={() => {
          toast({
            description: "Your message has been sent.",
          });
        }}
      >
        Show Toast
      </Button>
    </>
  );
}
