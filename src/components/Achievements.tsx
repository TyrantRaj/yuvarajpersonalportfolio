import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Calendar, MapPin, Users } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "First Place - National Coding Championship",
      description: "Won first place in the National Level Coding Championship among 5000+ participants, solving complex algorithmic problems.",
      date: "2024",
      category: "Competition",
      icon: <Trophy className="h-6 w-6" />,
      location: "New Delhi, India",
      participants: "5000+"
    },
    {
      id: 2,
      title: "Published Game on Steam",
      description: "Successfully published indie game 'Pixel Quest' on Steam platform with 10,000+ downloads and 4.5/5 rating.",
      date: "2023",
      category: "Achievement",
      icon: <Star className="h-6 w-6" />,
      location: "Global",
      participants: "10,000+ players"
    },
    {
      id: 3,
      title: "Google Summer of Code",
      description: "Selected for Google Summer of Code program, contributed to open source project with 50+ commits and feature implementations.",
      date: "2023",
      category: "Program",
      icon: <Award className="h-6 w-6" />,
      location: "Remote",
      participants: "Selected from 40,000+ applicants"
    },
    {
      id: 4,
      title: "HackerRank 5-Star Rating",
      description: "Achieved 5-star rating in Problem Solving, Python, and Java on HackerRank platform with top 1% ranking.",
      date: "2023",
      category: "Certification",
      icon: <Star className="h-6 w-6" />,
      location: "Online",
      participants: "Top 1%"
    },
    {
      id: 5,
      title: "Best Innovation Award - Smart India Hackathon",
      description: "Led team of 6 developers to win Best Innovation Award for developing AI-powered healthcare solution.",
      date: "2022",
      category: "Hackathon",
      icon: <Users className="h-6 w-6" />,
      location: "Mumbai, India",
      participants: "1000+ teams"
    },
    {
      id: 6,
      title: "Open Source Contributor",
      description: "Active contributor to major open source projects including React, Vue.js with 100+ merged pull requests.",
      date: "2022-Present",
      category: "Contribution",
      icon: <Award className="h-6 w-6" />,
      location: "Global",
      participants: "100+ PRs merged"
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
            { label: "Competitions Won", value: "15+" },
            { label: "Projects Completed", value: "50+" },
            { label: "GitHub Stars", value: "1.2K+" },
            { label: "Code Commits", value: "5K+" }
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