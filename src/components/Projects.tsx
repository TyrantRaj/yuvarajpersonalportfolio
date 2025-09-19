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
      title: "Dental Website",
      description: "Responsive dental clinic website built for a client using Bootstrap, HTML, CSS, and JavaScript.",
      category: "web",
      technologies: ["Bootstrap", "HTML", "CSS", "JavaScript"],
      image: "/images/dental-website.png",  
      liveUrl: "https://olivedentistry.in",
      githubUrl: "https://github.com/TyrantRaj/dental-web-project",  
      featured: true
  }
  ,
    {
      id: 2,
      title: "Circle Chaos 2D",
      description: "A 2D chaos platformer with random events, inverted controls, and unique physics. Built with Unity and published on PlayStore.",
      category: "game",
      technologies: ["Unity", "C#", "Photoshop", "Audacity"],
      image: "/images/CircleChaos.png",
      liveUrl: "https://play.google.com/store/apps/details?id=com.tyrantgames.circlechaos&hl=en_IN",
      githubUrl: "https://github.com/TyrantRaj/Circle-Chaos",
      featured: true
    }
,
    {
    id: 3,
    title: "Fragile Relic 2D ",
    description: "2D platformer game with challenging levels and collectibles. Built with Unity, published on Itch.io, and ranked 12th nationally in a game jam.",
    category: "game",
    technologies: ["Unity", "C#", "Photoshop", "sfxr"],
    image: "/images/fragilerelic.png",
    liveUrl: "https://tyrantrraj.itch.io/the-fragile-relic",
    featured: false
}
,
    {
      id: 4,
      title: "Speed Math App",
      description: "An Android app to practice mental math quickly. Built with Android Studio and published on Google Play during my 11th grade holidays.",
      category: "mobile",
      technologies: ["Android Studio", "Java", "XML"],
      image: "/images/speedmath.png",
      liveUrl: "https://play.google.com/store/apps/details?id=com.yuvaraj.speedmath",
      featured: false
}
,
    {
      id: 5,
      title: "Sign Language Recognition",
      description: "A Python-based system that translates hand gestures into English. Won 1st prize in a hackathon.",
      category: "ml",
      technologies: ["Python", "OpenCV", "MediaPipe", "TensorFlow"],
      image: "/images/signlanguage.jpg",
      liveUrl: "https://github.com/TyrantRaj/Sign-Language-Learner",
      githubUrl: "https://github.com/TyrantRaj/Sign-Language-Learner",
      featured: true
}
,
    {
      id: 6,
      title: "Missile Run",
      description: "A fast-paced 2D game where players dodge incoming missiles. Built with Unity with engaging mechanics and dynamic controls",
      category: "game",
      technologies: ["Unity", "C#", "Photoshop", "sfxr"],
      image: "/images/missile.png",
      liveUrl: "https://github.com/TyrantRaj/Missile-Run",
      githubUrl: "https://github.com/TyrantRaj/Missile-Run",
      featured: true
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
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
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
            <a href="https://github.com/TyrantRaj?tab=repositories" target="_blank" rel="noopener noreferrer">
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