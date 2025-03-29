
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Product, products, categories } from "@/lib/products";
import { X, SlidersHorizontal } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by price range
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(term) ||
          product.description.toLowerCase().includes(term) ||
          product.category.toLowerCase().includes(term)
      );
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, priceRange, searchTerm]);
  
  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);
  
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    
    if (category) {
      searchParams.set("category", category);
    } else {
      searchParams.delete("category");
    }
    
    setSearchParams(searchParams);
  };
  
  const clearFilters = () => {
    setSelectedCategory(null);
    setPriceRange([0, 2000]);
    setSearchTerm("");
    setSearchParams({});
  };
  
  const FilterSidebar = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox 
              id="all-categories"
              checked={selectedCategory === null}
              onCheckedChange={() => handleCategoryChange(null)}
            />
            <label htmlFor="all-categories" className="ml-2 text-sm font-medium leading-none cursor-pointer">
              All Categories
            </label>
          </div>
          
          {categories.map(category => (
            <div key={category.id} className="flex items-center">
              <Checkbox 
                id={`category-${category.id}`}
                checked={selectedCategory === category.name}
                onCheckedChange={() => handleCategoryChange(category.name)}
              />
              <label 
                htmlFor={`category-${category.id}`} 
                className="ml-2 text-sm font-medium leading-none cursor-pointer"
              >
                {category.name} ({category.count})
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Price Range</h3>
        <Slider
          value={priceRange}
          min={0}
          max={2000}
          step={10}
          onValueChange={setPriceRange}
          className="mb-6"
        />
        <div className="flex items-center justify-between">
          <div className="bg-muted px-3 py-1 rounded-md">
            ${priceRange[0]}
          </div>
          <div className="bg-muted px-3 py-1 rounded-md">
            ${priceRange[1]}
          </div>
        </div>
      </div>
      
      <div className="border-t pt-6">
        <Button onClick={clearFilters} variant="outline" className="w-full">
          Clear All Filters
        </Button>
      </div>
    </div>
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            {selectedCategory ? selectedCategory : "All Products"}
          </h1>
          
          {/* Mobile filter button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="py-4">
                <FilterSidebar />
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar filters - desktop */}
          <div className="hidden md:block w-64 shrink-0">
            <FilterSidebar />
          </div>
          
          <div className="flex-1">
            <div className="mb-6">
              <div className="flex gap-2 mb-4">
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-md"
                />
                {searchTerm && (
                  <Button variant="ghost" size="icon" onClick={() => setSearchTerm("")}>
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
              
              {selectedCategory && (
                <div className="flex items-center mb-4">
                  <div className="text-sm">
                    Active filters:
                  </div>
                  <div className="ml-2 flex items-center bg-muted rounded-full px-3 py-1 text-sm">
                    {selectedCategory}
                    <button 
                      onClick={() => handleCategoryChange(null)}
                      className="ml-2 text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              )}
              
              <div className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} products
              </div>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters or search term to find what you're looking for.
                </p>
                <Button onClick={clearFilters} variant="outline">
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
