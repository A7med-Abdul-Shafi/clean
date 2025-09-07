
import { toast } from "sonner";
import axios from "axios";

import {
  CheckSquare,
  Users,
  Zap,
  Shield,
} from "lucide-react";
import { UseFormReturn } from "react-hook-form";
const url = process.env.NEXT_PUBLIC_API_URL ;
interface FormValues {
  firstName: string;
  email: string;
  content: string;
  photoUrl?: string;
}
export const submitFormValues = async (
  form: UseFormReturn<FormValues>,
  endpoint: string,
  setLoading: (loading: boolean) => void,
  successMessage: string
): Promise<void> => {
  setLoading(true);

  try {
    const values = form.getValues();
    const formDataToSend = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== "") {
        formDataToSend.append(key, value);
      }
    });

    await axios.post(`${url}/${endpoint}`, formDataToSend, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    toast.success(successMessage, {
      position: "top-right",
      richColors: true,
      duration: 3000,
    });

    form.reset();
  } catch (error: unknown) {
    let errorMessage = "Unknown error occurred";

    if (axios.isAxiosError(error)) {
      const data = error.response?.data;
      if (typeof data === "string") {
        errorMessage = data;
      } else if (typeof data === "object" && data?.message) {
        errorMessage = data.message;
      } else {
        errorMessage = error.message;
      }
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    console.error("Submission error:", errorMessage);

    toast.error(errorMessage, {
      position: "top-right",
      richColors: true,
      duration: 3000,
    });
  } finally {
    setLoading(false);
  }
};



