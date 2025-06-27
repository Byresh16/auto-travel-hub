
import { useState } from "react";
import { Car, Search, User, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AuthModal from "@/components/AuthModal";
import CarCard from "@/components/CarCard";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Sample car data for demonstration
  const featuredCars = [
    {
      id: 1,
      make: "Toyota",
      model: "Camry",
      year: 2020,
      price: 22000,
      mileage: 35000,
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500&h=300&fit=crop",
      location: "New York, NY"
    },
    {
      id: 2,
      make: "Honda",
      model: "Civic",
      year: 2019,
      price: 18500,
      mileage: 42000,
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=500&h=300&fit=crop",
      location: "Los Angeles, CA"
    },
    {
      id: 3,
      make: "BMW",
      model: "3 Series",
      year: 2021,
      price: 35000,
      mileage: 15000,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=300&fit=crop",
      location: "Chicago, IL"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">AutoHub</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Buy Cars
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Sell Cars
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => setIsAuthModalOpen(true)}
                className="flex items-center space-x-2"
              >
                <User className="h-4 w-4" />
                <span>Sign In</span>
              </Button>
              <Button
                onClick={() => setIsAuthModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection onSearchClick={() => setIsAuthModalOpen(true)} />

      {/* Features Section */}
      <FeaturesSection />

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Your Perfect Car
            </h2>
            <p className="text-xl text-gray-600">
              Search through thousands of quality used cars
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex space-x-4">
              <div className="flex-1">
                <Input
                  placeholder="Search by make, model, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 text-lg"
                />
              </div>
              <Button 
                className="h-12 px-8 bg-blue-600 hover:bg-blue-700"
                onClick={() => setIsAuthModalOpen(true)}
              >
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </div>

          {/* Featured Cars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} onRequestPurchase={() => setIsAuthModalOpen(true)} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Find Your Next Car?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers who found their perfect vehicle through AutoHub
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => setIsAuthModalOpen(true)}
              className="text-blue-600 bg-white hover:bg-gray-100"
            >
              <User className="h-5 w-5 mr-2" />
              Sign Up as Buyer
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setIsAuthModalOpen(true)}
              className="text-white border-white hover:bg-white hover:text-blue-600"
            >
              <Shield className="h-5 w-5 mr-2" />
              Admin Access
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Car className="h-6 w-6" />
              <span className="text-xl font-bold">AutoHub</span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © 2024 AutoHub. Your trusted second-hand car marketplace.
            </p>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
};

export default Index;
