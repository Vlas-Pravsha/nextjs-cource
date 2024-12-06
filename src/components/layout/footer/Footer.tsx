import { FooterAbout } from "./FooterAbout";
import { FooterCategories } from "./FooterCategories";
import { FooterNewComments } from "./FooterComments";
import { FooterInstagram } from "./FooterInstagram";
import { FooterNewsletter } from "./FooterNewsletter";
import { FooterSocial } from "./FooterSocial";

function Footer() {
  return (
    <footer className="mt-16 py-12">
      <div className="container mx-auto flex flex-col gap-8 px-4 lg:flex-row">
        <div className="flex flex-1 basis-1/2 flex-col gap-8">
          <div className="flex flex-row gap-8 sm:flex-row sm:gap-36">
            <FooterAbout />
            <FooterCategories />
          </div>
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-44">
            <FooterNewsletter />
            <FooterSocial />
          </div>

          <div className="flex flex-col items-center justify-between rounded-lg bg-gray-100 px-3 py-2 text-sm text-muted-foreground md:flex-row">
            <div className="flex space-x-4">
              <a href="/privacy" className="hover:text-primary">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="/terms" className="hover:text-primary">
                Terms & Conditions
              </a>
            </div>
            <p>All Copyright (C) 2024 Reserved</p>
          </div>
        </div>

        <div className="flex-1 basis-1/4">
          <FooterNewComments />
        </div>

        <div className="flex-1 basis-1/4">
          <FooterInstagram />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