export const translations = {
  en: {
    heroTitle: "(Company name) Cleaning, Sanitization & Pest Control Company",
    heroDesc:
      "(Company name) Cleaning is one of the leading companies in providing cleaning, sanitization, and pest control services in the Emirates of the United Arab Emirates, offering its services specializing in the areas of Dubai, Abu Dhabi, and Sharjah. The company is distinguished by providing comprehensive cleaning services for various environments, ranging from homes to commercial spaces and offices. By focusing on delivering high-quality sanitization services, the company aims to provide a clean and healthy environment, especially in light of current health conditions. The company also offers effective pest control solutions, ensuring a pest-free environment. (Company name) Cleaning relies on a professional and trained workforce, in addition to using the latest technologies and equipment to ensure achieving the best results. The company is committed to delivering its services with the highest standards of quality and professionalism, making it the ideal choice for clients seeking reliable and effective cleaning, sanitization, and pest control services.",

    contactUs: "Contact Us",
    callUs: "Call us at",
    whatsappUs: "Chat with us on WhatsApp",
    whatsappMessage: "Hello, I’m interested in your services!",
    featuresTitle: "What sets us apart from other companies",
    featuresDesc:
      "We prioritize quality and professionalism in our services, striving to meet the needs and expectations of our clients. Customers can easily contact the company for inquiries about the services offered or to schedule appointments through available communication channels, such as phone and email.",
    ctaTitle: "Ready to get started?",
    ctaDesc:
      "Join thousands of teams who are already using Company name to organize their work.",
    trialBtn: "Start your trial",
    footerNote: "© 2024 Company name. All rights reserved.",
    footerTech: "Built with Next.js",
    features: [
      {
        icon: CheckSquare,
        title: "Attention to Detail",
        description:
          "Commitment to the highest standards of quality and attention to the finest details while performing tasks. It reflects professionalism and a keen desire to deliver meticulous results free of errors, showing respect for time and effort, whether from an individual or a team.",
      },
      {
        icon: Users,
        title: "Cost Efficiency",
        description:
          "Customers benefit from local companies to avoid additional costs resulting from distance and travel. Relying on local teams also ensures quick response times and service delivery without hassle. This way, residents get the best value for their money with high quality.",
      },
      {
        icon: Zap,
        title: "Fast Performance",
        description:
          "Local companies are characterized by executing tasks quickly and with attention to detail. Additionally, they provide comprehensive cleaning for all indoor and outdoor spaces. Thus, customers receive accurate and satisfactory results every time they rely on the service.",
      },
      {
        icon: Shield,
        title: "Secure",
        description:
          "We are a leading cleaning company keen on providing high-quality services through a trained and trustworthy staff that enjoys the highest levels of safety and professionalism. We carefully select our employees to ensure customer comfort and the safety of their property, with full adherence to ethical and health standards.",
      },
      {
        icon: Shield,
        title: "Experienced",
        description:
          "Our experience has been accumulated over years of fieldwork. We have executed thousands of tasks in various types of properties. Therefore, we know well how to handle each case in a customized manner. To clarify, experience grants us quick diagnosis and precise execution. For this reason, we satisfy our clients from the first visit.",
      },
      {
        icon: Shield,
        title: "Competitive Pricing",
        description:
          "We offer multiple packages starting at nominal prices. Our goal is to provide high-quality service without cost being a barrier. We also offer special seasonal discounts. Thus, the client receives comprehensive cleaning at an affordable price. In comparison, some companies hide additional costs, while we clarify all details from the beginning.",
      },

      {
        icon: Shield,
        title: "Trained Workforce",
        description:
          "We regularly train our team on the latest cleaning methods. Therefore, the staff performs tasks with precision and attention to detail. To clarify, we do not rely solely on experience but enhance it with continuous training. Moreover, we monitor the performance of the workforce in the field to ensure quality. This is what sets us apart in the residential cleaning sector.",
      },
      {
        icon: Shield,
        title: "Latest Cleaning Materials and Tools",
        description:
          "We use the latest cleaning materials and tools to ensure the best results. We understand that the quality of materials and tools directly impacts the effectiveness and efficiency of the cleaning process. Therefore, we carefully select the products we use, focusing on those that provide deep and safe cleaning at the same time. This commitment to using the latest materials and tools.",
      },
    ],
  },
  ar: {
    heroTitle: "شركة (إسم الشركة) لخدمات التنظيف والتعقيم ومكافحة الحشرات",
    heroDesc:
      "شركة (إسم الشركة) هي إحدى الشركات الرائدة في مجال تقديم خدمات التنظيف والتعقيم ومكافحة الحشرات في إمارات الإمارات العربية المتحدة، حيث تقدم خدماتها بشكل متخصص في مناطق دبي وأبو ظبي والشارقة. تتميز الشركة بتوفير خدمات تنظيف شاملة لمختلف البيئات، بدءًا من المنازل وصولاً إلى المساحات التجارية والمكاتب. ومن خلال التركيز على تقديم خدمات تعقيم عالية الجودة، تسعى الشركة إلى توفير بيئة نظيفة وصحية، خاصةً في ظل الظروف الصحية الراهنة. كما تقدم الشركة حلولًا فعالة لمكافحة الحشرات، مما يضمن بيئة خالية من الآفات. تعتمد شركة المدينة على فريق عمل محترف ومدرب، بالإضافة إلى استخدام أحدث التقنيات والمعدات لضمان تحقيق أفضل النتائج. تلتزم الشركة بتقديم خدماتها بأعلى معايير الجودة والاحترافية، مما يجعلها الخيار الأمثل للعملاء الباحثين عن خدمات تنظيف وتعقيم ومكافحة حشرات موثوقة وفعالة.",
    contactUs: "تواصل معنا",
    callUs: "اتصل بنا على",
    whatsappUs: "راسلنا عبر واتساب",
    whatsappMessage: "مرحبًا، أرغب في معرفة المزيد عن خدماتكم!",
    featuresTitle: "مايميزنا عن باقي الشركات",
    featuresDesc:
      "تهتم شركة (إسم الشركة) بتحقيق أعلى مستويات الجودة والاحترافية في خدماتها، حيث تسعى جاهدة لتلبية احتياجات وتوقعات عملائها. يمكن للعملاء التواصل مع الشركة بسهولة للاستفسار عن الخدمات المقدمة أو حتى لحجز مواعيد من خلال وسائل التواصل المتاحة، مثل الهاتف والبريد الإلكتروني.",
    ctaTitle: "هل أنت جاهز للبدء؟",
    ctaDesc:
      "انضم إلى آلاف الفرق التي تستخدم Company name بالفعل لتنظيم أعمالها.",
    trialBtn: "ابدأ تجربتك",
    footerNote: "© 2024 Company name. جميع الحقوق محفوظة.",
    footerTech: "تم البناء باستخدام Next.js",
    features: [
      {
        icon: CheckSquare,
        title: "الدقة في العمل",
        description:
          "الالتزام بأعلى معايير الجودة والانتباه لأدق التفاصيل أثناء أداء المهام. إنها تعكس الاحترافية والحرص على تقديم نتائج متقنة تخلو من الأخطاء، وتُظهر احترامًا للوقت والجهد، سواء من جانب الفرد أو الفريق.",
      },
      {
        icon: Users,
        title: "تقليل النفقات",
        description:
          "يستفيد العملاء من الشركات المحلية لتجنب التكاليف الإضافية الناتجة عن بعد المسافة والتنقل. كما يضمن الاعتماد على فرق محلية سرعة الاستجابة وتنفيذ الخدمات دون أي عناء. لذلك يحصل السكان على أفضل قيمة مقابل المال مع جودة عالية.",
      },
      {
        icon: Zap,
        title: "سرعة الاستجابة",
        description:
          "تتميز الشركات المحلية بتنفيذ المهام بسرعة واهتمام بالتفاصيل. إضافة إلى ذلك توفر تنظيف شامل لجميع المساحات الداخلية والخارجية. لذلك يحصل العملاء على نتائج دقيقة ومرضية في كل مرة يعتمدون فيها على الخدمة.",
      },
      {
        icon: Shield,
        title: "آمن",
        description:
          "نحن شركة تنظيف رائدة نحرص على تقديم خدمات عالية الجودة من خلال طاقم عمل مدرب وموثوق يتمتع بأعلى درجات الأمان والمهنية. نختار موظفينا بعناية لضمان راحة العملاء وسلامة ممتلكاتهم، مع الالتزام الكامل بالمعايير الأخلاقية والصحية.",
      },
      {
        icon: Shield,
        title: "الخبرة الطويلة",
        description:
          "تراكمت خبرات شركة (إسم الشركة) عبر سنوات من العمل الميداني. نفذنا آلاف المهام في مختلف أنواع العقارات. لذلك، نعرف جيدًا كيف نتعامل مع كل حالة بشكل مخصص. وللتوضيح، الخبرة تمنحنا سرعة التشخيص ودقة التنفيذ. ولهذا السبب، نُرضي عملاءنا من الزيارة الأولى. مقارنة بغيرنا، نمتلك منهجًا متكاملًا لا يعتمد على العشوائية أو التجربة.",
      },
      {
        icon: Shield,
        title: "أسعار تنافسية",
        description:
          "نوفر باقات متعددة تبدأ من أسعار رمزية. نهدف بذلك إلى تقديم خدمة عالية الجودة دون أن تكون التكلفة عائقًا. كما نُتيح خصومات موسمية مميزة. وبالتالي، يحصل العميل على تنظيف شامل بسعر في متناول الجميع. بالمقارنة، تُخفي بعض الشركات التكاليف الإضافية، بينما نُوضح نحن كل التفاصيل من البداية.",
      },

      {
        icon: Shield,
        title: "عمالة مدربة",
        description:
          "نُدرّب فريق العمل بشكل دوري على أحدث أساليب التنظيف. لذلك، ينفذ الطاقم المهام بدقة واهتمام بالتفاصيل. وللتوضيح، نحن لا نعتمد على الخبرة فقط، بل نُعززها بالتدريب المستمر. علاوة على ذلك، نُتابع أداء العمالة ميدانيًا لضمان الجودة. وهذا ما يميزنا في قطاع تنظيف المساكن.",
      },
      {
        icon: Shield,
        title: "أحدث مواد وأدوات التنظيف",
        description:
          "نستخدم في شركة (إسم الشركة) أحدث مواد وأدوات التنظيف لضمان تحقيق أفضل النتائج. نحن نُدرك أن جودة المواد والأدوات تؤثر بشكل مباشر على فعالية وكفاءة عملية التنظيف. لذلك، نختار بعناية المنتجات التي نستخدمها، مع التركيز على تلك التي توفر تنظيفًا عميقًا وآمنًا في نفس الوقت. هذا الالتزام باستخدام أحدث المواد والأدوات ",
      },
    ],
  },
};

