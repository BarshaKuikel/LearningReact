import React, { useState, useEffect } from "react";

type Product = {
  name: string;
  price: string;
  img: string;
};

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Simulate fetching products
  useEffect(() => {
    const productData: Product[] = [
      {
        name: "Luxury Lipstick",
        price: "$25",
        img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa",
      },
      {
        name: "Concealer",
        price: "$55",
        img: "https://images.narscosmetics.com/is/image/NarsCosmetics/999NACRCC0001"   
       },
      {
        name: "Makeup Kit",
        price: "$60",
        img: "https://images.unsplash.com/photo-1585232351009-aa87416fca90",
      },
      {
        name: "Perfume",
        price: "$55",
        img: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd",
      },
    ];

    // Mimic API call
    setTimeout(() => setProducts(productData), 1000);
  }, []);

  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-5 bg-pink-100">
        <h1 className="text-2xl font-bold text-pink-600">Nykaa</h1>
        <nav className="space-x-6 font-medium">
          <a href="#" className="hover:text-pink-600">Home</a>
          <a href="/Shop" className="hover:text-pink-600">Shop</a>
          <a href="/About" className="hover:text-pink-600">About</a>
          <a href="/Contact" className="hover:text-pink-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9')",
        }}
      >
        <div className="bg-black/50 p-10 rounded-lg text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Enhance Your Natural Beauty
          </h2>
          <p className="mb-6">Premium cosmetics made just for you</p>
          <button className="bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-full font-semibold">
            Shop Now
          </button>
        </div>
      </section>

      {/* Products */}
      <section className="px-10 py-16">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-10">
          Featured Products
        </h2>

        {products.length === 0 ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 hover:shadow-lg transition"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-48 w-full object-cover rounded-md"
                />
                <h3 className="mt-4 font-semibold">{product.name}</h3>
                <p className="text-pink-500 font-bold">{product.price}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-pink-100 text-center py-4">
        <p>© 2026 Glow Beauty. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;