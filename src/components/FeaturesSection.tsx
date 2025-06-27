
import { Shield, Search, Car, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Verified Listings",
      description: "All cars are thoroughly inspected and verified by our expert team before listing."
    },
    {
      icon: Search,
      title: "Smart Search",
      description: "Find exactly what you're looking for with our advanced filtering and search tools."
    },
    {
      icon: Car,
      title: "Quality Guaranteed",
      description: "Every vehicle comes with detailed history reports and quality guarantees."
    },
    {
      icon: Users,
      title: "Trusted Community",
      description: "Join thousands of satisfied buyers and sellers in our trusted marketplace."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose AutoHub?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We make buying and selling used cars simple, safe, and transparent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
