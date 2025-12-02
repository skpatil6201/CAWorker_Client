export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-6">Get In Touch</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">support@caworker.com</p>
                <p className="text-gray-600">info@caworker.com</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-600">+91 1234567890</p>
                <p className="text-gray-600">+91 9876543210</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Office Address</h3>
                <p className="text-gray-600">
                  123 Business Park<br />
                  Mumbai, Maharashtra 400001<br />
                  India
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-6">Send Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
