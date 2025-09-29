import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 pb-12 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comment nous collectons, utilisons et protégeons vos données personnelles
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Collecte des données</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Nous collectons des informations lorsque vous vous inscrivez sur notre site, passez une commande, vous
                  abonnez à notre newsletter, répondez à une enquête ou remplissez un formulaire.
                </p>
                <p>Les données collectées peuvent inclure :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Nom et prénom</li>
                  <li>Adresse e-mail</li>
                  <li>Numéro de téléphone</li>
                  <li>Adresse de livraison</li>
                  <li>Préférences alimentaires</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Utilisation des données</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Les informations que nous collectons auprès de vous peuvent être utilisées pour :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
                  <li>Fournir un contenu publicitaire personnalisé</li>
                  <li>Améliorer notre site web</li>
                  <li>Améliorer le service client et vos besoins de prise en charge</li>
                  <li>Vous contacter par e-mail</li>
                  <li>Administrer un concours, une promotion, ou une enquête</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Protection des données</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos
                  informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les
                  informations sensibles transmises en ligne.
                </p>
                <p>
                  Nous protégeons également vos informations hors ligne. Seuls les employés qui ont besoin
                  d'informations pour effectuer un travail spécifique (par exemple, la facturation ou le service à la
                  clientèle) ont accès aux informations personnelles identifiables.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Nous utilisons des cookies pour comprendre et sauvegarder vos préférences pour de futures visites et
                  compiler des données globales sur le trafic du site et l'interaction du site afin que nous puissions
                  offrir de meilleures expériences et outils du site à l'avenir.
                </p>
                <p>
                  Vous pouvez choisir de désactiver les cookies via les paramètres de votre navigateur. Cependant, cela
                  peut affecter certaines fonctionnalités du site.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Divulgation à des tiers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles identifiables à des
                  tiers. Cela ne comprend pas les tierces parties de confiance qui nous aident à exploiter notre site
                  web ou à mener nos affaires, tant que ces parties conviennent de garder ces informations
                  confidentielles.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Vos droits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Vous disposez des droits suivants concernant vos données personnelles :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Droit d'accès à vos données</li>
                  <li>Droit de rectification</li>
                  <li>Droit à l'effacement</li>
                  <li>Droit à la portabilité</li>
                  <li>Droit d'opposition</li>
                </ul>
                <p>Pour exercer ces droits, contactez-nous à l'adresse : contact@legrecman.cm</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter :
                </p>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium text-foreground">Email :</span> contact@legrecman.cm
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Téléphone :</span> +237 6XX XXX XXX
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Adresse :</span> Quartier Bastos, Yaoundé, Cameroun
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
