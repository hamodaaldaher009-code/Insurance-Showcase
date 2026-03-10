import { Link } from "wouter";
import { Shield, Menu, Phone, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavItems = () => (
    <>
      <Link href="/" className="text-foreground/80 hover:text-foreground transition-colors font-medium font-arabic">
        الرئيسية
      </Link>
      <Link href="#products" className="text-foreground/80 hover:text-foreground transition-colors font-medium font-arabic">
        خدماتنا
      </Link>
      <Link href="#offers" className="text-foreground/80 hover:text-foreground transition-colors font-medium font-arabic">
        العروض
      </Link>
      <Link href="#contact" className="text-foreground/80 hover:text-foreground transition-colors font-medium font-arabic">
        تواصل معنا
      </Link>
    </>
  );

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 rtl ${
      scrolled 
        ? "bg-background/95 backdrop-blur-lg shadow-sm border-b border-border" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-primary p-2.5 rounded-xl group-hover:scale-105 transition-transform">
            <Shield className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold text-foreground font-arabic">
            أمانك
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavItems />
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="tel:920000000" 
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-arabic"
          >
            <Phone className="h-4 w-4" />
            <span>٩٢٠٠٠٠٠٠٠</span>
          </a>
          <Button 
            className="font-arabic gap-2 rounded-full h-11 px-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
          >
            <User className="h-4 w-4" />
            تسجيل الدخول
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="rounded-xl">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] rtl font-arabic bg-background">
            <div className="flex flex-col gap-6 mt-10">
              <div className="flex items-center gap-3 pb-6 border-b border-border">
                <div className="bg-primary p-2.5 rounded-xl">
                  <Shield className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">أمانك</span>
              </div>
              
              <div className="flex flex-col gap-4">
                <NavItems />
              </div>
              
              <div className="h-px bg-border my-4" />
              
              <a 
                href="tel:920000000" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>٩٢٠٠٠٠٠٠٠</span>
              </a>
              
              <Button className="w-full gap-2 rounded-full h-12 bg-primary text-primary-foreground">
                <User className="h-4 w-4" />
                تسجيل الدخول
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
