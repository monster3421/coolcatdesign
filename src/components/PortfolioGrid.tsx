import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageBefore: string;
  imageAfter: string;
  tags: string[];
}

const PortfolioGrid = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  // Sample portfolio projects
  const projects: Project[] = [
    {
      id: "1",
      title: "Modern E-commerce Redesign",
      category: "web-design",
      description:
        "Complete redesign of an e-commerce platform focusing on improved user experience and conversion optimization.",
      imageBefore:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      imageAfter:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
      tags: ["E-commerce", "UX Design", "Responsive"],
    },
    {
      id: "2",
      title: "Luxury Brand Identity",
      category: "branding",
      description:
        "Development of a comprehensive brand identity for a luxury fashion label, including logo design, color palette, and typography.",
      imageBefore:
        "https://images.unsplash.com/photo-1600003263720-95b45a4035d5?w=800&q=80",
      imageAfter:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
      tags: ["Branding", "Logo Design", "Fashion"],
    },
    {
      id: "3",
      title: "Restaurant Mobile App",
      category: "app-design",
      description:
        "Design and development of a mobile application for a restaurant chain, featuring online ordering, reservations, and loyalty program.",
      imageBefore:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      imageAfter:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      tags: ["Mobile App", "UI/UX", "Food & Beverage"],
    },
    {
      id: "4",
      title: "Corporate Website Overhaul",
      category: "web-design",
      description:
        "Complete redesign of a corporate website with focus on modern aesthetics, improved information architecture, and responsive design.",
      imageBefore:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      imageAfter:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
      tags: ["Corporate", "Web Design", "Responsive"],
    },
    {
      id: "5",
      title: "Startup Brand Package",
      category: "branding",
      description:
        "Comprehensive branding package for a tech startup, including logo, business cards, letterhead, and digital assets.",
      imageBefore:
        "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80",
      imageAfter:
        "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=800&q=80",
      tags: ["Startup", "Branding", "Tech"],
    },
    {
      id: "6",
      title: "Fitness Tracking App",
      category: "app-design",
      description:
        "User interface design for a fitness tracking application with focus on data visualization and user engagement.",
      imageBefore:
        "https://images.unsplash.com/photo-1510861320402-285a6c7639ea?w=800&q=80",
      imageAfter:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&q=80",
      tags: ["Fitness", "Mobile App", "UI Design"],
    },
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-slate-50" id="portfolio">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Our Portfolio
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses
            transform their digital presence and brand identity.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="web-design">Web Design</TabsTrigger>
              <TabsTrigger value="branding">Branding</TabsTrigger>
              <TabsTrigger value="app-design">App Design</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web-design" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => project.category === "web-design")
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => handleProjectClick(project)}
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="branding" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => project.category === "branding")
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => handleProjectClick(project)}
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="app-design" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => project.category === "app-design")
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => handleProjectClick(project)}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Project Detail Dialog */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-4xl bg-white">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <p className="text-slate-600 mb-6">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <h3 className="text-lg font-medium mb-2">Before</h3>
                      <div className="relative aspect-video overflow-hidden rounded-md">
                        <img
                          src={selectedProject.imageBefore}
                          alt={`${selectedProject.title} before`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-lg font-medium mb-2">After</h3>
                      <div className="relative aspect-video overflow-hidden rounded-md">
                        <img
                          src={selectedProject.imageAfter}
                          alt={`${selectedProject.title} after`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.imageAfter}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-5">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{project.tags.length - 2}
            </Badge>
          )}
        </div>
        <Button onClick={onClick} variant="outline" className="w-full">
          View Project
        </Button>
      </CardContent>
    </Card>
  );
};

export default PortfolioGrid;
