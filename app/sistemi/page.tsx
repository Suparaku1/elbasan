import { Code, Database, Globe, Layers, Zap } from "lucide-react"

export default function SystemPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Si Funksionon Sistemi</h1>
          <p className="text-xl text-muted-foreground">
            Një vështrim teknik mbi arkitekturën dhe teknologjitë që fuqizojnë platformën Elbasan Kultura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Frontend Modern</h3>
            <p className="text-muted-foreground">
              Ndërtuar me Next.js 14 dhe React, duke ofruar një eksperiencë të shpejtë dhe interaktive për përdoruesit
              (SPA). Përdorim Server Components për performancë maksimale dhe SEO.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <div className="h-12 w-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Layers className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">3D Graphics</h3>
            <p className="text-muted-foreground">
              Integrimi i Three.js përmes React Three Fiber për të krijuar eksperienca vizuale 3D të pasura, si modeli i
              kalasë në faqen kryesore.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <div className="h-12 w-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
              <Database className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Menaxhimi i Të Dhënave</h3>
            <p className="text-muted-foreground">
              Të dhënat strukturohen në format JSON dhe shërbehen në mënyrë statike. Sistemi i vlerësimeve përdor
              LocalStorage për të ruajtur feedback-un e përdoruesve pa nevojë për login.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <div className="h-12 w-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Performanca</h3>
            <p className="text-muted-foreground">
              Optimizuar për shpejtësi me Tailwind CSS për styling minimal dhe Next/Image për optimizimin automatik të
              imazheve dhe lazy loading.
            </p>
          </div>
        </div>

        <div className="bg-muted/30 border rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Code className="h-6 w-6" /> Struktura e Projektit
          </h2>
          <div className="font-mono text-sm bg-black/80 text-green-400 p-6 rounded-lg overflow-x-auto">
            <pre>{`elbasan-culture-website/
├── app/
│   ├── layout.tsx        # Layout kryesor
│   ├── page.tsx          # Faqja kryesore (Home)
│   ├── pikat-kulturore/  # Lista dhe detajet
│   ├── sistemi/          # Kjo faqe
│   └── ...
├── components/
│   ├── hero-3d.tsx       # Komponenti Three.js
│   ├── navbar.tsx        # Navigimi
│   └── review-system.tsx # Sistemi i vlerësimeve
├── lib/
│   └── data.ts           # Të dhënat statike
└── public/               # Asetet publike`}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}
