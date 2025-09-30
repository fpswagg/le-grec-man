"use client";

import type React from "react";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";
import { closeStr, openStr } from "@/lib/times";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const isFormValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.subject &&
      formData.message
    );
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 pb-12 flex items-center justify-center min-h-screen">
          <Card className="max-w-md mx-auto bg-card border-border">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Message envoyé !
              </h2>
              <p className="text-muted-foreground mb-6">
                Nous avons bien reçu votre message et vous répondrons dans les
                plus brefs délais.
              </p>
              <Button
                onClick={() => window.location.reload()}
                className="bg-primary hover:bg-primary/90"
              >
                Nouveau message
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
              Contactez-nous
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Une question, un événement spécial ? Nous sommes là pour vous
              accompagner
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-card border-border hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">
                  Adresse
                </h3>
                <p className="text-sm text-muted-foreground">
                  Titi Garage
                  <br />
                  Yaoundé, Cameroun
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">
                  Téléphone
                </h3>
                <p className="text-sm text-muted-foreground">
                  {process.env.NEXT_PUBLIC_PHONE}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">
                  Email
                </h3>
                <p className="text-sm text-muted-foreground">
                  {process.env.NEXT_PUBLIC_EMAIL}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">
                  Horaires
                </h3>
                <p className="text-sm text-muted-foreground">
                  Lun - Dim
                  <br />
                  {openStr} - {closeStr}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <Badge className="mb-4 bg-primary text-primary-foreground">
                  Écrivez-nous
                </Badge>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                  Envoyez-nous un message
                </h2>
                <p className="text-muted-foreground">
                  Remplissez le formulaire ci-dessous et nous vous répondrons
                  rapidement.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className="bg-background border-border"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      className="bg-background border-border"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="bg-background border-border"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="bg-background border-border"
                      placeholder="+237 6XX XXX XXX"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet *</Label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) =>
                      handleInputChange("subject", value)
                    }
                  >
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Sélectionnez un sujet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="information">
                        Demande d'information
                      </SelectItem>
                      <SelectItem value="evenement">
                        Organisation d'événement
                      </SelectItem>
                      <SelectItem value="feedback">
                        Commentaire/Suggestion
                      </SelectItem>
                      <SelectItem value="reclamation">Réclamation</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className="bg-background border-border min-h-[120px]"
                    placeholder="Décrivez votre demande en détail..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={!isFormValid() || isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer le message
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground">
                  * Champs obligatoires. Nous vous répondrons sous 24h.
                </p>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Nous trouver
                </h3>
                <div className="relative bg-muted rounded-lg overflow-hidden h-64">
                  {/* Dynamic */}
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Carte de localisation du restaurant"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                      <p className="text-foreground font-medium">Le Grec Man</p>
                      <p className="text-sm text-muted-foreground">
                        Titi Garage, Yaoundé
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Quick Links */}
              {/* Dynamic */}
              <Card className="bg-background border-border">
                <CardHeader>
                  <CardTitle className="text-lg font-serif">
                    Questions fréquentes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <p className="font-medium text-foreground mb-1">
                      Acceptez-vous les cartes de crédit ?
                    </p>
                    <p className="text-muted-foreground">
                      Oui, nous acceptons toutes les cartes bancaires.
                    </p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-foreground mb-1">
                      Livrez-vous à domicile ?
                    </p>
                    <p className="text-muted-foreground">
                      Oui, dans un rayon de 10km autour du restaurant.
                    </p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-foreground mb-1">
                      Proposez-vous des menus végétariens ?
                    </p>
                    <p className="text-muted-foreground">
                      Absolument, plusieurs options végétariennes et vegan.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
