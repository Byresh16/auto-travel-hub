
import { useState } from "react";
import { Plus, Car, Users, FileText, BarChart3, Edit, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddCarModal from "./AddCarModal";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const [isAddCarModalOpen, setIsAddCarModalOpen] = useState(false);
  const { toast } = useToast();

  // Sample data
  const stats = [
    { title: "Total Cars", value: "156", icon: Car, color: "text-blue-600" },
    { title: "Active Listings", value: "142", icon: FileText, color: "text-green-600" },
    { title: "Purchase Requests", value: "28", icon: Users, color: "text-orange-600" },
    { title: "Sold This Month", value: "23", icon: BarChart3, color: "text-purple-600" },
  ];

  const cars = [
    {
      id: 1,
      make: "Toyota",
      model: "Camry",
      year: 2020,
      price: 22000,
      status: "Active",
      requests: 3,
      views: 145
    },
    {
      id: 2,
      make: "Honda",
      model: "Civic",
      year: 2019,
      price: 18500,
      status: "Active",
      requests: 1,
      views: 89
    },
    {
      id: 3,
      make: "BMW",
      model: "3 Series",
      year: 2021,
      price: 35000,
      status: "Sold",
      requests: 0,
      views: 234
    }
  ];

  const requests = [
    {
      id: 1,
      buyerName: "John Smith",
      buyerEmail: "john@example.com",
      carDetails: "2020 Toyota Camry",
      status: "Pending",
      date: "2024-01-15"
    },
    {
      id: 2,
      buyerName: "Sarah Johnson",
      buyerEmail: "sarah@example.com",
      carDetails: "2019 Honda Civic",
      status: "Approved",
      date: "2024-01-14"
    },
    {
      id: 3,
      buyerName: "Mike Davis",
      buyerEmail: "mike@example.com",
      carDetails: "2021 BMW 3 Series",
      status: "Completed",
      date: "2024-01-12"
    }
  ];

  const handleDeleteCar = (carId: number) => {
    toast({
      title: "Car Deleted",
      description: "The car listing has been successfully removed.",
    });
  };

  const handleUpdateRequest = (requestId: number, status: string) => {
    toast({
      title: "Request Updated",
      description: `Purchase request has been ${status.toLowerCase()}.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">AutoHub Admin</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button 
                onClick={() => setIsAddCarModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Car
              </Button>
              <Button variant="outline">
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="cars" className="space-y-6">
          <TabsList>
            <TabsTrigger value="cars">Car Management</TabsTrigger>
            <TabsTrigger value="requests">Purchase Requests</TabsTrigger>
          </TabsList>

          <TabsContent value="cars">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Car Listings</span>
                  <Button 
                    onClick={() => setIsAddCarModalOpen(true)}
                    size="sm"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Car
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Car Details</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Requests</TableHead>
                      <TableHead>Views</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cars.map((car) => (
                      <TableRow key={car.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">
                              {car.year} {car.make} {car.model}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          ${car.price.toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={car.status === "Active" ? "default" : "secondary"}
                          >
                            {car.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{car.requests}</TableCell>
                        <TableCell>{car.views}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleDeleteCar(car.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="requests">
            <Card>
              <CardHeader>
                <CardTitle>Purchase Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Buyer</TableHead>
                      <TableHead>Car</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {requests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{request.buyerName}</p>
                            <p className="text-sm text-gray-600">{request.buyerEmail}</p>
                          </div>
                        </TableCell>
                        <TableCell>{request.carDetails}</TableCell>
                        <TableCell>{request.date}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={
                              request.status === "Pending" ? "secondary" :
                              request.status === "Approved" ? "default" : "outline"
                            }
                          >
                            {request.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            {request.status === "Pending" && (
                              <>
                                <Button 
                                  size="sm" 
                                  onClick={() => handleUpdateRequest(request.id, "Approved")}
                                >
                                  Approve
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => handleUpdateRequest(request.id, "Rejected")}
                                >
                                  Reject
                                </Button>
                              </>
                            )}
                            {request.status === "Approved" && (
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => handleUpdateRequest(request.id, "Completed")}
                              >
                                Mark Complete
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <AddCarModal 
        isOpen={isAddCarModalOpen}
        onClose={() => setIsAddCarModalOpen(false)}
      />
    </div>
  );
};

export default AdminDashboard;
