'use client';

import { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000); // Simulate loading
  }, []);

  return (
    <main className="min-h-screen bg-black">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <ServicesSection />
          <Footer />
        </>
      )}
    </main>
  );
}