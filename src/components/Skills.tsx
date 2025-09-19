import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Gamepad2, Smartphone, Cloud, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "C#", level: 95 },
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "C++", level: 80 },
        { name: "JavaScript/TypeScript", level: 75 },
      ]
    },
    {
      title: "Web Development",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 85 },
        { name: "JS", level: 90 },
        { name: "Bootstrap", level: 95 },
        { name: "Tailwind CSS", level: 90 },
      ]
    },
    {
      title: "Database & Backend",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "Firebase", level: 95 }
      ]
    },
    {
      title: "Game Development",
      icon: <Gamepad2 className="h-6 w-6" />,
      skills: [
        { name: "Unity", level: 90 },
        { name: "Unreal Engine", level: 75 },
        { name: "Game Design", level: 85 },
        { name: "2D/3D Art", level: 70 },
        { name: "Physics Systems", level: 80 },
        { name: "Multiplayer Networking", level: 90 }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 75 },
        { name: "iOS Development", level: 70 },
        { name: "Android Development", level: 80 },
        { name: "Mobile UI/UX", level: 85 }
      ]
    },
    {
      title: "Gaming Skills",
      icon: <Gamepad2 className="h-6 w-6" />,
      skills: [
        { name: "Story Games", level: 100 },
        { name: "FPS Games", level: 100 },
        { name: "Strategy Games", level: 100 },
        { name: "Mobile Gaming", level: 100 },
        { name: "Competitive Multiplayer", level: 100 }
      ]
    }

  ];

  const tools = [
    "Visual Studio Code", "Git & GitHub", "Figma", "Discord",
    "Unity", "Unreal", "Inkscape", "Photoshop", "Blender", "Audacity","Sfxr","Asprite"
  ];

  const certifications = [
    "Kotlin",
    "Python",
    "Unity",
    "MongoDB",
    "Ethical Hacking"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Skills & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and certifications 
            acquired through years of learning and hands-on experience.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="gradient-card border-border/50 hover:shadow-card transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="text-primary">
                    {category.icon}
                  </div>
                  <span className="text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tools & Technologies */}
          <Card className="gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Brain className="h-6 w-6 text-primary" />
                <span>Tools & Technologies</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-3 py-1 hover:bg-primary/10 hover:text-primary transition-smooth cursor-default"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Badge className="h-6 w-6 text-primary" />
                <span>Certifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-smooth"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;