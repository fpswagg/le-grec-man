"use client";

import {
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  useState,
} from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  ChefHat,
  Utensils,
  Users,
  Camera,
  Play,
  Pause,
  LucideProps,
} from "lucide-react";

import galleryData from "@/data/gallery.json";

const categories = [
  { id: "all", name: "Tout", icon: Camera },
  { id: "restaurant", name: "Restaurant", icon: Utensils },
  { id: "plats", name: "Nos Plats", icon: ChefHat },
  { id: "equipe", name: "Équipe", icon: Users },
  { id: "evenements", name: "Événements", icon: Camera },
] as {
  id: Category | "all";
  name: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}[];

type Category = "restaurant" | "plats" | "equipe" | "evenements";

type GalleryItem = {
  id: string;
  title: string;
  category: Category;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  description: string;
  featured?: boolean;
};

const galleryItems = galleryData.items as GalleryItem[];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const featuredItems = galleryItems.filter((item) => item.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
              Galerie
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Découvrez l'univers du Grec Man à travers nos images et vidéos
            </p>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              À la Une
            </h2>
            <p className="text-muted-foreground">
              Nos moments les plus marquants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {featuredItems.map((item) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer overflow-hidden bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.src || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                        À la Une
                      </Badge>
                      {item.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-8 h-8 text-primary-foreground ml-1" />
                          </div>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-serif font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl bg-background border-border">
                  <GalleryModal item={item} />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-12 bg-background border border-border">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer overflow-hidden bg-background border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                      <div className="relative overflow-hidden">
                        <img
                          src={item.thumbnail || item.src}
                          alt={item.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        {item.type === "video" && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
                            </div>
                          </div>
                        )}
                        {item.featured && (
                          <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs">
                            Vedette
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-serif font-semibold text-foreground mb-1 text-sm">
                          {item.title}
                        </h3>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl bg-background border-border">
                    <GalleryModal item={item} />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function GalleryModal({ item }: { item: GalleryItem }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative">
      <div className="relative">
        {item.type === "video" ? (
          <div className="relative">
            <img
              src={item.thumbnail || item.src}
              alt={item.title}
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                onClick={() => setIsPlaying(!isPlaying)}
                size="lg"
                className="w-20 h-20 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8" />
                ) : (
                  <Play className="w-8 h-8 ml-1" />
                )}
              </Button>
            </div>
          </div>
        ) : (
          <img
            src={item.src || "/placeholder.svg"}
            alt={item.title}
            className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
          />
        )}
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-2xl font-serif font-bold text-foreground">
            {item.title}
          </h2>
          <Badge variant="secondary" className="capitalize">
            {item.category.replace("-", " ")}
          </Badge>
          {item.featured && (
            <Badge className="bg-primary text-primary-foreground">
              À la Une
            </Badge>
          )}
        </div>
        <p className="text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}
