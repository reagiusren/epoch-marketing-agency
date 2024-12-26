const Footer = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-md border-t border-gray-800/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Epoch Marketing Agency. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;