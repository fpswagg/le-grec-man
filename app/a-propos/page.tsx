import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Coffee, Heart, Users, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 pb-12 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">À Propos du Grec Man</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Votre bar de quartier à Yaoundé, un lieu simple et convivial pour boire et se détendre
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <Badge className="mb-4 bg-primary text-primary-foreground">Notre Histoire</Badge>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Un Bar Simple et Authentique</h2>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Le Grec Man est né de l'envie de créer un lieu de rencontre simple et chaleureux dans le quartier de
                  Bastos. Un endroit où l'on peut venir boire un verre, grignoter quelque chose et passer un bon moment
                  sans chichis.
                </p>

                <p>
                  Notre concept est simple : des boissons de qualité, quelques snacks pour accompagner, et une ambiance
                  décontractée où chacun se sent à l'aise. Nous privilégions la convivialité et la simplicité.
                </p>

                <p>
                  Plus qu'un simple bar, Le Grec Man est devenu le point de rendez-vous du quartier où se retrouvent
                  amis, collègues et voisins pour partager des moments authentiques.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-80 bg-card rounded-lg flex items-center justify-center">
                <Coffee className="w-24 h-24 text-primary/30" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-lg">
                <p className="font-serif font-bold text-lg">100%</p>
                <p className="text-sm">Convivial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Ce Qui Nous Anime</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les valeurs simples qui font l'esprit du Grec Man
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Convivialité",
                description: "Un accueil chaleureux et une ambiance détendue où chacun peut se sentir comme chez lui.",
              },
              {
                icon: Coffee,
                title: "Qualité des Boissons",
                description: "Une sélection soignée de boissons chaudes et fraîches pour satisfaire tous les goûts.",
              },
              {
                icon: Users,
                title: "Esprit de Quartier",
                description:
                  "Un lieu de rencontre authentique qui rassemble la communauté locale dans la bonne humeur.",
              },
              {
                icon: Zap,
                title: "Service Efficace",
                description:
                  "Un service rapide et attentionné pour que vous puissiez profiter pleinement de votre moment.",
              },
              {
                icon: MapPin,
                title: "Ancrage Local",
                description:
                  "Fiers d'être un établissement de Bastos, au service de notre quartier et de ses habitants.",
              },
              {
                icon: Clock,
                title: "Disponibilité",
                description: "Ouvert tous les jours pour être là quand vous avez envie de faire une pause.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="bg-background border-border hover:border-primary/30 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">L'Équipe</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une équipe simple et sympathique pour vous accueillir
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Marc",
                role: "Gérant",
                description:
                  "Passionné par l'accueil et la convivialité, toujours là pour vous servir avec le sourire.",
              },
              {
                name: "Sophie",
                role: "Serveuse",
                description: "Connait tous les habitués et leurs boissons préférées, l'âme du bar.",
              },
            ].map((member, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary text-primary-foreground">Notre Adresse</Badge>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Au Cœur de Bastos</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Situé dans le quartier de Bastos, Le Grec Man vous accueille dans un cadre simple et chaleureux.
                  Facile d'accès, c'est l'endroit idéal pour faire une pause dans votre journée.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Quartier Bastos</p>
                      <p className="text-sm text-muted-foreground">Yaoundé, Cameroun</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Tous les jours</p>
                      <p className="text-sm text-muted-foreground">8h00 - 22h00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="w-full h-80 bg-background rounded-lg flex items-center justify-center">
                  <MapPin className="w-24 h-24 text-primary/30" />
                </div>
                <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg">
                  <p className="font-serif font-bold text-lg">Bastos</p>
                  <p className="text-sm">Yaoundé</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
