
import { ArrowDown, Car, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onSearchClick: () => void;
}

const HeroSection = ({ onSearchClick }: HeroSectionProps) => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(59, 130, 246, 0.6)), url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop')`
        }}
      />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Find Your
            <span className="block text-yellow-400">Dream Car</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover the perfect second-hand vehicle from our extensive collection of quality cars. 
            Trusted by thousands of satisfied customers.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              size="lg"
              onClick={onSearchClick}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-200"
            >
              <Search className="h-6 w-6 mr-2" />
              Browse Cars
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={onSearchClick}
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-200"
            >
              <Car className="h-6 w-6 mr-2" />
              Sell Your Car
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
