"use client";

import { useState, useMemo } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer } from "@/components/animations/stagger-container";
import {
  Search,
  Filter,
  Star,
  Leaf,
  Wine,
  AlertCircle,
  Plus,
} from "lucide-react";
import menuData from "@/data/menu.json";

type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  allergens: string[];
  vegetarian?: boolean;
  vegan?: boolean;
  popular?: boolean;
  alcohol?: boolean;
};

type MenuCategory = {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
};

export default function MenuPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [filterBy, setFilterBy] = useState("all");

  const categories: MenuCategory[] = menuData.categories;

  const filteredAndSortedItems = useMemo(() => {
    let allItems: (MenuItem & { categoryName: string })[] = [];

    // Flatten all items with category info
    categories.forEach((category) => {
      category.items.forEach((item) => {
        allItems.push({ ...item, categoryName: category.name });
      });
    });

    // Apply search filter
    if (searchTerm) {
      allItems = allItems.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== "all") {
      allItems = allItems.filter((item) => {
        const category = categories.find((cat) =>
          cat.items.some((catItem) => catItem.id === item.id)
        );
        return category?.id === selectedCategory;
      });
    }

    // Apply dietary filters
    if (filterBy === "vegetarian") {
      allItems = allItems.filter((item) => item.vegetarian);
    } else if (filterBy === "vegan") {
      allItems = allItems.filter((item) => item.vegan);
    } else if (filterBy === "popular") {
      allItems = allItems.filter((item) => item.popular);
    }

    // Apply sorting
    if (sortBy === "price-asc") {
      allItems.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      allItems.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      allItems.sort((a, b) => a.name.localeCompare(b.name));
    }

    return allItems;
  }, [searchTerm, selectedCategory, sortBy, filterBy, categories]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR").format(price) + " FCFA";
  };

  const getAllergenIcon = (allergen: string) => {
    const icons: { [key: string]: string } = {
      gluten: "🌾",
      lactose: "🥛",
      "fruits à coque": "🥜",
      œufs: "🥚",
      poisson: "🐟",
      sulfites: "🍷",
    };
    return icons[allergen] || "⚠️";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
              Notre Menu
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Découvrez nos spécialités gourmandes, préparées fraîchement avec
              des ingrédients de qualité premium
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={200}>
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Rechercher un plat..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-card border-border"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3 items-center">
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-48 bg-card border-border">
                    <SelectValue placeholder="Catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les catégories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={filterBy} onValueChange={setFilterBy}>
                  <SelectTrigger className="w-40 bg-card border-border">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Filtrer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous</SelectItem>
                    <SelectItem value="popular">Populaires</SelectItem>
                    <SelectItem value="vegetarian">Végétarien</SelectItem>
                    <SelectItem value="vegan">Vegan</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40 bg-card border-border">
                    <SelectValue placeholder="Trier par" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Par défaut</SelectItem>
                    <SelectItem value="name">Nom A-Z</SelectItem>
                    <SelectItem value="price-asc">Prix croissant</SelectItem>
                    <SelectItem value="price-desc">Prix décroissant</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs
            value={selectedCategory === "all" ? "all" : selectedCategory}
            onValueChange={setSelectedCategory}
          >
            {/* Category Tabs */}
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-12 bg-card border border-border h-auto">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Tout
              </TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* All Items View */}
            <TabsContent value="all">
              <StaggerContainer
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                staggerDelay={100}
              >
                {filteredAndSortedItems.map((item) => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    formatPrice={formatPrice}
                    getAllergenIcon={getAllergenIcon}
                  />
                ))}
              </StaggerContainer>
            </TabsContent>

            {/* Category-specific Views */}
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <FadeIn className="mb-8">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                    {category.name}
                  </h2>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </FadeIn>
                <StaggerContainer
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  staggerDelay={100}
                >
                  {category.items
                    .filter((item) => {
                      if (searchTerm) {
                        return (
                          item.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                          item.description
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                        );
                      }
                      return true;
                    })
                    .filter((item) => {
                      if (filterBy === "vegetarian") return item.vegetarian;
                      if (filterBy === "vegan") return item.vegan;
                      if (filterBy === "popular") return item.popular;
                      return true;
                    })
                    .map((item) => (
                      <MenuItemCard
                        key={item.id}
                        item={item}
                        formatPrice={formatPrice}
                        getAllergenIcon={getAllergenIcon}
                      />
                    ))}
                </StaggerContainer>
              </TabsContent>
            ))}
          </Tabs>

          {filteredAndSortedItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Aucun plat ne correspond à vos critères de recherche.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setFilterBy("all");
                  setSortBy("default");
                }}
                className="mt-4"
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function MenuItemCard({
  item,
  formatPrice,
  getAllergenIcon,
}: {
  item: MenuItem & { categoryName?: string };
  formatPrice: (price: number) => string;
  getAllergenIcon: (allergen: string) => string;
}) {
  return (
    <Card className="group overflow-hidden bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-105">
      <div className="relative overflow-hidden">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        <div className="absolute top-3 left-3 flex gap-2">
          {item.popular && (
            <Badge className="bg-primary text-primary-foreground animate-pulse">
              <Star className="w-3 h-3 mr-1" />
              Populaire
            </Badge>
          )}
          {item.vegetarian && (
            <Badge
              variant="secondary"
              className="bg-green-500/10 text-green-400 border-green-500/20"
            >
              <Leaf className="w-3 h-3 mr-1" />
              Végé
            </Badge>
          )}
          {item.alcohol && (
            <Badge
              variant="secondary"
              className="bg-purple-500/10 text-purple-400 border-purple-500/20"
            >
              <Wine className="w-3 h-3 mr-1" />
              Alcool
            </Badge>
          )}
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {item.name}
          </h3>
          <span className="text-lg font-bold text-primary ml-4 flex-shrink-0">
            {formatPrice(item.price)}
          </span>
        </div>

        <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
          {item.description}
        </p>

        {item.allergens && item.allergens.length > 0 && (
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
            <div className="flex flex-wrap gap-1">
              {item.allergens.map((allergen) => (
                <span
                  key={allergen}
                  className="text-xs text-orange-400 bg-orange-400/10 px-2 py-1 rounded"
                >
                  {getAllergenIcon(allergen)} {allergen}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between items-center">
          {item.categoryName && (
            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
              {item.categoryName}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
