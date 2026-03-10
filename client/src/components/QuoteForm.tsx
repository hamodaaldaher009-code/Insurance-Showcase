import { useState } from "react";
import { insuranceTypes } from "@/data/static-data";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Send, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
}

export function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    type: "auto",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static form - just show success message
    setIsSubmitted(true);
    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        type: "auto",
        message: "",
      });
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <div className="relative overflow-hidden bg-card rounded-3xl shadow-2xl border border-border p-8 md:p-10">
        <div className="text-center py-12 space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mx-auto">
            <CheckCircle2 className="w-10 h-10 text-accent" />
          </div>
          <h3 className="text-3xl font-bold font-arabic text-foreground">تم استلام طلبك بنجاح</h3>
          <p className="text-muted-foreground font-arabic text-lg max-w-md mx-auto">
            شكراً لتواصلك معنا! سيقوم أحد ممثلينا بالتواصل معك قريباً لتقديم العرض المناسب.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-card rounded-3xl shadow-2xl border border-border p-8 md:p-10">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold font-arabic mb-4">
            <Sparkles className="w-4 h-4" />
            <span>عرض سعر مجاني</span>
          </div>
          <h3 className="text-3xl font-bold font-arabic text-foreground">اطلب عرض سعر</h3>
          <p className="text-muted-foreground font-arabic mt-3 text-lg">
            املأ النموذج وسنتواصل معك بأفضل العروض
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 rtl">
          <div className="font-arabic text-right space-y-2">
            <Label className="text-foreground font-medium">الاسم الكامل</Label>
            <Input 
              placeholder="أدخل اسمك" 
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              className="text-right h-14 bg-muted/50 border-0 rounded-xl focus:ring-2 focus:ring-accent/20 text-base" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="font-arabic text-right space-y-2">
              <Label className="text-foreground font-medium">البريد الإلكتروني</Label>
              <Input 
                type="email"
                placeholder="name@example.com" 
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                className="text-right h-14 bg-muted/50 border-0 rounded-xl focus:ring-2 focus:ring-accent/20 text-base" 
                dir="ltr" 
              />
            </div>

            <div className="font-arabic text-right space-y-2">
              <Label className="text-foreground font-medium">رقم الجوال</Label>
              <Input 
                placeholder="05xxxxxxxx" 
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
                className="text-right h-14 bg-muted/50 border-0 rounded-xl focus:ring-2 focus:ring-accent/20 text-base" 
                dir="ltr" 
              />
            </div>
          </div>

          <div className="font-arabic text-right space-y-2">
            <Label className="text-foreground font-medium">نوع التأمين</Label>
            <Select 
              value={formData.type} 
              onValueChange={(value) => handleChange("type", value)}
            >
              <SelectTrigger className="h-14 bg-muted/50 border-0 rounded-xl flex-row-reverse text-base">
                <SelectValue placeholder="اختر نوع التأمين" />
              </SelectTrigger>
              <SelectContent className="font-arabic rounded-xl" align="end">
                {insuranceTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value} className="py-3">
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="font-arabic text-right space-y-2">
            <Label className="text-foreground font-medium">ملاحظات إضافية (اختياري)</Label>
            <Textarea 
              placeholder="اكتب أي تفاصيل إضافية هنا..." 
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="min-h-[120px] resize-none bg-muted/50 border-0 rounded-xl text-right focus:ring-2 focus:ring-accent/20 text-base" 
            />
          </div>

          <Button 
            type="submit" 
            className="w-full h-14 text-lg font-bold font-arabic rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all mt-6 gap-2"
          >
            <Send className="h-5 w-5" />
            إرسال الطلب
          </Button>

          {/* Trust indicator */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground font-arabic pt-4">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>بياناتك محمية وآمنة معنا</span>
          </div>
        </form>
      </div>
    </div>
  );
}
