import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 pb-12 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
              Conditions Générales de Vente
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Conditions applicables à nos services de restauration et de livraison
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Article 1 - Objet</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Les présentes conditions générales de vente s'appliquent à toutes les prestations de services
                  proposées par Le Grec Man, notamment :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Service de restauration sur place</li>
                  <li>Vente à emporter</li>
                  <li>Service de livraison à domicile</li>
                  <li>Organisation d'événements privés</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Article 2 - Commandes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Les commandes peuvent être passées :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Directement au restaurant</li>
                  <li>Par téléphone au +237 6XX XXX XXX</li>
                  <li>Via notre site internet</li>
                </ul>
                <p>
                  Toute commande implique l'acceptation pleine et entière des présentes conditions générales de vente.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Article 3 - Prix</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Les prix sont exprimés en francs CFA (FCFA) toutes taxes comprises. Ils sont valables au jour de la
                  commande et peuvent être modifiés à tout moment sans préavis.
                </p>
                <p>Pour les livraisons, des frais de transport peuvent s'appliquer selon la zone de livraison :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Zone 1 (0-5km) : 1 000 FCFA</li>
                  <li>Zone 2 (5-10km) : 2 000 FCFA</li>
                  <li>Au-delà de 10km : sur devis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Article 4 - Paiement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Le paiement peut s'effectuer :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>En espèces</li>
                  <li>Par carte bancaire</li>
                  <li>Par virement bancaire (pour les événements)</li>
                  <li>Par mobile money (Orange Money, MTN Mobile Money)</li>
                </ul>
                <p>
                  Pour les commandes en ligne, le paiement est exigé au moment de la commande. Pour les événements
                  privés, un acompte de 50% est demandé à la réservation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Article 5 - Livraison</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Les délais de livraison sont donnés à titre indicatif et peuvent varier selon l'affluence et les
                  conditions de circulation.
                </p>
                <p>Délais moyens :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Livraison : 30 à 60 minutes</li>
                  <li>À emporter : 15 à 30 minutes</li>
                </ul>
                <p>
                  La livraison s'effectue uniquement dans un rayon de 10km autour du restaurant, du lundi au dimanche de
                  11h30 à 22h30.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Article 6 - Annulation et remboursement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Les commandes peuvent être annulées jusqu'à 15 minutes après la confirmation pour les livraisons et à
                  emporter.
                </p>
                <p>Pour les réservations de table, l'annulation est possible jusqu'à 2 heures avant l'heure prévue.</p>
                <p>
                  Pour les événements privés, l'annulation doit intervenir au moins 48 heures avant la date prévue pour
                  un remboursement partiel de l'acompte (50%).
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Article 7 - Réclamations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Toute réclamation doit être formulée dans les 24 heures suivant la prestation par email à
                  contact@legrecman.cm ou par téléphone au +237 6XX XXX XXX.
                </p>
                <p>
                  Nous nous engageons à traiter toute réclamation dans les meilleurs délais et à proposer une solution
                  adaptée.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Article 8 - Responsabilité</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Le Grec Man s'engage à respecter les normes d'hygiène et de sécurité alimentaire en vigueur. Nous
                  déclinons toute responsabilité en cas d'allergie non signalée par le client.
                </p>
                <p>
                  Il appartient au client de signaler toute allergie ou intolérance alimentaire lors de sa commande.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Article 9 - Droit applicable</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Les présentes conditions générales de vente sont soumises au droit camerounais. En cas de litige, les
                  tribunaux de Yaoundé seront seuls compétents.
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
