export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">About Us</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            CA Worker Platform is dedicated to bridging the gap between skilled professionals 
            and businesses in need of their expertise. We provide a seamless platform for 
            Chartered Accountants and workers to connect with clients.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">What We Offer</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">✓</span>
              <span>Professional CA services for accounting and taxation</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">✓</span>
              <span>Skilled workers for various business operations</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">✓</span>
              <span>Easy-to-use platform for managing connections</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">✓</span>
              <span>Secure and reliable service delivery</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To become the leading platform connecting businesses with professional services, 
            making it easier for companies to find the right expertise and for professionals 
            to grow their practice.
          </p>
        </div>
      </div>
    </div>
  );
}
