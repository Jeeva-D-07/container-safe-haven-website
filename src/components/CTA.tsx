
import React from 'react';
import { Button } from '@/components/ui/button';
import { Server } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="bg-safe-dark text-white py-20">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold mb-6">Ready to safeguard your containerized applications?</h2>
            <p className="text-safe-light/90 text-lg mb-8 max-w-xl">
              Get in touch with our container disaster recovery experts for a personalized consultation 
              and discover how we can protect your critical infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-safe-dark hover:bg-gray-100 px-8">
                Schedule Consultation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-safe-dark/50 px-8">
                View Documentation
              </Button>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-safe p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-6">
                <Server className="h-8 w-8" />
                <h3 className="text-xl font-semibold">Quick Assessment</h3>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Company Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white" 
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white" 
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Container Environment</label>
                  <select className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white">
                    <option value="" className="text-gray-800">Select environment</option>
                    <option value="k8s" className="text-gray-800">Kubernetes</option>
                    <option value="docker" className="text-gray-800">Docker Swarm</option>
                    <option value="ecs" className="text-gray-800">Amazon ECS</option>
                    <option value="other" className="text-gray-800">Other</option>
                  </select>
                </div>
                <Button className="w-full bg-white text-safe-dark hover:bg-gray-100">
                  Get Free Assessment
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
