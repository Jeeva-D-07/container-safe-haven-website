
import React from 'react';
import { CheckCircle } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      title: "Zero Data Loss",
      description: "Our continuous backup strategy ensures you never lose critical data, even during unexpected outages."
    },
    {
      title: "Minimal Downtime",
      description: "Rapid recovery processes get your containerized applications back online within minutes, not hours."
    },
    {
      title: "Cloud-Agnostic Protection",
      description: "Our solutions work across all major cloud providers and on-premises Kubernetes deployments."
    },
    {
      title: "Regulatory Compliance",
      description: "Meet data protection requirements with audit-ready backup and recovery processes."
    },
    {
      title: "Cost Optimization",
      description: "Intelligent storage management reduces your backup costs while maintaining comprehensive protection."
    },
    {
      title: "Simplified Operations",
      description: "User-friendly interfaces and automation reduce the operational burden on your DevOps teams."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container">
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Our Container DR Strategy</h2>
          <p className="text-gray-600 text-lg text-center">
            Protect your business from the unique challenges of container-based infrastructure failures and data loss.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-safe flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
