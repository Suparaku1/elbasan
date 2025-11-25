import { Castle, Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t bg-muted/40 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Castle className="h-6 w-6" />
              <span>Elbasan Kultura</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Promovimi i trashëgimisë kulturore, historike dhe artistike të qytetit të Elbasanit përmes teknologjisë
              dhe inovacionit.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Lidhje të Shpejta</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/pikat-kulturore" className="hover:text-primary transition-colors">
                  Pikat Kulturore
                </Link>
              </li>
              <li>
                <Link href="/foto" className="hover:text-primary transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="/krijuesi" className="hover:text-primary transition-colors">
                  Rreth Krijuesit
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-primary transition-colors">
                  Na Kontaktoni
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Na Ndiqni</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Elbasan Kultura.</p>
              <p>Zhvilluar për EU Code Week.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