export const formTranslations = {
  en: {
    title: "Get in Touch",
    description: "We would love to hear from you! Please fill out the form below.",
    nameLabel: "Name",
    namePlaceholder: "Your Name",
    emailLabel: "Email",
    emailPlaceholder: "Your Email",
    messageLabel: "Message",
    messagePlaceholder: "Your Message",
    sendButton: "Send Message",
    sending: "Sending ...",
    successMessage: "Message sent successfully!",
    validation: {
      name: "Name must be at least 2 characters.",
      email: "Please enter a valid email address.",
      message: "Message must be at least 10 characters.",
      file: "File must be a JPG, JPEG, PNG, or PDF.",
    },
  },
  ar: {
    title: "تواصل معنا",
    description: "يسعدنا سماع رأيك! يرجى ملء النموذج أدناه.",
    nameLabel: "الاسم",
    namePlaceholder: "أدخل اسمك",
    emailLabel: "البريد الإلكتروني",
    emailPlaceholder: "أدخل بريدك الإلكتروني",
    messageLabel: "الرسالة",
    messagePlaceholder: "اكتب رسالتك هنا",
    sendButton: "إرسال الرسالة",
    sending: "جاري الإرسال ...",
    successMessage: "تم إرسال الرسالة بنجاح!",
    validation: {
      name: "يجب أن يحتوي الاسم على حرفين على الأقل.",
      email: "يرجى إدخال بريد إلكتروني صالح.",
      message: "يجب أن تحتوي الرسالة على 10 أحرف على الأقل.",
      file: "يجب أن يكون الملف بصيغة JPG أو JPEG أو PNG أو PDF.",
    },
  },
};