"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer } from "@/components/animations/stagger-container";
import {
  ArrowRight,
  Star,
  Clock,
  MapPin,
  Phone,
  Coffee,
  Zap,
  Users,
} from "lucide-react";
import { closeStr_, openStr_ } from "@/lib/times";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-background to-card">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={300} duration={800}>
            <Badge
              variant="secondary"
              className="mb-6 bg-primary/10 text-primary border-primary/20"
            >
              Bar & Snack à Yaoundé
            </Badge>
          </FadeIn>

          <FadeIn delay={500} duration={1000}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 text-balance">
              Le Grec Man
              <span className="text-primary block">Bar & Détente</span>
            </h1>
          </FadeIn>

          <FadeIn delay={700} duration={800}>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
              Votre bar de quartier où se retrouver pour boire un verre,
              grignoter et passer un bon moment dans une ambiance décontractée.
            </p>
          </FadeIn>

          <FadeIn delay={900} duration={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 hover:scale-105 transition-transform duration-200"
              >
                <Link href="/menu">
                  Voir les boissons
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-3 bg-transparent border-primary/30 hover:bg-primary/5 transition-all duration-200"
              >
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Pourquoi Le Grec Man ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un bar simple et convivial pour tous vos moments de détente
            </p>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            staggerDelay={150}
          >
            {[
              {
                icon: Coffee,
                title: "Boissons Variées",
                description:
                  "Large sélection de boissons chaudes et fraîches pour tous les goûts",
              },
              {
                icon: Zap,
                title: "Service Rapide",
                description:
                  "Commande et service optimisés pour ne pas vous faire attendre",
              },
              {
                icon: Users,
                title: "Ambiance Détendue",
                description:
                  "Un cadre simple et chaleureux pour se retrouver entre amis",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-background border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Nos Boissons Populaires
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos boissons les plus appréciées
            </p>
          </FadeIn>

          {/* Dynamic */}
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            staggerDelay={200}
          >
            {[
              {
                name: "33 Export",
                description:
                  "Bière blonde camerounaise, goût léger et rafraîchissant",
                price: "750 FCFA",
                popular: true,
                image:
                  "https://images.untp.beer/crop?width=640&height=640&stripmeta=true&url=https://untappd.s3.amazonaws.com/photos/2025_09_05/0f948e7d4c3834a61d8224688ed67f1e_c_1511144589_raw.jpg",
              },
              {
                name: "Martini Bianco",
                description: "Vermouth italien aromatisé, idéal en apéritif",
                price: "25 000 FCFA",
                popular: true,
                image:
                  "https://d2z05otmbim3z8.cloudfront.net/wp-content/uploads/sites/15/2025/07/01055450/FY26_Martini_FR_Website_Blanco_Spritz_Serve_Bottle_optimized.jpg",
              },
              {
                name: "Corona Extra",
                description:
                  "Bière blonde mexicaine, servie avec une rondelle de citron vert",
                price: "1 000 FCFA",
                popular: true,
                image:
                  "https://www.tasteatlas.com/images/ingredients/d7bdc98f442a4a13adea80aa44b75864.jpg",
              },
            ].map((drink, index) => (
              <Card
                key={index}
                className="group bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={drink.image}
                    alt={drink.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {drink.popular && (
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Populaire
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {drink.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {drink.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-primary">
                      {drink.price}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center" delay={400}>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-transform duration-200"
            >
              <Link href="/menu">
                Voir toutes les boissons
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
              Venez nous voir !
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Que ce soit pour boire un verre, grignoter ou simplement passer du
              temps, vous êtes les bienvenus.
            </p>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            staggerDelay={100}
          >
            {[
              {
                icon: Clock,
                text: `Ouvert 7j/7 • ${openStr_}-${closeStr_}`,
              },
              { icon: MapPin, text: "Titi garage, Yaoundé, Cameroun" },
              { icon: Phone, text: process.env.NEXT_PUBLIC_PHONE },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span>{item.text}</span>
              </div>
            ))}
          </StaggerContainer>

          <FadeIn
            delay={600}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 hover:scale-105 transition-transform duration-200"
            >
              <Link href="/contact">Nous contacter</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 bg-transparent border-primary/30 hover:bg-primary/5 transition-all duration-200"
            >
              <Link href="/menu">Voir le menu</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
