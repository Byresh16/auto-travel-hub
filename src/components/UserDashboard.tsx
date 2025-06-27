
import { useState } from "react";
import { Search, Filter, Heart, Car, MapPin, Calendar, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CarCard from "./CarCard";
import { useToast } from "@/hooks/use-toast";

const UserDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const { toast } = useToast();

  // Sample car data
  const cars = [
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
    },
    {
      id: 4,
      make: "Mercedes",
      model: "C-Class",
      year: 2020,
      price: 38000,
      mileage: 25000,
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&h=300&fit=crop",
      location: "Miami, FL"
    },
    {
      id: 5,
      make: "Audi",
      model: "A4",
      year: 2019,
      price: 32000,
      mileage: 38000,
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&h=300&fit=crop",
      location: "Seattle, WA"
    },
    {
      id: 6,
      make: "Ford",
      model: "Mustang",
      year: 2021,
      price: 28000,
      mileage: 12000,
      image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=500&h=300&fit=crop",
      location: "Dallas, TX"
    }
  ];

  const handleRequestPurchase = () => {
    toast({
      title: "Purchase Request Sent",
      description: "Your purchase request has been sent to the seller. They will contact you soon.",
    });
  };

  const filteredCars = cars.filter(car => {
    const matchesSearch = searchQuery === "" || 
      car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesMake = selectedMake === "" || car.make === selectedMake;
    
    const matchesPrice = priceRange === "" || (() => {
      const price = car.price;
      switch (priceRange) {
        case "under-20k": return price < 20000;
        case "20k-30k": return price >= 20000 && price < 30000;
        case "30k-40k": return price >= 30000 && price < 40000;
        case "over-40k": return price >= 40000;
        default: return true;
      }
    })();

    return matchesSearch && matchesMake && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">AutoHub</span>
            </div>
            
            <nav className="flex items-center space-x-4">
              <Button variant="ghost" className="flex items-center space-x-2">
                <Heart className="h-4 w-4" />
                <span>Favorites</span>
              </Button>
              <Button variant="outline">
                My Requests
              </Button>
              <Button>
                Sign Out
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Search className="h-5 w-5" />
              <span>Find Your Perfect Car</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <Input
                  placeholder="Search by make, model, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12"
                />
              </div>
              <Select value={selectedMake} onValueChange={setSelectedMake}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Any Make" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any Make</SelectItem>
                  <SelectItem value="Toyota">Toyota</SelectItem>
                  <SelectItem value="Honda">Honda</SelectItem>
                  <SelectItem value="BMW">BMW</SelectItem>
                  <SelectItem value="Mercedes">Mercedes</SelectItem>
                  <SelectItem value="Audi">Audi</SelectItem>
                  <SelectItem value="Ford">Ford</SelectItem>
                </SelectContent>
              </Select>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Any Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any Price</SelectItem>
                  <SelectItem value="under-20k">Under $20,000</SelectItem>
                  <SelectItem value="20k-30k">$20,000 - $30,000</SelectItem>
                  <SelectItem value="30k-40k">$30,000 - $40,000</SelectItem>
                  <SelectItem value="over-40k">Over $40,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCars.length} of {cars.length} cars
          </p>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <CarCard 
              key={car.id} 
              car={car} 
              onRequestPurchase={handleRequestPurchase}
            />
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <Car className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No cars found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search criteria to see more results.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
