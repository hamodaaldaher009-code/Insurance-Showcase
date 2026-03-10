import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Car, Home, Heart, ShieldAlert, ArrowLeft, Briefcase, Plane, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  description: string;
  icon: string;
}

const iconMap: Record<string, any> = {
  car: Car,
  home: Home,
  heart: Heart,
  shield: ShieldAlert,
  briefcase: Briefcase,
  plane: Plane,
  users: Users,
};

export function ProductCard({ name, description, icon }: ProductCardProps) {
  const IconComponent = iconMap[icon.toLowerCase()] || ShieldAlert;

  return (
    <Card className="group relative overflow-hidden border-0 bg-card shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col rounded-3xl">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
      
      <CardHeader className="p-8 pb-4 relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
          <IconComponent className="w-8 h-8 text-foreground/70 group-hover:text-primary-foreground transition-colors" />
        </div>
        <CardTitle className="text-2xl font-bold font-arabic mb-3 text-foreground">
          {name}
        </CardTitle>
        <CardDescription className="text-muted-foreground font-arabic leading-relaxed text-base">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-8 pt-4 mt-auto relative z-10">
        <Button 
          variant="ghost" 
          className="w-full justify-between group/btn font-arabic text-foreground hover:bg-muted rounded-xl h-12 px-4"
        >
          <span className="font-medium">عرض التفاصيل</span>
          <ArrowLeft className="w-5 h-5 transition-transform group-hover/btn:-translate-x-2" />
        </Button>
      </CardContent>
    </Card>
  );
}
