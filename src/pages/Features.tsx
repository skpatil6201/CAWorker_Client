export default function Features() {
  const features = [
    {
      title: "Professional CA Services",
      description: "Access to qualified Chartered Accountants for all your accounting, taxation, and financial advisory needs",
      icon: "📊"
    },
    {
      title: "Skilled Workers",
      description: "Connect with experienced workers who can help with various business operations and tasks",
      icon: "👷"
    },
    {
      title: "Easy Registration",
      description: "Simple and quick registration process for both clients and service providers",
      icon: "✍️"
    },
    {
      title: "Secure Platform",
      description: "Your data is protected with industry-standard security measures",
      icon: "🔒"
    },
    {
      title: "User Management",
      description: "Complete CRUD operations to manage your profile and information",
      icon: "⚙️"
    },
    {
      title: "24/7 Support",
      description: "Our support team is always available to help you with any questions",
      icon: "💬"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Platform Features</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes our platform the best choice for connecting professionals with clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
