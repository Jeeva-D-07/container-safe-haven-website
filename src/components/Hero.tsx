
import React from 'react';
import { Button } from '@/components/ui/button';
import { Database, Server, HardDriveDownload, CloudUpload } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-safe-light">
      <div className="container-grid absolute inset-0" aria-hidden="true"></div>
      <div className="container relative pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Disaster Recovery for
              <span className="text-safe-dark block"> Containerized Applications</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Protect your containerized infrastructure with comprehensive backup and recovery solutions engineered for modern cloud-native environments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button className="bg-safe hover:bg-safe-dark text-white px-8 py-6">
                Explore Solutions
              </Button>
              <Button variant="outline" className="border-safe text-safe hover:bg-safe-light/70 px-8 py-6">
                Schedule Consultation
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-tech-light rounded-full blur-2xl opacity-70"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-safe-light rounded-full blur-2xl opacity-70"></div>
            <div className="relative bg-white p-6 rounded-xl shadow-lg border">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-safe-light p-4 rounded-lg flex flex-col items-center justify-center">
                  <Server className="h-8 w-8 text-safe mb-2" />
                  <span className="text-sm font-medium text-gray-800">Container Registry</span>
                </div>
                <div className="bg-tech-light p-4 rounded-lg flex flex-col items-center justify-center">
                  <Database className="h-8 w-8 text-tech mb-2" />
                  <span className="text-sm font-medium text-gray-800">Stateful Data</span>
                </div>
                <div className="bg-tech-light p-4 rounded-lg flex flex-col items-center justify-center">
                  <HardDriveDownload className="h-8 w-8 text-tech mb-2" />
                  <span className="text-sm font-medium text-gray-800">Backup Strategy</span>
                </div>
                <div className="bg-safe-light p-4 rounded-lg flex flex-col items-center justify-center">
                  <CloudUpload className="h-8 w-8 text-safe mb-2" />
                  <span className="text-sm font-medium text-gray-800">Recovery Plan</span>
                </div>
              </div>
              <div className="mt-6 bg-gray-50 p-3 rounded-lg">
                <div className="h-2 w-full bg-green-100 rounded-full overflow-hidden">
                  <div className="h-full bg-safe w-[85%] rounded-full"></div>
                </div>
                <div className="mt-2 flex justify-between text-xs text-gray-500">
                  <span>Recovery Plan Status</span>
                  <span className="font-medium">85% Protected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-gray-500">
          <span className="flex items-center">Trusted by cloud-native enterprises</span>
          <span className="font-semibold">CompanyOne</span>
          <span className="font-semibold">TechGlobal</span>
          <span className="font-semibold">CloudSys</span>
          <span className="font-semibold">DataSecure</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
