
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Package, Truck, CreditCard } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        <FeaturedProducts />
        
        <section className="bg-tech-lightgray py-12 md:py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Why Shop With Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="bg-tech-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-tech-blue" />
                </div>
                <h3 className="font-bold text-lg mb-2">Free Shipping</h3>
                <p className="text-gray-600">
                  On all orders over $50. International shipping available on select products.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="bg-tech-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-8 w-8 text-tech-blue" />
                </div>
                <h3 className="font-bold text-lg mb-2">Warranty Protection</h3>
                <p className="text-gray-600">
                  All products come with a minimum 1-year warranty, with extended options available.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="bg-tech-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-tech-blue" />
                </div>
                <h3 className="font-bold text-lg mb-2">30-Day Returns</h3>
                <p className="text-gray-600">
                  Not satisfied? Return any product within 30 days for a full refund, no questions asked.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="bg-tech-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-tech-blue" />
                </div>
                <h3 className="font-bold text-lg mb-2">Secure Payment</h3>
                <p className="text-gray-600">
                  Multiple secure payment options, including credit card, PayPal, and Apple Pay.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Categories />
        
        <section className="container py-12 md:py-16">
          <div className="bg-tech-blue rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Limited Time Offer
                </h2>
                <p className="text-white/90 text-lg mb-6">
                  Get up to 30% off on selected laptops and smartphones. Offer valid while supplies last.
                </p>
                <div>
                  <Link to="/products">
                    <Button size="lg" className="bg-white text-tech-blue hover:bg-white/90">
                      Shop Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Person using laptop" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
