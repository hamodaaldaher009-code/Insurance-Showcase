import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { OfferCard } from "@/components/OfferCard";
import { QuoteForm } from "@/components/QuoteForm";
import { useProducts, useOffers } from "@/hooks/use-insurance";
import {
  ShieldCheck,
  Users,
  HeadphonesIcon,
  CheckCircle2,
  Phone,
  ExternalLink,
  ArrowLeft,
  Award,
  Clock,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import promoImage from "@assets/603914566_18418166449188673_8085109396950144801_n_1768301937802.jpg";

export default function Home() {
  const { data: products, isLoading: productsLoading } = useProducts();
  const { data: offers, isLoading: offersLoading } = useOffers();

  const scrollToQuote = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-sans rtl">
      <Navbar />

      {/* Hero Section - Clean & Elegant */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-right space-y-8"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm font-arabic"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>حماية شاملة لمستقبلك</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-arabic text-foreground leading-[1.1] tracking-tight">
                <span className="block">التأمين الأمثل</span>
                <span className="block text-muted-foreground/60">يجمع بين الثقة</span>
                <span className="block">والأناقة</span>
              </h1>

              <p className="text-xl text-muted-foreground font-arabic leading-relaxed max-w-lg">
                حلول تأمينية مبتكرة مصممة خصيصاً لتناسب احتياجاتك. 
                نقدم لك حماية استثنائية بمعايير عالمية.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button 
                  onClick={scrollToQuote}
                  size="lg" 
                  className="h-14 px-8 text-lg font-bold font-arabic rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
                >
                  احصل على عرض سعر
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-14 px-8 text-lg font-arabic rounded-full border-2 hover:bg-muted"
                >
                  تعرف علينا
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-8 pt-8 text-sm text-muted-foreground font-arabic">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2 space-x-reverse">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                        <Star className="w-4 h-4 text-accent" />
                      </div>
                    ))}
                  </div>
                  <span className="font-semibold">+10,000 عميل</span>
                </div>
                <div className="h-6 w-px bg-border" />
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  <span>تقييم 4.9/5</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl blur-3xl" />
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1591035897819-f4bdf739f446?w=800&q=80"
                    alt="عائلة سعيدة"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                </div>

                {/* Floating Stats Card */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -bottom-6 -right-6 z-20 bg-card p-6 rounded-2xl shadow-2xl border border-border"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/10 p-4 rounded-xl">
                      <ShieldCheck className="w-8 h-8 text-accent" />
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground font-arabic">نسبة رضا العملاء</p>
                      <p className="text-3xl font-bold text-foreground">٩٨٪</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute top-6 -left-6 z-20 bg-primary text-primary-foreground px-5 py-3 rounded-xl shadow-xl font-arabic font-bold"
                >
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>دعم ٢٤/٧</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Bento Grid Style */}
      <section className="py-20 bg-primary text-primary-foreground rtl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "+٥٠٠٠", label: "عميل يثق بنا", icon: Users },
              { value: "٩٨٪", label: "نسبة رضا العملاء", icon: Star },
              { value: "٢٤/٧", label: "دعم فني متواصل", icon: HeadphonesIcon },
              { value: "+١٥", label: "سنة من الخبرة", icon: Award },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm hover:bg-primary-foreground/10 transition-colors"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                <h3 className="text-3xl md:text-4xl font-bold mb-1 font-arabic">{stat.value}</h3>
                <p className="text-primary-foreground/70 font-arabic text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-muted-foreground font-arabic bg-muted px-3 py-1.5 rounded-full">
              عرض مميز
            </span>
          </div>
          <a
            href="https://zzser.com/?label=cbb3dba68794e5c32e7e69dd0e073f56"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            data-testid="link-promo-banner"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={promoImage}
                alt="تأميني معك - عرض تأمين خاص"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                <p className="text-primary-foreground font-bold font-arabic text-lg flex items-center gap-2 justify-end">
                  <ExternalLink className="w-5 h-5" />
                  اضغط هنا للحصول على عرضك الخاص
                </p>
              </div>
            </motion.div>
          </a>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <span className="inline-block text-accent font-semibold font-arabic tracking-wider text-sm uppercase">
              عروض حصرية
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-arabic text-foreground">
              عروضنا المميزة لهذا الشهر
            </h2>
            <p className="text-muted-foreground font-arabic max-w-2xl mx-auto text-lg">
              لا تفوت فرصة الاستفادة من خصوماتنا الحصرية على باقات التأمين
              المختلفة لفترة محدودة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {offersLoading ? (
              Array(2)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-72 bg-muted rounded-3xl animate-pulse"
                  />
                ))
            ) : offers?.length ? (
              offers.map((offer, index) => (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <OfferCard
                    title={offer.title}
                    description={offer.description}
                    discount={offer.discount}
                    validUntil={offer.validUntil?.toString()}
                    onClick={scrollToQuote}
                  />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-16 bg-muted/50 rounded-3xl">
                <p className="text-muted-foreground font-arabic text-lg">
                  لا توجد عروض حالياً، تابعنا قريباً!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <span className="inline-block text-accent font-semibold font-arabic tracking-wider text-sm uppercase">
              خدماتنا
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-arabic text-foreground">
              خدمات التأمين الشاملة
            </h2>
            <p className="text-muted-foreground font-arabic max-w-2xl mx-auto text-lg">
              نغطي جميع جوانب حياتك لضمان راحة بالك. اختر من باقاتنا المتنوعة ما
              يناسبك.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsLoading ? (
              Array(3)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-72 bg-card rounded-3xl animate-pulse shadow-sm"
                  />
                ))
            ) : products?.length ? (
              products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProductCard
                    name={product.name}
                    description={product.description}
                    icon={product.icon}
                  />
                </motion.div>
              ))
            ) : (
              <p className="col-span-full text-center text-muted-foreground font-arabic">
                جاري إضافة الخدمات...
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-right space-y-8"
            >
              <div>
                <span className="inline-block text-accent font-semibold font-arabic tracking-wider text-sm uppercase mb-4">
                  تواصل معنا
                </span>
                <h2 className="text-4xl md:text-5xl font-bold font-arabic text-foreground leading-tight">
                  جاهز للحصول على
                  <br />
                  <span className="text-muted-foreground/60">عرض مخصص؟</span>
                </h2>
              </div>
              
              <p className="text-muted-foreground font-arabic text-lg leading-relaxed">
                فريقنا جاهز للرد على استفساراتك وتقديم أفضل عرض سعر يناسب
                احتياجاتك. املأ النموذج وسنتواصل معك في أقرب وقت.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-card p-5 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
                  <div className="bg-accent/10 p-4 rounded-xl">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground font-arabic">اتصل بنا مباشرة</p>
                    <p className="text-xl font-bold font-arabic">9200 00000</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-card p-5 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
                  <div className="bg-accent/10 p-4 rounded-xl">
                    <ShieldCheck className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground font-arabic">ضمان أفضل سعر</p>
                    <p className="text-lg font-bold font-arabic">قارن واحصل على أفضل صفقة</p>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex items-center gap-4 pt-6">
                {[CheckCircle2, CheckCircle2, CheckCircle2].map((Icon, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground font-arabic">
                    <Icon className="w-5 h-5 text-accent" />
                    <span>{["سهولة المطالبات", "دعم فني ٢٤/٧", "تغطية شاملة"][i]}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <QuoteForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-20 pb-10 font-arabic text-right">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-primary-foreground/10 p-3 rounded-xl">
                  <ShieldCheck className="h-8 w-8 text-accent" />
                </div>
                <span className="text-3xl font-bold">أمانك للتأمين</span>
              </div>
              <p className="text-primary-foreground/70 max-w-sm leading-relaxed text-lg">
                شركة رائدة في مجال خدمات التأمين في المملكة. نسعى لتقديم حلول
                مبتكرة تضمن حماية عملائنا وممتلكاتهم بأعلى معايير الجودة.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-accent">روابط سريعة</h4>
              <ul className="space-y-4 text-primary-foreground/70">
                {["عن الشركة", "خدماتنا", "العروض", "الأسئلة الشائعة"].map((item, i) => (
                  <li key={i}>
                    <a href={["#", "#products", "#offers", "#"][i]} className="hover:text-primary-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-accent">تواصل معنا</h4>
              <ul className="space-y-4 text-primary-foreground/70">
                <li>شارع العليا، الرياض</li>
                <li>المملكة العربية السعودية</li>
                <li dir="ltr" className="text-right">info@amanak.com</li>
                <li dir="ltr" className="text-right">+966 11 000 0000</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/10 pt-8 text-center text-primary-foreground/50 text-sm">
            <p>جميع الحقوق محفوظة لشركة أمانك للتأمين 2024</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
