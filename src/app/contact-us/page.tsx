import { Button } from "@/components/ui";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { pagesConfig } from "@/config/pages.config";
import { ContactForm } from "./components/ContactForm";

function ContactUs() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Link href={pagesConfig.home}>
            <ChevronLeft className="h-6 w-6" />
          </Link>
        </Button>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Home</span>
          <span className="text-sm text-muted-foreground">/</span>
          <span className="text-sm">Contact Us</span>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}

export default ContactUs;
