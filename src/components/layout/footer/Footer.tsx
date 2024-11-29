import { FooterAbout } from './FooterAbout'
import { FooterCategories } from './FooterCategories'
import { FooterNewComments } from './FooterComments'
import { FooterInstagram } from './FooterInstagram'
import { FooterNewsletter } from './FooterNewsletter'
import { FooterSocial } from './FooterSocial'

export function Footer() {
  return (
    <footer className="mt-16 py-12 ">
      <div className="container mx-auto px-4 flex  gap-8">
        <div className="flex-1 basis-1/2 flex flex-col gap-8">
          <div className="flex flex-row gap-36">
            <FooterAbout />
            <FooterCategories />
          </div>
          <div className="flex flex-row gap-48">
            <FooterNewsletter />
            <FooterSocial />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground bg-gray-100 px-3 py-2 rounded-lg">
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
  )
}
