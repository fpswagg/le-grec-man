import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">
                  Γ
                </span>
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-primary">
                  Le Grec Man
                </span>
                <p className="text-xs text-muted-foreground -mt-1">Yaoundé</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Découvrez l'authenticité de la cuisine grecque dans un cadre
              sophistiqué au cœur de Yaoundé.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold text-foreground">
              Navigation
            </h3>
            <nav className="space-y-2">
              {[
                { name: "Accueil", href: "/" },
                { name: "Menu", href: "/menu" },
                { name: "Galerie", href: "/galerie" },
                { name: "À Propos", href: "/a-propos" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold text-foreground">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Quartier Bastos</p>
                  <p>Yaoundé, Cameroun</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  +237 6XX XXX XXX
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  contact@legrecman.cm
                </span>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold text-foreground">
              Horaires
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium">Lun - Dim</p>
                  <p>
                    {process.env.NEXT_PUBLIC_OPEN} -{" "}
                    {process.env.NEXT_PUBLIC_CLOSE}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 Le Grec Man. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link
                href="/mentions-legales"
                className="hover:text-primary transition-colors duration-200"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="hover:text-primary transition-colors duration-200"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="/cgv"
                className="hover:text-primary transition-colors duration-200"
              >
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
