import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Gamepad2, GraduationCap, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Computer Science Engineering",
      description: "B.Tech in CSE with focus on software development and algorithms"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Full-Stack Development",
      description: "Expert in modern web technologies and scalable application architecture"
    },
    {
      icon: <Gamepad2 className="h-6 w-6" />,
      title: "Game Development",
      description: "Creating immersive experiences with Unity and Unreal Engine"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Problem Solver",
      description: "Passionate about tackling complex challenges with innovative solutions"
    }
  ];

  const interests = [
    "Artificial Intelligence", "Machine Learning", "Game Design", "Web3 Technologies",
    "Mobile Development", "Cloud Computing", "Open Source", "Competitive Programming"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate Computer Science Engineer who loves building things that matter. 
            From web applications to games, I enjoy the entire journey of bringing ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Started my programming journey in college with C++ and Java, quickly falling in love with 
              software development. What began as academic curiosity evolved into a passion for creating 
              digital experiences that solve real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, I specialize in full-stack web development while exploring the exciting world of 
              game development. I believe in writing clean, efficient code and creating user experiences 
              that are both functional and delightful.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me playing indie games, contributing to open source projects, 
              or experimenting with new technologies. Always learning, always building.
            </p>
          </div>

          <div className="grid gap-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 gradient-card border-border/50 hover:shadow-card transition-smooth">
                <div className="flex items-start space-x-4">
                  <div className="text-primary mt-1">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Areas of Interest</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {interests.map((interest, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-smooth cursor-default"
              >
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;