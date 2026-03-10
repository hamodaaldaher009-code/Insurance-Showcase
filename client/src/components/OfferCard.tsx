import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Percent, ArrowLeft, Sparkles } from "lucide-react";

interface OfferCardProps {
  title: string;
  description: string;
  discount?: string | null;
  validUntil?: string | null;
  onClick: () => void;
}

export function OfferCard({ title, description, discount, validUntil, onClick }: OfferCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-primary p-1">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-700" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative h-full bg-primary rounded-[1.25rem] p-8 flex flex-col items-start gap-6">
        <div className="flex items-center gap-3">
          {discount && (
            <Badge className="bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-2 text-base font-bold font-arabic shadow-lg">
              <Percent className="w-4 h-4 ml-1" />
              {discount}
            </Badge>
          )}
          <div className="bg-primary-foreground/10 p-2 rounded-full">
            <Sparkles className="w-5 h-5 text-accent" />
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl md:text-3xl font-bold font-arabic leading-tight text-primary-foreground">
            {title}
          </h3>
          <p className="text-primary-foreground/70 font-arabic text-lg leading-relaxed max-w-md">
            {description}
          </p>
        </div>

        {validUntil && (
          <div className="flex items-center gap-2 text-sm text-primary-foreground/60 font-arabic bg-primary-foreground/5 px-4 py-2 rounded-full">
            <Clock className="w-4 h-4" />
            <span>ينتهي في: {new Date(validUntil).toLocaleDateString('ar-SA')}</span>
          </div>
        )}

        <div className="mt-auto w-full pt-4">
          <Button 
            onClick={onClick}
            size="lg" 
            className="w-full md:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold font-arabic rounded-full h-14 px-8 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all gap-2"
          >
            احصل على العرض الآن
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
