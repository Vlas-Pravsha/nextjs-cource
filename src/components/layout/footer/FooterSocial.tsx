import { Instagram, Twitter } from 'lucide-react'
import { Button } from '../../ui/button'

export function FooterSocial() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">
        <span className="text-red-500 mr-1">•</span>
        Social Network
      </h3>
      <div className="flex gap-2">
        <Button variant="outline" size="icon">
          <Instagram className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Twitter className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
