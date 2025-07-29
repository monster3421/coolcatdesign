import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  Palette,
  Globe,
  Layers,
  Megaphone,
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = (
  { title, description, icon }: ServiceCardProps = {
    title: "Service Title",
    description:
      "Service description goes here. This explains what we offer to our clients.",
    icon: <Code className="h-8 w-8" />,
  },
) => {
  return (
    <Card className="bg-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
      <CardHeader>
        <div className="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center text-primary mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="group w-full justify-between">
          Learn more
          <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Web Design",
      description:
        "Beautiful, responsive websites that engage visitors and drive conversions. We focus on user experience and modern design principles.",
      icon: <Globe className="h-8 w-8" />,
    },
    {
      title: "Brand Identity",
      description:
        "Distinctive logos and brand systems that communicate your values and resonate with your target audience.",
      icon: <Palette className="h-8 w-8" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Intuitive interfaces and seamless user experiences that make your digital products a joy to use.",
      icon: <Layers className="h-8 w-8" />,
    },
    {
      title: "Digital Marketing",
      description:
        "Strategic campaigns that increase your online visibility and connect you with potential customers.",
      icon: <Megaphone className="h-8 w-8" />,
    },
    {
      title: "Web Development",
      description:
        "Custom-built websites and applications with clean code and powerful functionality to bring your ideas to life.",
      icon: <Code className="h-8 w-8" />,
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Online stores that showcase your products beautifully and provide a seamless shopping experience.",
      icon: <Globe className="h-8 w-8" />,
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-slate-50" id="services">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We offer a comprehensive range of design and development services to
            help your business stand out in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
