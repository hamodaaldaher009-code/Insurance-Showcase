// Static data for the Insurance Showcase app
// No database required - all data is hardcoded

export interface Product {
  id: number;
  name: string;
  description: string;
  icon: string;
}

export interface Offer {
  id: number;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "تأمين السيارات",
    description: "تغطية شاملة لسيارتك ضد جميع المخاطر والحوادث مع خدمات المساعدة على الطريق على مدار الساعة",
    icon: "car",
  },
  {
    id: 2,
    name: "التأمين الصحي",
    description: "رعاية صحية متكاملة لك ولعائلتك تشمل العلاج والفحوصات والأدوية في أفضل المستشفيات",
    icon: "heart",
  },
  {
    id: 3,
    name: "تأمين المنازل",
    description: "احمِ منزلك وممتلكاتك من السرقة والحريق والكوارث الطبيعية مع تعويضات سريعة",
    icon: "home",
  },
  {
    id: 4,
    name: "تأمين السفر",
    description: "سافر بأمان مع تغطية طبية عالمية وتعويض عن إلغاء الرحلات وفقدان الأمتعة",
    icon: "plane",
  },
  {
    id: 5,
    name: "تأمين الحياة",
    description: "اضمن مستقبل عائلتك مع خطط تأمين الحياة المرنة والمزايا التراكمية",
    icon: "shield",
  },
  {
    id: 6,
    name: "تأمين الأعمال",
    description: "حلول تأمينية متكاملة للشركات تشمل المسؤولية المهنية وحماية الأصول",
    icon: "briefcase",
  },
];

export const offers: Offer[] = [
  {
    id: 1,
    title: "خصم 25% على تأمين السيارات",
    description: "احصل على خصم حصري عند تجديد أو إصدار وثيقة تأمين سيارتك خلال هذا الشهر. العرض يشمل التأمين الشامل وضد الغير.",
    discount: "25%",
    validUntil: "2024-12-31",
  },
  {
    id: 2,
    title: "باقة العائلة الذهبية",
    description: "أمّن على صحة عائلتك بالكامل واحصل على خصم 30% مع تغطية تشمل الأسنان والنظارات والأدوية.",
    discount: "30%",
    validUntil: "2024-12-31",
  },
];

export const insuranceTypes = [
  { value: "auto", label: "تأمين السيارات" },
  { value: "health", label: "تأمين صحي" },
  { value: "home", label: "تأمين المنازل" },
  { value: "travel", label: "تأمين السفر" },
  { value: "life", label: "تأمين الحياة" },
  { value: "business", label: "تأمين الأعمال" },
];
