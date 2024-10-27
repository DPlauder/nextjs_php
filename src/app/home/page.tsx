
import { ShoppingCart, Search, Menu } from "lucide-react"


export default function Home(){

    return (
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-10 bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <Menu className="h-6 w-6 mr-2 md:hidden" />
                <h1 className="text-2xl font-bold text-gray-800">ShopName</h1>
              </div>
              <nav className="hidden md:flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">Products</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
              </nav>
              <div className="flex items-center space-x-4">
                <Search className="h-6 w-6 text-gray-600" />
                <ShoppingCart className="h-6 w-6 text-gray-600" />
              </div>
            </div>
          </header>
    
          <main className="flex-grow">
            <section className="bg-blue-600 text-white py-20">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-4">Welcome to Our Shop</h2>
                <p className="mb-8">Discover amazing products at great prices!</p>
                <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded hover:bg-blue-100 transition duration-300">
                  Shop Now
                </button>
              </div>
            </section>
    
            <section className="py-16">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[1, 2, 3].map((product) => (
                    <div key={product} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <img src={`/placeholder.svg?height=200&width=300`} alt={`Product ${product}`} className="w-full h-48 object-cover" />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-gray-800">{product.price}</span>
                          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
    
            <section className="bg-gray-100 py-16">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Subscribe to Our Newsletter</h2>
                <p className="mb-8 text-gray-600">Stay updated with our latest products and offers!</p>
                <form className="flex max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </section>
          </main>
    
          <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4">About Us</h3>
                  <p className="text-gray-400">We are passionate about delivering high-quality products to our customers.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Products</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                  <p className="text-gray-400">123 Shop Street, City, Country</p>
                  <p className="text-gray-400">Email: info@shopname.com</p>
                  <p className="text-gray-400">Phone: +1 234 567 890</p>
                </div>
              </div>
              <div className="mt-8 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} ShopName. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      )
}