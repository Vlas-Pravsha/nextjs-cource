import { Mail } from "lucide-react";
import { Button, Input } from "@/components/ui/";

export function FooterNewsletter() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">
        <span className="mr-1 text-red-500">•</span>
        Newsletters
      </h3>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Write Your Email..."
            className="pl-9"
          />
        </div>
        <Button>Subscribe</Button>
      </div>
    </div>
  );
}
