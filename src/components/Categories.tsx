
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "@/lib/products";

const Categories = () => {
  const [categoryData, setCategoryData] = useState(categories);
  
  return (
    <section className="container py-12 md:py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoryData.map((category) => (
          <Link 
            key={category.id} 
            to={`/products?category=${category.name}`}
            className="group relative overflow-hidden rounded-lg"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10"></div>
            
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
              <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
              <p>{category.count} Products</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
