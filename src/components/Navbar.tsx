
import React from 'react';
import { Button } from '@/components/ui/button';
import { Database, HardDriveDownload, CloudUpload } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="border-b shadow-sm bg-white/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Database className="h-6 w-6 text-safe-dark" />
          <span className="text-xl font-bold tracking-tight">SafeHaven</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-sm font-medium hover:text-safe transition-colors">Services</a>
          <a href="#benefits" className="text-sm font-medium hover:text-safe transition-colors">Benefits</a>
          <a href="#approach" className="text-sm font-medium hover:text-safe transition-colors">Our Approach</a>
          <a href="#contact" className="text-sm font-medium hover:text-safe transition-colors">Contact</a>
        </nav>

        <div>
          <Button className="bg-safe hover:bg-safe-dark">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
