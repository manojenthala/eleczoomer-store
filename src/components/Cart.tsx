
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-4">
        <h2 className="text-2xl font-semibold">Your cart is empty</h2>
        <p className="text-muted-foreground text-center">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link to="/products">
          <Button className="mt-4">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between pb-4 border-b">
        <h2 className="text-2xl font-semibold">Shopping Cart</h2>
        <Button variant="ghost" size="sm" onClick={clearCart}>
          Clear All
        </Button>
      </div>
      
      <ScrollArea className="flex-1 my-4">
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.product.id} className="flex gap-4 pb-4 border-b">
              <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden">
                <img 
                  src={item.product.image} 
                  alt={item.product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-medium">{item.product.name}</h3>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8" 
                    onClick={() => removeFromCart(item.product.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Remove</span>
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground">{item.product.category}</p>
                
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center border rounded-md">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8" 
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-3 w-3" />
                      <span className="sr-only">Decrease quantity</span>
                    </Button>
                    
                    <span className="w-8 text-center">{item.quantity}</span>
                    
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8" 
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                      <span className="sr-only">Increase quantity</span>
                    </Button>
                  </div>
                  
                  <div className="font-medium">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <div className="border-t pt-4 mt-auto">
        <div className="flex justify-between text-sm mb-2">
          <span>Subtotal</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm mb-4">
          <span>Shipping</span>
          <span>Calculated at checkout</span>
        </div>
        <div className="flex justify-between font-medium text-lg mb-4">
          <span>Total</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>
        
        <Link to="/checkout">
          <Button className="w-full" size="lg">
            Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
