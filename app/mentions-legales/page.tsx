import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 pb-12 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">Mentions Légales</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Informations légales et conditions d'utilisation du site Le Grec Man
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Identification de l'entreprise</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">Raison sociale :</p>
                  <p>Le Grec Man SARL</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Adresse du siège social :</p>
                  <p>Quartier Bastos, Yaoundé, Cameroun</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Numéro de téléphone :</p>
                  <p>+237 6XX XXX XXX</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Adresse e-mail :</p>
                  <p>contact@legrecman.cm</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Numéro d'immatriculation :</p>
                  <p>RC/YAO/2024/B/XXXX</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Directeur de la publication :</p>
                  <p>Dimitri Papadopoulos</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Hébergement du site</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">Hébergeur :</p>
                  <p>Vercel Inc.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Adresse :</p>
                  <p>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Propriété intellectuelle</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  L'ensemble de ce site relève de la législation camerounaise et internationale sur le droit d'auteur et
                  la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les
                  documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est
                  formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Responsabilité</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à
                  différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
                </p>
                <p>
                  Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir
                  le signaler par email, à l'adresse contact@legrecman.cm, en décrivant le problème de la façon la plus
                  précise possible.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Liens hypertextes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Les sites internet peuvent offrir des liens vers d'autres sites internet ou d'autres ressources
                  disponibles sur Internet. Le Grec Man ne dispose d'aucun moyen pour contrôler les sites en connexion
                  avec ses sites internet.
                </p>
                <p>
                  Le Grec Man ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit.
                  Elle ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du
                  contenu de ces sites ou sources externes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Droit applicable</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Tant le présent site que les modalités et conditions de son utilisation sont régis par le droit
                  camerounais, quel que soit le lieu d'utilisation. En cas de contestation éventuelle, et après l'échec
                  de toute tentative de recherche d'une solution amiable, les tribunaux camerounais seront seuls
                  compétents pour connaître de ce litige.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
