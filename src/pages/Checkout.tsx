
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, CreditCard, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

type CheckoutStep = 'information' | 'shipping' | 'payment' | 'confirmation';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState<CheckoutStep>('information');
  const [shippingMethod, setShippingMethod] = useState('standard');
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const shippingCost = shippingMethod === 'express' ? 15 : (shippingMethod === 'standard' ? 5 : 0);
  const orderTotal = cartTotal + shippingCost;
  
  const handleContinue = () => {
    if (step === 'information') {
      setStep('shipping');
    } else if (step === 'shipping') {
      setStep('payment');
    } else if (step === 'payment') {
      // Process payment - this would connect to a payment processor in a real app
      setStep('confirmation');
      toast({
        title: "Order Placed Successfully!",
        description: "Your order has been placed and will be shipped soon.",
      });
      clearCart();
      
      // In a real app, we might redirect to an order confirmation page
      // instead of clearing the cart here
    }
  };
  
  if (cart.length === 0 && step !== 'confirmation') {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container flex-1 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">Add some products to your cart before proceeding to checkout.</p>
          <Link to="/products">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        {step === 'confirmation' ? (
          <div className="max-w-3xl mx-auto py-12">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center mb-8">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              
              <h1 className="text-2xl font-bold mb-2">Thank You for Your Order!</h1>
              <p className="text-gray-600 mb-6">
                Your order has been placed and will be processed shortly. 
                A confirmation email has been sent to your email address.
              </p>
              
              <div className="bg-white border rounded-lg p-4 max-w-sm mx-auto mb-6">
                <div className="text-sm text-muted-foreground mb-2">Order Reference:</div>
                <div className="font-mono text-lg font-medium">#EZ{Math.floor(100000 + Math.random() * 900000)}</div>
              </div>
              
              <Link to="/">
                <Button>Continue Shopping</Button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center mb-8">
              <Link to="/products" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Continue Shopping
              </Link>
              <h1 className="text-2xl font-bold mx-auto">Checkout</h1>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex mb-8">
                  <div className="flex items-center mr-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                      step === 'information' ? 'bg-tech-blue text-white' : 'bg-muted text-muted-foreground'
                    }`}>
                      1
                    </div>
                    <span className={step === 'information' ? 'font-medium' : 'text-muted-foreground'}>
                      Information
                    </span>
                  </div>
                  
                  <div className="border-b w-8 self-center mx-2"></div>
                  
                  <div className="flex items-center mr-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                      step === 'shipping' ? 'bg-tech-blue text-white' : 'bg-muted text-muted-foreground'
                    }`}>
                      2
                    </div>
                    <span className={step === 'shipping' ? 'font-medium' : 'text-muted-foreground'}>
                      Shipping
                    </span>
                  </div>
                  
                  <div className="border-b w-8 self-center mx-2"></div>
                  
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                      step === 'payment' ? 'bg-tech-blue text-white' : 'bg-muted text-muted-foreground'
                    }`}>
                      3
                    </div>
                    <span className={step === 'payment' ? 'font-medium' : 'text-muted-foreground'}>
                      Payment
                    </span>
                  </div>
                </div>
                
                {step === 'information' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" className="mt-1" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" className="mt-1" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input id="state" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="zip">Zip Code</Label>
                        <Input id="zip" className="mt-1" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" className="mt-1" />
                    </div>
                  </div>
                )}
                
                {step === 'shipping' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Shipping Method</h3>
                      <RadioGroup 
                        value={shippingMethod}
                        onValueChange={setShippingMethod}
                        className="space-y-4"
                      >
                        <div className="flex items-start space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-muted">
                          <RadioGroupItem value="standard" id="standard" />
                          <div className="flex-1">
                            <Label htmlFor="standard" className="flex justify-between cursor-pointer">
                              <span>Standard Shipping</span>
                              <span>$5.00</span>
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Delivery within 3-5 business days
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-muted">
                          <RadioGroupItem value="express" id="express" />
                          <div className="flex-1">
                            <Label htmlFor="express" className="flex justify-between cursor-pointer">
                              <span>Express Shipping</span>
                              <span>$15.00</span>
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Delivery within 1-2 business days
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-muted">
                          <RadioGroupItem value="pickup" id="pickup" />
                          <div className="flex-1">
                            <Label htmlFor="pickup" className="flex justify-between cursor-pointer">
                              <span>Store Pickup</span>
                              <span>Free</span>
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Pickup at your convenience from our store
                            </p>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                )}
                
                {step === 'payment' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Payment Method</h3>
                      <div className="border rounded-lg p-6">
                        <div className="flex items-center gap-2 mb-6">
                          <CreditCard className="h-5 w-5 text-muted-foreground" />
                          <span className="font-medium">Credit Card</span>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-1" />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="expiry">Expiry Date</Label>
                              <Input id="expiry" placeholder="MM/YY" className="mt-1" />
                            </div>
                            <div>
                              <Label htmlFor="cvc">CVC</Label>
                              <Input id="cvc" placeholder="123" className="mt-1" />
                            </div>
                          </div>
                          
                          <div>
                            <Label htmlFor="nameOnCard">Name on Card</Label>
                            <Input id="nameOnCard" className="mt-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between mt-8">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      if (step === 'shipping') setStep('information');
                      if (step === 'payment') setStep('shipping');
                    }}
                    disabled={step === 'information'}
                  >
                    Back
                  </Button>
                  
                  <Button onClick={handleContinue}>
                    {step === 'payment' ? 'Place Order' : 'Continue'}
                  </Button>
                </div>
              </div>
              
              <div>
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="font-medium text-lg mb-4">Order Summary</h3>
                  
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div key={item.product.id} className="flex gap-3">
                        <div className="w-16 h-16 bg-white rounded overflow-hidden relative">
                          <img 
                            src={item.product.image} 
                            alt={item.product.name} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-0 right-0 w-5 h-5 bg-tech-blue text-white rounded-bl text-xs flex items-center justify-center">
                            {item.quantity}
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-medium text-sm leading-tight">{item.product.name}</h4>
                          <p className="text-xs text-muted-foreground">{item.product.category}</p>
                          <div className="text-sm mt-1">${(item.product.price * item.quantity).toFixed(2)}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Separator className="mb-4" />
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>{shippingMethod === 'pickup' ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
                    </div>
                    
                    <div className="flex justify-between font-medium text-base pt-2">
                      <span>Total</span>
                      <span>${orderTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
