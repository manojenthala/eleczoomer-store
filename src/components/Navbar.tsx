
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import Cart from "./Cart";

const Navbar = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="md:hidden mr-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <Link to="/products" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                  All Products
                </Link>
                <Link to="/products?category=Laptops" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                  Laptops
                </Link>
                <Link to="/products?category=Smartphones" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                  Smartphones
                </Link>
                <Link to="/products?category=Headphones" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                  Headphones
                </Link>
                <Link to="/products?category=Cameras" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                  Cameras
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-xl md:text-2xl text-tech-blue">ElecZoomer</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/" className="transition-colors hover:text-foreground/80">
            Home
          </Link>
          <Link to="/products" className="transition-colors hover:text-foreground/80">
            All Products
          </Link>
          <Link to="/products?category=Laptops" className="transition-colors hover:text-foreground/80">
            Laptops
          </Link>
          <Link to="/products?category=Smartphones" className="transition-colors hover:text-foreground/80">
            Smartphones
          </Link>
          <Link to="/products?category=Headphones" className="transition-colors hover:text-foreground/80">
            Headphones
          </Link>
          <Link to="/products?category=Cameras" className="transition-colors hover:text-foreground/80">
            Cameras
          </Link>
        </nav>
        
        <div className="ml-auto flex items-center space-x-4">
          <div className="hidden md:flex items-center">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-[200px] lg:w-[300px] pl-8"
              />
            </div>
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-tech-blue text-white p-0 text-xs">
                    {cartCount}
                  </Badge>
                )}
                <span className="sr-only">Open cart</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-lg">
              <Cart />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
