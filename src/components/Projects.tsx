import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Gamepad2, Globe, Smartphone, Code } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects", icon: <Code className="h-4 w-4" /> },
    { id: "web", label: "Web Dev", icon: <Globe className="h-4 w-4" /> },
    { id: "game", label: "Games", icon: <Gamepad2 className="h-4 w-4" /> },
    { id: "mobile", label: "Mobile", icon: <Smartphone className="h-4 w-4" /> },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "2D Platformer Game",
      description: "Indie 2D platformer game built with Unity. Features custom physics, level editor, and original soundtrack. Published on Steam.",
      category: "game",
      technologies: ["Unity", "C#", "Photoshop", "Audacity"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Cross-platform mobile app for task management with offline sync. Built with React Native and Firebase.",
      category: "mobile",
      technologies: ["React Native", "Firebase", "AsyncStorage", "Redux"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "AI Chat Interface",
      description: "Modern chat interface with AI integration. Real-time messaging with WebSocket and OpenAI API integration.",
      category: "web",
      technologies: ["React", "WebSocket", "OpenAI API", "Tailwind"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Multiplayer Puzzle Game",
      description: "Real-time multiplayer puzzle game with custom networking solution. Built for web browsers using WebGL.",
      category: "game",
      technologies: ["Unity", "WebGL", "Photon", "C#"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location-based forecasts and interactive maps. PWA with offline capabilities.",
      category: "web",
      technologies: ["Vue.js", "PWA", "Weather API", "Mapbox"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A showcase of my work spanning web development, game development, and mobile applications. 
            Each project represents a unique challenge and learning opportunity.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className="transition-smooth"
              >
                {filter.icon}
                <span className="ml-2">{filter.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-card transition-smooth gradient-card border-border/50 flex flex-col"
            >
              <CardHeader className="pb-4 flex-shrink-0">
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <span className="text-muted-foreground">Project Preview</span>
                </div>
                
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 group-hover:text-primary transition-smooth line-clamp-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </div>
                  {project.featured && (
                    <Badge variant="secondary" className="ml-2 bg-primary/10 text-primary border-primary/20 flex-shrink-0">
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="flex-shrink-0">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-4 mt-auto flex-shrink-0">
                <div className="flex gap-3 w-full">
                  <Button variant="tech" size="sm" asChild className="flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;