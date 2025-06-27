
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface AddCarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddCarModal = ({ isOpen, onClose }: AddCarModalProps) => {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    price: "",
    mileage: "",
    location: "",
    description: "",
    fuelType: "",
    transmission: "",
    condition: ""
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    // Basic validation
    const requiredFields = ['make', 'model', 'year', 'price', 'mileage', 'location'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Car Added Successfully",
        description: `${formData.year} ${formData.make} ${formData.model} has been added to your listings.`,
      });
      
      // Reset form
      setFormData({
        make: "",
        model: "",
        year: "",
        price: "",
        mileage: "",
        location: "",
        description: "",
        fuelType: "",
        transmission: "",
        condition: ""
      });
      
      setLoading(false);
      onClose();
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Car</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="make">Make *</Label>
            <Select onValueChange={(value) => handleInputChange('make', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select make" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Toyota">Toyota</SelectItem>
                <SelectItem value="Honda">Honda</SelectItem>
                <SelectItem value="BMW">BMW</SelectItem>
                <SelectItem value="Mercedes">Mercedes</SelectItem>
                <SelectItem value="Audi">Audi</SelectItem>
                <SelectItem value="Ford">Ford</SelectItem>
                <SelectItem value="Chevrolet">Chevrolet</SelectItem>
                <SelectItem value="Nissan">Nissan</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="model">Model *</Label>
            <Input
              id="model"
              placeholder="Enter model"
              value={formData.model}
              onChange={(e) => handleInputChange('model', e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="year">Year *</Label>
            <Input
              id="year"
              type="number"
              placeholder="Enter year"
              value={formData.year}
              onChange={(e) => handleInputChange('year', e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="price">Price ($) *</Label>
            <Input
              id="price"
              type="number"
              placeholder="Enter price"
              value={formData.price}
              onChange={(e) => handleInputChange('price', e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="mileage">Mileage *</Label>
            <Input
              id="mileage"
              type="number"
              placeholder="Enter mileage"
              value={formData.mileage}
              onChange={(e) => handleInputChange('mileage', e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="location">Location *</Label>
            <Input
              id="location"
              placeholder="City, State"
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="fuel-type">Fuel Type</Label>
            <Select onValueChange={(value) => handleInputChange('fuelType', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select fuel type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Gasoline">Gasoline</SelectItem>
                <SelectItem value="Hybrid">Hybrid</SelectItem>
                <SelectItem value="Electric">Electric</SelectItem>
                <SelectItem value="Diesel">Diesel</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="transmission">Transmission</Label>
            <Select onValueChange={(value) => handleInputChange('transmission', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select transmission" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Automatic">Automatic</SelectItem>
                <SelectItem value="Manual">Manual</SelectItem>
                <SelectItem value="CVT">CVT</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="condition">Condition</Label>
            <Select onValueChange={(value) => handleInputChange('condition', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Excellent">Excellent</SelectItem>
                <SelectItem value="Good">Good</SelectItem>
                <SelectItem value="Fair">Fair</SelectItem>
                <SelectItem value="Poor">Poor</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-4">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Enter car description..."
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            rows={3}
          />
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Adding..." : "Add Car"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddCarModal;
