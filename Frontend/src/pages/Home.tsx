import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            CA Worker Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with professional Chartered Accountants and skilled workers for all your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">For Clients</h2>
            <p className="text-gray-600 mb-6">
              Find qualified CAs and workers to help grow your business
            </p>
            <Link 
              to="/signup" 
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Get Started
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">For Professionals</h2>
            <p className="text-gray-600 mb-6">
              Join our platform and connect with clients looking for your expertise
            </p>
            <Link 
              to="/login" 
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
