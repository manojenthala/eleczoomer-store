
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative bg-tech-gray overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/40 z-10"></div>
      
      <div className="container relative z-20 flex flex-col items-center justify-center text-center py-20 md:py-32">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight animate-fade-in">
          Next-Gen Tech, <span className="text-tech-blue">Unbeatable Prices</span>
        </h1>
        
        <p className="text-xl text-white/90 max-w-2xl mb-8 animate-slide-in">
          Discover the latest electronics and cutting-edge technology from top brands around the world.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-slide-in" style={{ animationDelay: "0.2s" }}>
          <Link to="/products">
            <Button size="lg" className="bg-tech-blue hover:bg-tech-darkblue text-white">
              Shop Now
            </Button>
          </Link>
          <Link to="/products?category=Laptops">
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              Explore Deals
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
          alt="Electronics display" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
