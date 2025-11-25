import { creatorInfo } from "@/lib/data"
import { Github, Linkedin, Mail, User } from "lucide-react"
import Link from "next/link"

export default function CreatorPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="h-32 w-32 mx-auto bg-muted rounded-full flex items-center justify-center mb-6 border-4 border-background shadow-lg">
            <User className="h-16 w-16 text-muted-foreground" />
          </div>
          <h1 className="text-4xl font-bold mb-2">{creatorInfo.name}</h1>
          <p className="text-xl text-primary font-medium mb-4">{creatorInfo.role}</p>
          <div className="flex justify-center gap-4">
            <Link
              href={creatorInfo.social.linkedin}
              className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href={creatorInfo.social.github}
              className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href={`mailto:${creatorInfo.contact}`}
              className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="p-6 bg-card border rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Rreth Meje</h2>
            <p className="text-muted-foreground leading-relaxed">{creatorInfo.bio}</p>
          </div>

          <div className="p-6 bg-card border rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Edukimi</h2>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                UE
              </div>
              <div>
                <div className="font-semibold">{creatorInfo.education}</div>
                <div className="text-sm text-muted-foreground">Tirane, Shqipëri</div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-card border rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Motivimi</h2>
            <p className="text-muted-foreground italic border-l-4 border-primary pl-4 py-1 bg-muted/30">
              "Të krijoj një urë lidhëse mes së kaluarës dhe së ardhmes, duke përdorur teknologjinë për të mbajtur
              gjallë historinë tonë të pasur."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
