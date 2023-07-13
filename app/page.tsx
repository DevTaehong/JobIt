"use client";

import InputValidationExample from "@/components/InputValidationExample";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  const { toast } = useToast();

  return (
    <div className="m-auto flex w-60 flex-col justify-items-center gap-4">
      {/* Just test for components */}
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <InputValidationExample />
    </div>
  );
}
