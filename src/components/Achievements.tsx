import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Calendar, MapPin, Users } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "1st Prize – SRM Hackathon",
      description: "Won 1st prize in a hackathon at SRM by developing a Sign Language Recognition system that translates hand gestures into English.",
      date: "2024",
      category: "Hackathon",
      icon: <Trophy className="h-6 w-6" />,
      location: "SRM University, India",
      participants: "300+"
}
,
    {
      id: 2,
      title: "1st Prize – IEEE Day Technical Quiz",
      description: "Secured 1st prize in the IEEE Day Technical Quiz held at our college, SA Engineering, by demonstrating strong problem-solving and technical knowledge.",
      date: "2024",
      category: "Competition",
      icon: <Trophy className="h-6 w-6" />,
      location: "SA Engineering College, India",
      participants: "50+"
    }
  ,
    {
      id: 3,
      title: "Released Game on Google Play Store",
      description: "Published the Game app 'Circle Chaos' on Google Play Store, developed independently using Unity.",
      date: "2021",
      category: "Project",
      icon: <Award className="h-6 w-6" />,
      location: "Google Play Store",
      participants: "N/A"
}
,
    {
      id: 4,
      title: "12th Place – National Game Jam",
      description: "Achieved 12th place nationwide in a game jam with the 2D platformer 'Fragile Relic', showcasing creativity and gameplay design skills.",
      date: "2023",
      category: "Competition",
      icon: <Trophy className="h-6 w-6" />,
      location: "India",
      participants: "Nationwide"
}
,
    {
      id: 5,
      title: "100+ Problems Solved – LeetCode",
      description: "Solved over 100 algorithmic and data structure problems on LeetCode to strengthen problem-solving and coding skills.",
      date: "2024-Present",
      category: "Personal Achievement",
      icon: <Award className="h-6 w-6" />,
      location: "Online",
      participants: "N/A"
    },
    {
      id: 6,
      title: "700+ Problems Solved – Skillrack",
      description: "Completed over 700 programming and algorithm challenges on Skillrack, enhancing coding proficiency and competitive programming skills.",
      date: "2024",
      category: "Personal Achievement",
      icon: <Award className="h-6 w-6" />,
      location: "Online",
      participants: "N/A"
    }
  ];

  const categoryColors = {
    Competition: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    Achievement: "bg-green-500/10 text-green-500 border-green-500/20",
    Program: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    Certification: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    Hackathon: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    Contribution: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20"
  };

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Achievements & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Recognition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milestones and accomplishments that showcase my dedication to excellence in 
            computer science and software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.id}
              className="gradient-card border-border/50 hover:shadow-card transition-smooth group"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-primary">
                      {achievement.icon}
                    </div>
                    <Badge 
                      variant="outline" 
                      className={categoryColors[achievement.category as keyof typeof categoryColors]}
                    >
                      {achievement.category}
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {achievement.date}
                  </div>
                </div>
                
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {achievement.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {achievement.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {achievement.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {achievement.participants}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Competitions Won", value: "3+" },
            { label: "Projects Completed", value: "10+" },
            { label: "GitHub Contribution", value: "120+" },
            { label: "Code Commits", value: "1K+" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              {stat.value}
            </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;