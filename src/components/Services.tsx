
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DatabaseBackup, HardDriveUpload, Server, ServerCog, ArchiveRestore, CloudDownload } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Container Image Backup",
      description: "Automated backups of your container images and registries to ensure version control and rapid recovery.",
      icon: DatabaseBackup
    },
    {
      title: "Stateful Data Protection",
      description: "Specialized solutions for persistent volumes and stateful application data in containerized environments.",
      icon: HardDriveUpload
    },
    {
      title: "Infrastructure as Code Backup",
      description: "Version-controlled backups of your Kubernetes manifests, Helm charts, and other IaC configurations.",
      icon: ServerCog
    },
    {
      title: "Cross-Cluster Recovery",
      description: "Seamlessly recover applications across different clusters, regions, or even cloud providers.",
      icon: ArchiveRestore
    },
    {
      title: "Point-in-Time Recovery",
      description: "Granular recovery options to restore your applications and data to any specific point in time.",
      icon: CloudDownload
    },
    {
      title: "Automated DR Testing",
      description: "Regularly scheduled disaster recovery drills to ensure your recovery strategy works when you need it.",
      icon: CloudDownload
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Disaster Recovery Services</h2>
          <p className="text-gray-600 text-lg">
            Our specialized backup and recovery solutions are designed specifically for containerized environments, providing resilience against data loss and service disruptions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow group overflow-hidden">
              <CardHeader className="pb-4">
                <div className="mb-5 inline-flex p-3 rounded-lg bg-safe-light text-safe-dark group-hover:bg-safe group-hover:text-white transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
