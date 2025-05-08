
import React from 'react';
import { Button } from '@/components/ui/button';

const Approach = () => {
  const steps = [
    {
      number: "01",
      title: "Assessment",
      description: "We analyze your containerized infrastructure to identify critical applications, data stores, and dependencies."
    },
    {
      number: "02",
      title: "Strategy Design",
      description: "We design a customized backup and recovery strategy tailored to your specific container architecture."
    },
    {
      number: "03",
      title: "Implementation",
      description: "Our team deploys and configures the necessary tools and processes to protect your infrastructure."
    },
    {
      number: "04",
      title: "Testing & Validation",
      description: "Regular recovery drills ensure your disaster recovery plan works when you need it most."
    }
  ];

  return (
    <section id="approach" className="py-20 bg-white relative overflow-hidden">
      <div className="container-grid absolute inset-0"></div>
      <div className="container relative">
        <div className="bg-tech-light rounded-2xl p-8 md:p-12 lg:p-16">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Methodical Approach to Container Resilience</h2>
            <p className="text-gray-600 text-lg mb-8">
              We follow a proven methodology to ensure comprehensive protection for your containerized applications and data.
            </p>
            <Button className="bg-tech hover:bg-tech-dark text-white">Schedule Assessment</Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-4xl font-bold text-tech-dark/20">{step.number}</div>
                <div className="mt-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
