
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Shield, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleGoogleSignIn = async (role: 'user' | 'admin') => {
    setLoading(true);
    
    // Simulate authentication process
    setTimeout(() => {
      toast({
        title: "Authentication Required",
        description: "Please connect your Lovable project to Supabase to enable Google authentication.",
        variant: "default",
      });
      setLoading(false);
    }, 1000);
  };

  const handleEmailSignIn = async (role: 'user' | 'admin') => {
    if (!email || !password) {
      toast({
        title: "Missing Information",
        description: "Please enter both email and password.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    // Simulate authentication process
    setTimeout(() => {
      toast({
        title: "Authentication Required",
        description: "Please connect your Lovable project to Supabase to enable authentication.",
        variant: "default",
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Welcome to AutoHub
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="user" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="user" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>User</span>
            </TabsTrigger>
            <TabsTrigger value="admin" className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>Admin</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="user">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center space-x-2">
                  <User className="h-5 w-5 text-blue-600" />
                  <span>User Login</span>
                </CardTitle>
                <CardDescription>
                  Sign in to browse and request cars
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={() => handleGoogleSignIn('user')}
                  disabled={loading}
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Continue with Google
                </Button>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with email
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="user-email">Email</Label>
                    <Input
                      id="user-email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="user-password">Password</Label>
                    <Input
                      id="user-password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <Button
                    onClick={() => handleEmailSignIn('user')}
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    Sign In as User
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="admin">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Shield className="h-5 w-5 text-orange-600" />
                  <span>Admin Login</span>
                </CardTitle>
                <CardDescription>
                  Sign in to manage cars and listings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={() => handleGoogleSignIn('admin')}
                  disabled={loading}
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Continue with Google
                </Button>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with email
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="admin-email">Admin Email</Label>
                    <Input
                      id="admin-email"
                      type="email"
                      placeholder="Enter admin email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="admin-password">Password</Label>
                    <Input
                      id="admin-password"
                      type="password"
                      placeholder="Enter admin password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <Button
                    onClick={() => handleEmailSignIn('admin')}
                    disabled={loading}
                    className="w-full bg-orange-600 hover:bg-orange-700"
                  >
                    Sign In as Admin
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center text-sm text-gray-600 mt-4">
          <p>
            Don't have an account? 
            <Button variant="link" className="p-0 ml-1 h-auto">
              Sign up here
            </Button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
