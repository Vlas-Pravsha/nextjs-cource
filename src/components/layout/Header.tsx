import { Bookmark, Search, User } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '../ui/navigation-menu'

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-orange-500"><a href="/">MEGA.news</a></h1>

          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex space-x-6">
              <NavigationMenuItem>
                <Button variant="link"><a href="/categories">Categories</a></Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="link"><a href="/contact-us">Contact Us</a></Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="link"><a href="/about-us">About Us</a></Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <div className="relative w-64">
              <Input
                type="search"
                placeholder="Search Anything"
                className="py-4 px-8 bg-gray-100 rounded-lg"
              />
              <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
            </div>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bookmark className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
