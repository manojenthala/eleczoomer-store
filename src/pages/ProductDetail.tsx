
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRight, ShoppingCart, Heart, Share, Check, Truck, RefreshCw, ShieldCheck, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";
import { Product, getProductById, getRelatedProducts } from "@/lib/products";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState("");
  const { addToCart } = useCart();
  
  useEffect(() => {
    if (id) {
      const productId = parseInt(id, 10);
      const foundProduct = getProductById(productId);
      
      if (foundProduct) {
        setProduct(foundProduct);
        setActiveImage(foundProduct.images[0]);
        
        // Get related products
        const related = getRelatedProducts(foundProduct);
        setRelatedProducts(related);
      }
    }
  }, [id]);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/products">
            <Button>View All Products</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <nav className="flex text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/products" className="hover:text-foreground">Products</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to={`/products?category=${product.category}`} className="hover:text-foreground">
            {product.category}
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-foreground">{product.name}</span>
        </nav>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={activeImage} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex gap-4 overflow-auto pb-2">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImage(image)}
                  className={`w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 ${
                    activeImage === image ? "border-tech-blue" : "border-transparent"
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="h-5 w-5 fill-current" />
                <span className="font-medium">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              {product.originalPrice && (
                <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-sm font-medium">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              )}
            </div>
            
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="w-16 text-muted-foreground">Status:</div>
                <div className={`flex items-center gap-1 ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                  {product.inStock ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span>In Stock</span>
                    </>
                  ) : (
                    <>
                      <X className="h-4 w-4" />
                      <span>Out of Stock</span>
                    </>
                  )}
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-16 text-muted-foreground">Category:</div>
                <Link to={`/products?category=${product.category}`} className="text-tech-blue hover:underline">
                  {product.category}
                </Link>
              </div>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="text-muted-foreground">Quantity:</div>
                <div className="flex items-center border rounded-md">
                  <button 
                    className="w-10 h-10 flex items-center justify-center border-r"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  
                  <div className="w-16 h-10 flex items-center justify-center">
                    {quantity}
                  </div>
                  
                  <button 
                    className="w-10 h-10 flex items-center justify-center border-l"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button 
                  size="lg" 
                  className="flex-1 bg-tech-blue hover:bg-tech-darkblue text-white"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                
                <Button size="lg" variant="outline" className="px-4">
                  <Heart className="h-5 w-5" />
                </Button>
                
                <Button size="lg" variant="outline" className="px-4">
                  <Share className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <Truck className="h-6 w-6 text-tech-blue" />
                <div>
                  <div className="font-medium">Free Shipping</div>
                  <div className="text-xs text-muted-foreground">On orders over $50</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <RefreshCw className="h-6 w-6 text-tech-blue" />
                <div>
                  <div className="font-medium">30-Day Returns</div>
                  <div className="text-xs text-muted-foreground">Hassle-free returns</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <ShieldCheck className="h-6 w-6 text-tech-blue" />
                <div>
                  <div className="font-medium">Warranty</div>
                  <div className="text-xs text-muted-foreground">1 year warranty</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="features" className="mb-16">
          <TabsList className="w-full justify-start mb-6">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Customer Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="features" className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          
          <TabsContent value="specifications">
            <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specs).map(([key, value], index) => (
                <div key={index} className="grid grid-cols-2 border-b pb-2">
                  <div className="text-muted-foreground">{key}</div>
                  <div>{value}</div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="reviews">
            <div className="text-center py-10">
              <h3 className="text-xl font-semibold mb-2">Customer Reviews Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                We're working on collecting customer reviews for this product.
              </p>
              <div className="flex justify-center">
                <div className="bg-muted p-4 rounded-lg max-w-md">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-current" : ""}`} />
                      ))}
                    </div>
                    <span className="font-medium">{product.rating} out of 5</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Based on {product.reviewCount} reviews
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
