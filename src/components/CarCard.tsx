
import { MapPin, Calendar, Gauge, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  image: string;
  location: string;
}

interface CarCardProps {
  car: Car;
  onRequestPurchase: () => void;
}

const CarCard = ({ car, onRequestPurchase }: CarCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('en-US').format(mileage);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative">
        <img 
          src={car.image} 
          alt={`${car.make} ${car.model}`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <Button
            size="sm"
            variant="secondary"
            className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute top-3 left-3">
          <Badge className="bg-green-500 hover:bg-green-600">
            Verified
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="mb-2">
          <h3 className="text-xl font-semibold text-gray-900">
            {car.year} {car.make} {car.model}
          </h3>
          <p className="text-2xl font-bold text-blue-600 mt-1">
            {formatPrice(car.price)}
          </p>
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Gauge className="h-4 w-4" />
            <span>{formatMileage(car.mileage)} miles</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>{car.location}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <div className="flex space-x-2 w-full">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={onRequestPurchase}
          >
            View Details
          </Button>
          <Button 
            className="flex-1 bg-blue-600 hover:bg-blue-700"
            onClick={onRequestPurchase}
          >
            Request Purchase
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
