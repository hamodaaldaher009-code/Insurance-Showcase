import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-insurance";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Send, ShieldCheck, Sparkles } from "lucide-react";

export function QuoteForm() {
  const mutation = useCreateInquiry();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      type: "auto",
      message: "",
    },
  });

  function onSubmit(data: InsertInquiry) {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
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

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 rtl">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="font-arabic text-right">
                  <FormLabel className="text-foreground font-medium">الاسم الكامل</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="أدخل اسمك" 
                      {...field} 
                      className="text-right h-14 bg-muted/50 border-0 rounded-xl focus:ring-2 focus:ring-accent/20 text-base" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="font-arabic text-right">
                    <FormLabel className="text-foreground font-medium">البريد الإلكتروني</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="name@example.com" 
                        {...field} 
                        className="text-right h-14 bg-muted/50 border-0 rounded-xl focus:ring-2 focus:ring-accent/20 text-base" 
                        dir="ltr" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="font-arabic text-right">
                    <FormLabel className="text-foreground font-medium">رقم الجوال</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="05xxxxxxxx" 
                        {...field} 
                        className="text-right h-14 bg-muted/50 border-0 rounded-xl focus:ring-2 focus:ring-accent/20 text-base" 
                        dir="ltr" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="font-arabic text-right">
                  <FormLabel className="text-foreground font-medium">نوع التأمين</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-14 bg-muted/50 border-0 rounded-xl flex-row-reverse text-base">
                        <SelectValue placeholder="اختر نوع التأمين" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="font-arabic rounded-xl" align="end">
                      <SelectItem value="auto" className="py-3">تأمين السيارات</SelectItem>
                      <SelectItem value="health" className="py-3">تأمين صحي</SelectItem>
                      <SelectItem value="home" className="py-3">تأمين المنازل</SelectItem>
                      <SelectItem value="travel" className="py-3">تأمين السفر</SelectItem>
                      <SelectItem value="life" className="py-3">تأمين الحياة</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="font-arabic text-right">
                  <FormLabel className="text-foreground font-medium">ملاحظات إضافية (اختياري)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="اكتب أي تفاصيل إضافية هنا..." 
                      className="min-h-[120px] resize-none bg-muted/50 border-0 rounded-xl text-right focus:ring-2 focus:ring-accent/20 text-base" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full h-14 text-lg font-bold font-arabic rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all mt-6 gap-2"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  جاري الإرسال...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  إرسال الطلب
                </>
              )}
            </Button>

            {/* Trust indicator */}
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground font-arabic pt-4">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>بياناتك محمية وآمنة معنا</span>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
