'use client';

import { useCountry } from "@/contexts/CountryContext";
import { ReactNode } from 'react';

interface TProps {
    children: ReactNode;
}

// Define translation structure
interface TranslationEntry {
    ar: string;
}

// Type for the translations object
interface TranslationsMap {
    [key: string]: TranslationEntry;
}

const blogTranslations: TranslationsMap = {
  


  
"E-invoicing Solution for UAE": { "ar": "حل الفوترة الإلكترونية لدولة الإمارات" },

"Meet an Expert": { "ar": "قابل خبيراً" },

"Products to power every team": { "ar": "منتجات تدعم أداء كل فريق" },

"Explore All Products...": { "ar": "استكشف جميع المنتجات..." },

"Why Accqrate?": { "ar": "لماذا أكيوريت؟" },

"We specialize in providing reliable and efficient Solutions": { "ar": "نحن متخصصون في تقديم حلول موثوقة وفعّالة" },

"From compliance to automation, Accqrate ensures a seamless PEPPOL e-invoicing experience.": { "ar": "من الامتثال إلى الأتمتة، تضمن أكيوريت تجربة فوترة إلكترونية سلسة عبر PEPPOL." },

"See It in Action": { "ar": "شاهدها على أرض الواقع" },

"One platform.": { "ar": "منصة واحدة." },
"Zero silos.": { "ar": "بلا عوائق." },
"All modules run on a single, integrated data model.": { "ar": "تعمل جميع الوحدات على نموذج بيانات موحد ومتكامل." },

"Enterprise-grade.": { "ar": "بجودة المؤسسات." },
"Security, scalability and performance proven across 30+ industries.": { "ar": "أمن وقابلية للتوسع وأداء مُثبت في أكثر من 30 قطاعاً." },

"AI, everywhere.": { "ar": "الذكاء الاصطناعي في كل مكان." },
"Accelera, our AI copilot, accelerates routine work, insights and decisions.": { "ar": "أكسيليرا، مساعدنا الذكي، يسرّع الأعمال الروتينية والرؤى واتخاذ القرار." },

"Fast time-to-value.": { "ar": "قيمة سريعة التحقيق." },
"Lightning-fast UI, one-click installs, and low-disruption migrations from SAP/Microsoft/Oracle or disjointed tools.": { "ar": "واجهة فائقة السرعة، وتثبيت بنقرة واحدة، وانتقالات منخفضة التعطيل من SAP / Microsoft / Oracle أو الأدوات المتفرقة." },

"Built-in Global compliance:": { "ar": "امتثال عالمي مدمج:" },


"Deploy your way.": { "ar": "انشر بطريقتك." },
"Cloud (managed, subscription) or On-Prem (full control over infra & data).": { "ar": "سحابي (مدار بالاشتراك) أو داخل المنشأة (تحكم كامل بالبنية والبيانات)." },

"Trusted by": { "ar": "موثوق من قبل" },

"5,000+ Global companies": { "ar": "أكثر من 5000 شركة عالمية" },

"Based on reviews": { "ar": "استناداً إلى المراجعات" },

"Accqrate E-invoicing": { "ar": "الفوترة الإلكترونية من أكيوريت" },

"Peppol Member and certified Access Point Provider and Service Metadata Publisher.": { "ar": "عضو في PEPPOL ومزوّد نقطة وصول معتمد وناشر بيانات خدمات." },

"Full Compliance with UAE’s E-Invoicing Mandate": { "ar": "امتثال كامل لمتطلبات الفوترة الإلكترونية في دولة الإمارات" },

"Accqrate ensures end-to-end compliance with UAE’s B2B and B2G e-invoicing mandate and the FTA’s requirement. Our platform supports:": { "ar": "تضمن أكيوريت الامتثال التام لمتطلبات الفوترة الإلكترونية بين الشركات (B2B) وبين الأعمال والحكومة (B2G) في دولة الإمارات، ومعايير الهيئة الاتحادية للضرائب. وتدعم منصتنا:" },

"Structured formats fully aligned with UAE and PEPPOL specifications.": { "ar": "تنسيقات منظمة ومتماشية بالكامل مع مواصفات الإمارات وPEPPOL." },

"Secure, standardized exchange over PEPPOL": { "ar": "تبادل آمن وموحّد عبر PEPPOL" },

"Automated updates for evolving tax and technical regulations": { "ar": "تحديثات تلقائية وفق تغيّر الأنظمة الضريبية والتقنية" },

"Seamless integration with FTA.": { "ar": "تكامل سلس مع الهيئة الاتحادية للضرائب." },

"Built‑in FTA ": { "ar": "مُدمج مع FTA" },
"Built‑in FTA": { "ar": "مُدمج مع FTA" },

"Cloud (managed, subscription) or On‑Prem (full control over infra & data).": { "ar": "سحابي (مدار بالاشتراك) أو داخل المنشأة (تحكم كامل في البنية التحتية والبيانات)." },

"time‑to‑value.": { "ar": "وقت‑لتحقيق القيمة." },
"Fast time‑to‑value.": { "ar": "قيمة سريعة التحقيق." },

"Lightning‑fast UI, one‑click installs, and low‑disruption migrations from SAP/Microsoft/Oracle or disjointed tools.": { "ar": "واجهة مستخدم فائقة السرعة، وتثبيت بنقرة واحدة، وهجرات منخفضة التعطيل من SAP/Microsoft/Oracle أو الأدوات المتفرقة." },

"Enterprise‑grade.": { "ar": "بمستوى المؤسسات." },

"Generate e‑invoices, match POs, trigger approvals and alerts.": { "ar": "إنشاء الفواتير الإلكترونية، مطابقة أوامر الشراء، تشغيل الموافقات والتنبيهات." },

"Accqrate’s e‑invoice solution integrated seamlessly with PEPPOL. We saved time and cut compliance risk.": { "ar": "حل الفوترة الإلكترونية من أكيوريت متكامل بسلاسة مع PEPPOL. وفرنا الوقت وخفضنا مخاطر الامتثال." },

"Accqrate ensures end-to-end compliance with UAE’s B2B and B2G e-invoicing mandate and the FTA’s  requirement. Our platform supports:": { "ar": "تضمن أكيوريت الامتثال التام لمتطلبات الفوترة الإلكترونية بين الشركات (B2B) وبين الأعمال والحكومة (B2G) في دولة الإمارات، ومعايير الهيئة الاتحادية للضرائب. وتدعم منصتنا:" },

"Hassle-Free E-Invoicing Automation": { "ar": "أتمتة الفوترة الإلكترونية بلا تعقيد" },

"Shift from manual intervention to intelligent automation:": { "ar": "الانتقال من التدخل اليدوي إلى الأتمتة الذكية:" },

"AI-powered validation to reduce rejections": { "ar": "تحقق مدعوم بالذكاء الاصطناعي لتقليل الرفض" },

"Real-time error detection and correction suggestions": { "ar": "اكتشاف الأخطاء واقتراح التصحيحات في الوقت الفعلي" },

"Zero-cost regulatory upgrades": { "ar": "ترقيات تنظيمية بدون تكلفة" },

"Automated generation → validation → PEPPOL submission → archiving": { "ar": "إنشاء تلقائي → تحقق → إرسال عبر PEPPOL → أرشفة" },

"Book an Appointment": { "ar": "احجز موعداً" },

"Your AI Copilot": { "ar": "مساعدك الذكي" },

"Work faster and decide smarter with AI embedded across the suite.": { "ar": "اعمل بسرعة واتخذ قرارات أذكى مع ذكاء اصطناعي مدمج في جميع أنحاء المنصة." },

"Natural-language actions:": { "ar": "إجراءات باللغة الطبيعية:" },
"Ask, “Show last month’s receivables by region” and get the answer, fast.": { "ar": "اطلب: \"أظهر الذمم المدينة للشهر الماضي حسب المنطقة\" وستحصل على الإجابة فوراً." },

"Automations:": { "ar": "الأتمتة:" },
"Generate e-invoices, match POs, trigger approvals and alerts.": { "ar": "إنشاء الفواتير الإلكترونية، مطابقة أوامر الشراء، وتشغيل الموافقات والتنبيهات." },

"Insight to action:": { "ar": "من الرؤية إلى الإجراء:" },
"Spot anomalies, forecast demand, and recommend next steps.": { "ar": "اكتشاف الشذوذ، توقع الطلب، والتوصية بالخطوات التالية." },

"Assistive UX:": { "ar": "تجربة مستخدم مساعدة:" },
"Contextual help, data enrichment and guided workflows.": { "ar": "مساعدة سياقية، إثراء البيانات، وتدفقات عمل موجهة." },

"See Accelera in a 5-Minute Demo": { "ar": "شاهد أكسيليرا في عرض مدته 5 دقائق" },

"Future-Ready for": { "ar": "جاهز للمستقبل لـ" },

"DCTCE / 5 Corner:": { "ar": "‏DCTCE / النموذج الخماسي:" },

"Accqrate equips enterprises to be compliant across the upcoming UAE E-invoicing model DCTCE / 5 corner :": { "ar": "تُمكّن أكيوريت المؤسسات من الامتثال لنموذج الفوترة الإلكترونية الإماراتي القادم DCTCE / النموذج الخماسي:" },

"Talk to our Consultant": { "ar": "تحدث إلى مستشارنا" },

"Testimonials": { "ar": "آراء العملاء" },

"Ali - Construction Company": { "ar": "علي - شركة مقاولات" },

"Al Laith, UAE Global Health & Beauty Co.": { "ar": "الليث، شركة الصحة والجمال العالمية – الإمارات" },

"Wail - Jonex": { "ar": "وائل - جونكس" },

"Speak to a Reference Customer": { "ar": "تحدث إلى عميل مرجعي" },

"Our Values": { "ar": "قيمنا" },

"Drive Everything We Do": { "ar": "تقود كل ما نقوم به" },

"Built on trust, innovation and excellence, we deliver measurable results that transform business and create lasting impact.": { "ar": "نبني على الثقة والابتكار والتميز لنقدم نتائج ملموسة تُحدث تحولاً في الأعمال وتترك أثراً مستداماً." },

"Book a Personalized Walkthrough": { "ar": "احجز جولة مخصصة" },

"Frequently Answered Questions": { "ar": "أسئلة مجاب عنها بشكل متكرر" },

"How long is the free trial?": { "ar": "ما مدة الفترة التجريبية؟" },
"30 days. Plus an optional 14-day practice account for a total of 44 days.": { "ar": "30 يوماً. بالإضافة إلى حساب تدريبي اختياري لمدة 14 يوماً ليصبح المجموع 44 يوماً." },

"Can I terminate during the trial?": { "ar": "هل يمكنني الإلغاء خلال الفترة التجريبية؟" },
"Yes, no commitment during the trial.": { "ar": "نعم، لا التزام خلال الفترة التجريبية." },

"Do I need a credit card to start?": { "ar": "هل أحتاج بطاقة ائتمان للبدء؟" },
"No card required to begin the trial.": { "ar": "لا حاجة لبطاقة لبدء التجربة." },

"Where is Accqrate Cloud hosted?": { "ar": "أين تستضيف أكيوريت السحابة؟" },
"Regional hosting options with data-residency choices; on-prem available for full control.": { "ar": "خيارات استضافة إقليمية مع خيارات إقامة البيانات؛ مع توفر النشر داخل المنشأة للتحكم الكامل." },

"How do I pay the subscription?": { "ar": "كيف أدفع الاشتراك؟" },
"Monthly or annual plans; invoicing and payment options vary by region.": { "ar": "خطط شهرية أو سنوية؛ خيارات الدفع والفوترة تختلف حسب المنطقة." },

"What plans are available?": { "ar": "ما الخطط المتاحة؟" },
"Tiered by module mix and users; bundle pricing for suites.": { "ar": "مصنفة حسب مزيج الوحدات وعدد المستخدمين؛ وتسعير شامل للحزم." },

"Final Conversion Band": { "ar": "شريط التحويل النهائي" },

"Run compliant, AI-powered operations with Accqrate.": { "ar": "شغّل عمليات متوافقة ومدعومة بالذكاء الاصطناعي مع أكيوريت." },

"Get a Free Proof of Concept": { "ar": "احصل على إثبات مفهوم مجاني" },

"Subscribe for Updates": { "ar": "اشترك للحصول على التحديثات" },

"Talk to Sales": { "ar": "تحدث إلى فريق المبيعات" },

"PEPPOL-Ready. VAT-Compliant. Built For Enterprise.": {
  "ar": "جاهز لـ PEPPOL. متوافق مع ضريبة القيمة المضافة. مصمم للمؤسسات."
},


"Enable end-to-end electronic invoicing across your ERP, accounting, and billing systems with a fully compliant, PEPPOL-certified platform tailored for United Arab Emirates businesses. Automate creation, validation, transmission, and archiving of e-invoices with complete confidence.": {
  "ar": "مكّن الفوترة الإلكترونية الشاملة عبر أنظمة ERP والمحاسبة والفوترة لديك من خلال منصة معتمدة ومتوافقة بالكامل مع PEPPOL ومصممة خصيصاً للأعمال في دولة الإمارات. أتمت إنشاء الفواتير الإلكترونية والتحقق منها وإرسالها وأرشفتها بثقة كاملة."
},

"Complaint . Seamless . Secure": {
  "ar": "امتثال . سلاسة . أمان"
},


"One Platform.": {
  "ar": "منصة واحدة."
},

"Connect Multiple ERP or POS into one unified platform for FTA-invoicing.": {
  "ar": "اربط عدة أنظمة ERP أو نقاط بيع في منصة موحدة للفوترة عبر الهيئة الاتحادية للضرائب."
},

"Harmonised Data.": {
  "ar": "بيانات موحّدة."
},

"Built-in FTA": {
  "ar": "تكامل مدمج مع الهيئة الاتحادية للضرائب"
},

"Connect ERP/POS to FTA from Direct to PEPPOL based Integration..": {
  "ar": "اربط ERP / نقاط البيع بالهيئة الاتحادية للضرائب من التكامل المباشر إلى التكامل القائم على PEPPOL."
},

"e-invoicing compliance:": {
  "ar": "الامتثال للفوترة الإلكترونية:"
},

"Deploy your": {
  "ar": "انشر"
},

"way.": {
  "ar": "بطريقتك."
},

"AI,": {
  "ar": "الذكاء الاصطناعي،"
},

"Accelera, our AI copilot , accelerates routine work, insights and decisions.": {
  "ar": "أكسيليرا، مساعدنا الذكي، يسرّع الأعمال الروتينية والرؤى واتخاذ القرار."
},

"everywhere.": {
  "ar": "في كل مكان."
},

"Fast": {
  "ar": "سريع"
},



"time-to-value.": {
  "ar": "تحقيق القيمة."
},


"PEPPOL Member": {
  "ar": "عضو في PEPPOL"
},

"Certified AP Provider & SMP": {
  "ar": "مزود نقطة وصول معتمد وناشر بيانات الخدمات (SMP)"
},

"GDPR Complaint": {
  "ar": "متوافق مع GDPR"
},

"Secure, Transparent, Responsible": {
  "ar": "آمن، شفاف، ومسؤول"
},

"ISO 27001 Certified": {
  "ar": "معتمد ISO 27001"
},

"Robust Security. Reliable Governance": {
  "ar": "أمان قوي. حوكمة موثوقة"
},

"FTA e-invoicing": {
  "ar": "الفوترة الإلكترونية للهيئة الاتحادية للضرائب"
},

"Accreditation in Progress": {
  "ar": "الاعتماد قيد الإجراء"
},


"Accqrate’s e-invoice solution integrated seamlessly with PEPPOL. We saved time and cut compliance risk.": {
  "ar": "تكامل حل الفوترة الإلكترونية من أكيوريت بسلاسة مع PEPPOL. وفرنا الوقت وقللنا مخاطر عدم الامتثال."
},
"Future-Ready for DCTCE / 5 Corner:": {
  ar: "جاهز للمستقبل لنظام DCTCE / نموذج الخمس زوايا"
},
"Compliance without compromise": { "ar": "الامتثال بلا تنازلات" },
"Regulations met by design.": { "ar": "اللوائح مضمونة من التصميم." },

"Security first.": { "ar": "الأمان أولاً." },
"Data protection and governance across cloud and on-prem.": { "ar": "حماية البيانات والحوكمة عبر السحابة وفي الموقع." },

"Customer obsessed delivery": { "ar": "توصيل يركز على العميل" },
"On time. In scope. With measurable outcomes.": { "ar": "في الوقت المحدد. ضمن النطاق. بنتائج قابلة للقياس." },

"Performance at scale": { "ar": "أداء على نطاق واسع" },
"Built for enterprise workloads and real-time operations.": { "ar": "مصمم لأعباء عمل المؤسسات والعمليات في الوقت الفعلي." },

"Usability that drives adoption": { "ar": "قابلية استخدام تدفع التبنّي" },
"Clean, fast, role-based UX.": { "ar": "تجربة مستخدم نظيفة وسريعة ومستندة للأدوار." },


"Contact Sales Jordan": {
  "ar": "تواصل مع مبيعات الأردن"
},

"The Peppol CTC Model in the UAE: A Strategic Overview of the Country's New E-Invoicing Architecture": {
  "ar": "نموذج ‏Peppol CTC في الإمارات: نظرة استراتيجية على بنية الفوترة الإلكترونية الجديدة في الدولة"
},


"The UAE's transition toward mandatory e-invoicing marks one of its most significant digital taxation reforms to date. By selecting the Peppol Continuous Transaction Controls model as its national framework, the country is aligning with global best practices for real-time tax data exchange, secure interoperability, and cross-border invoice standardization.": {
  "ar": "يمثل انتقال دولة الإمارات نحو الفوترة الإلكترونية الإلزامية إحدى أهم إصلاحات الضرائب الرقمية حتى الآن. ومن خلال اختيار نموذج التحكم المستمر في المعاملات Peppol CTC كإطار وطني، تنسجم الدولة مع أفضل الممارسات العالمية لتبادل البيانات الضريبية في الوقت الحقيقي، والربط البيني الآمن، وتوحيد الفواتير عبر الحدود."
},


"This overview explains the Peppol CTC model adopted by the UAE, why the government selected this architecture, how the five-corner structure works, and what businesses must prepare for as the mandate comes into force.": {
  "ar": "توضح هذه النظرة العامة نموذج Peppol CTC الذي اعتمدته الإمارات، وأسباب اختيار الحكومة لهذا الهيكل، وكيف يعمل النموذج الخماسي، وما الذي يجب على الشركات الاستعداد له مع دخول الالتزام حيز التنفيذ."
},


"What the UAE Means by Peppol CTC": {
  "ar": "ماذا تقصد الإمارات بنموذج Peppol CTC"
},
"How E-Invoicing Works in a Structured Framework": {
  "ar": "كيف تعمل الفوترة الإلكترونية ضمن إطار منظم"
},
"Two Global Architectural Families in E-Invoicing Systems": {
  "ar": "فئتان معماريتان عالميتان في أنظمة الفوترة الإلكترونية"
},
"Decentralised Models": {
  "ar": "النماذج اللامركزية"
},
"Centralised Clearance Models": {
  "ar": "نماذج المقاصة المركزية"
},
"The Peppol Five-Corner Model Used by the UAE": {
  "ar": "نموذج Peppol الخماسي المستخدم في الإمارات"
},
"Corner One": {
  "ar": "الركن الأول"
},
"Corner Two": {
  "ar": "الركن الثاني"
},
"Corner Three": {
  "ar": "الركن الثالث"
},
"Corner Four": {
  "ar": "الركن الرابع"
},
"Corner Five": {
  "ar": "الركن الخامس"
},
"Core Features of the Peppol CTC Structure in the UAE": {
  "ar": "الميزات الأساسية لبنية Peppol CTC في الإمارات"
},
"Decentralised Exchange Layer": {
  "ar": "طبقة تبادل لامركزية"
},
"Unified International Standards": {
  "ar": "معايير دولية موحدة"
},
"Accredited Peppol Access Points": {
  "ar": "نقاط وصول معتمدة من Peppol"
},
"Secure Transmission": {
  "ar": "نقل آمن"
},
"Real-Time Visibility for the Tax Authority": {
  "ar": "رؤية فورية للهيئة الضريبية"
},
"Repository Function, Not Clearance": {
  "ar": "وظيفة تخزينية وليست مقاصة"
},
"Why the UAE Selected the Peppol CTC Model": {
  "ar": "لماذا اختارت الإمارات نموذج Peppol CTC"
},
"Benefits to Businesses": {
  "ar": "الفوائد للشركات"
},
"Conclusion": {
  "ar": "الخلاصة"
},


"Peppol Continuous Transaction Controls is a regulatory infrastructure that enables governments to receive transactional data almost immediately after an invoice is issued. The system does not operate as a centralized clearance model. Instead, it relies on a network of accredited service providers who exchange structured documents using globally recognized Peppol standards.": {
  "ar": "يمثل Peppol CTC بنية تنظيمية تمكن الحكومات من استلام البيانات المتعلقة بالمعاملات فور إصدار الفاتورة تقريباً. ولا يعمل النظام كنموذج مقاصة مركزية، بل يعتمد على شبكة من مزودي الخدمات المعتمدين الذين يتبادلون المستندات المنظمة باستخدام معايير Peppol العالمية."
},

"The UAE's version of this model incorporates the Peppol five-corner architecture. It is a decentralised approach, designed to ensure interoperability across systems while maintaining near real-time visibility for tax authorities.": {
  "ar": "يتضمن إصدار الإمارات من هذا النموذج بنية Peppol الخماسية. وهو نهج لامركزي مصمم لضمان قابلية التشغيل البيني بين الأنظمة مع توفير رؤية شبه فورية للهيئات الضريبية."
},

"Electronic invoices in this ecosystem are not static documents. They are machine-readable files, usually in XML or JSON, formatted according to the Universal Business Language. This allows automated validation, error detection, and seamless transmission between business systems.": {
  "ar": "الفواتير الإلكترونية في هذا النظام ليست مستندات جامدة، بل ملفات قابلة للقراءة آلياً، غالباً بصيغ XML أو JSON، ومهيأة وفق لغة الأعمال الموحدة. وهذا يتيح التحقق التلقائي، واكتشاف الأخطاء، والنقل السلس بين الأنظمة التجارية."
},
  "Behind the scenes, the e-invoicing framework defines the rules, protocols, formats, and compliance requirements governing every invoice transmitted within the UAE or across borders.": {
    "ar": "خلف الكواليس، يحدد إطار الفوترة الإلكترونية القواعد والبروتوكولات والتنسيقات ومتطلبات الامتثال التي تحكم كل فاتورة يتم إرسالها داخل دولة الإمارات أو عبر الحدود."
  },

  "Decentralised frameworks rely on certified intermediaries rather than a single national platform. Peppol is the most widely adopted example. The UAE, Singapore, Belgium, and several EU markets use decentralised models to support both local and international trade.": {
    "ar": "تعتمد الأطر اللامركزية على وسطاء معتمدين بدلاً من منصة وطنية واحدة. ويُعد Peppol المثال الأكثر اعتماداً. تستخدم الإمارات وسنغافورة وبلجيكا وعدة أسواق أوروبية نماذج لامركزية لدعم التجارة المحلية والدولية."
  },

  "This model includes the traditional Peppol four-corner structure and the extended five-corner CTC model used for regulatory reporting.": {
    "ar": "يتضمن هذا النموذج البنية التقليدية ذات الأركان الأربعة لـ Peppol والنموذج الخماسي الممتد المستخدم في التقارير التنظيمية ضمن إطار CTC."
  },

  "In a centralised system, every invoice is routed to a government platform for validation before reaching the buyer. Nations such as Italy and Poland operate this structure. Although it offers complete administrative control, it often limits flexibility and requires high national infrastructure capacity.": {
    "ar": "في النظام المركزي، يتم توجيه كل فاتورة إلى منصة حكومية للتحقق قبل وصولها إلى المشتري. تعتمد دول مثل إيطاليا وبولندا هذا الهيكل. وعلى الرغم من أنه يوفر سيطرة إدارية كاملة، إلا أنه غالباً ما يحد من المرونة ويتطلب بنية تحتية وطنية عالية القدرة."
  },

  "The UAE deliberately chose decentralisation to support scalability, interoperability, and cross-border alignment.": {
    "ar": "اختارت الإمارات النهج اللامركزي بشكل متعمد لدعم قابلية التوسع والتشغيل البيني والمواءمة عبر الحدود."
  },

  "The UAE's CTC model extends the Peppol four-corner structure by inserting the tax authority as an independent node. Each invoice therefore passes through five distinct entities.": {
    "ar": "يمدد نموذج CTC في الإمارات بنية Peppol ذات الأركان الأربعة عبر إضافة الهيئة الضريبية كعقدة مستقلة. وبالتالي تمر كل فاتورة عبر خمس جهات مميزة."
  },

  "The supplier creates the invoice in a Peppol-compliant format via its ERP or invoicing system.": {
    "ar": "ينشئ المورد الفاتورة بتنسيق متوافق مع Peppol عبر نظام ERP أو نظام الفوترة لديه."
  },

  "The supplier's Peppol Access Point converts, packages, and transmits the invoice within the Peppol network.": {
    "ar": "يقوم مزود نقطة الوصول الخاصة بالمورد في Peppol بتحويل الفاتورة وتغليفها وإرسالها داخل شبكة Peppol."
  },

  "The UAE tax authority receives a copy of the invoice simultaneously. In the UAE implementation, the authority does not validate or approve the document. It acts as a repository to support compliance checks, analytics, and future audit processes.": {
    "ar": "تستلم الهيئة الضريبية الإماراتية نسخة من الفاتورة في الوقت ذاته. ولا تقوم الهيئة في النموذج الإماراتي بالتحقق من المستند أو الموافقة عليه، بل تعمل كمستودع يدعم فحص الامتثال والتحليلات وعمليات المراجعة المستقبلية."
  },

  "The buyer's Peppol Access Point receives the invoice, performs standard integrity checks, and converts it into the buyer's preferred system format.": {
    "ar": "تستقبل نقطة الوصول الخاصة بالمشتري في Peppol الفاتورة وتجري فحوصات السلامة القياسية ثم تحولها إلى التنسيق المفضل لدى المشتري."
  },

  "The buyer receives the invoice, processes it in their accounting system, and completes the transaction.": {
    "ar": "يتلقى المشتري الفاتورة ويقوم بمعالجتها في نظامه المحاسبي ويكمل المعاملة."
  },

  "This framework ensures interoperability between all participating systems, irrespective of their technology stack or region.": {
    "ar": "يضمن هذا الإطار التشغيل البيني بين جميع الأنظمة المشاركة بغض النظر عن تقنياتها أو مناطقها."
  },

  "The UAE model includes several defining characteristics that shape its operational and compliance architecture.": {
    "ar": "يتضمن النموذج الإماراتي عدة خصائص محورية تشكل بنيته التشغيلية والتنظيمية."
  },

  "Invoices move between accredited service providers rather than a single government gateway, preventing bottlenecks and improving scalability.": {
    "ar": "تنتقل الفواتير بين مزودي خدمات معتمدين بدلاً من بوابة حكومية واحدة، مما يمنع الاختناقات ويحسن قابلية التوسع."
  },

  "Peppol BIS and the Peppol International Invoice specifications ensure that every invoice follows the same semantics and structure, supporting seamless multi-regional integration.": {
    "ar": "تضمن مواصفات Peppol BIS والفاتورة الدولية لـ Peppol أن تتبع كل فاتورة نفس الدلالات والبنية، مما يدعم التكامل السلس بين المناطق."
  },

  "Only government-certified Access Points may send and receive e-invoices in the UAE, safeguarding data quality and ensuring adherence to national protocols.": {
    "ar": "لا يمكن إلا لنقاط الوصول المعتمدة حكومياً إرسال واستقبال الفواتير الإلكترونية في الإمارات، مما يحمي جودة البيانات ويضمن الالتزام بالبروتوكولات الوطنية."
  },

  "The AS4 protocol encrypts and authenticates each message, protecting invoice data end-to-end.": {
    "ar": "يقوم بروتوكول AS4 بتشفير كل رسالة والتحقق من صحتها، مما يحمي بيانات الفاتورة من طرف إلى طرف."
  },

  "The CTC architecture automatically routes invoices to the authority without delaying the transaction, supporting proactive compliance monitoring.": {
    "ar": "يقوم هيكل CTC بتوجيه الفواتير تلقائياً إلى الهيئة دون تأخير المعاملة، مما يدعم مراقبة الامتثال بشكل استباقي."
  },

  "Unlike many tax clearance models, the UAE system does not perform pre-approval or rejection. This maintains business continuity while still giving regulators access to data in near real time.": {
    "ar": "على عكس نماذج المقاصة الضريبية الأخرى، لا يقوم النظام الإماراتي بالموافقة المسبقة أو الرفض، مما يحافظ على استمرارية الأعمال مع منح الجهات التنظيمية وصولاً شبه فوري للبيانات."
  },

  "Several strategic considerations drove the UAE's decision.": {
    "ar": "عدة اعتبارات استراتيجية دفعت الإمارات لاتخاذ هذا القرار."
  },

  "Interoperability with international markets:": {
    "ar": "التشغيل البيني مع الأسواق الدولية:"
  },
  
  "Peppol is widely used across Europe and Asia, making the UAE's trade environment more globally compatible.": {
    "ar": "يُستخدم Peppol على نطاق واسع في أوروبا وآسيا، مما يجعل بيئة التجارة الإماراتية أكثر توافقاً عالمياً."
  },

  "Support for future digital tax reforms:": {
    "ar": "دعم للإصلاحات الضريبية الرقمية المستقبلية:"
  },
  
  "Real-time data access enables analytics-driven oversight, risk scoring, and intelligent audit mechanisms.": {
    "ar": "يتيح الوصول الفوري للبيانات رقابة قائمة على التحليلات، وتقييم المخاطر، وآليات مراجعة ذكية."
  },

  "Reduced operational friction for businesses:": {
    "ar": "تقليل الاحتكاك التشغيلي للشركات:"
  },
  
  "Decentralised systems allow companies to work through their existing service providers without adapting to rigid government platforms.": {
    "ar": "تسمح الأنظمة اللامركزية للشركات بالعمل من خلال مزودي خدماتها الحاليين دون الحاجة للتكيف مع منصات حكومية جامدة."
  },

  "Security and message integrity:": {
    "ar": "الأمان وسلامة الرسائل:"
  },
  
  "The AS4 protocol and Access Point accreditation introduce strict security and consistency controls.": {
    "ar": "يوفر بروتوكول AS4 واعتماد نقاط الوصول ضوابط صارمة للأمان والاتساق."
  },

  "Scalable national infrastructure:": {
    "ar": "بنية تحتية وطنية قابلة للتوسع:"
  },
  
  "A decentralised model does not require a high-capacity single national server, reducing systemic risk.": {
    "ar": "لا يتطلب النموذج اللامركزي خادماً وطنياً واحداً عالي القدرة، مما يقلل المخاطر النظامية."
  },

  "The UAE Peppol CTC system offers significant operational and compliance advantages.": {
    "ar": "يوفر نظام Peppol CTC في الإمارات مزايا تشغيلية وتنظيمية كبيرة."
  },

  "Automation of invoice handling:": {
    "ar": "أتمتة معالجة الفواتير:"
  },
  
  "Structured formats reduce manual work and accelerate accounts payable and receivable cycles.": {
    "ar": "تقلل التنسيقات المنظمة العمل اليدوي وتسرع دورات الذمم الدائنة والمدينة."
  },

  "Lower risk of human error:": {
    "ar": "تقليل مخاطر الخطأ البشري:"
  },
  
  "Machine-readable validation catches structural inconsistencies before invoices move through the network.": {
    "ar": "يلتقط التحقق القابل للقراءة آلياً أي عدم اتساق بنيوي قبل انتقال الفواتير عبر الشبكة."
  },

  "Efficient compliance:": {
    "ar": "امتثال فعّال:"
  },
  
  "Real-time visibility and standardized data simplify VAT reporting and audit readiness.": {
    "ar": "تُسهِّل الرؤية الفورية والبيانات الموحدة إعداد التقارير الضريبية والاستعداد للمراجعات."
  },

  "Cross-border readiness:": {
    "ar": "جاهزية عبر الحدود:"
  },
  
  "Companies trading across GCC, Europe, and Asia can use the same infrastructure without building separate integrations.": {
    "ar": "يمكن للشركات التي تتاجر عبر الخليج وأوروبا وآسيا استخدام نفس البنية دون الحاجة إلى تكاملات منفصلة."
  },

  "Predictability in tax governance:": {
    "ar": "القدرة على التنبؤ في الحوكمة الضريبية:"
  },
  
  "Continuous transaction reporting reduces the likelihood of disputes, retrospective audits, or mismatched filings.": {
    "ar": "تقلل تقارير المعاملات المستمرة احتمالية النزاعات أو المراجعات اللاحقة أو الإقرارات غير المتطابقة."
  },

  "The UAE's adoption of the Peppol Continuous Transaction Controls model represents a decisive move toward a modern, data-driven tax ecosystem. By implementing a decentralised five-corner architecture and aligning with global Peppol standards, the UAE is building a foundation for secure, interoperable and future-ready e-invoicing practices.": {
    "ar": "يمثل اعتماد الإمارات لنموذج Peppol للتحكم المستمر في المعاملات خطوة حاسمة نحو نظام ضريبي حديث قائم على البيانات. ومن خلال تنفيذ البنية الخماسية اللامركزية ومواءمتها مع معايير Peppol العالمية، تبني الإمارات أساساً لممارسات فوترة إلكترونية آمنة وقابلة للتشغيل البيني وجاهزة للمستقبل."
  },

  "Businesses operating in the country should begin preparing by upgrading their ERP infrastructure, evaluating Peppol-compatible service providers and restructuring internal processes to handle structured invoice data. A coordinated transition will be essential as the mandate moves closer to enforcement.": {
    "ar": "يجب على الشركات العاملة في الدولة البدء بالاستعداد من خلال ترقية بنية ERP، وتقييم مزودي الخدمات المتوافقين مع Peppol، وإعادة هيكلة العمليات الداخلية لمعالجة بيانات الفواتير المنظمة. وسيكون الانتقال المنسق ضرورياً مع اقتراب تنفيذ الالتزام."
  },

  "As the e-invoicing landscape becomes more complex, platforms such as Accqrate can help organizations centralize compliance, connect seamlessly with accredited Peppol Access Points, and maintain readiness for the UAE's broader digital tax transformation.": {
    "ar": "ومع ازدياد تعقيد بيئة الفوترة الإلكترونية، يمكن لمنصات مثل أكيوريت مساعدة المؤسسات على توحيد الامتثال، والاتصال بسلاسة مع نقاط الوصول المعتمدة، والمحافظة على الجاهزية لتحول الإمارات الضريبي الرقمي الأوسع."
  },

  "Excise tax in the United Arab Emirates is a regulatory tool designed to curb the consumption of goods that have negative health or environmental impacts. As the UAE expands its tax ecosystem, businesses dealing with excise goods must register with the Federal Tax Authority within thirty days of beginning taxable activities. Proper registration ensures compliance, prevents penalties, and establishes a clear foundation for ongoing filing and payment duties.": {
    "ar": "تعد الضريبة الانتقائية في دولة الإمارات أداة تنظيمية تهدف إلى الحد من استهلاك السلع التي لها آثار سلبية على الصحة أو البيئة. ومع توسع النظام الضريبي في الدولة، يجب على الشركات التي تتعامل في السلع الانتقائية التسجيل لدى الهيئة الاتحادية للضرائب خلال ثلاثين يوماً من بدء الأنشطة الخاضعة للضريبة. يضمن التسجيل الصحيح الامتثال، ويمنع العقوبات، ويؤسس قاعدة واضحة لواجبات الإقرار والدفع المستمرة."
  },

  "This guide provides a comprehensive explanation of excise tax, who must register, required documents, timelines, registration steps, exemptions, and the consequences of non-compliance.": {
    "ar": "يقدم هذا الدليل شرحاً شاملاً للضريبة الانتقائية، ومن يجب عليه التسجيل، والوثائق المطلوبة، والجداول الزمنية، وخطوات التسجيل، والإعفاءات، وعواقب عدم الامتثال."
  },

  "Understanding Excise Tax and Excise Goods": {
    "ar": "فهم الضريبة الانتقائية والسلع الانتقائية"
  },

  "Excise tax is an indirect tax applied once on specific categories of goods that the government considers harmful. These goods are referred to as excise goods and currently include the following categories:": {
    "ar": "الضريبة الانتقائية هي ضريبة غير مباشرة تُفرض مرة واحدة على فئات محددة من السلع التي تعتبرها الحكومة ضارة. وتسمى هذه السلع بالسلع الانتقائية وتشمل حالياً الفئات التالية:"
  },

  "Tobacco and tobacco derivatives": {
    "ar": "التبغ ومشتقاته"
  },

  "Carbonated beverages containing added sugar or flavoring": {
    "ar": "المشروبات الغازية المحتوية على السكر المضاف أو النكهات"
  },

  "Energy drinks formulated to stimulate physical or mental performance": {
    "ar": "مشروبات الطاقة المصممة لتعزيز الأداء البدني أو الذهني"
  },

  "Electronic smoking devices and tools": {
    "ar": "أجهزة وأدوات التدخين الإلكتروني"
  },

  "Liquids used within electronic smoking devices": {
    "ar": "السوائل المستخدمة في أجهزة التدخين الإلكتروني"
  },

  "Sweetened beverages with added sugar or artificial sweeteners": {
    "ar": "المشروبات المحلاة بالسكر المضاف أو المحليات الصناعية"
  },

  "These items attract excise tax irrespective of whether they are manufactured inside the UAE or imported for local consumption.": {
    "ar": "تخضع هذه السلع للضريبة الانتقائية سواء كانت مُنتجة داخل الإمارات أو مستوردة للاستهلاك المحلي."
  },

  "Entities Required to Register for Excise Tax": {
    "ar": "الجهات الملزمة بالتسجيل للضريبة الانتقائية"
  },

  "Registration is mandatory for individuals or businesses engaged in any activity that results in excise liability. Registration is required when a business:": {
    "ar": "يعد التسجيل إلزامياً للأفراد أو الشركات التي تمارس أي نشاط ينشأ عنه خضوع للضريبة الانتقائية. ويكون التسجيل مطلوباً عندما تقوم الشركة بـ:"
  },

  "Produces excise goods inside the UAE": {
    "ar": "إنتاج السلع الانتقائية داخل الدولة"
  },

  "Imports excise goods from overseas into the UAE": {
    "ar": "استيراد السلع الانتقائية من خارج الدولة إلى الإمارات"
  },

  "Releases excise goods from approved designated zones": {
    "ar": "إخراج السلع الانتقائية من المناطق المحددة المعتمدة"
  },

  "Holds excise goods for stockpiling or resale": {
    "ar": "حيازة السلع الانتقائية بهدف التخزين أو إعادة البيع"
  },

  "Operates as a warehouse keeper for excise goods": {
    "ar": "إدارة مستودع للسلع الانتقائية"
  },

  "Engaging in any of these activities without prior registration constitutes non-compliance.": {
    "ar": "القيام بأي من هذه الأنشطة دون تسجيل مسبق يُعد حالة عدم امتثال."
  },

  "Situations Where Registration Is Not Required": {
    "ar": "حالات لا يلزم فيها التسجيل"
  },

  "A business that rarely imports excise goods may qualify for exemption. To qualify, the entity must demonstrate that its imports occur fewer than once every six months or not more than three times within a twenty-four-month period.": {
    "ar": "قد تكون الشركة التي نادراً ما تستورد السلع الانتقائية مؤهلة للحصول على إعفاء. وللتأهل، يجب أن تُثبت الجهة أن وارداتها تتم أقل من مرة كل ستة أشهر أو لا تتجاوز ثلاث مرات خلال مدة أربعة وعشرين شهراً."
  },

  "Even when exempt from registration, excise tax may still apply if imported goods exceed duty-free thresholds.": {
    "ar": "حتى عند الإعفاء من التسجيل، قد تظل الضريبة الانتقائية مطبقة إذا تجاوزت السلع المستوردة حدود الإعفاء."
  },

  "Timeline for Excise Registration": {
    "ar": "الجدول الزمني للتسجيل في الضريبة الانتقائية"
  },

  "Although there is no single universal deadline, the rule is straightforward. A business must register within thirty days of commencing any excise-related activity. For companies planning to produce, import, or stockpile excise goods, registration must be completed before any activity begins. Failure to do so exposes the business to significant penalties.": {
    "ar": "على الرغم من عدم وجود موعد نهائي موحد، إلا أن القاعدة واضحة: يجب على الشركة التسجيل خلال ثلاثين يوماً من بدء أي نشاط متعلق بالضريبة الانتقائية. أما الشركات التي تخطط لإنتاج أو استيراد أو تخزين السلع الانتقائية، فيجب عليها إتمام التسجيل قبل بدء أي نشاط. عدم القيام بذلك يعرضها لغرامات كبيرة."
  },

  "Step-By-Step Excise Registration Process in the UAE": {
    "ar": "خطوات عملية التسجيل في الضريبة الانتقائية في الإمارات"
  },

  "The Federal Tax Authority manages excise registration through the EmaraTax platform. The application typically requires about forty-five minutes to complete, and the FTA may take up to twenty business days to review and approve the submission.": {
    "ar": "تدير الهيئة الاتحادية للضرائب عملية التسجيل للضريبة الانتقائية من خلال منصة إماراتاك. وتستغرق الطلبات عادة حوالي 45 دقيقة لإكمالها، وقد تستغرق الهيئة ما يصل إلى عشرين يوم عمل للمراجعة والموافقة."
  },

  "Step One: Create or Access an EmaraTax Account": {
    "ar": "الخطوة الأولى: إنشاء حساب في إماراتاك أو الوصول إليه"
  },

  "Visit the FTA portal and enter the EmaraTax system using UAE Pass or previously created login details. If you are registering for the first time, create a new account.": {
    "ar": "قم بزيارة بوابة الهيئة الاتحادية للضرائب وادخل إلى نظام إماراتاك باستخدام الهوية الرقمية UAE Pass أو بيانات تسجيل الدخول السابقة. إذا كنت تسجل لأول مرة، فقم بإنشاء حساب جديد."
  },

  "Step Two: Open the Taxable Person Dashboard": {
    "ar": "الخطوة الثانية: فتح لوحة معلومات الشخص الخاضع للضريبة"
  },

  "After logging in, navigate to the section where taxable persons are listed. If none are present, create a profile by entering the entity details.": {
    "ar": "بعد تسجيل الدخول، انتقل إلى القسم الذي تُدرج فيه الجهات الخاضعة للضريبة. إذا لم تكن هناك أي جهات، فقم بإنشاء ملف عبر إدخال تفاصيل الكيان."
  },

  "Step Three: Begin the Registration Application": {
    "ar": "الخطوة الثالثة: بدء طلب التسجيل"
  },

  "Select the profile of the entity you intend to register. Choose the Excise option and initiate the registration request.": {
    "ar": "حدد ملف الكيان الذي تنوي تسجيله. اختر خيار الضريبة الانتقائية وابدأ طلب التسجيل."
  },
  "Step Four: Confirm Guidelines and Start": {
    "ar": "الخطوة الرابعة: تأكيد الإرشادات والبدء"
  },

  "Review the instructions provided by the FTA, confirm your understanding, and continue to the main form.": {
    "ar": "راجع التعليمات المقدمة من الهيئة الاتحادية للضرائب، وأكد فهمك لها، ثم تابع إلى النموذج الرئيسي."
  },

  "Step Five: Complete Required Information": {
    "ar": "الخطوة الخامسة: استكمال المعلومات المطلوبة"
  },

  "Provide the following information systematically:": {
    "ar": "قدّم المعلومات التالية بشكل منهجي:"
  },

  "Entity information including type and legal structure": {
    "ar": "معلومات الكيان بما في ذلك النوع والهيكل القانوني"
  },

  "Trade license and identification details": {
    "ar": "الرخصة التجارية وتفاصيل التعريف"
  },

  "Business activities related to excise goods": {
    "ar": "الأنشطة التجارية المتعلقة بالسلع الانتقائية"
  },

  "Ownership details": {
    "ar": "تفاصيل الملكية"
  },

  "Branch information if applicable": {
    "ar": "معلومات الفروع إن وجدت"
  },

  "Registered business address and contact details": {
    "ar": "عنوان النشاط التجاري المسجل وتفاصيل الاتصال"
  },

  "Optional business relationship information": {
    "ar": "معلومات اختيارية عن العلاقات التجارية"
  },

  "Bank information": {
    "ar": "المعلومات البنكية"
  },

  "Details on excise activities including production, import, or stockpiling": {
    "ar": "تفاصيل الأنشطة الانتقائية بما في ذلك الإنتاج أو الاستيراد أو التخزين"
  },

  "Customs registration details": {
    "ar": "تفاصيل التسجيل الجمركي"
  },

  "Authorized signatory information": {
    "ar": "معلومات المفوض بالتوقيع"
  },

  "Step Six: Review and Finalize": {
    "ar": "الخطوة السادسة: المراجعة والإنهاء"
  },

  "Review each section carefully. Submit your declaration and complete the application. Once submitted, record the reference number for future tracking.": {
    "ar": "راجع كل قسم بعناية. قدم إقرارك واستكمل الطلب. بعد التقديم، احفظ الرقم المرجعي للمتابعة لاحقاً."
  },

  "Step Seven: FTA Review and Approval": {
    "ar": "الخطوة السابعة: مراجعة وموافقة الهيئة الاتحادية للضرائب"
  },

  "The FTA may approve, reject, or request clarification. Track the status through the EmaraTax dashboard.": {
    "ar": "قد توافق الهيئة أو ترفض أو تطلب توضيحات. راقب حالة الطلب عبر لوحة إماراتاك."
  },

  "Documentation Required for Excise Registration": {
    "ar": "المستندات المطلوبة للتسجيل في الضريبة الانتقائية"
  },

  "Applicants must prepare the following documents:": {
    "ar": "يجب على المتقدمين تجهيز المستندات التالية:"
  },

  "Valid business or trade license": {
    "ar": "رخصة تجارية سارية"
  },

  "Passport or Emirates ID of the authorized signatory": {
    "ar": "جواز السفر أو الهوية الإماراتية للمفوض بالتوقيع"
  },

  "Proof of authorization for the signatory": {
    "ar": "إثبات تفويض المفوض بالتوقيع"
  },

  "Official declaration on company letterhead describing the excise activity and intended start date": {
    "ar": "بيان رسمي على ورق الشركة يوضح النشاط الانتقائي وتاريخ البدء المقترح"
  },

  "Bank letter confirming banking information": {
    "ar": "خطاب بنكي يؤكد المعلومات البنكية"
  },

  "Additional documents may include:": {
    "ar": "قد تشمل المستندات الإضافية ما يلي:"
  },

  "Articles of Association or Power of Attorney for non-individual applicants": {
    "ar": "عقد التأسيس أو التوكيل للمتقدمين من غير الأفراد"
  },

  "Certificate of incorporation for incorporated entities": {
    "ar": "شهادة التأسيس للكيانات المدمجة"
  },

  "Partnership agreements": {
    "ar": "اتفاقيات الشراكة"
  },

  "Documents explaining business size and operations": {
    "ar": "مستندات توضيح حجم الأعمال والعمليات"
  },

  "Government entities, clubs, charities, and associations may be required to provide additional supporting documents based on their structure.": {
    "ar": "قد يُطلب من الجهات الحكومية والأندية والجمعيات الخيرية والروابط تقديم مستندات داعمة إضافية حسب هيكلها."
  },

  "Penalties for Non-Compliance": {
    "ar": "العقوبات على عدم الامتثال"
  },

  "Failure to register, file returns, or pay excise tax on time can result in significant penalties. Key penalty categories include:": {
    "ar": "عدم التسجيل أو تقديم الإقرارات أو دفع الضريبة الانتقائية في الوقت المحدد قد يؤدي إلى غرامات كبيرة. وتشمل الفئات الرئيسية للعقوبات:"
  },

  "Failure to register within the required timeframe results in a penalty of twenty thousand dirhams": {
    "ar": "عدم التسجيل خلال الإطار الزمني المطلوب يؤدي إلى غرامة قدرها عشرون ألف درهم"
  },

  "Failure to submit excise returns on time results in a penalty of one thousand dirhams for the first offence and two thousand dirhams للتاخيرات المتكررة": {
    "ar": "عدم تقديم الإقرارات الانتقائية في الوقت المحدد يؤدي إلى غرامة قدرها ألف درهم للمخالفة الأولى وألفي درهم للتأخيرات المتكررة"
  },

  "Late payment penalties accumulate progressively until the outstanding amount is settled": {
    "ar": "تتراكم غرامات التأخير في السداد تدريجياً حتى يتم تسوية المبلغ المستحق"
  },

  "These penalties reinforce the importance of timely and accurate compliance.": {
    "ar": "تعزز هذه العقوبات أهمية الامتثال الدقيق وفي الوقت المناسب."
  },

  "Excise registration in the UAE forms a critical component of regulatory compliance for businesses dealing in goods that fall under the excise regime. Understanding the rules, completing the registration process correctly, and meeting all filing obligations ensures that operations remain uninterrupted and compliant with federal tax laws.": {
    "ar": "يمثل التسجيل في الضريبة الانتقائية في الإمارات جزءاً أساسياً من الامتثال التنظيمي للشركات التي تتعامل في السلع الخاضعة للنظام الانتقائي. إن فهم القواعد، وإكمال عملية التسجيل بشكل صحيح، والالتزام بجميع متطلبات التقديم يضمن سير العمليات دون انقطاع وبما يتوافق مع القوانين الضريبية الاتحادية."
  },

  "As UAE tax compliance becomes increasingly digital, having robust systems for managing excise tax, VAT, and e-invoicing is becoming more essential. Many businesses are now adopting unified platforms to streamline tax and financial compliance. Solutions such as Accqrate help organizations prepare for these evolving requirements by offering structured automation and accuracy that support long-term compliance and efficiency.": {
    "ar": "ومع ازدياد التحول الرقمي في الامتثال الضريبي بدولة الإمارات، أصبحت الحاجة إلى أنظمة قوية لإدارة الضريبة الانتقائية وضريبة القيمة المضافة والفوترة الإلكترونية أكثر أهمية. تعتمد العديد من الشركات الآن منصات موحدة لتبسيط الامتثال الضريبي والمالي. وتساعد حلول مثل أكيوريت المؤسسات على الاستعداد لهذه المتطلبات المتطورة عبر توفير أتمتة منظمة ودقة تدعم الامتثال طويل المدى والكفاءة."
  },

  "A Tax Registration Number, commonly known as a TRN, is one of the most essential identifiers for any VAT-registered business in the United Arab Emirates. Issued by the Federal Tax Authority, the TRN acts as the official gateway to conducting VAT-related activities, from issuing tax invoices to claiming input tax credits. Because of its significance, verifying the authenticity of a TRN before entering into any taxable transaction has become an expected business practice in the UAE.": {
    "ar": "يعد رقم التسجيل الضريبي (TRN) أحد أهم المعرفات لأي منشأة مسجلة لضريبة القيمة المضافة في دولة الإمارات. ويصدر عن الهيئة الاتحادية للضرائب، ويعمل كبوابة رسمية لممارسة الأنشطة المتعلقة بالضريبة، من إصدار الفواتير الضريبية إلى استرداد ضريبة المدخلات. ونظراً لأهميته، أصبح التحقق من صحة رقم TRN قبل الدخول في أي معاملة خاضعة للضريبة ممارسة تجارية متوقعة في الإمارات."
  },

  "This guide explains what a TRN is, how the numbering format works, how to verify it online, and what to do if a verification attempt fails. It also outlines the financial and compliance risks of using invalid TRNs.": {
    "ar": "يشرح هذا الدليل ماهية رقم TRN وكيف يعمل تنسيق ترقيمه، وكيفية التحقق منه عبر الإنترنت، وما يجب فعله إذا فشل التحقق. كما يوضح المخاطر المالية والتنظيمية المرتبطة باستخدام أرقام TRN غير الصحيحة."
  },

  "Understanding the TRN in the UAE": {
    "ar": "فهم رقم TRN في الإمارات"
  },

  "A TRN is a fifteen digit identification code linked to a business or individual that is registered for Value Added Tax. Since VAT was introduced in 2018, every taxable entity must obtain a TRN before issuing VAT invoices or charging VAT on any supply.": {
    "ar": "رقم TRN هو رمز تعريفي مكون من خمسة عشر رقماً يرتبط بمنشأة أو فرد مسجل لضريبة القيمة المضافة. ومنذ تطبيق الضريبة في عام 2018، يجب على كل جهة خاضعة للضريبة الحصول على رقم TRN قبل إصدار فواتير ضريبية أو فرض الضريبة على أي توريد."
  },

  "The TRN appears on tax invoices, receipts, credit notes, VAT returns, and all documents submitted to the Federal Tax Authority. In addition to enabling VAT compliance, it acts as a public reference for verifying the legitimacy of the supplier.": {
    "ar": "يظهر رقم TRN على الفواتير الضريبية والإيصالات والإشعارات الدائنة وإقرارات الضريبة وجميع المستندات المقدمة إلى الهيئة الاتحادية للضرائب. وبالإضافة إلى دعم الامتثال الضريبي، يعمل مرجعاً عاماً للتحقق من شرعية المورد."
  },

  "Structure of the TRN": {
    "ar": "هيكل رقم TRN"
  },

  "The TRN follows a fixed format of fifteen digits. Each segment has a specific purpose.": {
    "ar": "يتبع رقم TRN تنسيقاً ثابتاً مكوناً من خمسة عشر رقماً، ويختص كل جزء منه بوظيفة محددة."
  },

  "The first three digits identify the Federal Tax Authority.": {
    "ar": "تشير الأرقام الثلاثة الأولى إلى الهيئة الاتحادية للضرائب."
  },

  "The next nine digits represent the unique identifier allocated to the business.": {
    "ar": "تمثل الأرقام التسعة التالية المعرف الفريد المخصص للمنشأة."
  },

  "The last three digits act as check numbers to maintain uniqueness and prevent errors or duplication.": {
    "ar": "تعمل الأرقام الثلاثة الأخيرة كأرقام تحقق للمحافظة على التفرد ومنع الأخطاء أو التكرار."
  },

  "This standardized structure enables quick verification and supports automated validation across ERP systems and e-invoicing platforms.": {
    "ar": "يمكّن هذا الهيكل الموحد من التحقق السريع ويدعم التحقق الآلي عبر أنظمة ERP ومنصات الفوترة الإلكترونية."
  },

  "Why TRN Verification Matters": {
    "ar": "أهمية التحقق من رقم TRN"
  },

  "Verifying a TRN is more than a routine check. It protects cash flow, prevents fraud, and ensures that the business remains compliant with UAE VAT legislation.": {
    "ar": "يعد التحقق من رقم TRN أكثر من مجرد إجراء روتيني؛ فهو يحمي التدفق النقدي، ويمنع الاحتيال، ويضمن امتثال المنشأة لتشريعات ضريبة القيمة المضافة الإماراتية."
  },

  "Verification ensures that the supplier is legally registered to charge VAT.": {
    "ar": "يضمن التحقق أن المورد مسجل قانونياً لفرض ضريبة القيمة المضافة."
  },

  "It confirms that VAT you pay can be legally recovered as input tax.": {
    "ar": "يؤكد أن ضريبة القيمة المضافة المدفوعة يمكن استردادها قانونياً كضريبة مدخلات."
  },

  "It protects against fraudulent operators who use fake TRNs to issue invoices.": {
    "ar": "يحمي من الجهات الاحتيالية التي تستخدم أرقام TRN مزيفة لإصدار فواتير."
  },

  "It helps avoid disputes during audits and prevents the risk of penalties.": {
    "ar": "يساعد على تجنب النزاعات أثناء المراجعات ويمنع مخاطر الغرامات."
  },

  "A single transaction with an invalid TRN can lead to a permanent loss of input tax and, in some cases, legal investigation. This makes TRN verification a mandatory due-diligence step for finance and compliance teams.": {
    "ar": "يمكن أن تؤدي معاملة واحدة مع رقم TRN غير صالح إلى خسارة دائمة لضريبة المدخلات، وفي بعض الحالات إلى تحقيق قانوني. وهذا يجعل التحقق من TRN خطوة إلزامية للعناية الواجبة لفرق المالية والامتثال."
  },

  "How to Verify a TRN in the UAE": {
    "ar": "كيفية التحقق من رقم TRN في الإمارات"
  },

  "The Federal Tax Authority provides an online tool for TRN verification. The process is straightforward and takes only a few seconds.": {
    "ar": "توفر الهيئة الاتحادية للضرائب أداة إلكترونية للتحقق من رقم TRN، وتستغرق العملية بضع ثوانٍ فقط."
  },

  "Step One": {
    "ar": "الخطوة الأولى"
  },

  "Visit the official FTA website and select the TRN verification section.": {
    "ar": "قم بزيارة الموقع الرسمي للهيئة الاتحادية للضرائب واختر قسم التحقق من رقم TRN."
  },

  "Step Two": {
    "ar": "الخطوة الثانية"
  },

  "Enter the fifteen digit TRN into the search field and complete the captcha for security.": {
    "ar": "أدخل رقم TRN المكون من 15 رقماً في خانة البحث، ثم أكمل رمز التحقق لأغراض الأمان."
  },

  "Step Three": {
    "ar": "الخطوة الثالثة"
  },

  "Review the result displayed on the screen. The portal will show the legal name of the business associated with the TRN. Match this information with the details provided on the supplier's invoice.": {
    "ar": "راجع النتيجة الظاهرة على الشاشة. سيعرض النظام الاسم القانوني للمنشأة المرتبطة بالرقم. طابق هذه المعلومات مع التفاصيل الموجودة على فاتورة المورد."
  },

  "If the names match, the TRN is valid. If no record appears, the TRN is incorrect or misused.": {
    "ar": "إذا تطابقت الأسماء، يكون الرقم صالحاً. وإذا لم يظهر أي سجل، فهذا يعني أن الرقم غير صحيح أو مستخدم بشكل خاطئ."
  },

  "What To Do When a TRN Fails Verification": {
    "ar": "ما يجب فعله عند فشل التحقق من TRN"
  },

  "If the system does not recognize the TRN, stop all VAT-related activity with the supplier until the matter is resolved. Follow this escalation path.": {
    "ar": "إذا لم يتعرف النظام على الرقم، أوقف جميع الأنشطة المتعلقة بالضريبة مع المورد حتى يتم حل المشكلة. اتبع مسار التصعيد التالي:"
  },

  "Request the supplier's VAT registration certificate and recheck the number.": {
    "ar": "اطلب شهادة التسجيل الضريبي للمورد وأعد التحقق من الرقم."
  },

  "Verify that the TRN on the certificate matches the TRN printed on invoices.": {
    "ar": "تحقق من أن رقم TRN في الشهادة يطابق الرقم الموجود على الفواتير."
  },

  "Repeat the verification on the FTA portal after correcting any typographical errors.": {
    "ar": "أعد التحقق عبر بوابة الهيئة بعد تصحيح أي أخطاء كتابية."
  },

  "If the supplier cannot provide legitimate documentation, treat the case as a red flag.": {
    "ar": "إذا لم يتمكن المورد من تقديم مستندات صحيحة، فاعتبر ذلك إشارة خطر."
  },

  "Report suspected fraudulent TRNs to the Federal Tax Authority with supporting evidence.": {
    "ar": "أبلغ الهيئة الاتحادية للضرائب عن أرقام TRN المشتبه فيها مع تقديم الأدلة الداعمة."
  },

  "Consult legal counsel if significant financial exposure is involved.": {
    "ar": "استشر مستشاراً قانونياً إذا كانت هناك مخاطر مالية كبيرة."
  },

  "A failed TRN verification must never be ignored, especially when the supplier charges VAT. Doing so can directly impact your ability to recover input tax.": {
    "ar": "لا يجب تجاهل فشل التحقق من TRN، خصوصاً إذا كان المورد يفرض ضريبة القيمة المضافة؛ فقد يؤثر ذلك مباشرة على قدرتك على استرداد ضريبة المدخلات."
  },

  "Importance of TRN for Businesses": {
    "ar": "أهمية رقم TRN للشركات"
  },

  "The TRN has several implications beyond compliance.": {
    "ar": "لرقم TRN عدة آثار تتجاوز الامتثال."
  },

  "It legitimizes VAT charges on invoices and enables input tax claims.": {
    "ar": "يُضفي الشرعية على فرض ضريبة القيمة المضافة في الفواتير ويمكّن من استرداد ضريبة المدخلات."
  },

  "It establishes trust during business transactions and procurement reviews.": {
    "ar": "يعزز الثقة أثناء المعاملات التجارية وعند مراجعة المشتريات."
  },

  "It helps ensure audit readiness, since verified TRNs support accurate filings.": {
    "ar": "يساعد على ضمان الاستعداد للمراجعة، حيث تدعم أرقام TRN الصحيحة الإقرارات الدقيقة."
  },

  "It protects the business from penalties related to incorrect VAT records.": {
    "ar": "يحمي الشركة من الغرامات المرتبطة بسجلات الضريبة غير الصحيحة."
  },

  "Regular TRN verification is now a standard part of onboarding new vendors and reviewing existing supplier contracts.": {
    "ar": "أصبح التحقق المنتظم من TRN جزءاً أساسياً من إجراءات اعتماد الموردين الجدد ومراجعة عقود الموردين الحاليين."
  },

  "Penalties and Risks of Using Invalid TRNs": {
    "ar": "المخاطر والعقوبات الناتجة عن استخدام أرقام TRN غير صحيحة"
  },

  "The use of invalid TRNs exposes a business to financial and regulatory penalties. The most common risks include the following.": {
    "ar": "يعرّض استخدام أرقام TRN غير الصحيحة الشركة لعقوبات مالية وتنظيمية. وتشمل المخاطر الأكثر شيوعاً ما يلي:"
  },

  "A fine for late VAT registration, which can amount to ten thousand dirhams.": {
    "ar": "غرامة على التسجيل المتأخر لضريبة القيمة المضافة قد تصل إلى عشرة آلاف درهم."
  },

  "Penalties for late or incorrect VAT filings, ranging from one thousand to two thousand dirhams.": {
    "ar": "غرامات على التأخر أو الأخطاء في الإقرارات الضريبية تتراوح بين ألف وألفي درهم."
  },

  "Permanent loss of input tax when the supplier's TRN is invalid.": {
    "ar": "فقدان دائم لضريبة المدخلات في حال كان رقم TRN الخاص بالمورد غير صالح."
  },

  "Penalties related to improper accounting records, which may reach fifty thousand dirhams.": {
    "ar": "غرامات تتعلق بسجلات محاسبية غير سليمة قد تصل إلى خمسين ألف درهم."
  },

  "Additional scrutiny during tax audits, which can impact business continuity.": {
    "ar": "مزيد من التدقيق أثناء المراجعات الضريبية مما قد يؤثر على استمرارية الأعمال."
  },

  "Late payment penalties that increase monthly and can reach three hundred percent of the unpaid VAT.": {
    "ar": "غرامات التأخير في السداد التي ترتفع شهرياً وقد تصل إلى 300٪ من ضريبة القيمة المضافة غير المسددة."
  },

  "Penalties for issuing or receiving non-compliant e-invoices, which can apply per document.": {
    "ar": "غرامات على إصدار أو استلام فواتير إلكترونية غير متوافقة، وقد تُفرض لكل مستند."
  },

  "Ensuring TRN accuracy protects both revenue and reputation.": {
    "ar": "يضمن التأكد من صحة رقم TRN حماية الإيرادات والسمعة."
  },

  "TRN verification has become a fundamental requirement for businesses operating under UAE VAT. It safeguards input tax claims, strengthens financial accuracy, and prevents fraudulent transactions. With e-invoicing and digital compliance frameworks expanding across the region, the importance of validating tax identities is rising rapidly.": {
    "ar": "أصبح التحقق من رقم TRN متطلباً أساسياً للشركات العاملة ضمن نظام ضريبة القيمة المضافة الإماراتي. فهو يحمي استرداد ضريبة المدخلات، ويعزز الدقة المالية، ويمنع المعاملات الاحتيالية. ومع توسع الفوترة الإلكترونية وأطر الامتثال الرقمية عبر المنطقة، تزداد أهمية التحقق من الهويات الضريبية بسرعة."
  },

  "Businesses that automate TRN checks and integrate them into their accounting systems will be better positioned for audit readiness and regulatory compliance. Platforms like Accqrate, which offer built-in tax validation and e-invoicing capabilities, can simplify compliance and provide an added layer of security for financial operations.": {
    "ar": "الشركات التي تعمل على أتمتة التحقق من TRN ودمجه في أنظمتها المحاسبية ستكون في وضع أفضل للاستعداد للمراجعات والامتثال التنظيمي. ويمكن لمنصات مثل أكيوريت، التي توفر تحققاً ضريبياً مدمجاً وقدرات فوترة إلكترونية، تبسيط الامتثال وتوفير طبقة إضافية من الأمان للعمليات المالية."
  },

  "The UAE introduced a federal corporate tax regime in June 2023, marking a significant shift in how businesses operating in the country are taxed. The framework is designed to support economic growth, align with international tax standards, and maintain the UAE's position as an attractive global hub for business and investment.": {
    "ar": "قدمت الإمارات نظاماً اتحادياً للضريبة على الشركات في يونيو 2023، مما يمثل تحولاً كبيراً في كيفية فرض الضرائب على الشركات العاملة في الدولة. ويهدف الإطار إلى دعم النمو الاقتصادي، والاتساق مع المعايير الضريبية الدولية، والحفاظ على مكانة الإمارات كمركز عالمي جاذب للأعمال والاستثمار."
  },

  "This guide walks through everything companies and business owners need to know, from who is covered to how taxable income is calculated and how the upcoming Domestic Minimum Top-up Tax will impact large multinational groups.": {
    "ar": "يستعرض هذا الدليل كل ما تحتاج الشركات ومالكو الأعمال إلى معرفته، من الجهات المشمولة إلى كيفية احتساب الدخل الخاضع للضريبة وكيف سيؤثر الحد الأدنى للضريبة المحلية على المجموعات متعددة الجنسيات."
  },

  "Understanding Corporate Tax in the UAE": {
    "ar": "فهم ضريبة الشركات في الإمارات"
  },

  "Corporate tax is a levy applied on the profits or net income that arise from business activities. The rules apply to both UAE-based companies and foreign persons conducting business inside the country. Income that comes from personal investments or employment is not considered business income and is therefore outside the scope.": {
    "ar": "ضريبة الشركات هي رسم يُفرض على الأرباح أو صافي الدخل الناتج عن الأنشطة التجارية. وتنطبق القواعد على الشركات المحلية والأشخاص الأجانب الذين يزاولون نشاطاً تجارياً داخل الدولة. ولا يُعد الدخل الناتج عن الاستثمارات الشخصية أو العمل ضمن نطاق الضريبة، وبالتالي فهو مستثنى."
  },

  "The system follows a dual-tier structure. Profits up to a certain threshold are taxed at zero percent, and profits beyond that are taxed at a standard rate. The framework is supported by requirements for clear record keeping, annual tax return filing, and adherence to transfer pricing rules that regulate transactions between related parties.": {
    "ar": "يتبع النظام هيكلاً ذا شريحتين؛ إذ تخضع الأرباح حتى حد معين لضريبة بنسبة 0٪، بينما تخضع الأرباح التي تتجاوزه لمعدل ضريبة قياسي. ويدعم الإطار متطلبات حفظ السجلات بوضوح، وتقديم الإقرارات الضريبية السنوية، والالتزام بقواعد تسعير التحويل التي تنظم المعاملات بين الأطراف ذات العلاقة."
  },

  "Who Is Taxable under the UAE Corporate Tax Law": {
    "ar": "من الخاضع لضريبة الشركات وفق قانون الإمارات"
  },

  "The corporate tax regime does not treat all businesses the same way. Liability depends on the type of person or entity and the nature of their connection to the UAE economy.": {
    "ar": "لا يعامل نظام ضريبة الشركات جميع المنشآت بالطريقة نفسها؛ إذ تعتمد المسؤولية الضريبية على نوع الشخص أو الكيان وطبيعة ارتباطه بالاقتصاد الإماراتي."
  },

  "Resident Juridical Persons": {
    "ar": "الأشخاص الاعتباريون المقيمون"
  },

  "Companies that are incorporated under UAE laws are considered resident taxpayers. This includes mainland companies and businesses established in free zones. Foreign incorporated companies can also be treated as residents if they are effectively managed and controlled from the UAE. Effective management is determined by where strategic and operational decisions are made.": {
    "ar": "تُعد الشركات المؤسسة بموجب قوانين دولة الإمارات خاضعة للضريبة كمقيمين، بما في ذلك الشركات في الإمارات الداخلية والمناطق الحرة. ويمكن اعتبار الشركات الأجنبية مقيمة أيضاً إذا كانت تُدار وتُدار فعلياً من داخل الإمارات. ويُحدد مفهوم الإدارة الفعالة بناءً على المكان الذي تُتخذ فيه القرارات الاستراتيجية والتشغيلية."
  },

  "Resident Natural Persons": {
    "ar": "الأشخاص الطبيعيون المقيمون"
  },

  "Individuals are treated as resident taxable persons when they conduct business and their annual turnover from these activities exceeds one million dirhams. Freelancers, sole proprietors, and any individual carrying out ongoing commercial activity fall into this category. Income from employment, passive investments, and UAE property rentals for personal use does not trigger corporate tax.": {
    "ar": "يُعامل الأفراد كأشخاص خاضعين للضريبة كمقيمين عند ممارستهم نشاطاً تجارياً ويتجاوز حجم أعمالهم السنوي من تلك الأنشطة مليون درهم. ويشمل ذلك المستقلين والمالكين الفرديين وأي شخص يمارس نشاطاً تجارياً مستمراً. ولا تؤدي إيرادات العمل أو الاستثمارات السلبية أو إيجارات العقارات للاستخدام الشخصي إلى الخضوع لضريبة الشركات."
  },

  "Non Residents": {
    "ar": "غير المقيمين"
  },

  "A foreign business is taxed in the UAE under three circumstances. First, if it operates through a permanent establishment inside the UAE. Second, if it earns income that is sourced from within the country, even without a permanent establishment. Third, if it creates a nexus in the UAE based on economic presence, as defined by Cabinet decisions. These rules ensure that business profits connected to the UAE are brought into the tax net even when the legal entity is not incorporated locally.": {
    "ar": "تخضع الشركة الأجنبية للضريبة في الإمارات في ثلاث حالات: أولاً، إذا كانت تعمل من خلال منشأة دائمة داخل الدولة. ثانياً، إذا حققت دخلاً ذا مصدر داخل الدولة حتى من دون منشأة دائمة. ثالثاً، إذا أنشأت رابطاً ضريبياً في الإمارات بناءً على الحضور الاقتصادي كما تحدده قرارات مجلس الوزراء. وتضمن هذه القواعد إدخال الأرباح المرتبطة بالإمارات ضمن المنظومة الضريبية حتى وإن لم تكن الجهة مؤسسة محلياً."
  },
  "Corporate Tax Rates in the UAE": {
    "ar": "معدلات ضريبة الشركات في الإمارات"
  },

  "The UAE uses a progressive structure based on profit levels and business category rather than activity type.": {
    "ar": "تستخدم الإمارات هيكلاً تصاعدياً يستند إلى مستويات الأرباح وفئة النشاط التجاري بدلاً من نوع النشاط."
  },

  "Standard Rates for Resident Businesses": {
    "ar": "المعدلات القياسية للمنشآت المقيمة"
  },

  "Taxable income up to three hundred seventy-five thousand dirhams is taxed at zero percent. Any taxable income above this threshold is taxed at nine percent. These rates apply to both companies and natural persons engaged in business activities.": {
    "ar": "يُفرض معدل ضريبة بنسبة 0٪ على الدخل الخاضع للضريبة حتى 375,000 درهم. ويُفرض معدل 9٪ على أي دخل خاضع للضريبة يتجاوز هذا الحد. تنطبق هذه المعدلات على الشركات والأشخاص الطبيعيين الذين يمارسون أنشطة تجارية."
  },

  "Qualifying Free Zone Persons": {
    "ar": "الأشخاص المؤهلون في المناطق الحرة"
  },

  "Free zone entities that meet prescribed substance requirements and earn income that qualifies under the law may enjoy a zero percent rate on their qualifying income. Any income that falls outside the qualifying criteria is taxed at nine percent.": {
    "ar": "يمكن للكيانات في المناطق الحرة التي تستوفي متطلبات النشاط الفعلي وتحقق دخلاً مؤهلاً بموجب القانون أن تستفيد من معدل 0٪ على الدخل المؤهل. أما الدخل غير المؤهل فيخضع لمعدل 9٪."
  },

  "Domestic Minimum Top-up Tax for Multinational Groups": {
    "ar": "الضريبة المحلية التكميلية للمجموعات متعددة الجنسيات"
  },

  "From the beginning of 2025, the UAE will apply a Domestic Minimum Top-up Tax to large multinational groups whose consolidated global revenues reach or exceed seven hundred fifty million euros in at least two out of the four preceding financial years. The top-up ensures these groups pay a minimum effective tax rate of fifteen percent in line with the global minimum tax initiative under the OECD Pillar Two rules.": {
    "ar": "اعتباراً من بداية عام 2025، ستطبق الإمارات ضريبة محلية تكميلية على المجموعات متعددة الجنسيات التي تصل إيراداتها العالمية الموحدة إلى 750 مليون يورو أو تتجاوزها في سنتين على الأقل من السنوات المالية الأربع السابقة. وتضمن هذه الضريبة أن تدفع تلك المجموعات معدل ضريبة فعال لا يقل عن 15٪ تماشياً مع مبادرة الحد الأدنى العالمي للضريبة ضمن قواعد الركيزة الثانية لمنظمة التعاون الاقتصادي والتنمية."
  },

  "Categories Exempt from Corporate Tax": {
    "ar": "الفئات المعفاة من ضريبة الشركات"
  },

  "Certain entities are not required to pay corporate tax because of their importance to public services, national economic interests, or their role as investment vehicles.": {
    "ar": "لا يُطلب من بعض الكيانات دفع ضريبة الشركات بسبب أهميتها للخدمات العامة أو للمصالح الاقتصادية الوطنية أو لدورها كأوعية استثمارية."
  },

  "These include government bodies, government-controlled entities, extractive industry operators, non-extractive natural resource businesses, and qualifying public benefit organisations. Public and private pension funds, social security funds, and qualifying investment funds can also obtain exempt status when they meet the conditions defined by the Ministry of Finance and the Federal Tax Authority.": {
    "ar": "تشمل هذه الكيانات الجهات الحكومية، والكيانات الخاضعة لسيطرة الحكومة، ومشغلي الصناعات الاستخراجية، وأعمال الموارد الطبيعية غير الاستخراجية، ومنظمات النفع العام المؤهلة. ويمكن لصناديق التقاعد العامة والخاصة وصناديق الضمان الاجتماعي وصناديق الاستثمار المؤهلة الحصول على صفة الإعفاء عند استيفاء الشروط المحددة من وزارة المالية والهيئة الاتحادية للضرائب."
  },

  "Small businesses may also elect for temporary relief provided their revenue remains below three million dirhams each year until the end of 2026.": {
    "ar": "يمكن أيضاً للشركات الصغيرة اختيار الإعفاء المؤقت شريطة ألا تتجاوز إيراداتها ثلاثة ملايين درهم سنوياً حتى نهاية عام 2026."
  },

  "How Taxable Income Is Determined": {
    "ar": "كيفية تحديد الدخل الخاضع للضريبة"
  },

  "Taxable income is based on the accounting profit reported in financial statements prepared according to IFRS or IFRS for SMEs. Adjustments are then made to reflect the tax rules.": {
    "ar": "يستند الدخل الخاضع للضريبة إلى الربح المحاسبي الوارد في البيانات المالية المعدّة وفقاً لمعايير IFRS أو IFRS للمنشآت الصغيرة والمتوسطة، ثم تُجرى التعديلات اللازمة لتعكس القواعد الضريبية."
  },

  "Examples include removing income that is exempt, such as qualifying dividends, and adding back expenses that are not deductible. After completing these adjustments, the result becomes the taxable income for the period.": {
    "ar": "تشمل الأمثلة إزالة الدخل المعفى مثل الأرباح المؤهلة، وإضافة المصروفات غير القابلة للخصم. وبعد إجراء هذه التعديلات يصبح الناتج هو الدخل الخاضع للضريبة للفترة."
  },

  "Resident entities are taxed on worldwide income while resident natural persons are taxed only on income arising from business activities conducted in the UAE. Non-residents are taxed solely on UAE-related income.": {
    "ar": "تُفرض الضريبة على الكيانات المقيمة على دخلها العالمي، بينما يُفرض على الأشخاص الطبيعيين المقيمين الضريبة فقط على الدخل الناتج عن الأنشطة التجارية داخل الإمارات. أما غير المقيمين فيُفرض عليهم الضريبة فقط على الدخل المرتبط بالإمارات."
  },

  "Permanent Establishment and State-Sourced Income": {
    "ar": "المنشأة الدائمة والدخل ذو المصدر المحلي"
  },

  "A permanent establishment is created when a foreign business has a fixed place of business in the UAE or operates through a dependent agent who regularly concludes contracts on its behalf. The law also recognises that an economic presence in the UAE that meets specific criteria may constitute a taxable nexus.": {
    "ar": "تُنشأ منشأة دائمة عندما يكون للشركة الأجنبية مكان عمل ثابت في الإمارات أو تعمل من خلال وكيل تابع يبرم العقود بانتظام نيابة عنها. كما يعترف القانون بأن الحضور الاقتصادي في الإمارات وفق معايير محددة يمكن أن يشكل رابطاً ضريبياً."
  },

  "State-sourced income includes revenue from services performed in the UAE, sales of goods within the UAE, income from UAE property, and income connected with contracts performed in the country. Interest on loans connected to UAE assets or borrowers also falls under this category.": {
    "ar": "يشمل الدخل ذو المصدر المحلي إيرادات الخدمات المقدمة داخل الإمارات، ومبيعات السلع داخل الإمارات، والدخل الناتج عن العقارات الإماراتية، والدخل المرتبط بالعقود المنفذة داخل الدولة. كما يشمل الفوائد على القروض المرتبطة بأصول أو مقترضين داخل الإمارات."
  },

  "Group Relief and Loss Utilisation": {
    "ar": "الإعفاء الجماعي واستخدام الخسائر"
  },

  "The corporate tax regime allows companies that meet ownership and residency conditions to form a tax group. The group is treated as a single taxable person represented by the parent company. Losses can be transferred between group members, and tax losses can be carried forward and set off against future taxable income up to seventy-five percent of income in a given period.": {
    "ar": "يسمح نظام ضريبة الشركات بتكوين مجموعة ضريبية للشركات التي تستوفي شروط الملكية والإقامة. وتُعامل المجموعة كشخص ضريبي واحد ممثلاً بالشركة الأم. ويمكن تحويل الخسائر بين أعضاء المجموعة، كما يمكن ترحيل الخسائر الضريبية وخصمها من الدخل الخاضع للضريبة حتى 75٪ من الدخل في فترة معينة."
  },

  "There is no expiry period for carrying forward losses. However, losses cannot be carried back to earlier years.": {
    "ar": "لا توجد فترة انتهاء لصلاحية ترحيل الخسائر. ومع ذلك، لا يمكن ترحيل الخسائر إلى سنوات سابقة."
  },

  "Transfer Pricing Requirements": {
    "ar": "متطلبات تسعير التحويل"
  },

  "Businesses engaged in related party transactions must follow the arm's length principle, ensuring that prices charged between connected parties reflect market conditions. Companies above specific turnover thresholds must prepare transfer pricing documentation, including a local file and master file. Large multinational groups must comply with detailed reporting requirements that align with international standards.": {
    "ar": "يجب على الشركات التي تجري معاملات مع أطراف ذات علاقة الالتزام بمبدأ السعر المحايد لضمان أن الأسعار تعكس ظروف السوق. كما يجب على الشركات التي تتجاوز حدود حجم أعمال محددة إعداد مستندات تسعير التحويل، بما في ذلك ملف محلي وملف رئيسي. ويجب على المجموعات متعددة الجنسيات الالتزام بمتطلبات إبلاغ تفصيلية تتماشى مع المعايير الدولية."
  },

  "The Federal Tax Authority has also introduced an Advance Pricing Agreement program, allowing businesses to agree on transfer pricing methods in advance to obtain greater certainty.": {
    "ar": "كما قدمت الهيئة الاتحادية للضرائب برنامج اتفاقيات التسعير المسبق، الذي يتيح للشركات الاتفاق مسبقاً على منهجيات تسعير التحويل للحصول على مزيد من اليقين."
  },

  "Corporate Tax Compliance Obligations": {
    "ar": "التزامات الامتثال لضريبة الشركات"
  },

  "Every taxable person must register with the Federal Tax Authority and obtain a tax registration number. The timing for registration depends on the date of incorporation or the date when a taxable presence is created.": {
    "ar": "يجب على كل شخص خاضع للضريبة التسجيل لدى الهيئة الاتحادية للضرائب والحصول على رقم تسجيل ضريبي. ويعتمد توقيت التسجيل على تاريخ التأسيس أو تاريخ إنشاء الوجود الخاضع للضريبة."
  },

  "Tax returns must be filed once every financial year. The deadline for filing and payment is nine months from the end of the tax period. Businesses must also maintain proper financial records, including invoices, contracts, and supporting documentation, for audit and verification purposes.": {
    "ar": "يجب تقديم الإقرارات الضريبية مرة واحدة كل سنة مالية. الموعد النهائي للتقديم والسداد هو تسعة أشهر من نهاية الفترة الضريبية. كما يجب على الشركات الاحتفاظ بسجلات مالية سليمة، بما في ذلك الفواتير والعقود والمستندات الداعمة لأغراض المراجعة والتحقق."
  },

  "Penalties apply for late registration, late filing, inaccurate reporting, and late payment. Reduced penalties are available for timely voluntary disclosures.": {
    "ar": "تُطبق غرامات على التأخر في التسجيل، أو التأخر في التقديم، أو الإبلاغ غير الدقيق، أو التأخر في السداد. وتتوفر غرامات مخففة للإفصاحات الطوعية المقدمة في الوقت المناسب."
  },

  "Calculating Corporate Tax: A Practical Walkthrough": {
    "ar": "احتساب ضريبة الشركات: شرح عملي"
  },

  "To calculate corporate tax in the UAE, begin with the accounting profit from financial statements. Make the required tax adjustments, then apply the zero percent and nine percent bands.": {
    "ar": "لحساب ضريبة الشركات في الإمارات، ابدأ بالربح المحاسبي من البيانات المالية. ثم قم بإجراء التعديلات الضريبية المطلوبة وطبق شريحتي 0٪ و9٪."
  },

  "For example, consider a business with a net profit of seven hundred fifty thousand dirhams. If fifty thousand dirhams represent expenses that are not deductible, the adjusted taxable income will be seven hundred thousand dirhams. The first three hundred seventy-five thousand dirhams are taxed at zero percent. The remaining three hundred twenty-five thousand dirhams are taxed at nine percent, which results in a corporate tax payable of twenty-nine thousand two hundred fifty dirhams.": {
    "ar": "على سبيل المثال، إذا حققت شركة أرباحاً صافية قدرها 750,000 درهم، وكان 50,000 درهم منها مصروفات غير قابلة للخصم، فسيصبح الدخل الخاضع للضريبة 700,000 درهم. تُفرض ضريبة 0٪ على أول 375,000 درهم، وتُفرض ضريبة 9٪ على المبلغ المتبقي البالغ 325,000 درهم، مما ينتج عنه ضريبة مستحقة قدرها 29,250 درهماً."
  },

  "The UAE's corporate tax framework introduces a modern, competitive, and internationally aligned system that supports long-term economic development. Businesses operating in the UAE must understand their obligations, calculate taxable income accurately, comply with filing deadlines, and prepare for the introduction of the Domestic Minimum Top-up Tax.": {
    "ar": "يقدم إطار ضريبة الشركات في الإمارات نظاماً حديثاً وتنافسياً ومتوافقاً مع المعايير الدولية، يدعم النمو الاقتصادي طويل المدى. ويجب على الشركات العاملة في الدولة فهم التزاماتها، وحساب الدخل الخاضع للضريبة بدقة، والالتزام بمواعيد التقديم، والاستعداد لتطبيق الضريبة المحلية التكميلية."
  },

  "As organisations strengthen their financial and compliance processes, many are adopting digital systems that provide accuracy and audit readiness. Platforms such as Accqrate can support these efforts by helping businesses maintain structured financial records and improve the reliability of tax-related data without complicating their existing workflows.": {
    "ar": "ومع تعزيز المؤسسات لعملياتها المالية والرقابية، يعتمد الكثير منها أنظمة رقمية توفر الدقة والاستعداد للمراجعة. ويمكن لمنصات مثل أكيوريت دعم هذه الجهود عبر مساعدة الشركات في الحفاظ على سجلات مالية منظمة وتحسين موثوقية البيانات الضريبية دون تعقيد سير العمل القائم."
  },

  "This guide answers common questions about the UAE corporate tax regime, explains who is covered, clarifies rates and exemptions, and outlines filing and documentation requirements. It focuses on what businesses actually need to know to become and remain compliant.": {
    "ar": "يجيب هذا الدليل عن الأسئلة الشائعة بشأن نظام ضريبة الشركات الإماراتي، ويوضح الجهات المشمولة، ويشرح المعدلات والإعفاءات، ويعرض متطلبات التقديم والمستندات. ويركز على ما تحتاج الشركات فعلاً إلى معرفته للالتزام والمحافظة على الامتثال."
  },

  "1. What is corporate tax in the UAE?": {
    "ar": "1. ما هي ضريبة الشركات في الإمارات؟"
  },

  "Corporate tax is a tax on business profits. It applies to entities and to individuals who carry on business activities. The law establishes how taxable profit is measured, what adjustments apply to accounting profit, the filing cycle, and the enforcement rules that the Federal Tax Authority administers.": {
    "ar": "ضريبة الشركات هي ضريبة تُفرض على أرباح الأعمال. وتنطبق على الكيانات والأفراد الذين يمارسون أنشطة تجارية. ويحدد القانون كيفية قياس الربح الخاضع للضريبة، والتعديلات المطبقة على الربح المحاسبي، ودورة التقديم، وقواعد الإنفاذ التي تديرها الهيئة الاتحادية للضرائب."
  },

  "2. When did corporate tax start in the UAE?": {
    "ar": "2. متى بدأت ضريبة الشركات في الإمارات؟"
  },

  "The federal corporate tax regime was introduced by the Ministry of Finance and came into effect for relevant financial periods in 2023. Businesses calculate and report tax for each defined tax period, which is generally a twelve-month accounting period chosen by the entity.": {
    "ar": "تم تقديم نظام ضريبة الشركات الاتحادي من قبل وزارة المالية ودخل حيز التنفيذ للفترات المالية ذات الصلة في عام 2023. وتقوم الشركات بحساب الضريبة وتقديم الإقرارات لكل فترة ضريبية محددة، والتي تكون عادة فترة محاسبية مدتها 12 شهراً."
  },

  "3. What counts as a tax period?": {
    "ar": "3. ما المقصود بالفترة الضريبية؟"
  },

  "A tax period is the twelve-month financial reporting interval used to prepare statutory accounts. Many companies use the calendar year, but companies that follow a different fiscal year use that period for corporate tax purposes. For example, a company with a financial year starting on May 1st will have a tax period from May 1st to April 30th.": {
    "ar": "الفترة الضريبية هي فترة إعداد التقارير المالية لمدة 12 شهراً المستخدمة لإعداد الحسابات القانونية. تستخدم العديد من الشركات السنة الميلادية، بينما تستخدم شركات أخرى سنتها المالية المعتمدة لأغراض ضريبة الشركات. على سبيل المثال، الشركة التي يبدأ عامها المالي في 1 مايو ستكون فترتها الضريبية من 1 مايو إلى 30 أبريل."
  },

  "4. What are the policy goals behind the UAE corporate tax?": {
    "ar": "4. ما هي الأهداف السياسية وراء ضريبة الشركات الإماراتية؟"
  },

  "The main objectives are to create a sustainable revenue base to support public services and investment, to align UAE rules with international tax transparency standards, and to preserve the UAE as a competitive and stable destination for business and investment.": {
    "ar": "تتمثل الأهداف الرئيسية في إنشاء قاعدة إيرادات مستدامة لدعم الخدمات العامة والاستثمار، ومواءمة القواعد الإماراتية مع معايير الشفافية الضريبية الدولية، والحفاظ على مكانة الإمارات كوجهة تنافسية ومستقرة للأعمال والاستثمار."
  },

  "5. What are the headline corporate tax rates?": {
    "ar": "5. ما هي معدلات ضريبة الشركات الرئيسية؟"
  },

  "The system uses thresholds rather than multiple progressive slabs. For most taxable persons the first portion of taxable profit up to three hundred seventy-five thousand dirhams is taxed at zero percent. Taxable profit above three hundred seventy-five thousand dirhams is taxed at nine percent. In addition, large multinational groups that meet global revenue thresholds face a domestic top-up measure to achieve a minimum effective rate consistent with international agreements.": {
    "ar": "يستخدم النظام حدوداً ضريبية بدلاً من شرائح تصاعدية متعددة. بالنسبة لمعظم المكلفين، تُفرض ضريبة بنسبة 0٪ على أول 375,000 درهم من الربح الخاضع للضريبة، وتُفرض ضريبة بنسبة 9٪ على الأرباح التي تتجاوز ذلك. بالإضافة إلى ذلك، تخضع المجموعات متعددة الجنسيات التي تستوفي حدود الإيرادات العالمية لتدبير محلي تكميلي يحقق معدل ضريبة فعالاً أدنى وفق الاتفاقيات الدولية."
  },

  "6. Which businesses must register for corporate tax?": {
    "ar": "6. ما الشركات التي يجب أن تسجل لضريبة الشركات؟"
  },

  "Registration is required for:": {
    "ar": "يجب التسجيل لـ:"
  },

  "Companies incorporated in the UAE": {
    "ar": "الشركات المؤسسة في الإمارات"
  },

  "Branches of foreign companies that qualify as resident establishments": {
    "ar": "فروع الشركات الأجنبية التي تعتبر منشآت مقيمة"
  },

  "Foreign entities that create a taxable nexus through a permanent establishment or by earning UAE-sourced income": {
    "ar": "الكيانات الأجنبية التي تنشئ رابطاً ضريبياً من خلال منشأة دائمة أو من خلال تحقيق دخل ذو مصدر إماراتي"
  },

  "Individuals conducting business activities with annual turnover exceeding one million dirhams": {
    "ar": "الأفراد الذين يمارسون أنشطة تجارية بإيرادات سنوية تتجاوز مليون درهم"
  },

  "Entities that are exempt still generally need to register and submit returns unless the law or an administrative ruling explicitly waives that obligation.": {
    "ar": "حتى الكيانات المعفاة عادة ما تحتاج إلى التسجيل وتقديم الإقرارات ما لم يُعفها القانون أو قرار إداري صراحةً من ذلك."
  },

  "7. How is taxable income determined?": {
    "ar": "7. كيف يتم تحديد الدخل الخاضع للضريبة؟"
  },

  "Start with accounting profit reported under IFRS or IFRS for small entities. Then apply tax adjustments specified in the law. Typical adjustments add back non-deductible items and exclude exempt income. The resulting figure after all permitted deductions and adjustments is the taxable income for the period.": {
    "ar": "يبدأ الحساب بالربح المحاسبي المعد وفق IFRS أو IFRS للمنشآت الصغيرة، ثم تُطبق التعديلات الضريبية المحددة في القانون. وتشمل التعديلات الشائعة إضافة المصروفات غير القابلة للخصم واستبعاد الدخل المعفى. ويكون الناتج بعد التعديلات هو الدخل الخاضع للضريبة للفترة."
  },

  "8. Do free zone businesses pay corporate tax?": {
    "ar": "8. هل تدفع شركات المناطق الحرة ضريبة الشركات؟"
  },

  "Free zone companies that meet the qualifying conditions and substance requirements can obtain a zero percent effective rate on qualifying income. Income that does not meet the qualifying criteria is taxed at the standard rate. Qualifying status depends on the entity's activity, substance, contractual arrangements, and compliance with transfer pricing rules.": {
    "ar": "يمكن لشركات المناطق الحرة التي تستوفي شروط التأهيل ومتطلبات النشاط الفعلي الحصول على معدل فعلي 0٪ على الدخل المؤهل. أما الدخل غير المؤهل فيخضع للمعدل القياسي. تعتمد حالة التأهيل على نشاط الكيان والنشاط الفعلي والترتيبات التعاقدية والالتزام بقواعد تسعير التحويل."
  },

  "9. Who is exempt from corporate tax?": {
    "ar": "9. من هو المعفى من ضريبة الشركات؟"
  },

  "Certain categories of persons are exempt or treated differently. These include government entities performing sovereign functions, qualifying public benefit organisations, certain pension and social security funds, qualifying investment funds, and businesses in extractive industries which remain subject to emirate-level arrangements. Exemptions are subject to conditions and often require registration or approval.": {
    "ar": "تُعفى أو تعامل فئات معينة من الأشخاص بشكل مختلف، وتشمل الجهات الحكومية التي تمارس وظائف سيادية، ومنظمات النفع العام المؤهلة، وبعض صناديق التقاعد والضمان الاجتماعي، وصناديق الاستثمار المؤهلة، والشركات في الصناعات الاستخراجية الخاضعة لتنظيمات على مستوى الإمارات. وتخضع الإعفاءات لشروط وغالباً ما تتطلب التسجيل أو الموافقة."
  },

  "10. Will foreign investors or non-resident companies be taxed?": {
    "ar": "10. هل يخضع المستثمرون الأجانب أو الشركات غير المقيمة للضريبة؟"
  },

  "Non-residents are taxed on income that is sourced to the UAE and on income attributable to a permanent establishment in the UAE. Passive returns such as dividends, interest, and capital gains from foreign investments are generally outside the scope unless they are UAE sourced or attributed to a UAE permanent establishment.": {
    "ar": "يخضع غير المقيمين للضريبة على الدخل ذو المصدر الإماراتي وعلى الدخل المنسوب إلى منشأة دائمة في الإمارات. وتكون العوائد السلبية مثل الأرباح والفوائد وأرباح رأس المال من الاستثمارات الأجنبية خارج النطاق عادة، ما لم تكن ذات مصدر إماراتي أو منسوبة إلى منشأة دائمة داخل الإمارات."
  },

  "11. How does the domestic minimum top-up tax work?": {
    "ar": "11. كيف تعمل الضريبة المحلية التكميلية؟"
  },

  "From the beginning of 2025, the UAE applies a domestic top-up mechanism that requires large multinational groups with consolidated global revenue above specified thresholds to pay an effective minimum tax. The mechanism is intended to align the UAE with the global minimum tax standards agreed at the international level. Affected groups will calculate their effective tax and if it falls below the agreed minimum they will pay a top-up tax under the domestic provisions.": {
    "ar": "اعتباراً من بداية عام 2025، تطبق الإمارات آلية ضريبة تكميلية محلية تتطلب من المجموعات متعددة الجنسيات التي تتجاوز إيراداتها العالمية حدوداً معينة دفع ضريبة فعالة دنيا. وتهدف هذه الآلية إلى مواءمة الإمارات مع معايير الحد الأدنى العالمي للضريبة المتفق عليها دولياً. وستحسب المجموعات المتأثرة معدل الضريبة الفعّال، وإذا كان أقل من الحد الأدنى المتفق عليه، ستدفع ضريبة تكميلية بموجب الأحكام المحلية."
  },

  "12. What are the key compliance steps companies must take?": {
    "ar": "12. ما هي خطوات الامتثال الأساسية التي يجب على الشركات اتباعها؟"
  },

  "Register with the Federal Tax Authority and obtain a tax identification number": {
    "ar": "التسجيل لدى الهيئة الاتحادية للضرائب والحصول على رقم التعريف الضريبي"
  },

  "Maintain complete accounting records and retain supporting documentation for transactions": {
    "ar": "الاحتفاظ بسجلات محاسبية كاملة وحفظ المستندات الداعمة للمعاملات"
  },

  "Prepare and file the corporate tax return through the EmaraTax portal within the statutory deadline": {
    "ar": "إعداد وتقديم الإقرار الضريبي للشركات عبر منصة إماراتاك ضمن المهلة القانونية"
  },

  "Pay any tax due by the filing deadline": {
    "ar": "دفع أي ضريبة مستحقة قبل الموعد النهائي للتقديم"
  },

  "Implement transfer pricing documentation where related party transactions exceed thresholds": {
    "ar": "إعداد مستندات تسعير التحويل عند تجاوز معاملات الأطراف ذات العلاقة للحدود المحددة"
  },

  "Consider group registration and small business relief options where applicable": {
    "ar": "النظر في خيارات التسجيل الجماعي وإعفاءات الشركات الصغيرة عند الاقتضاء"
  },
  "13. What documents are needed to file a corporate tax return?": {
    "ar": "13. ما هي المستندات المطلوبة لتقديم الإقرار الضريبي للشركات؟"
  },

  "The usual submission pack includes company financial statements prepared under IFRS, a tax registration certificate, records of revenue and expenses, depreciation schedules, supporting invoices, intercompany agreements, and any transfer pricing documentation required. Free zone entities and qualifying funds may need to provide additional evidence of qualifying activities and substance.": {
    "ar": "تشمل الحزمة المعتادة للتقديم البيانات المالية المعدّة وفق معايير IFRS، وشهادة التسجيل الضريبي، وسجلات الإيرادات والمصروفات، وجداول الإهلاك، والفواتير الداعمة، والاتفاقيات بين الشركات، وأي مستندات تسعير تحويل مطلوبة. كما قد تحتاج كيانات المناطق الحرة والصناديق المؤهلة إلى تقديم أدلة إضافية على الأنشطة المؤهلة والنشاط الفعلي."
  },

  "14. What are the filing deadlines and payment timings?": {
    "ar": "14. ما هي مواعيد التقديم والدفع؟"
  },

  "Tax returns must be filed and tax paid within nine months after the end of the relevant tax period. For example, a company with a calendar year-end of December 31st files by September 30th of the following year. Payment of tax is due at the same time as the return unless installment arrangements have been agreed.": {
    "ar": "يجب تقديم الإقرارات الضريبية ودفع الضريبة خلال تسعة أشهر من نهاية الفترة الضريبية ذات الصلة. فعلى سبيل المثال، تقدم الشركة التي تنتهي سنتها المالية في 31 ديسمبر إقرارها بحلول 30 سبتمبر من العام التالي. ويُستحق دفع الضريبة في نفس وقت تقديم الإقرار ما لم تُعتمد ترتيبات للتقسيط."
  },

  "15. What penalties apply for non-compliance?": {
    "ar": "15. ما هي العقوبات المترتبة على عدم الامتثال؟"
  },

  "Penalties vary by breach and include fixed and percentage-based sanctions. Examples include administrative penalties for late registration, monthly penalties for late filing, interest and fines for late payment, and larger penalties for incorrect or false returns. Repeat breaches and deliberate concealment attract higher fines and potential criminal exposure.": {
    "ar": "تختلف العقوبات حسب نوع المخالفة وتشمل غرامات ثابتة ونسبية. ومن الأمثلة: الغرامات الإدارية على التأخر في التسجيل، والغرامات الشهرية على التأخر في التقديم، والفوائد والغرامات على التأخر في السداد، وغرامات أكبر على الإقرارات غير الصحيحة أو المزيفة. وتؤدي المخالفات المتكررة أو الإخفاء المتعمد إلى غرامات أعلى ومخاطر قانونية محتملة."
  },

  "16. What reliefs and special rules exist?": {
    "ar": "16. ما هي الإعفاءات والقواعد الخاصة المتاحة؟"
  },

  "Small business relief is available for qualifying small enterprises which meet the turnover and other eligibility tests for a limited period": {
    "ar": "يتوفر إعفاء للشركات الصغيرة المؤهلة التي تستوفي معايير حجم الأعمال وغيرها من شروط الأهلية لفترة محدودة"
  },

  "Losses may be carried forward without time limit but may only offset up to seventy-five percent of taxable income in any year": {
    "ar": "يمكن ترحيل الخسائر دون حد زمني، ولكن يمكنها فقط تعويض ما يصل إلى 75٪ من الدخل الخاضع للضريبة في أي سنة"
  },

  "Group relief can allow the transfer of tax losses between members of a tax group where ownership and residency conditions are met": {
    "ar": "يمكن أن يسمح الإعفاء الجماعي بنقل الخسائر الضريبية بين أعضاء المجموعة الضريبية عند استيفاء شروط الملكية والإقامة"
  },

  "17. What is the transfer pricing regime?": {
    "ar": "17. ما هو نظام تسعير التحويل؟"
  },

  "Related party transactions must reflect arm's length pricing. Companies above the relevant revenue thresholds must prepare contemporaneous transfer pricing documentation, including local and master files where required. Advance Pricing Agreements will be available to provide certainty on pricing methodologies for certain taxpayers.": {
    "ar": "يجب أن تعكس المعاملات بين الأطراف ذات العلاقة مبدأ السعر المحايد. كما يجب على الشركات التي تتجاوز حدود الإيرادات المعنية إعداد مستندات تسعير تحويل متزامنة، بما في ذلك الملف المحلي والملف الرئيسي عند الاقتضاء. وستتوفر اتفاقيات التسعير المسبق لتوفير يقين أكبر بشأن منهجيات التسعير لبعض المكلفين."
  },

  "18. Do companies need audited financial statements?": {
    "ar": "18. هل تحتاج الشركات إلى بيانات مالية مدققة؟"
  },

  "Companies generally file tax returns using accounting records prepared under IFRS. Audit requirements depend on local legislation and size. Where financial statements are audited, those audited accounts are used as the starting point for tax calculations. Some small businesses with revenue below thresholds may use unaudited accounts but must still prepare reliable financial statements.": {
    "ar": "تقدم الشركات عادة إقراراتها الضريبية باستخدام سجلات محاسبية معدّة وفق IFRS. وتعتمد متطلبات التدقيق على التشريعات المحلية وحجم المنشأة. وعندما تخضع البيانات المالية للتدقيق، تُستخدم الحسابات المدققة كمرجع أساسي لاحتساب الضريبة. ويمكن لبعض الشركات الصغيرة ذات الإيرادات المنخفضة استخدام بيانات غير مدققة، لكنها ملزمة بإعداد بيانات مالية موثوقة."
  },

  "19. What happens when a company changes its financial year?": {
    "ar": "19. ماذا يحدث عندما تغيّر الشركة سنتها المالية؟"
  },

  "If a company changes its accounting period, the tax period changes accordingly. Reporting and filing deadlines will align to the new tax period. Companies should notify the Federal Tax Authority and plan filings to avoid penalties.": {
    "ar": "إذا غيرت الشركة سنتها المالية، تتغير الفترة الضريبية تبعاً لذلك. وستتوافق مواعيد التقارير والتقديم مع الفترة الجديدة. ويجب على الشركات إخطار الهيئة الاتحادية للضرائب والتخطيط للتقديم لتجنب الغرامات."
  },

  "20. Are VAT and corporate tax linked?": {
    "ar": "20. هل ترتبط ضريبة القيمة المضافة بضريبة الشركات؟"
  },

  "VAT is a separate indirect tax. Businesses may be liable for both VAT and corporate tax. Input VAT is treated differently for tax base computation. Only irrecoverable VAT may be considered in computing taxable income where the law permits. VAT registration and corporate tax registration are independent obligations.": {
    "ar": "ضريبة القيمة المضافة ضريبة غير مباشرة منفصلة. وقد تكون الشركات مطالبة بدفع ضريبة القيمة المضافة وضريبة الشركات معاً. ويتم التعامل مع ضريبة المدخلات بشكل مختلف عند احتساب الوعاء الضريبي، ولا يُؤخذ في الاعتبار إلا ضريبة القيمة المضافة غير القابلة للاسترداد عند السماح بذلك قانوناً. كما أن التسجيل في ضريبة القيمة المضافة والتسجيل في ضريبة الشركات التزامان مستقلان."
  },

  "21. How should companies prepare operationally?": {
    "ar": "21. كيف يجب أن تستعد الشركات من الناحية التشغيلية؟"
  },

  "Companies should conduct a business impact assessment to determine registration obligations, to identify accounting and systems changes, and to document the evidence required for tax positions. They should update contracts, train finance teams, and consider technology or advisory support to manage compliance.": {
    "ar": "يجب على الشركات إجراء تقييم لتأثير الضريبة على أعمالها لتحديد التزامات التسجيل، وتحديد التغييرات المطلوبة في المحاسبة والأنظمة، وتوثيق الأدلة اللازمة للمراكز الضريبية. كما يجب تحديث العقود، وتدريب فرق المالية، والنظر في الدعم التقني أو الاستشاري لإدارة الامتثال."
  },

  "22. Which activities qualify for free zone benefits?": {
    "ar": "22. ما الأنشطة التي تُعد مؤهلة للاستفادة من مزايا المناطق الحرة؟"
  },

  "Qualifying activities commonly include manufacturing, certain trading and logistics activities, fund management, treasury, and holding activities that meet the specific rules. Entities must demonstrate adequate substance and that they meet the criteria set out in free zone rules and guidance to retain the qualifying tax treatment.": {
    "ar": "تشمل الأنشطة المؤهلة عادةً التصنيع، وبعض أنشطة التجارة واللوجستيات، وإدارة الصناديق، وأنشطة الخزينة، وأنشطة الشركات القابضة التي تستوفي القواعد المحددة. ويجب على الكيانات إثبات النشاط الفعلي والامتثال للمعايير المنصوص عليها في لوائح وإرشادات المناطق الحرة للاحتفاظ بالمعاملة الضريبية المؤهلة."
  },

  "23. How are penalties for record-keeping enforced?": {
    "ar": "23. كيف تُطبق العقوبات المتعلقة بحفظ السجلات؟"
  },

  "The authority may impose fines for failure to keep accurate books, for not producing records on request, and for submitting incomplete or false information. Businesses should keep supporting evidence for all tax-related positions and ensure secure retention for the statutory period.": {
    "ar": "قد تفرض الهيئة غرامات على عدم الاحتفاظ بسجلات دقيقة، أو عدم تقديم السجلات عند الطلب، أو تقديم معلومات غير مكتملة أو غير صحيحة. ويجب على الشركات الاحتفاظ بأدلة داعمة لجميع المراكز الضريبية وضمان حفظها الآمن طوال المدة النظامية."
  },

  "24. What support does the Federal Tax Authority provide?": {
    "ar": "24. ما الدعم الذي توفره الهيئة الاتحادية للضرائب؟"
  },

  "The Federal Tax Authority publishes guidance, FAQs, and forms on the EmaraTax portal. The authority also issues interpretive guidance on technical issues such as transfer pricing, permanent establishment, qualifying free zone persons, and implementation of the top-up mechanism.": {
    "ar": "تنشر الهيئة الاتحادية للضرائب إرشادات وأسئلة متكررة ونماذج عبر منصة إماراتاك. كما تصدر توجيهات تفسيرية حول المسائل الفنية مثل تسعير التحويل، والمنشأة الدائمة، والأشخاص المؤهلين في المناطق الحرة، وتطبيق آلية الضريبة التكميلية."
  },

  "25. Where can I find official information and updates?": {
    "ar": "25. أين يمكنني العثور على المعلومات والتحديثات الرسمية؟"
  },

  "Consult the Ministry of Finance and the Federal Tax Authority websites for the latest legislative texts, ministerial decisions, and official guidance. These sources provide the authoritative rules and any subsequent clarifications.": {
    "ar": "يُنصح بالرجوع إلى مواقع وزارة المالية والهيئة الاتحادية للضرائب للاطلاع على أحدث النصوص التشريعية والقرارات الوزارية والإرشادات الرسمية. وتوفر هذه المصادر القواعد المعتمدة وأي توضيحات لاحقة."
  },

  "Practical Checklist for First-Time Registrants": {
    "ar": "قائمة عملية للمسجلين لأول مرة"
  },

  "Confirm whether the entity is a resident taxable person or a non-resident with UAE-sourced income": {
    "ar": "تأكيد ما إذا كان الكيان خاضعاً للضريبة كمقيم أو كغير مقيم يحقق دخلاً ذا مصدر إماراتي"
  },

  "Gather your financial statements, registration documents, and basic corporate records": {
    "ar": "جمع البيانات المالية ومستندات التسجيل والسجلات المؤسسية الأساسية"
  },

  "Register on the EmaraTax portal and obtain a tax registration number": {
    "ar": "التسجيل في منصة إماراتاك والحصول على رقم تسجيل ضريبي"
  },

  "Map accounting profit to the tax base and identify likely adjustments": {
    "ar": "مواءمة الربح المحاسبي مع الوعاء الضريبي وتحديد التعديلات المحتملة"
  },

  "Review related party agreements and prepare transfer pricing documentation when thresholds are met": {
    "ar": "مراجعة اتفاقيات الأطراف ذات العلاقة وإعداد مستندات تسعير التحويل عند استيفاء الحدود المطلوبة"
  },

  "Evaluate free zone status and whether qualifying income tests are met": {
    "ar": "تقييم حالة المنطقة الحرة وما إذا كانت اختبارات الدخل المؤهل مستوفاة"
  },

  "Train finance staff on filing and retention obligations and on the nine-month deadline for filing and payment": {
    "ar": "تدريب فريق المالية على التقديم وحفظ السجلات والالتزام بمهلة التسعة أشهر للتقديم والدفع"
  },

  "Concluding Note": {
    "ar": "ملاحظة ختامية"
  },

  "The UAE corporate tax regime balances international obligations with incentives that retain the country as a business-friendly jurisdiction. Proper preparation, robust record keeping, and early assessment of transfer pricing and free zone status are the foundations of good compliance. For many businesses, improving financial controls and consolidating tax data into a single platform reduces risk and simplifies filings.": {
    "ar": "يوازن نظام ضريبة الشركات الإماراتي بين الالتزامات الدولية والحوافز التي تحافظ على مكانة الدولة كوجهة ملائمة للأعمال. ويُعد الإعداد الجيد، وحفظ السجلات بدقة، والتقييم المبكر لتسعير التحويل وحالة المنطقة الحرة من أساسيات الامتثال السليم. وبالنسبة لكثير من الشركات، يساعد تحسين الرقابة المالية وتوحيد البيانات الضريبية في منصة واحدة على تقليل المخاطر وتبسيط عمليات التقديم."
  },

  "Systems such as Accqrate can help keep financial records organised and make tax reporting more straightforward while preserving existing operational workflows.": {
    "ar": "تساعد الأنظمة مثل أكيوريت في تنظيم السجلات المالية وتبسيط إعداد التقارير الضريبية مع الحفاظ على سير العمل التشغيلي القائم."
  },

  "Digital transformation in the UAE has accelerated rapidly, and the shift toward mandatory e-invoicing by 2026 makes Digital Signature Certificates one of the core identity and security tools for businesses. They now play a central role in tax compliance, corporate authentication, contract execution, and numerous government processes.": {
    "ar": "تسارع التحول الرقمي في الإمارات بشكل كبير، ومع الانتقال نحو الفوترة الإلكترونية الإلزامية بحلول عام 2026 أصبحت شهادات التوقيع الرقمي من الأدوات الأساسية للهوية والأمان في الشركات. وهي الآن تلعب دوراً محورياً في الامتثال الضريبي، والتحقق المؤسسي، وتنفيذ العقود، والعديد من العمليات الحكومية."
  },

  "Understanding how digital signatures work and how to obtain, use, and manage Digital Signature Certificates is essential for every organisation preparing for the new regulatory environment.": {
    "ar": "فهم كيفية عمل التوقيعات الرقمية وكيفية الحصول على شهادات التوقيع الرقمي واستخدامها وإدارتها يعد أمراً أساسياً لكل مؤسسة تستعد للبيئة التنظيمية الجديدة."
  },

  "This guide breaks down the concept of digital signatures, how digital certificates operate in the UAE, and where they fit into business and government workflows.": {
    "ar": "يوضح هذا الدليل مفهوم التوقيعات الرقمية، وكيف تعمل الشهادات الرقمية في الإمارات، وأين تندمج داخل سير العمل التجاري والحكومي."
  },

  "Meaning of a Digital Signature": {
    "ar": "معنى التوقيع الرقمي"
  },

  "A digital signature is the electronic equivalent of signing a document by hand, except it is far more secure. It uses cryptographic techniques to establish the identity of the signer and to confirm that the document has remained unchanged from the moment it was signed.": {
    "ar": "التوقيع الرقمي هو النسخة الإلكترونية من التوقيع بخط اليد، لكنه أكثر أماناً بكثير. يستخدم تقنيات تشفيرية لإثبات هوية الموقّع وللتأكد من أن المستند لم يتغير منذ لحظة توقيعه."
  },

  "Digital signatures are used across legal, financial, governmental, and corporate sectors because they provide a verifiable and tamper-proof method of approving documents and transactions.": {
    "ar": "تُستخدم التوقيعات الرقمية في القطاعات القانونية والمالية والحكومية والمؤسسية لأنها توفر وسيلة تحقق موثوقة وغير قابلة للعبث للموافقة على المستندات والمعاملات."
  },

  "Meaning of a Digital Signature Certificate": {
    "ar": "معنى شهادة التوقيع الرقمي"
  },

  "A digital signature by itself is only a cryptographic code. A Digital Signature Certificate, however, is an electronic credential issued by an authorised certification authority that verifies the identity of the signer.": {
    "ar": "التوقيع الرقمي وحده عبارة عن رمز تشفيري فقط. أما شهادة التوقيع الرقمي فهي وثيقة إلكترونية تصدرها جهة اعتماد مخوّلة للتحقق من هوية الموقّع."
  },

  "In other words, the certificate acts as your official digital identity.": {
    "ar": "وبعبارة أخرى، تعمل الشهادة كهويتك الرقمية الرسمية."
  },

  "It is issued after a thorough verification process and contains key information such as your name, organisation, public key, issuing authority, and validity period.": {
    "ar": "تُصدر الشهادة بعد عملية تحقق دقيقة وتتضمن معلومات أساسية مثل الاسم، والجهة، والمفتاح العام، وجهة الإصدار، وفترة الصلاحية."
  },

  "You cannot generate a digital signature without having a valid digital certificate.": {
    "ar": "لا يمكن إنشاء توقيع رقمي دون وجود شهادة رقمية صالحة."
  },

  "Difference Between Digital Signatures and Digital Signature Certificates": {
    "ar": "الفرق بين التوقيعات الرقمية وشهادات التوقيع الرقمي"
  },

  "Although the two concepts are closely linked, they serve different purposes.": {
    "ar": "على الرغم من ارتباط المفهومين ارتباطاً وثيقاً، فإن لكل منهما غرضاً مختلفاً."
  },

  "Digital Signature": {
    "ar": "التوقيع الرقمي"
  },

  "Represents the act of electronically signing a document and proving that it has not been altered.": {
    "ar": "يمثل عملية توقيع مستند إلكترونياً وإثبات عدم تغييره."
  },

  "Digital Signature Certificate": {
    "ar": "شهادة التوقيع الرقمي"
  },

  "Represents the digital identification issued to the signer that allows the signature to be created and verified.": {
    "ar": "تمثل الهوية الرقمية الصادرة للموقّع والتي تتيح إنشاء التوقيع والتحقق منه."
  },

  "Without the certificate, a signature carries no legal weight. Without the signature, the certificate has no functional purpose.": {
    "ar": "من دون الشهادة لا يكون للتوقيع أي قيمة قانونية، ومن دون التوقيع لا يكون للشهادة أي فائدة عملية."
  },

  "How Digital Signatures Work": {
    "ar": "كيفية عمل التوقيعات الرقمية"
  },

  "Every digital signature relies on two mathematically linked codes: a private signing key and a public verification key.": {
    "ar": "يعتمد كل توقيع رقمي على مفتاحين مرتبطين رياضياً: مفتاح توقيع خاص ومفتاح تحقق عام."
  },

  "Here is how the process works in simple terms:": {
    "ar": "وفيما يلي طريقة عمل العملية ببساطة:"
  },

  "A unique digital fingerprint of the document is created through encryption.": {
    "ar": "يُنشأ بصمة رقمية فريدة للمستند عبر التشفير."
  },

  "This fingerprint is encrypted using the signer's private key. The encrypted fingerprint becomes the digital signature.": {
    "ar": "يتم تشفير هذه البصمة باستخدام المفتاح الخاص للموقّع، لتصبح البصمة المشفرة هي التوقيع الرقمي."
  },

  "Anyone receiving the document can verify the signature using the signer's public key.": {
    "ar": "يمكن لأي مستلم للمستند التحقق من التوقيع باستخدام المفتاح العام للموقّع."
  },

  "If the fingerprint matches, it proves two things:": {
    "ar": "إذا تطابقت البصمة، فهذا يثبت أمرين:"
  },

  "The document genuinely came from the signer.": {
    "ar": "أن المستند صادر بالفعل عن الموقّع."
  },

  "The document has not been altered since it was signed.": {
    "ar": "أن المستند لم يتم تغييره منذ توقيعه."
  },

  "The system is secure because the private key never leaves the signer's control and cannot be reverse-engineered from the public key.": {
    "ar": "النظام آمن لأن المفتاح الخاص لا يغادر حيازة الموقّع ولا يمكن استنتاجه من المفتاح العام."
  },

  "How to Obtain a Digital Signature Certificate in the UAE": {
    "ar": "كيفية الحصول على شهادة توقيع رقمي في الإمارات"
  },

  "Businesses and individuals in the UAE can obtain a DSC through recognised Digital Certificate Service Providers. The UAE also uses the ICP (Identity, Citizenship, Customs and Port Security) system, which allows Emirates ID cards to function as a built-in digital certificate for online authentication.": {
    "ar": "يمكن للشركات والأفراد في الإمارات الحصول على شهادة توقيع رقمي من خلال مزودي خدمات الشهادات الرقمية المعتمدين. كما تستخدم الإمارات نظام الهوية والجنسية والجمارك وأمن الموانئ (ICP)، والذي يسمح لبطاقة الهوية الإماراتية بالعمل كشهادة رقمية مدمجة للمصادقة الإلكترونية."
  },
  "The process to obtain a DSC generally includes:": {
    "ar": "تشمل عملية الحصول على شهادة التوقيع الرقمي (DSC) عادة ما يلي:"
  },

  "Selecting a recognised UAE Digital Certificate Service Provider.": {
    "ar": "اختيار مزوّد خدمة شهادات رقمية معتمد في دولة الإمارات."
  },

  "Completing the registration on the MOHRE portal or the provider's portal.": {
    "ar": "إكمال عملية التسجيل عبر بوابة وزارة الموارد البشرية أو عبر بوابة المزوّد."
  },

  "Submitting identity and residency documentation such as passport or Emirates ID.": {
    "ar": "تقديم مستندات الهوية والإقامة مثل جواز السفر أو بطاقة الهوية الإماراتية."
  },

  "Completing the identity verification process online or in person.": {
    "ar": "إتمام عملية التحقق من الهوية عبر الإنترنت أو بالحضور الشخصي."
  },

  "Receiving the DSC and installing it on your device or storing it on a secure hardware token.": {
    "ar": "استلام شهادة التوقيع الرقمي وتثبيتها على الجهاز أو تخزينها على جهاز مادي آمن."
  },

  "Ensuring the private key is stored safely because it cannot be recovered once lost.": {
    "ar": "ضمان حفظ المفتاح الخاص بأمان لأنه لا يمكن استعادته في حال فقدانه."
  },

  "The government registration fee currently starts at one hundred and twenty dirhams. Additional service fees may apply through private providers.": {
    "ar": "تبدأ رسوم التسجيل الحكومية حالياً من مئة وعشرين درهماً، وقد تُطبق رسوم إضافية من قبل المزوّدين الخاصين."
  },

  "Where Digital Signature Certificates Are Used in the UAE": {
    "ar": "أين تُستخدم شهادات التوقيع الرقمي في الإمارات"
  },

  "Digital certificates are already part of several core workflows across government and private sectors. Key use cases include:": {
    "ar": "تُعد الشهادات الرقمية جزءاً من عدة مسارات عمل أساسية في القطاعين الحكومي والخاص. وتشمل أبرز حالات الاستخدام ما يلي:"
  },

  "Corporate and Government Authentication": {
    "ar": "المصادقة المؤسسية والحكومية"
  },

  "Login to government portals, tax systems, immigration platforms, company registries, and compliance systems.": {
    "ar": "تسجيل الدخول إلى البوابات الحكومية، وأنظمة الضرائب، ومنصات الهجرة، وسجلات الشركات، وأنظمة الامتثال."
  },

  "Legal and Contractual Approvals": {
    "ar": "الموافقات القانونية والتعاقدية"
  },

  "Contracts, agreements, tenancy documents, declarations, and legal submissions that require verified signatures.": {
    "ar": "العقود والاتفاقيات ومستندات الإيجار والتصريحات والتقديمات القانونية التي تتطلب توقيعات موثقة."
  },

  "E-Invoicing and Regulatory Compliance": {
    "ar": "الفوترة الإلكترونية والامتثال التنظيمي"
  },

  "Generation and authentication of structured e-invoices. This will become essential as the UAE moves toward full e-invoicing compliance.": {
    "ar": "إنشاء الفواتير الإلكترونية المهيكلة والتحقق منها. وسيصبح ذلك أمراً أساسياً مع انتقال الإمارات نحو الامتثال الكامل للفوترة الإلكترونية."
  },

  "Trade and Import-Export Documentation": {
    "ar": "مستندات التجارة والاستيراد والتصدير"
  },

  "Digital signing is mandatory for many international trade submissions and DGFT-linked workflows.": {
    "ar": "التوقيع الرقمي إلزامي للعديد من معاملات التجارة الدولية والمسارات المرتبطة بجهات التنظيم."
  },

  "Banking and Financial Transactions": {
    "ar": "المعاملات المصرفية والمالية"
  },

  "Access to corporate banking portals, fund transfer approvals, and trade finance documentation.": {
    "ar": "الوصول إلى بوابات الخدمات المصرفية للشركات، والموافقة على تحويل الأموال، ومستندات تمويل التجارة."
  },

  "Court Submissions and Evidence": {
    "ar": "التقديمات القضائية والأدلة"
  },

  "Digitally signed documents retain their integrity and remain admissible as legal proof.": {
    "ar": "تحتفظ المستندات الموقّعة رقمياً بسلامتها وتظل مقبولة كدليل قانوني."
  },

  "Benefits of Digital Signature Certificates": {
    "ar": "فوائد شهادات التوقيع الرقمي"
  },

  "Digital certificates bring several operational, legal, and security advantages:": {
    "ar": "تقدم الشهادات الرقمية عدة مزايا تشغيلية وقانونية وأمنية، من بينها:"
  },

  "Verified Identity": {
    "ar": "هوية موثقة"
  },

  "A certificate binds your identity to a secure cryptographic key, ensuring that every signed document can be traced to the correct individual or entity.": {
    "ar": "تربط الشهادة هويتك بمفتاح تشفيري آمن، مما يضمن إمكانية إرجاع كل مستند موقّع إلى الشخص أو الجهة الصحيحة."
  },

  "Tamper-Proof Documentation": {
    "ar": "مستندات غير قابلة للعبث"
  },

  "Any alteration to a signed document instantly invalidates the signature, protecting the integrity of your records.": {
    "ar": "أي تعديل على المستند الموقّع يؤدي مباشرةً إلى إبطال التوقيع، مما يحمي سلامة سجلاتك."
  },

  "Stronger Compliance": {
    "ar": "امتثال أقوى"
  },

  "DSCs support compliance with upcoming e-invoicing mandates, online government processes, tax filings, and regulated industry requirements.": {
    "ar": "تدعم شهادات التوقيع الرقمي الامتثال لمتطلبات الفوترة الإلكترونية القادمة، والعمليات الحكومية الرقمية، والتقديمات الضريبية، ومتطلبات القطاعات المنظمة."
  },

  "Faster Approvals": {
    "ar": "موافقات أسرع"
  },

  "Contracts, financial submissions, and tax documents can be approved instantly without physical presence.": {
    "ar": "يمكن اعتماد العقود والمستندات المالية والضريبية فوراً دون الحاجة إلى الحضور الشخصي."
  },

  "Legally Binding": {
    "ar": "ملزمة قانونياً"
  },

  "A DSC carries the same legal standing as a handwritten signature under UAE law.": {
    "ar": "تحمل شهادة التوقيع الرقمي نفس الحجية القانونية للتوقيع الخطي بموجب القانون الإماراتي."
  },

  "Timestamp Verification": {
    "ar": "التحقق من الطابع الزمني"
  },

  "Every digital signature includes the exact date and time of signing, which is valuable for audits, procurement, and regulatory submissions.": {
    "ar": "يتضمن كل توقيع رقمي التاريخ والوقت الدقيقين للتوقيع، مما يُعد ذا قيمة للمراجعات الشرعية والمشتريات والتقديمات التنظيمية."
  },

  "Seamless Integration with Emirates ID": {
    "ar": "تكامل سلس مع بطاقة الهوية الإماراتية"
  },

  "The ICP Validation Gateway enables Emirates ID cards to function as digital signing tools for online services.": {
    "ar": "يتيح نظام التحقق ICP لبطاقة الهوية الإماراتية العمل كأداة للتوقيع الرقمي في الخدمات الإلكترونية."
  },

  "Why DSCs Will Become Essential for UAE Businesses": {
    "ar": "لماذا ستصبح شهادات التوقيع الرقمي ضرورية للشركات في الإمارات"
  },

  "The UAE's upcoming Peppol-based e-invoicing system requires every e-invoice to be authenticated and transmitted securely. A digital signature certificate provides the identity and verification layer needed for this process.": {
    "ar": "يتطلب نظام الفوترة الإلكترونية الإماراتي المرتقب والمعتمد على منصة Peppol توثيق كل فاتورة إلكترونية وإرسالها بشكل آمن. وتوفر شهادة التوقيع الرقمي طبقة الهوية والتحقق اللازمة لهذه العملية."
  },

  "Businesses that adopt DSCs early will be able to integrate seamlessly with the new e-billing ecosystem and avoid last-minute compliance challenges.": {
    "ar": "ستتمكن الشركات التي تعتمد شهادات التوقيع الرقمي مبكراً من الاندماج بسهولة مع منظومة الفوترة الإلكترونية الجديدة وتجنب تحديات الامتثال في اللحظات الأخيرة."
  },

  "Digital Signature Certificates are becoming one of the core identity and security tools that support the UAE's transition to a fully digital business environment. From e-invoicing and taxation to banking, trade, and legal approvals, DSCs ensure authenticity, protect data integrity, and accelerate decision-making.": {
    "ar": "أصبحت شهادات التوقيع الرقمي إحدى أدوات الهوية والأمان الأساسية التي تدعم انتقال الإمارات نحو بيئة أعمال رقمية بالكامل. فمن الفوترة الإلكترونية والضرائب إلى الخدمات المصرفية والتجارة والموافقات القانونية، تضمن هذه الشهادات الأصالة وتحمي سلامة البيانات وتُسرّع اتخاذ القرار."
  },

  "As the UAE moves toward mandatory e-invoicing and wider digital governance, DSCs will become indispensable for every business that wants to remain compliant, efficient, and competitive.": {
    "ar": "مع توجه دولة الإمارات نحو الفوترة الإلكترونية الإلزامية والحوكمة الرقمية الشاملة، ستصبح شهادات التوقيع الرقمي أمراً لا غنى عنه لكل شركة تسعى للالتزام والفعالية والتنافسية."
  },

  "The UAE is preparing for one of the most significant tax technology reforms in the region with the rollout of mandatory electronic invoicing under its new Electronic Invoicing System. The transition will begin with a controlled pilot in July 2026, followed by phased enforcement for VAT-registered businesses from 2027 onwards. The reform aligns the UAE with international best practices, strengthens VAT oversight, and creates a transparent, fully digital invoicing environment for B2B and B2G transactions.": {
    "ar": "تستعد دولة الإمارات لإحدى أهم إصلاحات التكنولوجيا الضريبية في المنطقة مع تطبيق الفوترة الإلكترونية الإلزامية ضمن نظام الفوترة الإلكتروني الجديد. وسيبدأ الانتقال بمرحلة تجريبية خاضعة للرقابة في يوليو 2026، يتبعها التطبيق التدريجي للمنشآت المسجلة في ضريبة القيمة المضافة اعتباراً من 2027. ويأتي هذا الإصلاح متماشياً مع أفضل الممارسات الدولية، ويعزز الرقابة على ضريبة القيمة المضافة، ويُنشئ بيئة فوترة رقمية شفافة بالكامل لمعاملات الأعمال بين الشركات وبين الشركات والحكومة."
  },

  "This article provides a clear and detailed overview of the UAE's e-invoicing framework, including timelines, mandatory requirements, the role of Accredited Service Providers, and the expected compliance obligations for businesses operating in the country.": {
    "ar": "يقدم هذا المقال نظرة واضحة ومفصلة عن إطار الفوترة الإلكترونية في الإمارات، بما في ذلك الجداول الزمنية والمتطلبات الإلزامية ودور مزودي الخدمات المعتمدين، إضافة إلى التزامات الامتثال المتوقعة للشركات العاملة في الدولة."
  },

  "What E-Invoicing Means in the UAE": {
    "ar": "ما هي الفوترة الإلكترونية في الإمارات"
  },

  "E-invoicing in the UAE refers to issuing, transmitting, receiving, and storing invoices in structured digital formats. These formats must be machine-readable and must follow the standards defined by the Ministry of Finance. Unlike PDFs or paper documents, a valid e-invoice must be entirely digital from creation to submission.": {
    "ar": "تشير الفوترة الإلكترونية في الإمارات إلى إصدار الفواتير ونقلها واستلامها وتخزينها بصيغ رقمية مهيكلة. ويجب أن تكون هذه الصيغ قابلة للقراءة آلياً وأن تتبع المعايير التي تحددها وزارة المالية. وعلى عكس ملفات PDF أو المستندات الورقية، يجب أن تكون الفاتورة الإلكترونية صالحة رقمياً بالكامل منذ إنشائها وحتى تقديمها."
  },

  "A compliant UAE e-invoice requires the following elements:": {
    "ar": "تتطلب الفاتورة الإلكترونية المتوافقة في الإمارات العناصر التالية:"
  },

  "It must be generated in XML or JSON formats using UBL or PINT standards": {
    "ar": "يجب إنشاؤها بصيغة XML أو JSON باستخدام معايير UBL أو PINT"
  },

  "It must be transmitted through an Accredited Service Provider": {
    "ar": "يجب إرسالها من خلال مزوّد خدمة معتمد"
  },

  "It must be reported to the Federal Tax Authority's e-Billing system for monitoring": {
    "ar": "يجب الإبلاغ عنها إلى نظام الفوترة الإلكتروني التابع للهيئة الاتحادية للضرائب للمراقبة"
  },

  "It must be stored in the UAE as per the Tax Procedures Law": {
    "ar": "يجب تخزينها داخل الإمارات وفقاً لقانون الإجراءات الضريبية"
  },

  "Unstructured formats such as PDF, JPG, or paper cannot be treated as e-invoices.": {
    "ar": "لا يمكن اعتبار الصيغ غير المهيكلة مثل PDF أو JPG أو الورق فواتير إلكترونية."
  },

  "Implementation Timeline for UAE E-Invoicing": {
    "ar": "الجدول الزمني لتطبيق الفوترة الإلكترونية في الإمارات"
  },

  "On 28 September 2025, Ministerial Decisions 243 and 244 formally defined the implementation stages.": {
    "ar": "في 28 سبتمبر 2025، حدد القراران الوزاريان 243 و244 مراحل التطبيق رسمياً."
  },

  "Pilot Programme": {
    "ar": "البرنامج التجريبي"
  },

  "A selected group of businesses will begin issuing structured invoices from 1 July 2026.": {
    "ar": "سيبدأ عدد مختار من الشركات بإصدار الفواتير المهيكلة اعتباراً من 1 يوليو 2026."
  },

  "Voluntary Adoption": {
    "ar": "الاعتماد الطوعي"
  },

  "Any business may join the system voluntarily starting from July 2026.": {
    "ar": "يمكن لأي شركة الانضمام إلى النظام طوعاً بدءاً من يوليو 2026."
  },

  "Phase 1: Large businesses with annual revenue of fifty million dirhams or more": {
    "ar": "المرحلة الأولى: الشركات الكبيرة التي تزيد إيراداتها السنوية عن خمسين مليون درهم"
  },

  "Deadline to appoint an Accredited Service Provider: 31 July 2026": {
    "ar": "الموعد النهائي لتعيين مزوّد خدمة معتمد: 31 يوليو 2026"
  },

  "Mandatory e-invoicing start date: 1 January 2027": {
    "ar": "تاريخ بدء التطبيق الإلزامي للفوترة الإلكترونية: 1 يناير 2027"
  },

  "Phase 2: Businesses with annual revenue below fifty million dirhams": {
    "ar": "المرحلة الثانية: الشركات ذات الإيرادات السنوية الأقل من خمسين مليون درهم"
  },

  "Deadline to appoint an ASP: 31 March 2027": {
    "ar": "الموعد النهائي لتعيين مزوّد خدمة معتمد: 31 مارس 2027"
  },

  "Mandatory e-invoicing start date: 1 July 2027": {
    "ar": "تاريخ بدء التطبيق الإلزامي: 1 يوليو 2027"
  },

  "Phase 3: All UAE government entities": {
    "ar": "المرحلة الثالثة: جميع الجهات الحكومية في الإمارات"
  },

  "Mandatory e-invoicing start date: 1 October 2027": {
    "ar": "تاريخ بدء التطبيق الإلزامي: 1 أكتوبر 2027"
  },

  "Core Requirements for E-Invoicing in the UAE": {
    "ar": "المتطلبات الأساسية للفوترة الإلكترونية في الإمارات"
  },

  "Businesses must meet all technical and operational requirements defined under the Electronic Invoicing System.": {
    "ar": "يجب على الشركات الالتزام بجميع المتطلبات الفنية والتشغيلية المحددة ضمن نظام الفوترة الإلكتروني."
  },

  "Structured digital formats only. Invoices must be issued in XML or JSON": {
    "ar": "يُسمح فقط بالصيَغ الرقمية المهيكلة. يجب إصدار الفواتير بصيغة XML أو JSON"
  },

  "Use of UBL or Peppol PINT. These standards define the structure and data elements of the invoice": {
    "ar": "استخدام معايير UBL أو Peppol PINT التي تحدد هيكل الفاتورة وعناصر البيانات"
  },

  "Transmission through an Accredited Service Provider. ASPs play a central role in validation and submission": {
    "ar": "إرسال الفاتورة عبر مزوّد خدمة معتمد، حيث يلعب دوراً أساسياً في التحقق والتقديم"
  },

  "Timely submission. Invoices and credit notes must be transmitted within fourteen days from the date of the taxable transaction": {
    "ar": "التقديم في الوقت المحدد: يجب إرسال الفواتير والملاحظات الدائنة خلال أربعة عشر يوماً من تاريخ المعاملة الخاضعة للضريبة"
  },

  "Mandatory data dictionary. Invoices must include all required fields such as supplier and buyer information, TRN, invoice metadata, tax summary, and payment details": {
    "ar": "القاموس البياني الإلزامي: يجب أن تتضمن الفواتير جميع الحقول المطلوبة مثل بيانات المورد والمشتري، رقم التسجيل الضريبي، بيانات الفاتورة، ملخص الضريبة، وتفاصيل الدفع"
  },

  "Digital credit notes. All corrections must follow the same structured format as invoices": {
    "ar": "الملاحظات الدائنة الرقمية: يجب أن تتبع جميع التصحيحات نفس الصيغة المهيكلة الخاصة بالفواتير"
  },

  "Local data storage. All invoice data must be stored within the UAE": {
    "ar": "التخزين المحلي للبيانات: يجب تخزين جميع بيانات الفواتير داخل الإمارات"
  },

  "Reporting system failures. Any system disruption must be reported to the FTA within two business days": {
    "ar": "الإبلاغ عن أعطال النظام: يجب الإبلاغ عن أي انقطاع للنظام للهيئة الاتحادية للضرائب خلال يومي عمل"
  },

  "How the UAE E-Invoicing Process Works": {
    "ar": "كيفية عمل عملية الفوترة الإلكترونية في الإمارات"
  },

  "The UAE uses a structured, technology-driven workflow supported by ERP systems and Accredited Service Providers.": {
    "ar": "تستخدم الإمارات سير عمل مهيكلاً قائماً على التكنولوجيا ومدعوماً بأنظمة ERP ومزوّدي الخدمات المعتمدين."
  },

  "Step 1: Appoint an Accredited Service Provider": {
    "ar": "الخطوة 1: تعيين مزوّد خدمة معتمد"
  },

  "The ASP collaborates with the business and its ERP team to map internal data to the Ministry of Finance data dictionary.": {
    "ar": "يتعاون مزوّد الخدمة مع الشركة وفريق ERP لملاءمة البيانات الداخلية مع القاموس البياني لوزارة المالية."
  },

  "Step 2: Map and standardize invoice data": {
    "ar": "الخطوة 2: مواءمة وتوحيد بيانات الفاتورة"
  },

  "The ERP must capture all mandatory fields including item details, VAT amounts, tax rate, and supplier identification information.": {
    "ar": "يجب أن يلتقط نظام ERP جميع الحقول الإلزامية بما في ذلك تفاصيل البنود، مبالغ ضريبة القيمة المضافة، معدل الضريبة، وبيانات هوية المورد."
  },

  "Step 3: Convert invoice data into approved formats": {
    "ar": "الخطوة 3: تحويل بيانات الفاتورة إلى الصيغ المعتمدة"
  },

  "The ASP converts the invoice into XML or JSON using UBL or Peppol PINT.": {
    "ar": "يقوم مزوّد الخدمة بتحويل الفاتورة إلى صيغة XML أو JSON باستخدام UBL أو Peppol PINT."
  },

  "Step 4: Validate invoice content": {
    "ar": "الخطوة 4: التحقق من محتوى الفاتورة"
  },

  "The ASP validates the invoice structure, corrects errors, and enriches missing information such as standardized codes.": {
    "ar": "يتحقق مزوّد الخدمة من هيكل الفاتورة، ويصحيح الأخطاء، ويُكمل المعلومات الناقصة مثل الأكواد المعيارية."
  },

  "Step 5: Transmit the invoice": {
    "ar": "الخطوة 5: إرسال الفاتورة"
  },

  "The ASP transmits the invoice simultaneously to the Federal Tax Authority e-Billing system and the buyer's ASP.": {
    "ar": "يرسل مزوّد الخدمة الفاتورة بالتزامن إلى نظام الفوترة الإلكتروني التابع للهيئة الاتحادية للضرائب وإلى مزوّد الخدمة الخاص بالمشتري."
  },

  "Step 6: Store the invoice": {
    "ar": "الخطوة 6: تخزين الفاتورة"
  },

  "Businesses must store invoices securely within the UAE, ensuring availability for audits and VAT reconciliation.": {
    "ar": "يجب على الشركات تخزين الفواتير بأمان داخل الإمارات لضمان توفرها للمراجعات وتسويات ضريبة القيمة المضافة."
  },

  "The UAE E-Invoicing Framework (DCTCE Model)": {
    "ar": "إطار الفوترة الإلكترونية في الإمارات (نموذج DCTCE)"
  },

  "The UAE has adopted a Peppol-based continuous transaction control model known as the DCTCE model. The model functions like a five-corner framework with the following components:": {
    "ar": "اعتمدت الإمارات نموذجاً للتحكم المستمر بالمعاملات يعتمد على Peppol، ويُعرف بنموذج DCTCE. ويعمل هذا النموذج وفق إطار من خمسة أطراف يشمل ما يلي:"
  },

  "Issuer": {
    "ar": "المُصدِر"
  },

  "Receiver": {
    "ar": "المستلم"
  },

  "Federal Tax Authority e-Billing System": {
    "ar": "نظام الفوترة الإلكتروني للهيئة الاتحادية للضرائب"
  },

  "Sender Accredited Service Provider": {
    "ar": "مزوّد الخدمة المعتمد للمرسل"
  },

  "Receiver Accredited Service Provider": {
    "ar": "مزوّد الخدمة المعتمد للمستلم"
  },

  "The FTA e-Billing System holds invoice data for compliance but does not undertake validation. Validation is the responsibility of the ASPs managing transmission.": {
    "ar": "يحتفظ نظام الفوترة الإلكتروني لدى الهيئة الاتحادية للضرائب ببيانات الفواتير لأغراض الامتثال، لكنه لا يقوم بالتحقق منها. وتُعد مسؤولية التحقق من الفاتورة على عاتق مزوّدي الخدمة."
  },

  "Scope of E-Invoicing in the UAE": {
    "ar": "نطاق الفوترة الإلكترونية في الإمارات"
  },

  "The Electronic Invoicing System covers most taxable business activities in the country.": {
    "ar": "يشمل نظام الفوترة الإلكترونية معظم الأنشطة التجارية الخاضعة للضريبة في الدولة."
  },

  "It applies to all VAT-registered persons engaged in taxable supplies": {
    "ar": "ينطبق على جميع الأشخاص المسجلين في ضريبة القيمة المضافة الذين يقدمون توريدات خاضعة للضريبة"
  },

  "It covers B2B transactions and B2G transactions": {
    "ar": "يغطي معاملات الأعمال بين الشركات وبين الشركات والجهات الحكومية"
  },

  "It excludes B2C transactions": {
    "ar": "لا يشمل معاملات الأعمال مع المستهلكين (B2C)"
  },

  "It excludes certain categories, including:": {
    "ar": "ويستثني بعض الفئات، بما في ذلك:"
  },

  "Government entities acting in a sovereign capacity": {
    "ar": "الجهات الحكومية التي تعمل بصفتها السيادية"
  },

  "International passenger air transport": {
    "ar": "نقل الركاب الجوي الدولي"
  },

  "Certain airline ancillary services": {
    "ar": "بعض خدمات الطيران المساندة"
  },

  "International air freight for a limited period": {
    "ar": "الشحن الجوي الدولي لفترة محدودة"
  },

  "Financial services that are zero-rated or exempt": {
    "ar": "الخدمات المالية الخاضعة للضريبة بنسبة الصفر أو المعفاة"
  },

  "The Role of Accredited Service Providers": {
    "ar": "دور مزوّدي الخدمة المعتمدين"
  },

  "Under the UAE e-invoicing model, ASPs are mandatory for all businesses subject to e-invoicing.": {
    "ar": "في نموذج الفوترة الإلكترونية الإماراتي، يُعد استخدام مزوّدي الخدمة المعتمدين إلزامياً لجميع الشركات الخاضعة للنظام."
  },

  "Key responsibilities of ASPs include:": {
    "ar": "تشمل المسؤوليات الأساسية لمزوّدي الخدمة ما يلي:"
  },

  "Mapping ERP data to the UAE data dictionary": {
    "ar": "مواءمة بيانات نظام ERP مع القاموس البياني الإماراتي"
  },

  "Validating invoice structure and VAT compliance": {
    "ar": "التحقق من هيكل الفاتورة وامتثال ضريبة القيمة المضافة"
  },

  "Enriching invoices with digital signatures and identifiers": {
    "ar": "إثراء الفواتير بالتوقيعات الرقمية والمعرّفات"
  },

  "Converting internal formats into XML or JSON": {
    "ar": "تحويل الصيغ الداخلية إلى XML أو JSON"
  },

  "Transmitting invoices to the FTA and recipient ASP": {
    "ar": "إرسال الفواتير إلى الهيئة الاتحادية للضرائب ومزوّد خدمة المستلم"
  },

  "Applying security controls such as encryption": {
    "ar": "تطبيق ضوابط أمنية مثل التشفير"
  },

  "Archiving and storing invoices in the UAE": {
    "ar": "أرشفة وتخزين الفواتير داخل الإمارات"
  },

  "Providing monitoring tools for tracking invoice status": {
    "ar": "توفير أدوات متابعة لحالة الفواتير"
  },

  "Supporting integration with business systems through APIs": {
    "ar": "دعم التكامل مع أنظمة الشركات عبر واجهات API"
  },

  "Offering fallback procedures in case of downtime": {
    "ar": "توفير إجراءات بديلة في حال حدوث أعطال"
  },

  "Mandatory Fields in a UAE E-Invoice": {
    "ar": "الحقول الإلزامية في الفاتورة الإلكترونية الإماراتية"
  },

  "Structured invoices must follow the UAE's official data dictionary. Required fields include:": {
    "ar": "يجب أن تتبع الفواتير المهيكلة القاموس البياني الرسمي للإمارات. وتشمل الحقول الإلزامية:"
  },

  "Supplier details": {
    "ar": "بيانات المورد"
  },

  "Supplier TRN": {
    "ar": "رقم التسجيل الضريبي للمورد"
  },

  "Buyer details and TRN": {
    "ar": "بيانات المشتري ورقم التسجيل الضريبي"
  },

  "Unique invoice number": {
    "ar": "رقم الفاتورة الفريد"
  },

  "Invoice date and time": {
    "ar": "تاريخ ووقت الفاتورة"
  },

  "Invoice type code": {
    "ar": "رمز نوع الفاتورة"
  },

  "Currency code": {
    "ar": "رمز العملة"
  },

  "Item description and quantities": {
    "ar": "وصف البنود والكميات"
  },

  "Unit price and taxable amount": {
    "ar": "سعر الوحدة والمبلغ الخاضع للضريبة"
  },

  "VAT rate and VAT amount": {
    "ar": "نسبة ضريبة القيمة المضافة ومبلغها"
  },

  "Total tax amount and gross total": {
    "ar": "إجمالي الضريبة والإجمالي الكلي"
  },

  "Digital signature": {
    "ar": "التوقيع الرقمي"
  },

  "Reference to original invoice in case of credit notes": {
    "ar": "الإشارة إلى الفاتورة الأصلية في حال وجود ملاحظات دائنة"
  },

  "Transmission timestamp and acknowledgment ID": {
    "ar": "الطابع الزمني للإرسال ومعرف الإشعار"
  },

  "Additional fields such as purchase order number, payment terms, and bank details may also be included.": {
    "ar": "قد تشمل الفاتورة أيضاً حقولاً إضافية مثل رقم أمر الشراء، وشروط الدفع، وبيانات البنك."
  },

  "A dedicated penalty schedule for e-invoicing is expected but not yet published. Based on existing Tax Procedures Law enforcement, businesses may face penalties for:": {
    "ar": "من المتوقع نشر جدول عقوبات مخصص للفوترة الإلكترونية، لكنه لم يصدر بعد. وبناءً على قانون الإجراءات الضريبية الحالي، قد تواجه الشركات عقوبات بسبب:"
  },

  "Failure to issue an e-invoice for B2B transactions": {
    "ar": "عدم إصدار فاتورة إلكترونية لمعاملات الشركات (B2B)"
  },

  "Repeated failure to issue e-invoices": {
    "ar": "التكرار في عدم إصدار الفواتير الإلكترونية"
  },

  "Failure to maintain invoice records": {
    "ar": "عدم الاحتفاظ بسجلات الفواتير"
  },

  "Delayed transmission resulting in VAT misreporting": {
    "ar": "التأخر في إرسال الفواتير مما يؤدي إلى عدم دقة التقارير الضريبية"
  },

  "Fraudulent behavior or deliberate non-compliance": {
    "ar": "السلوك الاحتيالي أو عدم الامتثال المتعمد"
  },

  "Penalties may range from two thousand five hundred dirhams per instance to significantly higher amounts for repeated violations. Late payment penalties continue to apply for VAT understatements or missed payments.": {
    "ar": "قد تتراوح العقوبات من ألفين وخمسمئة درهم لكل حالة إلى مبالغ أكبر بكثير في حال المخالفات المتكررة. كما تستمر تطبيق غرامات التأخر في السداد في حال نقص الإقرارات أو عدم دفع ضريبة القيمة المضافة."
  },
  "How Businesses Should Prepare for E-Invoicing": {
    "ar": "كيفية استعداد الشركات للفوترة الإلكترونية"
  },

  "Companies should start preparing well before the pilot begins in 2026.": {
    "ar": "يجب على الشركات البدء في الاستعداد قبل فترة طويلة من بدء المرحلة التجريبية في عام 2026."
  },

  "Understand the full scope of the mandate and timeline": {
    "ar": "فهم النطاق الكامل للمتطلبات والجدول الزمني"
  },

  "Appoint an Accredited Service Provider before mandated deadlines": {
    "ar": "تعيين مزوّد خدمة معتمد قبل المهل الإلزامية"
  },

  "Upgrade ERP systems to support structured invoice creation": {
    "ar": "ترقية أنظمة تخطيط الموارد المؤسسية (ERP) لدعم إنشاء الفواتير المهيكلة"
  },

  "Participate in the pilot phase to test integrations": {
    "ar": "المشاركة في المرحلة التجريبية لاختبار عمليات التكامل"
  },

  "Train finance and IT teams on e-invoicing workflows": {
    "ar": "تدريب فرق المالية وتقنية المعلومات على مسارات عمل الفوترة الإلكترونية"
  },

  "Implement local data storage policies that meet UAE requirements": {
    "ar": "تطبيق سياسات تخزين البيانات محلياً وفق متطلبات دولة الإمارات"
  },

  "Establish clear escalation procedures for reporting system failures": {
    "ar": "إنشاء إجراءات تصعيد واضحة للإبلاغ عن أعطال الأنظمة"
  },

  "Early preparation will reduce integration challenges and ensure smooth compliance once the system becomes mandatory.": {
    "ar": "سيسهم الاستعداد المبكر في تقليل تحديات التكامل وضمان الامتثال السلس عند تطبيق النظام بشكل إلزامي."
  },

  "The UAE's Electronic Invoicing System is a transformative step that modernizes tax administration and aligns the country with global standards in digital fiscal reporting. The phased rollout starting in mid-2026 gives businesses time to prepare, but the technical requirements are detailed and demand early system upgrades, the appointment of an accredited service provider, and strong internal controls.": {
    "ar": "يُعد نظام الفوترة الإلكترونية في الإمارات خطوة تحولية تُحدث نقلة نوعية في الإدارة الضريبية وتُوائم الدولة مع المعايير العالمية في التقارير المالية الرقمية. ويمنح التطبيق المرحلي الذي يبدأ منتصف عام 2026 الشركات الوقت الكافي للاستعداد، لكن المتطلبات الفنية دقيقة وتتطلب ترقيات مبكرة للأنظمة، وتعيين مزوّد خدمة معتمد، وتعزيز الضوابط الداخلية."
  },

  "As companies rework their invoicing infrastructure, many are turning to modern platforms that simplify these compliance requirements. Solutions such as أكيوريت can play a supportive role by enabling structured e-invoicing, automating data validation, and offering seamless integration capabilities that help businesses transition smoothly into the new regulatory environment.": {
    "ar": "ومع إعادة الشركات لبناء بنية الفوترة الخاصة بها، تتجه العديد منها إلى منصات حديثة تُبسّط متطلبات الامتثال. ويمكن للحلول مثل أكيوريت أن تلعب دوراً داعماً من خلال تمكين الفوترة الإلكترونية المهيكلة، وأتمتة التحقق من البيانات، وتقديم قدرات تكامل سلسة تساعد الشركات على الانتقال بسلاسة إلى البيئة التنظيمية الجديدة."
  },

  "Excise tax has become an important element of the UAE's modern tax system. Introduced to discourage the consumption of products that negatively affect public health or the environment, it also contributes to long-term fiscal diversification. Governed by Federal Decree Law Number 7 of 2017, the tax applies to a defined set of goods such as tobacco products, energy drinks, carbonated beverages, electronic smoking devices, and sweetened drinks.": {
    "ar": "أصبح الضريبة الانتقائية عنصراً مهماً في النظام الضريبي الحديث لدولة الإمارات. وقد فُرضت بهدف الحد من استهلاك المنتجات التي تؤثر سلباً على الصحة العامة أو البيئة، كما تساهم في تنويع الإيرادات المالية على المدى الطويل. وتخضع لأحكام المرسوم بقانون اتحادي رقم 7 لسنة 2017، وتُطبق على مجموعة محددة من السلع مثل منتجات التبغ، ومشروبات الطاقة، والمشروبات الغازية، والأجهزة الإلكترونية للتدخين، والمشروبات المحلاة."
  },

  "Businesses that import, manufacture, or stock these products must register with the Federal Tax Authority, calculate their excise liabilities correctly, and file the required returns on time. This guide explains how excise tax works in the UAE, including current rates, exemption rules, calculation methods, and compliance requirements.": {
    "ar": "يجب على الشركات التي تستورد أو تُصنّع أو تخزّن هذه المنتجات التسجيل لدى الهيئة الاتحادية للضرائب، واحتساب الالتزامات الانتقائية بدقة، وتقديم الإقرارات المطلوبة في الوقت المحدد. يوضح هذا الدليل كيفية عمل الضريبة الانتقائية في الإمارات، بما في ذلك المعدلات الحالية، وقواعد الإعفاء، وطرق الحساب، ومتطلبات الامتثال."
  },

  "Understanding the Concept of Excise Tax in the UAE": {
    "ar": "فهم مفهوم الضريبة الانتقائية في الإمارات"
  },

  "Excise tax is a consumption tax that applies only once, usually at the point of import or the moment goods are produced for sale in the local market. Unlike VAT, which is charged at every stage of the supply chain, excise tax is imposed a single time but at significantly higher rates that range between fifty percent and one hundred percent.": {
    "ar": "الضريبة الانتقائية هي ضريبة على الاستهلاك تُفرض مرة واحدة فقط، عادة عند الاستيراد أو عند إنتاج السلع لبيعها في السوق المحلية. وعلى عكس ضريبة القيمة المضافة التي تُفرض في كل مراحل سلسلة الإمداد، تُفرض الضريبة الانتقائية مرة واحدة ولكن بمعدلات أعلى بكثير تتراوح بين خمسين بالمئة ومئة بالمئة."
  },

  "The purpose is straightforward. The government aims to reduce the consumption of goods linked to lifestyle diseases and environmental harm, while also encouraging healthier consumer behaviour. Any business involved with excise goods must register with the FTA, maintain accurate records, and settle excise liabilities for each tax period.": {
    "ar": "الهدف واضح: تسعى الحكومة إلى تقليل استهلاك السلع المرتبطة بالأمراض الناتجة عن نمط الحياة والأضرار البيئية، مع تشجيع سلوك استهلاكي أكثر صحة. ويجب على أي شركة تتعامل مع السلع الانتقائية التسجيل لدى الهيئة الاتحادية للضرائب، والحفاظ على سجلات دقيقة، وتسوية الالتزامات الانتقائية في كل فترة ضريبية."
  },

  "Goods That Fall Under Excise Tax in the UAE": {
    "ar": "السلع الخاضعة للضريبة الانتقائية في الإمارات"
  },

  "The UAE has clearly defined categories of excise goods. These include:": {
    "ar": "حددت الإمارات فئات واضحة للسلع الانتقائية، وتشمل:"
  },

  "Tobacco and Tobacco-Based Products": {
    "ar": "التبغ ومنتجاته"
  },

  "This covers a wide range of items such as cigarettes, cigars, cigarillos, chewing tobacco, herbal smoking blends, snuff, reconstituted tobacco sheets, and anything classified under Schedule 24 of the GCC Common Customs Tariff.": {
    "ar": "يشمل ذلك مجموعة واسعة من المنتجات مثل السجائر والسيجار والسيجاريلوس والتبغ للمضغ والخليط العشبي للتدخين والسعوط وأوراق التبغ المعاد تشكيلها، وأي منتجات مدرجة ضمن البند 24 من التعرفة الجمركية الموحدة لدول مجلس التعاون."
  },

  "Carbonated Drinks": {
    "ar": "المشروبات الغازية"
  },

  "Any aerated beverage, as well as concentrates, extracts, powders, gels, or syrups that are used to make such drinks. Unflavoured aerated water is the main exception.": {
    "ar": "تشمل أي مشروبات مكربنة، إضافة إلى المركزات والمستخلصات والمساحيق والجل والمستحضرات المستخدمة في صنع هذه المشروبات. ويُستثنى الماء المكربن غير المنكّه."
  },

  "Energy Drinks": {
    "ar": "مشروبات الطاقة"
  },

  "Products marketed as energy drinks or containing ingredients known for their stimulant properties. These include caffeine, taurine, guarana, ginseng, or similar active substances. Powders and extracts also fall within this category.": {
    "ar": "تشمل المنتجات المسوّقة كمشروبات طاقة أو التي تحتوي على مكوّنات معروفة بخصائصها المنشطة، مثل الكافيين والتورين والجوارانا والجينسنغ أو مواد نشطة مشابهة. وتشمل المساحيق والمستخلصات أيضاً."
  },

  "Electronic Smoking Devices and Associated Liquids": {
    "ar": "أجهزة التدخين الإلكترونية والسوائل المرتبطة بها"
  },

  "All electronic smoking tools, whether or not they contain nicotine, and all liquids intended for use in such devices.": {
    "ar": "تشمل جميع أجهزة التدخين الإلكترونية سواء احتوت على النيكوتين أم لا، وجميع السوائل المخصصة للاستخدام في هذه الأجهزة."
  },

  "Sweetened Drinks": {
    "ar": "المشروبات المحلاة"
  },

  "Any beverage with added sugar or any artificial or natural sweetener. This includes ready-to-drink beverages, powdered mixes, concentrates, gels, syrups, sweetener-based ingredients, and sugar components such as glucose syrup.": {
    "ar": "تشمل أي مشروبات مضاف إليها السكر أو أي مُحلٍّ صناعي أو طبيعي، بما في ذلك المشروبات الجاهزة، والمساحيق، والمركزات، والجل، والشراب، والمكوّنات المعتمدة على المحليات، والمواد السكرية مثل شراب الجلوكوز."
  },

  "Sweetened Drink Exemptions": {
    "ar": "استثناءات المشروبات المحلاة"
  },

  "Some items are excluded from excise tax even if sweetened. These include products that contain at least seventy-five percent milk or milk substitutes, baby food and formula, medical nutrition products, and alcoholic beverages which fall under a separate regulatory regime.": {
    "ar": "تُستثنى بعض المنتجات من الضريبة الانتقائية حتى وإن كانت محلاة، وتشمل المنتجات التي تحتوي على 75٪ على الأقل من الحليب أو بدائله، وأغذية الأطفال وحليب الرضع، ومنتجات التغذية الطبية، والمشروبات الكحولية التي تخضع لنظام تنظيمي مختلف."
  },

  "Key Compliance Requirements for Excise Tax": {
    "ar": "متطلبات الامتثال الرئيسية للضريبة الانتقائية"
  },

  "Businesses that deal with excise goods must meet several regulatory obligations.": {
    "ar": "يجب على الشركات التي تتعامل مع السلع الانتقائية الالتزام بعدة متطلبات تنظيمية."
  },

  "Registration with the FTA": {
    "ar": "التسجيل لدى الهيئة الاتحادية للضرائب"
  },

  "Any business that imports, manufactures, stockpiles, or handles excise goods within a warehouse or designated zone must register for excise tax before engaging in activities. Registration is mandatory even if excise goods are handled occasionally.": {
    "ar": "يجب على أي شركة تستورد أو تُصنّع أو تُخزّن أو تتعامل مع السلع الانتقائية في مستودع أو منطقة محددة التسجيل للضريبة الانتقائية قبل البدء في الأنشطة. التسجيل إلزامي حتى في حال التعامل مع هذه السلع بشكل غير منتظم."
  },

  "Accurate Calculation and Payment": {
    "ar": "الدقة في الحساب والدفع"
  },

  "Once registered, a business must determine the value of excise goods and calculate the tax based on the applicable rates. Payment must be made in accordance with the FTA timeline for each period.": {
    "ar": "بعد التسجيل، يجب على الشركة تحديد قيمة السلع الانتقائية واحتساب الضريبة وفقاً للمعدلات المعمول بها. ويجب سداد الضريبة وفق الجدول الزمني المحدد من الهيئة الاتحادية للضرائب."
  },

  "Filing Excise Tax Returns": {
    "ar": "تقديم إقرارات الضريبة الانتقائية"
  },

  "Excise returns must be filed monthly. The deadline to submit the return is the fifteenth day following the end of each tax period. The return must report the value of goods subject to excise tax and the corresponding tax due.": {
    "ar": "يجب تقديم الإقرارات الانتقائية شهرياً. آخر موعد للتقديم هو اليوم الخامس عشر بعد نهاية كل فترة ضريبية. ويجب أن يتضمن الإقرار قيمة السلع الخاضعة للضريبة والمبالغ المستحقة."
  },

  "Current Excise Tax Rates in the UAE": {
    "ar": "معدلات الضريبة الانتقائية الحالية في الإمارات"
  },

  "Product Category": {
    "ar": "فئة المنتج"
  },

  "Excise Tax Rate": {
    "ar": "معدل الضريبة الانتقائية"
  },

  "Carbonated drinks": {
    "ar": "المشروبات الغازية"
  },

  "50%": {
    "ar": "50٪"
  },

  "Tobacco products": {
    "ar": "منتجات التبغ"
  },

  "100%": {
    "ar": "100٪"
  },

  "Energy drinks": {
    "ar": "مشروبات الطاقة"
  },

  "Electronic smoking devices": {
    "ar": "أجهزة التدخين الإلكترونية"
  },

  "Liquids used in electronic smoking devices": {
    "ar": "السوائل المستخدمة في أجهزة التدخين الإلكترونية"
  },

  "Products containing added sugars or sweeteners": {
    "ar": "المنتجات التي تحتوي على سكريات أو محليات مضافة"
  },

  "These rates are intended to influence consumption patterns and reflect public health priorities.": {
    "ar": "تهدف هذه المعدلات إلى التأثير على أنماط الاستهلاك وتعكس أولويات الصحة العامة."
  },

  "How Excise Tax Is Calculated": {
    "ar": "كيفية احتساب الضريبة الانتقائية"
  },

  "The UAE uses two primary methods to determine excise tax liabilities. The method depends on the type of product being taxed.": {
    "ar": "تستخدم الإمارات طريقتين أساسيتين لتحديد الالتزامات الانتقائية، ويعتمد الأسلوب على نوع المنتج الخاضع للضريبة."
  },

  "The Specific Rate Method": {
    "ar": "طريقة المعدل المحدد"
  },

  "A predetermined amount of tax applies to each unit of the product. This creates a fixed and predictable liability.": {
    "ar": "يُفرض مبلغ ضريبي محدد مسبقاً على كل وحدة من المنتج، مما يخلق التزاماً ثابتاً وقابلاً للتوقع."
  },

  "Example using cigarettes:": {
    "ar": "مثال باستخدام السجائر:"
  },

  "If a product is taxed at forty fils per cigarette and a pack contains twenty cigarettes, the tax is calculated by multiplying the rate per unit by the number of units. The total excise amount is then added to the retail value.": {
    "ar": "إذا كانت الضريبة أربعين فلساً لكل سيجارة ويحتوي العبوة على عشرين سيجارة، يتم احتساب الضريبة بضرب المعدل في عدد الوحدات، ثم يُضاف المبلغ الانتقائي إلى القيمة التجزئية."
  },

  "The Ad Valorem Method": {
    "ar": "طريقة القيمة النسبية (Ad Valorem)"
  },

  "The tax is calculated as a percentage of the retail selling price. Since it is value-based, the tax rises with the retail price.": {
    "ar": "تُحتسب الضريبة كنسبة مئوية من سعر البيع بالتجزئة. ونظراً لأنها تعتمد على القيمة، ترتفع الضريبة كلما ارتفع السعر."
  },

  "Example using energy drinks:": {
    "ar": "مثال باستخدام مشروبات الطاقة:"
  },

  "If an energy drink is sold for ten dirhams and the excise rate is one hundred percent, the excise amount is another ten dirhams. The same method applies to carbonated drinks at fifty percent.": {
    "ar": "إذا بيع مشروب طاقة بعشرة دراهم وكانت الضريبة الانتقائية 100٪، تكون الضريبة عشرة دراهم إضافية. وينطبق الأسلوب نفسه على المشروبات الغازية بنسبة 50٪."
  },

  "Situations Where Excise Tax Does Not Apply": {
    "ar": "حالات لا تُطبق فيها الضريبة الانتقائية"
  },

  "Several scenarios qualify for exemptions or relief under UAE excise tax regulations.": {
    "ar": "توجد عدة حالات تتيح الإعفاء أو التخفيض وفق لوائح الضريبة الانتقائية في الإمارات."
  },

  "Goods exported outside the UAE, provided the business presents valid customs documentation": {
    "ar": "السلع المُصدّرة خارج الإمارات بشرط تقديم مستندات جمركية صحيحة"
  },

  "Medical nutrition products, baby food, and foods designed for specific medical needs": {
    "ar": "منتجات التغذية الطبية، وأغذية الأطفال، والأطعمة المخصصة لاحتياجات طبية معينة"
  },

  "Goods purchased for official use by diplomatic missions and certain international organisations": {
    "ar": "السلع المشتراة للاستخدام الرسمي من قبل البعثات الدبلوماسية وبعض المنظمات الدولية"
  },

  "Goods imported within duty-free allowances by travellers entering the country": {
    "ar": "السلع المستوردة ضمن حدود الإعفاء الجمركي للمسافرين القادمين إلى البلاد"
  },

  "Goods imported occasionally by non-regular importers, subject to limits": {
    "ar": "السلع المستوردة بشكل غير منتظم من قبل غير المستوردين الدائمين، وفق حدود معينة"
  },

  "Stockpiled goods that do not exceed two months of average sales volumes": {
    "ar": "السلع المخزنة التي لا تتجاوز مقدار مبيعات شهرين كمتوسط"
  },

  "Goods stored in designated zones until they enter the domestic market": {
    "ar": "السلع المخزنة في المناطق المحددة حتى دخولها السوق المحلية"
  },

  "Why the UAE Introduced Excise Tax": {
    "ar": "لماذا فرضت الإمارات الضريبة الانتقائية"
  },

  "The UAE's excise tax framework is driven by five strategic objectives:": {
    "ar": "يقوم إطار الضريبة الانتقائية في الإمارات على خمسة أهداف استراتيجية:"
  },

  "Improving public health by discouraging the consumption of harmful products": {
    "ar": "تحسين الصحة العامة عبر الحد من استهلاك المنتجات الضارة"
  },

  "Protecting the environment by reducing the use of polluting or harmful goods": {
    "ar": "حماية البيئة من خلال تقليل استخدام السلع الملوثة أو الضارة"
  },

  "Diversifying government revenue beyond the traditional hydrocarbons sector": {
    "ar": "تنويع مصادر إيرادات الحكومة بعيداً عن قطاع الهيدروكربونات التقليدي"
  },

  "Strengthening regulatory oversight and compliance across supply chains": {
    "ar": "تعزيز الرقابة التنظيمية والامتثال عبر سلاسل الإمداد"
  },

  "Raising awareness among consumers regarding the true cost of unhealthy choices": {
    "ar": "زيادة وعي المستهلكين بتكلفة الخيارات غير الصحية"
  },

  "Excise tax is therefore both a fiscal and a societal instrument.": {
    "ar": "لذلك تُعد الضريبة الانتقائية أداة مالية ومجتمعية في الوقت نفسه."
  },

  "The Role and Authority of the Federal Tax Authority": {
    "ar": "دور وصلاحيات الهيئة الاتحادية للضرائب"
  },

  "The FTA oversees the entire excise tax system. Its responsibilities include:": {
    "ar": "تشرف الهيئة الاتحادية للضرائب على النظام الكامل للضريبة الانتقائية، وتشمل مسؤولياتها:"
  },

  "Registering businesses involved with excise goods": {
    "ar": "تسجيل الشركات التي تتعامل مع السلع الانتقائية"
  },

  "Processing returns and payments": {
    "ar": "معالجة الإقرارات والمدفوعات"
  },

  "Verifying the classification of goods when the product category is unclear": {
    "ar": "التحقق من تصنيف السلع عند عدم وضوح الفئة"
  },

  "Conducting inspections and full audits": {
    "ar": "إجراء عمليات التفتيش والتدقيق الشامل"
  },

  "Evaluating stockpiles and reviewing customs documentation": {
    "ar": "تقييم المخزونات ومراجعة المستندات الجمركية"
  },

  "Determining whether a product should be added to the official price list": {
    "ar": "تحديد ما إذا كان يجب إضافة المنتج إلى قائمة الأسعار الرسمية"
  },

  "Imposing penalties when businesses fail to comply": {
    "ar": "فرض العقوبات عند عدم امتثال الشركات"
  },

  "Penalties for Non-Compliance with Excise Tax": {
    "ar": "عقوبات عدم الامتثال للضريبة الانتقائية"
  },

  "Non-compliance can lead to serious financial consequences. Key penalties include:": {
    "ar": "يمكن أن يؤدي عدم الامتثال إلى عواقب مالية جسيمة، وتشمل العقوبات الرئيسية:"
  },

  "Failure to register on time may result in a penalty of ten thousand dirhams": {
    "ar": "التأخر في التسجيل قد يؤدي إلى غرامة قدرها عشرة آلاف درهم"
  },

  "Failure to deregister may result in one thousand dirhams per month, capped at ten thousand": {
    "ar": "عدم إلغاء التسجيل قد يترتب عليه غرامة قدرها ألف درهم شهرياً، بحد أقصى عشرة آلاف درهم"
  },

  "Late filing of an excise return may lead to a penalty of one thousand dirhams on the first violation and two thousand دراهم for subsequent violations within twenty-four months": {
    "ar": "التأخر في تقديم الإقرار الانتقائي قد يؤدي إلى غرامة قدرها ألف درهم عند المخالفة الأولى وألفي درهم للمخالفات اللاحقة خلال أربعة وعشرين شهراً"
  },

  "Late payment of excise tax results in an immediate two percent penalty, followed by four percent per month, up to a maximum of three hundred percent of the unpaid tax": {
    "ar": "التأخر في سداد الضريبة الانتقائية يؤدي إلى غرامة فورية بنسبة 2٪، تليها 4٪ شهرياً، حتى حد أقصى يبلغ 300٪ من الضريبة غير المسددة"
  },

  "Timely registration, accurate filing, and prompt payment are essential to avoid these financial risks.": {
    "ar": "يُعد التسجيل في الوقت المحدد والتقديم الدقيق والسداد الفوري أموراً أساسية لتجنب هذه المخاطر المالية."
  },

  "Excise Tax vs VAT: How the Two Systems Differ": {
    "ar": "الضريبة الانتقائية مقابل ضريبة القيمة المضافة: كيف يختلف النظامان؟"
  },

  "Aspect": {
    "ar": "الجانب"
  },

  "Purpose": {
    "ar": "الغاية"
  },

  "Targets specific harmful goods": {
    "ar": "يستهدف سلعاً ضارة محددة"
  },

  "Applies broadly across goods and services": {
    "ar": "يُطبَّق على نطاق واسع عبر السلع والخدمات"
  },

  "Tax Rates": {
    "ar": "معدلات الضريبة"
  },

  "50% to 100%": {
    "ar": "50٪ إلى 100٪"
  },

  "Standard 5%": {
    "ar": "5٪ القياسية"
  },

  "Application Point": {
    "ar": "نقطة التطبيق"
  },

  "Imposed once at import or production": {
    "ar": "تُفرض مرة واحدة عند الاستيراد أو الإنتاج"
  },

  "Charged throughout the supply chain": {
    "ar": "تُفرض عبر جميع مراحل سلسلة الإمداد"
  },

  "Primary Objective": {
    "ar": "الهدف الرئيسي"
  },

  "Influence behaviour and reduce harmful consumption": {
    "ar": "التأثير على السلوك وتقليل الاستهلاك الضار"
  },

  "Supports general government revenue": {
    "ar": "يدعم إيرادات الحكومة العامة"
  },

  "Understanding these differences helps businesses ensure proper classification and compliance.": {
    "ar": "يساعد فهم هذه الاختلافات الشركات على ضمان التصنيف الصحيح والامتثال."
  },

  "Excise tax plays a vital role in shaping consumer behaviour, supporting public health, and broadening the UAE's non-oil revenue base. The system is intentionally designed to focus on goods with high social or environmental costs, ensuring that businesses dealing in these products follow strict registration and reporting requirements. A clear understanding of tax rates, calculation methods, exemption rules, and penalties helps businesses remain compliant and avoid substantial fines.": {
    "ar": "تلعب الضريبة الانتقائية دوراً محورياً في تشكيل سلوك المستهلك وتعزيز الصحة العامة وتوسيع قاعدة الإيرادات غير النفطية لدولة الإمارات. وقد صُمّم النظام خصيصاً للتركيز على السلع ذات التكلفة الاجتماعية أو البيئية العالية، مع ضمان التزام الشركات التي تتعامل مع هذه المنتجات بمتطلبات التسجيل والإبلاغ الصارمة. ويساعد الفهم الواضح للمعدلات وطرق الحساب وقواعد الإعفاء والعقوبات الشركات على الامتثال وتجنب الغرامات الكبيرة."
  },

  "Many companies are now turning to advanced financial platforms to manage these obligations more efficiently. Solutions such as أكيوريت help automate tax calculations, maintain accurate stock and transaction records, and streamline return preparation, enabling businesses to manage excise responsibilities with greater accuracy and confidence.": {
    "ar": "تتجه العديد من الشركات حالياً إلى منصات مالية متقدمة لإدارة هذه الالتزامات بكفاءة أكبر. وتساعد حلول مثل أكيوريت في أتمتة حسابات الضريبة، والحفاظ على سجلات دقيقة للمخزون والمعاملات، وتسهيل إعداد الإقرارات، مما يمكّن الشركات من إدارة مسؤولياتها الانتقائية بدقة وثقة أعلى."
  },

  "Document attestation by the Ministry of Foreign Affairs is a mandatory requirement across many legal, immigration, and commercial processes in the United Arab Emirates. Whether you are applying for a residency permit, completing an employment onboarding, establishing a company, executing commercial agreements, or validating academic qualifications, MoFA attestation is the mechanism through which the UAE formally recognizes the legitimacy of documents issued either locally or abroad.": {
    "ar": "تصديق المستندات من وزارة الخارجية يعد متطلباً إلزامياً عبر العديد من الإجراءات القانونية والهجرية والتجارية في دولة الإمارات. سواء كنت تتقدم للحصول على تصريح إقامة، أو تكمل إجراءات التوظيف، أو تؤسس شركة، أو تبرم اتفاقيات تجارية، أو تُصدّق المؤهلات الأكاديمية، فإن تصديق وزارة الخارجية هو الآلية التي تعترف من خلالها الدولة رسمياً بصحة المستندات الصادرة داخل البلاد أو خارجها."
  },
  "This guide explains the purpose of MoFA attestation, the categories of documents that require it, the eligibility rules, the documentation standards, and the step-by-step process for completing attestation through the MoFAIC platform.": {
    "ar": "يشرح هذا الدليل الغرض من تصديق وزارة الخارجية، وفئات المستندات التي تتطلبه، وقواعد الأهلية، ومعايير المستندات، والخطوات التفصيلية لإتمام التصديق عبر منصة وزارة الخارجية والتعاون الدولي."
  },

  "What MoFA Attestation Means": {
    "ar": "ماذا يعني تصديق وزارة الخارجية"
  },

  "MoFA attestation is the official confirmation issued by the Ministry of Foreign Affairs that a document's signatures, stamps, and certifying authority are genuine. MoFA does not validate the content of the document. Instead, the attestation confirms that the document originates from an authorized entity and that all prior authentication steps were completed correctly.": {
    "ar": "تصديق وزارة الخارجية هو تأكيد رسمي تصدره الوزارة بأن توقيعات المستند وأختامه والجهة المصدقة له صحيحة. ولا تقوم الوزارة بالتحقق من محتوى المستند، بل تؤكد أن المستند صادر من جهة معتمدة وأن جميع خطوات التوثيق السابقة قد تمت بشكل صحيح."
  },

  "Attestation applies to personal, academic, legal, and commercial documents. Once attested, the document becomes legally acceptable within UAE government departments, private sector institutions, courts, immigration authorities, and financial institutions.": {
    "ar": "يُطبَّق التصديق على المستندات الشخصية والأكاديمية والقانونية والتجارية. وبمجرد تصديقها، تصبح هذه المستندات مقبولة قانونياً لدى الجهات الحكومية في الإمارات، والمؤسسات الخاصة، والمحاكم، والجهات المختصة بالهجرة، والمؤسسات المالية."
  },

  "Types of Documents That Require MoFA Attestation": {
    "ar": "أنواع المستندات التي تتطلب تصديق وزارة الخارجية"
  },

  "MoFA attestation covers two broad categories of documents, each containing multiple use cases.": {
    "ar": "يشمل تصديق وزارة الخارجية فئتين رئيسيتين من المستندات، يحتوي كل منهما على حالات استخدام متعددة."
  },

  "Personal and Educational Documents": {
    "ar": "المستندات الشخصية والتعليمية"
  },

  "Educational degrees and transcripts": { "ar": "الشهادات الدراسية وكشوف الدرجات" },
  "Birth certificates": { "ar": "شهادات الميلاد" },
  "Marriage certificates": { "ar": "شهادات الزواج" },
  "Death certificates": { "ar": "شهادات الوفاة" },
  "Medical reports": { "ar": "التقارير الطبية" },
  "Good conduct certificates": { "ar": "شهادات حسن السيرة" },
  "Court-issued declarations": { "ar": "الإقرارات الصادرة عن المحاكم" },
  "Powers of attorney of a personal nature": { "ar": "التوكيلات ذات الطابع الشخصي" },
  "Employment contracts and job offers": { "ar": "عقود العمل وعروض التوظيف" },
  "Bank statements for official use": { "ar": "الكشوف البنكية للاستخدام الرسمي" },
  "Personal tax certificates": { "ar": "شهادات الضريبة الشخصية" },
  "Any letter issued to governmental or semi-governmental bodies": { "ar": "أي خطاب صادر للجهات الحكومية أو شبه الحكومية" },

  "Commercial and Corporate Documents": {
    "ar": "المستندات التجارية والشركاتية"
  },

  "Contracts and commercial agreements": { "ar": "العقود والاتفاقيات التجارية" },
  "Company formation and registration documents": { "ar": "مستندات تأسيس الشركات وتسجيلها" },
  "Minutes of board or partners' meetings": { "ar": "محاضر اجتماعات مجلس الإدارة أو الشركاء" },
  "Shareholder certificates": { "ar": "شهادات المساهمين" },
  "Trade licenses": { "ar": "الرخص التجارية" },
  "Brand registrations and product registrations": { "ar": "تسجيل العلامات التجارية والمنتجات" },
  "Patent and trademark documentation": { "ar": "مستندات براءات الاختراع والعلامات التجارية" },
  "Financial statements and audit reports": { "ar": "البيانات المالية وتقارير التدقيق" },
  "Corporate tax certificates": { "ar": "شهادات الضريبة على الشركات" },
  "Powers of attorney for corporate activities": { "ar": "التوكيلات الخاصة بأنشطة الشركات" },
  "End-user certificates": { "ar": "شهادات المستخدم النهائي" },
  "Certificates required for banking, customs, or regulatory submissions": { "ar": "الشهادات المطلوبة للمعاملات البنكية أو الجمركية أو التنظيمية" },
  "Any appendices or attachments that form part of a commercial filing": { "ar": "أي ملاحق أو مستندات إضافية تعد جزءاً من ملف تجاري" },

  "Documents issued outside the UAE must complete foreign country formalities before MoFA attestation can be provided within the UAE.": {
    "ar": "يجب أن تستكمل المستندات الصادرة خارج الإمارات إجراءات التوثيق في بلد الإصدار قبل إمكانية تصديقها داخل الإمارات."
  },

  "Why MoFA Attestation Is Required": {
    "ar": "لماذا يُطلب تصديق وزارة الخارجية"
  },

  "MoFA attestation is an essential compliance step for several reasons:": {
    "ar": "يُعد تصديق وزارة الخارجية خطوة أساسية للامتثال لعدة أسباب:"
  },

  "Confirmation of authenticity: It protects employers, institutions, and government bodies from fraudulent credentials or misrepresented qualifications": {
    "ar": "تأكيد المصداقية: يحمي أصحاب العمل والمؤسسات والجهات الحكومية من الشهادات المزيفة أو المؤهلات المضللة"
  },

  "Compliance with immigration and labour requirements: Residency applications, work permits, and dependent sponsorships require attested educational and civil documents to confirm identity, eligibility, and legal status": {
    "ar": "الامتثال لمتطلبات الهجرة والعمل: تتطلب طلبات الإقامة وتصاريح العمل وكفالة المعالين مستندات تعليمية ومدنية مصدقة لإثبات الهوية والأهلية والوضع القانوني"
  },

  "Validation for commercial activities: Banks, free zone authorities, courts, and licensing bodies usually require attested commercial documents to process corporate approvals, transactions, or renewals": {
    "ar": "التحقق للأنشطة التجارية: تطلب البنوك وهيئات المناطق الحرة والمحاكم والجهات المرخصة مستندات تجارية مصدقة لمعالجة الموافقات والمعاملات والتجديدات"
  },

  "Protection of contractual and legal rights: Attestation ensures that agreements and authorizations used in UAE jurisdictions originate from legitimate authorities": {
    "ar": "حماية الحقوق التعاقدية والقانونية: يضمن التصديق أن الاتفاقيات والتفويضات المستخدمة داخل الدولة صادرة عن جهات شرعية"
  },

  "Alignment with international legal practice: Most countries follow a similar multi-stage attestation process. The UAE's attestation system ensures global compatibility and cross-border document recognition": {
    "ar": "الانسجام مع الممارسات القانونية الدولية: تتبع معظم الدول عملية تصديق متعددة المراحل، ويضمن نظام التصديق الإماراتي الاعتراف الدولي بالمستندات"
  },

  "MoFA Attestation Requirements": {
    "ar": "متطلبات تصديق وزارة الخارجية"
  },

  "The Ministry of Foreign Affairs applies specific rules to ensure that only valid and properly authenticated documents are attested.": {
    "ar": "تطبق وزارة الخارجية قواعد محددة لضمان تصديق المستندات الصحيحة والموثقة فقط."
  },

  "Requirement One: Prior Attestation": {
    "ar": "المتطلب الأول: التصديق المسبق"
  },

  "Documents issued within the UAE must first be certified by the issuing authority or the relevant government body": {
    "ar": "يجب أن تُصدق المستندات الصادرة داخل الإمارات أولاً من الجهة المصدرة أو الجهة الحكومية المختصة"
  },

  "Documents issued outside the UAE must be attested by the foreign ministry of the issuing country and then by the UAE embassy or consulate in that country": {
    "ar": "يجب أن تُصدق المستندات الصادرة خارج الإمارات من وزارة خارجية بلد الإصدار ثم من سفارة أو قنصلية الإمارات في ذلك البلد"
  },

  "If no UAE mission is available, the issuing country's embassy in the UAE or another accredited body may complete the attestation": {
    "ar": "في حال عدم توفر بعثة إماراتية، يمكن لسفارة بلد الإصدار داخل الإمارات أو أي جهة معتمدة إتمام عملية التصديق"
  },

  "Requirement Two: Document Condition": {
    "ar": "المتطلب الثاني: حالة المستند"
  },

  "Documents cannot be laminated": { "ar": "لا يجوز تغليف المستندات حرارياً" },
  "All stamps and signatures must be visible and valid": { "ar": "يجب أن تكون جميع الأختام والتوقيعات واضحة وصحيحة" },
  "Digital documents issued through QR codes or official portals may be accepted without physical attestation if electronically verifiable": {
    "ar": "قد تُقبل المستندات الرقمية المزودة برموز QR أو الصادرة عبر بوابات رسمية دون تصديق ورقي إذا كانت قابلة للتحقق إلكترونياً"
  },

  "Requirement Three: Translation": {
    "ar": "المتطلب الثالث: الترجمة"
  },

  "Documents issued in languages other than Arabic or English must be translated by a translator approved by the UAE Ministry of Justice. Both the original and the translated versions must be submitted when required.": {
    "ar": "يجب ترجمة المستندات المكتوبة بغير العربية أو الإنجليزية بواسطة مترجم معتمد من وزارة العدل في الإمارات. ويجب تقديم النسخة الأصلية والمترجمة عند الطلب."
  },

  "Documents Required for MoFA Attestation": {
    "ar": "المستندات المطلوبة لتصديق وزارة الخارجية"
  },

  "The exact combination of documents depends on the type of certificate, but the typical requirements include:": {
    "ar": "تختلف المستندات المطلوبة حسب نوع الشهادة، ولكن المتطلبات النموذجية تشمل:"
  },

  "Original document": { "ar": "المستند الأصلي" },
  "Official translation, if the document is not in Arabic or English": { "ar": "ترجمة رسمية إذا لم يكن المستند بالعربية أو الإنجليزية" },

  "Supporting documents such as:": { "ar": "مستندات داعمة مثل:" },

  "Spouse and parents' passport copies for family certificates": {
    "ar": "نسخ من جوازات سفر الزوج أو الزوجة والوالدين للشهادات العائلية"
  },

  "Company formation records for commercial documents": {
    "ar": "سجلات تأسيس الشركة للمستندات التجارية"
  },

  "Passport copy of the applicant for personal documents": {
    "ar": "نسخة من جواز سفر مقدم الطلب للمستندات الشخصية"
  },

  "How to Complete MoFA Attestation in the UAE: A Step-by-Step Process": {
    "ar": "كيفية إتمام تصديق وزارة الخارجية في الإمارات: عملية خطوة بخطوة"
  },

  "The MoFA attestation procedure is delivered through the MoFAIC digital platform. The process is simple but requires correct sequencing of prior certifications.": {
    "ar": "تتم إجراءات التصديق عبر المنصة الرقمية لوزارة الخارجية والتعاون الدولي. العملية بسيطة لكنها تتطلب اكتمال جميع مراحل التوثيق السابقة بالترتيب الصحيح."
  },

  "Step One: Registration on the MoFAIC Portal": {
    "ar": "الخطوة الأولى: التسجيل في بوابة وزارة الخارجية والتعاون الدولي"
  },

  "Individuals register using UAE Pass": { "ar": "يسجل الأفراد عبر هوية الإمارات الرقمية" },
  "Companies register through the MoFA website using their corporate credentials": {
    "ar": "تسجل الشركات من خلال موقع الوزارة باستخدام بياناتها المؤسسية"
  },

  "Once registered, applicants can track the status of all attestation requests online": {
    "ar": "بعد التسجيل، يمكن للمتقدمين تتبع حالة جميع طلبات التصديق عبر الإنترنت"
  },

  "Step Two: Submission of Documents": {
    "ar": "الخطوة الثانية: تقديم المستندات"
  },

  "Upload the scanned or notarized version of the document": {
    "ar": "تحميل النسخة الممسوحة ضوئياً أو الموثقة من المستند"
  },

  "Ensure that all prior attestations from the issuing country or relevant authorities are already completed": {
    "ar": "التأكد من استكمال جميع التصديقات المسبقة من بلد الإصدار أو من الجهات المختصة"
  },

  "Attach QR codes or official verification links whenever available": {
    "ar": "إرفاق رموز QR أو روابط التحقق الرسمية عند توفرها"
  },

  "Step Three: Payment of Attestation Fees": {
    "ar": "الخطوة الثالثة: دفع رسوم التصديق"
  },

  "Fees depend on document type": { "ar": "تختلف الرسوم حسب نوع المستند" },

  "Individual documents cost one hundred fifty dirhams": {
    "ar": "تكلفة المستندات الفردية هي 150 درهماً"
  },

  "Commercial documents cost two thousand dirhams": {
    "ar": "تكلفة المستندات التجارية هي 2000 درهم"
  },

  "Courier fees may apply depending on location and delivery preference": {
    "ar": "قد تُطبق رسوم توصيل حسب الموقع وطريقة التسليم المختارة"
  },

  "Step Four: Application Review and Confirmation": {
    "ar": "الخطوة الرابعة: مراجعة الطلب والتأكيد"
  },

  "Applicants receive an SMS confirming successful submission": {
    "ar": "يتلقى المتقدمون رسالة نصية تؤكد تقديم الطلب بنجاح"
  },

  "If MoFA rejects the document, the fee is automatically refunded within fourteen working days": {
    "ar": "في حال رفض المستند، تتم إعادة الرسوم تلقائياً خلال أربعة عشر يوم عمل"
  },

  "Step Five: Delivery of Attested Documents": {
    "ar": "الخطوة الخامسة: تسليم المستندات المصدقة"
  },

  "For attestation completed within the UAE, courier delivery is used": {
    "ar": "للمستندات المصدقة داخل الإمارات، يتم التسليم عبر خدمة التوصيل"
  },

  "For attestation outside the UAE, applicants must visit the UAE embassy or consulate in the issuing country": {
    "ar": "للمستندات المصدقة خارج الإمارات، يجب على المتقدم زيارة سفارة أو قنصلية الإمارات في بلد الإصدار"
  },

  "Once completed, attested documents do not expire and remain valid indefinitely unless the underlying document itself has a validity period": {
    "ar": "لا تنتهي صلاحية المستندات المصدقة وتظل صالحة إلى أجل غير مسمى ما لم يكن للمستند الأصلي مدة صلاحية محددة"
  },

  "Additional Considerations for Applicants": {
    "ar": "اعتبارات إضافية للمتقدمين"
  },

  "Start early: Attestation can involve several authorities. Beginning the process early avoids delays in visa or corporate filings": {
    "ar": "ابدأ مبكراً: قد يشمل التصديق عدة جهات، والبدء المبكر يساعد على تجنب التأخير في معاملات التأشيرات أو الشركات"
  },

  "Always follow the original order: Foreign ministry attestation, then UAE embassy attestation, then MoFAIC attestation. Changing the order can lead to rejection": {
    "ar": "التزم دائماً بالترتيب الصحيح: تصديق وزارة خارجية بلد الإصدار، ثم سفارة الإمارات، ثم وزارة الخارجية. تغيير الترتيب قد يؤدي إلى الرفض"
  },

  "Maintain clear scans: Most submissions require high quality digital versions with visible seals and signatures": {
    "ar": "حافظ على نسخ رقمية واضحة: معظم الطلبات تتطلب نسخاً عالية الجودة تظهر فيها الأختام والتوقيعات"
  },

  "Keep duplicates: It is advisable to maintain both physical and digital copies of all attested documents for future use": {
    "ar": "احتفظ بنسخ احتياطية: يُنصح بالاحتفاظ بنسخ ورقية ورقمية من جميع المستندات المصدقة للاستخدام المستقبلي"
  },

  "Use approved translators: Translation quality and legal acceptance depend on using translators approved by the Ministry of Justice": {
    "ar": "استخدم مترجمين معتمدين: جودة الترجمة والقبول القانوني يعتمدان على استخدام مترجمين معتمدين من وزارة العدل"
  },

  "MoFA attestation is a mandatory step for formal recognition of both personal and commercial documents in the United Arab Emirates. Whether the purpose is immigration, employment, education, business licensing, or legal compliance, the process ensures that authorities can verify the authenticity of documents issued within or outside the UAE.": {
    "ar": "يُعد تصديق وزارة الخارجية خطوة إلزامية للاعتراف الرسمي بالمستندات الشخصية والتجارية في دولة الإمارات. سواء كان الغرض الهجرة أو التوظيف أو التعليم أو التراخيص التجارية أو الامتثال القانوني، فإن التصديق يضمن قدرة الجهات المختصة على التحقق من صحة المستندات الصادرة داخل الدولة أو خارجها."
  },

  "The attestation workflow has become more structured through MoFAIC's digital services, allowing individuals and companies to submit, track, and receive documents with greater predictability. As administrative requirements continue to expand across visas, corporate filings, and regulatory approvals, maintaining a clear attestation strategy has become essential for smooth operations.": {
    "ar": "أصبح سير عمل التصديق أكثر تنظيماً بفضل الخدمات الرقمية لوزارة الخارجية والتعاون الدولي، مما أتاح للأفراد والشركات تقديم الطلبات وتتبعها واستلامها بسهولة أكبر. ومع توسع المتطلبات الإدارية في مجالات التأشيرات والتراخيص والتقارير التنظيمية، أصبح وجود استراتيجية واضحة للتصديق أمراً ضرورياً لضمان سير العمليات بسلاسة."
  },

  "Companies handling multiple document flows often benefit from using organized digital systems that track documentation, store verification evidence, and maintain compliance records. Platforms like أكيوريت help centralize such processes by unifying documentation management across departments, reducing administrative errors, and supporting audit readiness without adding operational burden.": {
    "ar": "تستفيد الشركات التي تتعامل مع تدفقات مستندية متعددة من استخدام أنظمة رقمية منظمة تتعقب المستندات، وتخزن أدلة التحقق، وتحافظ على سجلات الامتثال. وتساعد منصات مثل أكيوريت في مركزية هذه العمليات من خلال توحيد إدارة المستندات عبر الأقسام، وتقليل الأخطاء الإدارية، ودعم جاهزية التدقيق دون زيادة العبء التشغيلي."
  },

  "Tax credit notes play a central role in the UAE VAT ecosystem. They ensure that errors, returns and adjustments are documented correctly without compromising compliance, revenue reporting or the audit trail. When a previously issued tax invoice requires a reduction in value whether due to a return, an overcharge, a discount negotiated after issuance or a discrepancy in supply the credit note becomes the legally accepted mechanism to correct records.": {
    "ar": "تلعب إشعارات الإشعار الدائن دوراً محورياً في منظومة ضريبة القيمة المضافة في الإمارات. فهي تضمن توثيق الأخطاء والإرجاعات والتعديلات بشكل صحيح دون الإخلال بالامتثال أو تقارير الإيرادات أو مسار التدقيق. وعندما يحتاج فاتورة ضريبية صادرة سابقاً إلى تخفيض قيمتها—سواء بسبب إرجاع، أو تسعير زائد، أو خصم متفق عليه بعد الإصدار، أو اختلاف في التوريد—يصبح الإشعار الدائن الأداة القانونية المعتمدة لتصحيح السجلات."
  },

  "This guide provides a comprehensive understanding of credit notes in the UAE, including their purpose, when they must be issued, what they must contain, how they affect VAT liability and why they matter for accounting accuracy.": {
    "ar": "يوفر هذا الدليل فهماً شاملاً لإشعارات الإشعار الدائن في الإمارات، بما في ذلك الغرض منها، ومتى يجب إصدارها، وما يجب أن تتضمنه، وكيف تؤثر على الالتزام بضريبة القيمة المضافة، ولماذا تُعد ضرورية للدقة المحاسبية."
  },

  "Understanding the Purpose of a Tax Credit Note": {
    "ar": "فهم الغرض من إشعار الإشعار الدائن الضريبي"
  },

  "A tax credit note is an official document issued by the supplier to reduce the taxable value or VAT amount of a previously issued tax invoice. It effectively reverses part of a transaction while maintaining a clear record for financial and tax purposes.": {
    "ar": "إشعار الإشعار الدائن الضريبي هو مستند رسمي يصدره المورد لتخفيض القيمة الخاضعة للضريبة أو مبلغ ضريبة القيمة المضافة في فاتورة ضريبية سابقة. وهو يعكس جزءاً من المعاملة مع الحفاظ على سجل واضح للأغراض المالية والضريبية."
  },

  "Unlike a refund document which triggers an actual repayment, a credit note adjusts the supplier's VAT liability and the recipient's input tax eligibility through proper documentation.": {
    "ar": "وعلى عكس مستند الاسترداد الذي يؤدي إلى سداد فعلي، يقوم إشعار الإشعار الدائن بتعديل التزام ضريبة القيمة المضافة على المورد واستحقاق الضريبة المدخلة لدى المستلم من خلال التوثيق الصحيح."
  },

  "A credit note becomes mandatory when the facts of a taxable supply change after the issuance of a tax invoice. It ensures transparency, supports VAT reconciliation and helps prevent discrepancies during audits conducted by the Federal Tax Authority.": {
    "ar": "يصبح إصدار إشعار الإشعار الدائن إلزامياً عندما تتغير حقائق التوريد الخاضع للضريبة بعد إصدار الفاتورة. فهو يعزز الشفافية، ويدعم تسوية ضريبة القيمة المضافة، ويساعد على منع الاختلافات أثناء التدقيقات التي تجريها الهيئة الاتحادية للضرائب."
  },

  "Typical Situations That Require a Credit Note": {
    "ar": "حالات شائعة تتطلب إصدار إشعار دائن"
  },

  "Several commercial scenarios require a supplier to issue a credit note. The most common include:": {
    "ar": "توجد عدة حالات تجارية تتطلب من المورد إصدار إشعار دائن. ومن أبرزها:"
  },

  "Return of Goods": {
    "ar": "استرجاع البضائع"
  },

  "If products are defective, damaged, or returned due to quality issues, the supplier reduces the original taxable amount through a credit note.": {
    "ar": "إذا كانت المنتجات معيبة أو تالفة أو تم إرجاعها بسبب مشكلات في الجودة، يقوم المورد بتخفيض القيمة الخاضعة للضريبة عبر إصدار إشعار دائن."
  },
  "Incomplete or Unfulfilled Deliveries": {
    "ar": "التسليمات الناقصة أو غير المستوفاة"
  },

  "When the supplier cannot deliver the full quantity originally billed, the invoice value must be reduced accordingly.": {
    "ar": "عندما لا يتمكن المورد من تسليم الكمية الكاملة التي تم إصدار الفاتورة بشأنها، يجب تخفيض قيمة الفاتورة بما يتناسب مع ذلك."
  },

  "Correction of Invoice Errors": {
    "ar": "تصحيح أخطاء الفاتورة"
  },

  "If the supplier mistakenly overcharged, applied incorrect VAT, or invoiced the wrong product or quantity, the credit note corrects the mistake.": {
    "ar": "إذا قام المورد عن طريق الخطأ بفرض مبالغ زائدة، أو تطبيق ضريبة قيمة مضافة غير صحيحة، أو إصدار فاتورة لمنتج أو كمية خاطئة، يقوم إشعار الدائن بتصحيح الخطأ."
  },

  "Post-Invoice Discounts": {
    "ar": "الخصومات بعد إصدار الفاتورة"
  },

  "Negotiated reductions agreed upon after the original invoice require an adjustment through a credit note.": {
    "ar": "التخفيضات المتفق عليها بعد إصدار الفاتورة الأصلية تتطلب إجراء تعديل عبر إشعار دائن."
  },

  "Customer Overpayments": {
    "ar": "المدفوعات الزائدة من العميل"
  },

  "If a customer pays more than the invoiced amount, the supplier can account for the excess through a credit adjustment.": {
    "ar": "إذا دفع العميل مبلغاً يزيد على المبلغ المفوتر، يمكن للمورد معالجة الفرق من خلال إصدار إشعار تعديل دائن."
  },

  "Customer Dissatisfaction": {
    "ar": "عدم رضا العميل"
  },

  "Where partial refunds are granted due to service issues or product performance concerns, a credit note documents the revised value.": {
    "ar": "عندما يتم منح استردادات جزئية بسبب مشكلات في الخدمة أو مخاوف تتعلق بأداء المنتج، يقوم إشعار الدائن بتوثيق القيمة المعدلة."
  },

  "Example of a UAE Tax Credit Note in Practice": {
    "ar": "مثال عملي على إشعار دائن ضريبي في الإمارات"
  },

  "A VAT-registered electronics supplier issues an invoice to a corporate buyer for twenty laptops priced at three thousand dirhams each, with VAT applied accordingly. If the buyer returns three units because of manufacturing defects, the supplier must issue a credit note documenting the returned quantity, the revised taxable value, and the corresponding VAT adjustment.": {
    "ar": "يقوم مورد إلكترونيات مسجّل في ضريبة القيمة المضافة بإصدار فاتورة لمشتري شركات بقيمة عشرين جهاز حاسوب محمول بسعر ثلاثة آلاف درهم لكل جهاز، مع تطبيق الضريبة وفقاً لذلك. إذا قام المشتري بإرجاع ثلاثة أجهزة بسبب عيوب تصنيع، يجب على المورد إصدار إشعار دائن يوضح الكمية المُعادة، والقيمة الخاضعة للضريبة المعدلة، وتعديل ضريبة القيمة المضافة المقابلة."
  },

  "This ensures that the supplier reduces output VAT and the buyer reverses input VAT in an orderly and compliant manner.": {
    "ar": "يضمن هذا أن يقوم المورد بتخفيض ضريبة المخرجات، وأن يقوم المشتري بعكس ضريبة المدخلات بطريقة منظمة ومتوافقة."
  },

  "Mandatory Components of a UAE Tax Credit Note": {
    "ar": "المكونات الإلزامية لإشعار دائن ضريبي في الإمارات"
  },

  "Cabinet Resolution Number Fifty Two of 2017 outlines the essential information a credit note must contain. These elements preserve clarity, compliance and traceability.": {
    "ar": "تحدد قرار مجلس الوزراء رقم 52 لسنة 2017 المعلومات الأساسية التي يجب أن يتضمنها إشعار الدائن. وتضمن هذه العناصر الوضوح والامتثال وإمكانية التتبع."
  },

  "The credit note must include:": {
    "ar": "يجب أن يتضمن إشعار الدائن ما يلي:"
  },

  "A clear title identifying the document as a Tax Credit Note": {
    "ar": "عنواناً واضحاً يحدد أن المستند هو إشعار دائن ضريبي"
  },

  "The supplier's name, address and Tax Registration Number": {
    "ar": "اسم المورد وعنوانه ورقم التسجيل الضريبي"
  },

  "The recipient's name, address and Tax Registration Number when applicable": {
    "ar": "اسم المستلم وعنوانه ورقم التسجيل الضريبي إن وُجد"
  },

  "The date of issuance": {
    "ar": "تاريخ الإصدار"
  },

  "The taxable value in the original invoice, the revised taxable value and the difference between them": {
    "ar": "القيمة الخاضعة للضريبة في الفاتورة الأصلية، والقيمة المعدلة، والفرق بينهما"
  },

  "The VAT amount corresponding to the difference": {
    "ar": "مبلغ ضريبة القيمة المضافة المقابل للفرق"
  },

  "A reference to the original tax invoice being corrected": {
    "ar": "الإشارة إلى الفاتورة الضريبية الأصلية التي يتم تصحيحها"
  },

  "The reason for issuing the credit note": {
    "ar": "سبب إصدار إشعار الدائن"
  },

  "Any omission can result in the credit note being rejected during audits or VAT return validations.": {
    "ar": "قد يؤدي أي نقص في المعلومات إلى رفض إشعار الدائن أثناء التدقيقات أو مراجعة إقرارات ضريبة القيمة المضافة."
  },

  "Written and Electronic Credit Notes": {
    "ar": "إشعارات الدائن الورقية والإلكترونية"
  },

  "The UAE permits both physical and electronic credit notes.": {
    "ar": "تسمح الإمارات بإصدار إشعارات الدائن الورقية والإلكترونية."
  },

  "Written Credit Notes": {
    "ar": "إشعارات الدائن الورقية"
  },

  "Printed on the supplier's letterhead, they must include all information required under UAE VAT rules. Copies should be kept by both the supplier and the buyer for record-keeping.": {
    "ar": "تُطبع على ورق يحمل شعار المورد، ويجب أن تتضمن جميع المعلومات المطلوبة وفقاً لقواعد ضريبة القيمة المضافة في الإمارات. ويجب أن يحتفظ كل من المورد والمشتري بنسخة منها للسجلات."
  },

  "Electronic Credit Notes": {
    "ar": "إشعارات الدائن الإلكترونية"
  },

  "Digital credit notes are permitted when the system ensures authenticity, prevents data tampering and provides reliable long-term storage. Electronic versions are increasingly preferred due to accounting system integration and audit readiness.": {
    "ar": "يُسمح بإصدار إشعارات دائن إلكترونية عندما يضمن النظام الأصالة ويمنع العبث بالبيانات ويوفر تخزيناً موثوقاً طويل المدى. وتزداد تفضيل الإصدارات الإلكترونية بسبب سهولة دمجها في أنظمة المحاسبة وجاهزيتها للتدقيق."
  },

  "Benefits of Credit Notes for Businesses": {
    "ar": "فوائد إشعارات الدائن للشركات"
  },

  "Proper use of credit notes offers several operational and compliance benefits.": {
    "ar": "الاستخدام الصحيح لإشعارات الدائن يوفر عدداً من الفوائد التشغيلية والامتثالية."
  },

  "Accurate VAT Reconciliation": {
    "ar": "تسوية دقيقة لضريبة القيمة المضافة"
  },

  "A credit note allows the supplier to reduce output VAT and enables the recipient to correct previously claimed input VAT.": {
    "ar": "يتيح إشعار الدائن للمورد تخفيض ضريبة المخرجات، ويمكّن المستلم من تصحيح ضريبة المدخلات التي سبق المطالبة بها."
  },

  "Improved Financial Accuracy": {
    "ar": "دقة مالية محسّنة"
  },

  "Adjustments documented through credit notes keep accounts clean, traceable and audit-friendly.": {
    "ar": "تبقي التعديلات الموثقة عبر إشعارات الدائن الحسابات منظمة وقابلة للتتبع ومستعدة للتدقيق."
  },

  "Enhanced Transparency": {
    "ar": "شفافية محسّنة"
  },

  "Clear documentation of post-invoice changes helps maintain trust between trading partners.": {
    "ar": "يساعد التوثيق الواضح للتغييرات بعد إصدار الفاتورة على الحفاظ على الثقة بين الأطراف المتعاملة."
  },

  "Regulatory Compliance": {
    "ar": "امتثال تنظيمي"
  },

  "Correct issuance reduces the risk of penalties or disputes involving the Federal Tax Authority.": {
    "ar": "الإصدار الصحيح يقلل من مخاطر الغرامات أو النزاعات مع الهيئة الاتحادية للضرائب."
  },

  "Better Cash Flow Visibility": {
    "ar": "وضوح أفضل في التدفقات النقدية"
  },

  "Businesses gain clarity on true receivables and payables, supporting informed treasury and operational decisions.": {
    "ar": "تحصل الشركات على رؤية أوضح للمدفوعات والمستحقات الفعلية، مما يدعم القرارات التشغيلية والمالية."
  },

  "Credit Note Regulations and Compliance Requirements": {
    "ar": "لوائح إشعارات الدائن ومتطلبات الامتثال"
  },

  "The UAE VAT system sets clear expectations for suppliers issuing credit notes.": {
    "ar": "يحدد نظام ضريبة القيمة المضافة في الإمارات توقعات واضحة للموردين عند إصدار إشعارات الدائن."
  },

  "Credit notes must be issued only by the supplier, never by the customer.": {
    "ar": "يجب إصدار إشعارات الدائن من قبل المورد فقط، وليس من قبل العميل."
  },

  "The adjustment must correspond to an existing tax invoice.": {
    "ar": "يجب أن يرتبط التعديل بفاتورة ضريبية موجودة."
  },

  "The reduction must reflect an actual change in the supply.": {
    "ar": "يجب أن يعكس التخفيض تغييراً فعلياً في التوريد."
  },

  "Both parties must retain credit notes as part of VAT record-keeping for at least five years.": {
    "ar": "يجب على كلا الطرفين الاحتفاظ بإشعارات الدائن ضمن سجلات ضريبة القيمة المضافة لمدة لا تقل عن خمس سنوات."
  },

  "Any VAT adjustments must be reflected in the VAT return for the relevant period.": {
    "ar": "يجب عكس أي تعديلات على ضريبة القيمة المضافة في الإقرار الضريبي للفترة ذات الصلة."
  },

  "Non-compliance can affect VAT returns, input VAT claims and overall tax integrity.": {
    "ar": "قد يؤدي عدم الامتثال إلى التأثير على الإقرارات الضريبية، ومطالبات ضريبة المدخلات، ونزاهة النظام الضريبي بشكل عام."
  },

  "Best Practices for Businesses Issuing Credit Notes": {
    "ar": "أفضل الممارسات للشركات عند إصدار إشعارات الدائن"
  },

  "To ensure strong compliance and operational consistency, businesses should:": {
    "ar": "لضمان الامتثال القوي والاتساق التشغيلي، يجب على الشركات:"
  },

  "Maintain documented internal procedures for issuing and approving credit notes": {
    "ar": "الحفاظ على إجراءات داخلية موثقة لإصدار واعتماد إشعارات الدائن"
  },

  "Link every credit note to its original invoice in the accounting system": {
    "ar": "ربط كل إشعار دائن بالفاتورة الأصلية في نظام المحاسبة"
  },

  "Verify reasons for issuing credit notes to prevent misuse": {
    "ar": "التحقق من أسباب إصدار إشعارات الدائن لمنع إساءة الاستخدام"
  },

  "Ensure real-time updates of VAT ledgers": {
    "ar": "ضمان تحديثات فورية لسجلات ضريبة القيمة المضافة"
  },

  "Store digital and physical records securely for audit requirements": {
    "ar": "تخزين السجلات الرقمية والورقية بشكل آمن لتلبية متطلبات التدقيق"
  },

  "These practices build resilience and prevent errors during tax reviews.": {
    "ar": "تساعد هذه الممارسات على تعزيز المرونة ومنع الأخطاء أثناء المراجعات الضريبية."
  },

  "Tax credit notes play an essential role in ensuring accurate VAT reporting and clean financial records in the UAE. They correct billing discrepancies, document returns, support transparent dealings and align suppliers with VAT regulations. When issued correctly, credit notes help maintain trust with customers, reduce VAT exposure and strengthen internal control frameworks.": {
    "ar": "تلعب إشعارات الدائن الضريبية دوراً أساسياً في ضمان دقة التقارير الضريبية ونظافة السجلات المالية في الإمارات. فهي تصحح الفروقات في الفواتير، وتوثق الإرجاعات، وتدعم التعاملات الشفافة، وتضمن التزام الموردين بلوائح ضريبة القيمة المضافة. وعند إصدارها بشكل صحيح، تساعد إشعارات الدائن على الحفاظ على الثقة مع العملاء وتقليل المخاطر الضريبية وتعزيز الأطر الرقابية الداخلية."
  },

  "As businesses prepare for increasingly digital VAT environments including the upcoming Peppol based e-invoicing mandate, having structured processes for issuing and managing credit notes becomes even more important. Modern finance teams often rely on integrated systems to automate invoice adjustments and preserve compliance.": {
    "ar": "مع استعداد الشركات لبيئة ضريبية أكثر رقمية—بما في ذلك نظام الفوترة الإلكترونية الجديد المعتمد على Peppol—تزداد أهمية وجود عمليات منظمة لإصدار وإدارة إشعارات الدائن. وتعتمد الفرق المالية الحديثة غالباً على أنظمة متكاملة لأتمتة تعديلات الفواتير والحفاظ على الامتثال."
  },

  "Platforms such as Accqrate support this transition by centralizing invoicing, credit note processing and VAT reporting, giving businesses a more controlled and audit-ready environment without adding complexity.": {
    "ar": "تدعم منصات مثل أكيوريت هذا التحول من خلال مركزة الفوترة، ومعالجة إشعارات الدائن، والتقارير الضريبية، مما يمنح الشركات بيئة أكثر تنظيماً وجاهزية للتدقيق دون إضافة تعقيد."
  },

  "Value Added Tax has been a core element of the UAE's tax framework since its introduction on 1 January 2018. It applies to most goods and services supplied within the country at a standard rate of five percent. The system is designed so that VAT is collected at each stage of the supply chain, while the final burden rests with the end consumer. Registered businesses collect VAT on their sales, deduct the VAT they pay on business purchases, and remit the balance to the Federal Tax Authority.": {
    "ar": "تشكل ضريبة القيمة المضافة عنصراً أساسياً في الإطار الضريبي لدولة الإمارات منذ تطبيقها في 1 يناير 2018. وتُفرض على معظم السلع والخدمات التي يتم توريدها داخل الدولة بمعدل قياسي يبلغ 5%. ويهدف النظام إلى تحصيل الضريبة في كل مرحلة من مراحل سلسلة التوريد، بينما يتحمل المستهلك النهائي العبء الكامل. وتقوم الشركات المسجلة بتحصيل الضريبة على مبيعاتها، وخصم الضريبة المدفوعة على المشتريات المتعلقة بالأعمال، ثم سداد الفرق للهيئة الاتحادية للضرائب."
  },

  "This guide provides a complete explanation of how VAT works in the UAE, the registration criteria, compliance obligations, invoicing rules, industry-specific treatments, e-invoicing requirements, and the penalty regime.": {
    "ar": "يوفر هذا الدليل شرحاً كاملاً لكيفية عمل ضريبة القيمة المضافة في الإمارات، ومعايير التسجيل، ومتطلبات الامتثال، وقواعد الفوترة، والمعالجات الخاصة بالقطاعات، ومتطلبات الفوترة الإلكترونية، ونظام العقوبات."
  },

  "Understanding VAT in the UAE": {
    "ar": "فهم ضريبة القيمة المضافة في الإمارات"
  },

  "VAT in the UAE is an indirect tax applied to the consumption of goods and services. When a business makes a taxable supply, it charges five percent VAT. When it purchases goods or services for business use, it pays VAT. The difference between VAT collected on sales and VAT paid on purchases represents its net VAT liability.": {
    "ar": "ضريبة القيمة المضافة في الإمارات هي ضريبة غير مباشرة تُفرض على استهلاك السلع والخدمات. فعند قيام نشاط تجاري بتوريد خاضع للضريبة، يتم تحصيل 5% ضريبة. وعند شراء السلع أو الخدمات للاستخدام التجاري، يتم دفع الضريبة. ويمثل الفرق بين الضريبة المحصلة على المبيعات والضريبة المدفوعة على المشتريات الالتزام الصافي للضريبة."
  },

  "The system ensures tax neutrality across the supply chain. Each registered entity remits only the value added at its level. The final VAT burden is carried by the consumer.": {
    "ar": "يضمن النظام حيادية الضريبة عبر سلسلة التوريد، حيث تقوم كل جهة مسجلة بسداد الضريبة على القيمة المضافة فقط في مستوى عملياتها. ويتحمل المستهلك النهائي العبء الكامل للضريبة."
  },

  "UAE VAT Timeline": {
    "ar": "الجدول الزمني لضريبة القيمة المضافة في الإمارات"
  },

  "2017: Introduction of Federal VAT Law": {
    "ar": "2017: إصدار القانون الاتحادي لضريبة القيمة المضافة"
  },

  "2018: VAT implementation at five percent": {
    "ar": "2018: تطبيق ضريبة القيمة المضافة بنسبة 5%"
  },

  "2023: Substantial VAT Law amendments brought into effect": {
    "ar": "2023: بدء العمل بتعديلات جوهرية على قانون ضريبة القيمة المضافة"
  },

  "2024: Major revisions to the Executive Regulations and formal mandate for e-invoicing announced": {
    "ar": "2024: الإعلان عن تعديلات كبرى على اللائحة التنفيذية وتحديد متطلبات الفوترة الإلكترونية"
  },

  "2026: Start of phased mandatory e-invoicing rollout": {
    "ar": "2026: بدء التنفيذ المرحلي الإلزامي للفوترة الإلكترونية"
  },

  "VAT Rates and Their Treatment": {
    "ar": "معدلات ضريبة القيمة المضافة ومعالجتها"
  },

  "Standard rate of five percent": {
    "ar": "المعدل القياسي 5%"
  },

  "This applies to most goods and services, including retail, hospitality, utilities, professional services, commercial property rentals, food and beverages, e-commerce activities, and imported goods.": {
    "ar": "يُطبق هذا المعدل على معظم السلع والخدمات بما في ذلك تجارة التجزئة، والضيافة، والمرافق، والخدمات المهنية، وتأجير العقارات التجارية، والأغذية والمشروبات، وأنشطة التجارة الإلكترونية، والسلع المستوردة."
  },

  "Zero-rated supplies": {
    "ar": "التوريدات الخاضعة للضريبة بنسبة الصفر"
  },

  "Zero rating means the supply is taxable at zero percent, and the business can still claim the input VAT it paid. Common examples include:": {
    "ar": "تعني نسبة الصفر أن التوريد خاضع للضريبة بنسبة 0% مع إمكانية خصم ضريبة المدخلات المدفوعة. ومن الأمثلة الشائعة:"
  },

  "Exports of goods and services outside the GCC VAT implementation zone": {
    "ar": "تصدير السلع والخدمات خارج نطاق تطبيق ضريبة القيمة المضافة في دول مجلس التعاون"
  },

  "International transport": {
    "ar": "النقل الدولي"
  },

  "First supply of residential real estate within three years of completion": {
    "ar": "التوريد الأول للعقار السكني خلال ثلاث سنوات من اكتماله"
  },

  "Supply of crude oil and natural gas": {
    "ar": "توريد النفط الخام والغاز الطبيعي"
  },

  "Certain qualified education and healthcare services": {
    "ar": "بعض خدمات التعليم والرعاية الصحية المؤهلة"
  },

  "Investment-grade precious metals": {
    "ar": "المعادن النفيسة ذات الجودة الاستثمارية"
  },

  "Exempt supplies": {
    "ar": "التوريدات المعفاة"
  },

  "Exempt supplies do not attract VAT and businesses cannot recover any input VAT spent on related costs. These include:": {
    "ar": "التوريدات المعفاة لا تُفرض عليها ضريبة، ولا يمكن للشركات استرداد ضريبة المدخلات المتعلقة بها. وتشمل:"
  },

  "Certain domestic financial services": {
    "ar": "بعض الخدمات المالية المحلية"
  },

  "Residential property (except the first supply)": {
    "ar": "العقار السكني (باستثناء التوريد الأول)"
  },

  "Bare land": {
    "ar": "الأراضي الخالية"
  },

  "Local passenger transport": {
    "ar": "النقل المحلي للركاب"
  },

  "How VAT Is Calculated in Practice": {
    "ar": "كيفية حساب ضريبة القيمة المضافة عملياً"
  },

  "VAT is charged at five percent of the taxable amount.": {
    "ar": "تُفرض ضريبة القيمة المضافة بنسبة 5% من المبلغ الخاضع للضريبة."
  },

  "Example: If a retailer sells a television for AED 2,000, VAT is calculated as AED 2,000 multiplied by 5 percent, which is AED 100. The customer pays AED 2,100.": {
    "ar": "مثال: إذا باع متجر تلفزيوناً بسعر 2000 درهم، فإن ضريبة القيمة المضافة تُحسب كالتالي: 2000 × 5% = 100 درهم. وبالتالي يدفع العميل 2100 درهم."
  },

  "If the retailer originally purchased the television for AED 1,500 plus AED 75 VAT, the net VAT payable to the FTA is AED 100 minus AED 75, which results in AED 25 due.": {
    "ar": "إذا كان المتجر قد اشترى التلفزيون في الأصل مقابل 1500 درهم بالإضافة إلى 75 درهماً ضريبة، فإن صافي الضريبة المستحقة للهيئة يكون 100 - 75 = 25 درهماً."
  },

  "VAT Registration Requirements": {
    "ar": "متطلبات التسجيل في الضريبة"
  },

  "Businesses must register for VAT when their taxable supplies and imports exceed AED 375,000 in the previous twelve months or are expected to exceed the threshold in the next thirty days. Registration must occur within thirty days of meeting the threshold. Late registration attracts an administrative penalty of AED 10,000.": {
    "ar": "يجب على الشركات التسجيل في ضريبة القيمة المضافة عندما تتجاوز توريداتها الخاضعة للضريبة واستيراداتها 375,000 درهم خلال الاثني عشر شهراً الماضية، أو يُتوقع أن تتجاوز هذا الحد خلال الثلاثين يوماً القادمة. يجب إتمام التسجيل خلال 30 يوماً من استيفاء المتطلب. يؤدي التأخر في التسجيل إلى غرامة إدارية قدرها 10,000 درهم."
  },
  "Voluntary registration is available when taxable supplies exceed AED 187,500 but are below the mandatory threshold. Voluntary registration enables input VAT recovery and is beneficial for growing businesses.": {
    "ar": "يتاح التسجيل الطوعي عندما تتجاوز التوريدات الخاضعة للضريبة 187,500 درهم ولكنها تكون أقل من الحد الإلزامي. يتيح التسجيل الطوعي استرداد ضريبة المدخلات ويعد مفيداً للشركات التي تشهد نمواً."
  },

  "Registration is completed on the EmaraTax portal provided by the Federal Tax Authority.": {
    "ar": "يتم استكمال إجراءات التسجيل من خلال بوابة «إماراتاكـس» التابعة للهيئة الاتحادية للضرائب."
  },

  "VAT Invoicing Requirements": {
    "ar": "متطلبات الفوترة الخاصة بضريبة القيمة المضافة"
  },

  "Businesses must issue VAT-compliant invoices for every taxable supply. The UAE recognises two types of VAT invoices:": {
    "ar": "يجب على الشركات إصدار فواتير متوافقة مع ضريبة القيمة المضافة عن كل توريد خاضع للضريبة. وتعترف دولة الإمارات بنوعين من الفواتير الضريبية:"
  },

  "Full tax invoice": {
    "ar": "فاتورة ضريبية كاملة"
  },

  "Used for B2B supplies or transactions above AED 10,000. It must contain:": {
    "ar": "تستخدم لتوريدات الشركات (B2B) أو للمعاملات التي تتجاوز 10,000 درهم. ويجب أن تتضمن:"
  },

  "A clear label identifying the document as a tax invoice": {
    "ar": "تسمية واضحة تحدد أن المستند هو فاتورة ضريبية"
  },

  "Supplier and recipient details including names and TRNs": {
    "ar": "بيانات المورد والمستلم بما في ذلك الأسماء وأرقام التسجيل الضريبي"
  },

  "A unique invoice number and invoice date": {
    "ar": "رقم فاتورة فريد وتاريخ الفاتورة"
  },

  "Date of supply when different from the invoice date": {
    "ar": "تاريخ التوريد عند اختلافه عن تاريخ الفاتورة"
  },

  "Description of goods or services supplied": {
    "ar": "وصف السلع أو الخدمات الموردة"
  },

  "Unit price, quantity, taxable values, and VAT amount": {
    "ar": "سعر الوحدة، الكمية، القيم الخاضعة للضريبة، ومبلغ ضريبة القيمة المضافة"
  },

  "Total amount payable including VAT": {
    "ar": "إجمالي المبلغ المستحق شاملاً ضريبة القيمة المضافة"
  },

  "Reverse charge indication where applicable": {
    "ar": "إشارة لآلية الاحتساب العكسي عند الاقتضاء"
  },

  "Simplified tax invoice": {
    "ar": "فاتورة ضريبية مبسطة"
  },

  "Used for B2C supplies or transactions under AED 10,000. It requires fewer details but must still include key tax information such as supplier details, TRN, invoice date, description, and VAT amount.": {
    "ar": "تستخدم لتوريدات العملاء الأفراد (B2C) أو للمعاملات التي تقل عن 10,000 درهم. وتتطلب تفاصيل أقل ولكن يجب أن تتضمن المعلومات الضريبية الأساسية مثل بيانات المورد، رقم التسجيل الضريبي، تاريخ الفاتورة، الوصف، ومبلغ الضريبة."
  },

  "Invoices must be issued within fourteen days of the supply date.": {
    "ar": "يجب إصدار الفواتير خلال أربعة عشر يوماً من تاريخ التوريد."
  },

  "Filing VAT Returns": {
    "ar": "تقديم إقرارات ضريبة القيمة المضافة"
  },

  "VAT registered entities must file VAT returns through the EmaraTax system. Filing frequency depends on turnover:": {
    "ar": "يجب على الجهات المسجلة في ضريبة القيمة المضافة تقديم الإقرارات من خلال نظام «إماراتاكـس». وتختلف وتيرة التقديم حسب حجم الإيرادات:"
  },

  "Monthly for businesses with turnover exceeding AED 150 million": {
    "ar": "شهرياً للشركات التي تتجاوز إيراداتها 150 مليون درهم"
  },

  "Quarterly for all others": {
    "ar": "فصلياً لبقية الشركات"
  },

  "VAT returns are due within twenty-eight days after the end of the tax period. The return must include standard-rated supplies, zero-rated supplies, exempt supplies, reverse charge transactions, adjustments, and the resulting VAT due or refundable.": {
    "ar": "تستحق إقرارات ضريبة القيمة المضافة خلال ثمانية وعشرين يوماً بعد نهاية الفترة الضريبية. ويجب أن يتضمن الإقرار التوريدات الخاضعة للمعدل القياسي، والتوريدات الخاضعة للصفر، والتوريدات المعفاة، ومعاملات الاحتساب العكسي، والتعديلات، وصافي الضريبة المستحقة أو القابلة للاسترداد."
  },

  "Payment of VAT is made through EmaraTax using approved payment channels. Late payment results in escalating penalties and interest.": {
    "ar": "يتم سداد ضريبة القيمة المضافة من خلال نظام «إماراتاكـس» باستخدام القنوات المعتمدة. ويترتب على التأخر في السداد غرامات وفوائد متزايدة."
  },

  "VAT Record Keeping": {
    "ar": "حفظ السجلات الخاصة بضريبة القيمة المضافة"
  },

  "Every VAT registered business must maintain detailed records including:": {
    "ar": "يجب على كل منشأة مسجلة في ضريبة القيمة المضافة الاحتفاظ بسجلات مفصلة تشمل:"
  },

  "All invoices and credit notes issued and received": {
    "ar": "جميع الفواتير وإشعارات الدائن الصادرة والواردة"
  },

  "Records of imports and exports": {
    "ar": "سجلات الواردات والصادرات"
  },

  "Accounting records, ledgers, and journals": {
    "ar": "السجلات المحاسبية والدفاتر واليوميات"
  },

  "VAT apportionment workings": {
    "ar": "حسابات توزيع ضريبة القيمة المضافة"
  },

  "Zero-rating evidence": {
    "ar": "أدلة تطبيق نسبة الصفر"
  },

  "Capital asset records": {
    "ar": "سجلات الأصول الرأسمالية"
  },

  "Records must be stored for the statutory period and be available for FTA inspection.": {
    "ar": "يجب الاحتفاظ بالسجلات طوال المدة القانونية وأن تكون جاهزة لتفتيش الهيئة الاتحادية للضرائب."
  },

  "Input VAT Recovery": {
    "ar": "استرداد ضريبة المدخلات"
  },

  "Businesses can claim input VAT on goods and services used to make taxable or zero-rated supplies. Input VAT on costs related to exempt activities cannot be recovered.": {
    "ar": "يمكن للشركات المطالبة بضريبة المدخلات على السلع والخدمات المستخدمة في التوريدات الخاضعة للضريبة أو الخاضعة للصفر. ولا يمكن استرداد ضريبة المدخلات المرتبطة بالأنشطة المعفاة."
  },

  "Common non-recoverable VAT includes:": {
    "ar": "تشمل أمثلة الضريبة غير القابلة للاسترداد:"
  },

  "Entertainment expenses": {
    "ar": "مصروفات الضيافة والترفيه"
  },

  "Motor vehicles not used exclusively for business": {
    "ar": "المركبات غير المخصصة بالكامل للأغراض التجارية"
  },

  "Employee benefits not mandated by UAE law": {
    "ar": "مزايا الموظفين غير المفروضة بموجب قانون دولة الإمارات"
  },

  "Expenses linked to exempt supplies": {
    "ar": "النفقات المرتبطة بالتوريدات المعفاة"
  },

  "Where a business undertakes both taxable and exempt activities, input VAT must be apportioned using an acceptable method based on taxable versus total turnover.": {
    "ar": "عندما تقوم المنشأة بأنشطة خاضعة للضريبة وأخرى معفاة، يجب توزيع ضريبة المدخلات باستخدام طريقة مقبولة تعتمد على الإيرادات الخاضعة للضريبة مقابل إجمالي الإيرادات."
  },

  "Imported goods for business use can be accounted for using the reverse charge mechanism, avoiding cash payments at customs for registered businesses.": {
    "ar": "يمكن احتساب ضريبة السلع المستوردة للاستخدام التجاري عبر آلية الاحتساب العكسي، مما يلغي الحاجة للدفع النقدي في الجمارك بالنسبة للمنشآت المسجلة."
  },

  "VAT Treatment of Cross-Border Transactions": {
    "ar": "معالجة ضريبة القيمة المضافة للمعاملات عبر الحدود"
  },

  "Supplies leaving the GCC VAT zone are zero rated, provided export documentation is maintained.": {
    "ar": "تُعامل التوريدات الخارجة من نطاق تطبيق ضريبة القيمة المضافة في دول مجلس التعاون بنسبة الصفر، بشرط الاحتفاظ بمستندات التصدير."
  },

  "Imports of goods attract VAT at customs or via reverse charge for registered importers. Import of services attracts VAT via reverse charge unless the supplier is registered in the UAE.": {
    "ar": "تخضع واردات السلع لضريبة القيمة المضافة في الجمارك أو عبر آلية الاحتساب العكسي للمستوردين المسجلين. كما تخضع واردات الخدمات للضريبة عبر آلية الاحتساب العكسي ما لم يكن المورد مسجلاً في الإمارات."
  },

  "Digital services supplied by foreign providers to UAE consumers may require VAT registration for the foreign business under the consumer location rules.": {
    "ar": "قد تتطلب الخدمات الرقمية المقدمة من مزودين أجانب إلى مستهلكين في الإمارات تسجيل المزود الأجنبي في ضريبة القيمة المضافة وفقاً لقواعد موقع المستهلك."
  },

  "Sector-Specific VAT Rules": {
    "ar": "قواعد ضريبة القيمة المضافة الخاصة بالقطاعات"
  },

  "Education": {
    "ar": "قطاع التعليم"
  },

  "Recognised educational institutions can supply core education services at zero percent. Ancillary items such as school uniforms, food, stationery, and electronic devices are taxed at five percent.": {
    "ar": "يمكن للمؤسسات التعليمية المعترف بها تقديم خدمات التعليم الأساسية بنسبة الصفر. بينما تُفرض ضريبة 5% على المستلزمات المصاحبة مثل الزي المدرسي، والطعام، والقرطاسية، والأجهزة الإلكترونية."
  },

  "Healthcare": {
    "ar": "قطاع الرعاية الصحية"
  },

  "Qualified medical services and essential medicines are zero rated. Cosmetic or elective medical services are usually standard rated.": {
    "ar": "تُعامل الخدمات الطبية المؤهلة والأدوية الأساسية بنسبة الصفر. بينما تخضع الخدمات التجميلية أو الاختيارية للمعدل القياسي عادةً."
  },

  "Oil and gas": {
    "ar": "قطاع النفط والغاز"
  },

  "Crude oil and natural gas are zero rated. Refined petroleum products and fuel sales are generally standard rated.": {
    "ar": "يُعامل النفط الخام والغاز الطبيعي بنسبة الصفر. بينما تخضع المنتجات النفطية المكررة ومبيعات الوقود للمعدل القياسي."
  },

  "Real estate": {
    "ar": "قطاع العقارات"
  },

  "Commercial property sales and leases are standard rated. The first supply of a new residential building is zero rated, while all subsequent supplies are exempt. Bare land remains exempt.": {
    "ar": "تخضع مبيعات وتأجير العقارات التجارية للمعدل القياسي. ويُعامل التوريد الأول لمبنى سكني جديد بنسبة الصفر، بينما تُعفى جميع التوريدات اللاحقة. كما تظل الأراضي الخالية معفاة."
  },

  "Financial services": {
    "ar": "القطاع المالي"
  },

  "Margin-based financial services are exempt. Explicit fee-based services attract VAT. Some investment products were granted VAT exemptions following recent regulatory changes.": {
    "ar": "تُعفى الخدمات المالية القائمة على الهامش. بينما تخضع الخدمات القائمة على الرسوم المباشرة للضريبة. وقد حصلت بعض المنتجات الاستثمارية على إعفاءات ضريبية بموجب تغييرات تنظيمية حديثة."
  },

  "Transport": {
    "ar": "قطاع النقل"
  },

  "International transport is zero rated. Domestic passenger transport remains exempt.": {
    "ar": "يُعامل النقل الدولي بنسبة الصفر. بينما يظل النقل المحلي للركاب معفياً."
  },

  "E-Invoicing in the UAE": {
    "ar": "الفوترة الإلكترونية في الإمارات"
  },

  "The UAE is transitioning to a fully digitised invoicing framework through the national Electronic Invoicing System, which will operate using a Peppol-based five-corner model. E-invoices must be issued, transmitted, and stored in structured formats such as XML or JSON.": {
    "ar": "تنتقل دولة الإمارات إلى إطار فوترة إلكترونية متكامل من خلال النظام الوطني للفوترة الإلكترونية، والذي سيعمل وفق نموذج خماسي الزوايا قائم على Peppol. ويجب إصدار الفواتير الإلكترونية ونقلها وتخزينها بصيغ منظمة مثل XML أو JSON."
  },

  "The phased rollout begins with a pilot in July 2026 followed by mandatory adoption for large businesses in January 2027, smaller businesses in July 2027, and government entities in October 2027.": {
    "ar": "يبدأ التطبيق المرحلي ببرنامج تجريبي في يوليو 2026، يليه التطبيق الإلزامي للشركات الكبيرة في يناير 2027، وللشركات الصغيرة في يوليو 2027، وللجهات الحكومية في أكتوبر 2027."
  },

  "E-invoices are generated in the ERP system, validated and enriched by Accredited Service Providers, transmitted simultaneously to the Federal Tax Authority and the buyer's ASP, and stored securely within the UAE.": {
    "ar": "يتم إنشاء الفواتير الإلكترونية في نظام الـ ERP، والتحقق منها وإثراؤها بواسطة مزودي الخدمات المعتمدين، ثم إرسالها بالتزامن إلى الهيئة الاتحادية للضرائب وإلى مزود خدمة المشتري، وتخزينها بأمان داخل الإمارات."
  },

  "The shift to structured invoicing enhances accuracy, minimises fraud, and creates consistency across VAT reporting. It also introduces mandatory digital credit notes and real-time reporting obligations.": {
    "ar": "يسهم التحول إلى الفوترة المنظمة في تعزيز الدقة وتقليل الاحتيال وتحقيق الاتساق في تقارير ضريبة القيمة المضافة. كما يقدم إشعارات دائن إلكترونية إلزامية ومتطلبات تقرير فوري."
  },

  "Penalties for VAT Non-Compliance": {
    "ar": "الغرامات الخاصة بعدم الامتثال لضريبة القيمة المضافة"
  },

  "Penalties apply for a wide range of violations including:": {
    "ar": "تُفرض الغرامات على مجموعة واسعة من المخالفات، بما في ذلك:"
  },

  "Late registration: AED 10,000": {
    "ar": "التأخر في التسجيل: 10,000 درهم"
  },

  "Late VAT return filing: AED 1,000 for the first occurrence and AED 2,000 for repetition within two years": {
    "ar": "التأخر في تقديم الإقرار الضريبي: 1,000 درهم للمرة الأولى و2,000 درهم للتكرار خلال عامين"
  },

  "Late VAT payment: immediate charges plus escalating monthly interest up to a maximum of 300 percent": {
    "ar": "التأخر في سداد الضريبة: رسوم فورية بالإضافة إلى فوائد شهرية متصاعدة حتى حد أقصى يبلغ 300%"
  },

  "Failure to maintain records: AED 10,000 for the first occurrence and AED 50,000 for repetition": {
    "ar": "عدم حفظ السجلات: 10,000 درهم للمرة الأولى و50,000 درهم للتكرار"
  },

  "Incorrect filings or falsified documentation: penalties in accordance with the Tax Procedures Law": {
    "ar": "التقارير غير الصحيحة أو المستندات المزيفة: غرامات وفقاً لقانون الإجراءات الضريبية"
  },

  "Serious breaches such as deliberate tax evasion can lead to criminal liability.": {
    "ar": "قد تؤدي المخالفات الجسيمة مثل التهرب الضريبي المتعمد إلى مسؤولية جنائية."
  },

  "How Businesses Should Prepare": {
    "ar": "كيف يجب أن تستعد الشركات"
  },

  "Businesses should begin preparation well before the introduction of mandatory e-invoicing. Key steps include:": {
    "ar": "يجب على الشركات البدء في الاستعداد قبل وقت كافٍ من تطبيق الفوترة الإلكترونية الإلزامية. وتشمل الخطوات الرئيسية:"
  },

  "Reviewing VAT registration status and turnover thresholds": {
    "ar": "مراجعة حالة التسجيل الضريبي وعتبات الإيرادات"
  },

  "Updating invoicing templates and ensuring all mandatory data fields are reflected": {
    "ar": "تحديث قوالب الفواتير والتأكد من تضمين جميع الحقول الإلزامية"
  },

  "Strengthening record-keeping and reconciliation processes": {
    "ar": "تعزيز عمليات حفظ السجلات والمطابقة"
  },

  "Upgrading ERP and accounting systems for structured invoice data": {
    "ar": "تحديث أنظمة الـ ERP والمحاسبة لتتناسب مع بيانات الفواتير المنظمة"
  },

  "Selecting a reliable Accredited Service Provider for e-invoicing": {
    "ar": "اختيار مزود خدمة معتمد وموثوق للفوترة الإلكترونية"
  },

  "Conducting internal testing and staff training": {
    "ar": "إجراء اختبارات داخلية وتدريب الموظفين"
  },

  "Implementing controls to ensure accurate VAT reporting and timely submission": {
    "ar": "تنفيذ ضوابط لضمان دقة التقارير الضريبية وتقديمها في الوقت المحدد"
  },

  "VAT has become an integral component of the UAE's fiscal landscape and its influence is only increasing with ongoing regulatory enhancements and the migration to mandatory e-invoicing. For businesses operating in the UAE, the priority is to maintain precise records, issue compliant invoices, file returns correctly, and prepare their systems for structured invoicing. These steps not only ensure adherence to the law but also strengthen operational transparency and financial efficiency.": {
    "ar": "أصبحت ضريبة القيمة المضافة جزءاً أساسياً من المنظومة المالية في دولة الإمارات، ويتزايد أثرها مع التطورات التنظيمية المستمرة والانتقال إلى الفوترة الإلكترونية الإلزامية. وللشركات العاملة في الإمارات، فإن الأولوية هي الحفاظ على سجلات دقيقة، وإصدار فواتير متوافقة، وتقديم الإقرارات بشكل صحيح، وتجهيز أنظمتها للفوترة المنظمة. ولا تضمن هذه الخطوات الامتثال القانوني فحسب، بل تعزز أيضاً الشفافية التشغيلية والكفاءة المالية."
  },

  "Platforms such as Accqrate can further support this transition by consolidating invoicing, VAT reporting, and compliance workflows in a single environment, helping businesses navigate the regulatory landscape with greater clarity and control.": {
    "ar": "يمكن للمنصات مثل أكيوريت دعم هذا الانتقال من خلال توحيد عمليات الفوترة والتقارير الضريبية ومسارات الامتثال ضمن بيئة واحدة، مما يساعد الشركات على التعامل مع المتطلبات التنظيمية بوضوح وتحكم أكبر."
  },

  "Calculating VAT in the United Arab Emirates is straightforward once you understand how the five percent rate applies to different types of transactions. Whether you are working with a VAT inclusive amount, a VAT exclusive amount, imported goods under the reverse charge mechanism, or mixed supplies, the process follows a consistent logic. This guide explains the complete methodology, outlines special scenarios, and provides practical examples that match real business situations in the UAE.": {
    "ar": "يعد حساب ضريبة القيمة المضافة في دولة الإمارات أمراً بسيطاً بمجرد فهم كيفية تطبيق نسبة 5% على مختلف أنواع المعاملات. سواء كنت تتعامل مع مبلغ شامل للضريبة أو غير شامل، أو مع سلع مستوردة خاضعة لآلية الاحتساب العكسي، أو توريدات مختلطة، فإن العملية تتبع منطقاً ثابتاً. يوضح هذا الدليل المنهجية الكاملة ويستعرض السيناريوهات الخاصة ويقدم أمثلة عملية تتماشى مع واقع الأعمال في الإمارات."
  },

  "Understanding VAT and Its Role in the UAE": {
    "ar": "فهم ضريبة القيمة المضافة ودورها في الإمارات"
  },

  "Value Added Tax is a consumption tax applied to most goods and services supplied or imported within the UAE. Since its introduction in January 2018, VAT has become an important component of financial operations for both large and small businesses.": {
    "ar": "ضريبة القيمة المضافة هي ضريبة على الاستهلاك تُفرض على معظم السلع والخدمات الموردة أو المستوردة داخل الإمارات. ومنذ تطبيقها في يناير 2018، أصبحت الضريبة جزءاً مهماً من العمليات المالية للشركات الكبيرة والصغيرة على حد سواء."
  },

  "Every VAT registered business is required to:": {
    "ar": "يُطلب من كل منشأة مسجلة في ضريبة القيمة المضافة أن تقوم بما يلي:"
  },

  "Collect VAT on taxable sales, known as output VAT": {
    "ar": "تحصيل الضريبة على المبيعات الخاضعة للضريبة (ضريبة المخرجات)"
  },

  "Pay VAT on eligible business purchases, known as input VAT": {
    "ar": "دفع الضريبة على المشتريات المؤهلة للأعمال (ضريبة المدخلات)"
  },

  "Submit periodic VAT returns to the Federal Tax Authority and settle any net liability": {
    "ar": "تقديم الإقرارات الضريبية الدورية للهيئة الاتحادية للضرائب وتسوية أي التزام صافي"
  },

  "Registration is mandatory when taxable supplies exceed three hundred seventy-five thousand dirhams in any twelve-month period. Voluntary registration is permitted from one hundred eighty-seven thousand five hundred dirhams.": {
    "ar": "يصبح التسجيل إلزامياً عندما تتجاوز التوريدات الخاضعة للضريبة 375,000 درهم خلال أي فترة مكونة من 12 شهراً. ويُسمح بالتسجيل الطوعي ابتداءً من 187,500 درهم."
  },

  "How the VAT System Functions": {
    "ar": "كيفية عمل نظام ضريبة القيمة المضافة"
  },
  "The VAT framework operates through three primary categories of supplies:": {
    "ar": "يعمل إطار ضريبة القيمة المضافة من خلال ثلاث فئات رئيسية من التوريدات:"
  },

  "Standard rated supplies which are taxed at five percent": {
    "ar": "التوريدات الخاضعة للمعدل القياسي والتي تُفرض عليها ضريبة بنسبة خمسة بالمئة"
  },

  "Zero rated supplies which are taxable but at a zero percent rate": {
    "ar": "التوريدات الخاضعة لنسبة الصفر والتي تُعد خاضعة للضريبة ولكن بنسبة صفر بالمئة"
  },

  "Exempt supplies which do not charge VAT and do not allow input VAT recovery": {
    "ar": "التوريدات المعفاة التي لا تُفرض عليها الضريبة ولا تسمح باسترداد ضريبة المدخلات"
  },

  "A business's VAT payable or refundable amount depends on the difference between output VAT and input VAT for each filing period.": {
    "ar": "يتحدد مقدار الضريبة المستحقة أو القابلة للاسترداد بناءً على الفرق بين ضريبة المخرجات وضريبة المدخلات لكل فترة إقرار."
  },

  "Calculating VAT in the UAE": {
    "ar": "حساب ضريبة القيمة المضافة في الإمارات"
  },

  "VAT Exclusive Price": {
    "ar": "السعر غير الشامل لضريبة القيمة المضافة"
  },

  "A VAT exclusive price means the tax is not included in the amount and must be added. This is the most common approach for businesses selling goods or providing services.": {
    "ar": "يعني السعر غير الشامل لضريبة القيمة المضافة أن الضريبة غير مدمجة في المبلغ ويجب إضافتها. ويُعد هذا الأسلوب الأكثر شيوعاً لدى الشركات التي تبيع السلع أو تقدم الخدمات."
  },

  "Formula:": {
    "ar": "الصيغة:"
  },

  "VAT amount equals net price multiplied by five percent": {
    "ar": "مبلغ الضريبة يساوي السعر الصافي مضروباً في خمسة بالمئة"
  },

  "Total payable equals net price plus VAT amount": {
    "ar": "إجمالي المبلغ المستحق يساوي السعر الصافي مضافاً إليه مبلغ الضريبة"
  },

  "Example: Net value of one thousand dirhams gives a VAT amount of fifty dirhams and a gross value of one thousand fifty dirhams.": {
    "ar": "مثال: قيمة صافية قدرها ألف درهم تعطي ضريبة مقدارها خمسون درهماً وقيمة إجمالية قدرها ألف وخمسون درهماً."
  },

  "VAT Inclusive Price": {
    "ar": "السعر الشامل لضريبة القيمة المضافة"
  },

  "A VAT inclusive price already contains the five percent tax. To isolate the VAT portion, you must reverse calculate it.": {
    "ar": "يتضمن السعر الشامل لضريبة القيمة المضافة نسبة الخمسة بالمئة ضمن المبلغ. ولعزل جزء الضريبة يجب احتسابها بطريقة عكسية."
  },

  "VAT amount equals gross price multiplied by five divided by one hundred five": {
    "ar": "مبلغ الضريبة يساوي السعر الإجمالي مضروباً في خمسة مقسوماً على مئة وخمسة"
  },

  "Net value equals gross price minus VAT amount": {
    "ar": "القيمة الصافية تساوي السعر الإجمالي مطروحاً منه مبلغ الضريبة"
  },

  "Example: A gross price of one thousand fifty dirhams includes fifty dirhams VAT and a net value of one thousand dirhams.": {
    "ar": "مثال: سعر إجمالي قدره ألف وخمسون درهماً يتضمن خمسين درهماً كضريبة وقيمة صافية قدرها ألف درهم."
  },

  "VAT Calculation in Special Business Scenarios": {
    "ar": "حساب ضريبة القيمة المضافة في السيناريوهات التجارية الخاصة"
  },

  "Bulk VAT Calculations": {
    "ar": "حسابات الضريبة بالجملة"
  },

  "Businesses handling a high volume of invoices often calculate VAT in bulk. The typical process involves preparing a spreadsheet listing all transactions, marking whether the amount includes VAT, and applying the appropriate formula. This is widely used in retail, wholesale, and service-oriented operations.": {
    "ar": "الشركات التي تتعامل مع عدد كبير من الفواتير غالباً ما تقوم بحساب الضريبة بالجملة. وتشمل العملية النموذجية إعداد جدول بيانات بجميع المعاملات، وتحديد ما إذا كان المبلغ شاملاً للضريبة، وتطبيق الصيغة المناسبة. ويُستخدم هذا الأسلوب على نطاق واسع في تجارة التجزئة والجملة والخدمات."
  },

  "For inclusive values, the ratio method is used. For exclusive values, the standard five percent calculation applies. This method ensures consistent and accurate VAT reporting.": {
    "ar": "بالنسبة للقيم الشاملة، تُستخدم طريقة النسبة، وبالنسبة للقيم غير الشاملة، يُطبق حساب الخمسة بالمئة القياسية. تضمن هذه الطريقة تقارير ضريبية دقيقة ومتسقة."
  },

  "Reverse Charge Mechanism for Imports": {
    "ar": "آلية الاحتساب العكسي للواردات"
  },

  "The reverse charge mechanism applies when goods or specific services are imported into the UAE. Instead of the supplier charging VAT, the buyer must self-account for five percent VAT.": {
    "ar": "تُطبق آلية الاحتساب العكسي عند استيراد السلع أو خدمات محددة إلى الإمارات. وبدلاً من قيام المورد بفرض الضريبة، يتعين على المشتري احتساب نسبة الخمسة بالمئة بنفسه."
  },

  "Steps:": {
    "ar": "الخطوات:"
  },

  "Identify the value of the imported goods or services": {
    "ar": "تحديد قيمة السلع أو الخدمات المستوردة"
  },

  "Calculate five percent VAT": {
    "ar": "احتساب ضريبة الخمسة بالمئة"
  },

  "Record it as output VAT": {
    "ar": "تسجيلها كضريبة مخرجات"
  },

  "Record the same value as input VAT": {
    "ar": "تسجيل القيمة نفسها كضريبة مدخلات"
  },

  "Example: A company imports equipment worth twenty thousand dirhams. VAT is one thousand dirhams which is declared as both output VAT and input VAT in the VAT return.": {
    "ar": "مثال: تستورد شركة معدات بقيمة عشرين ألف درهم. تبلغ الضريبة ألف درهم ويتم تسجيلها كضريبة مخرجات وضريبة مدخلات في الإقرار الضريبي."
  },

  "VAT Payable to the FTA": {
    "ar": "الضريبة المستحقة للهيئة الاتحادية للضرائب"
  },

  "VAT payable is determined by subtracting input VAT from output VAT.": {
    "ar": "يتم تحديد الضريبة المستحقة بطرح ضريبة المدخلات من ضريبة المخرجات."
  },

  "VAT payable equals output VAT minus input VAT": {
    "ar": "الضريبة المستحقة تساوي ضريبة المخرجات مطروحاً منها ضريبة المدخلات"
  },

  "If the result is negative, the business may request a refund or carry the balance forward.": {
    "ar": "إذا كانت النتيجة سالبة، يمكن للمنشأة طلب استرداد أو ترحيل الرصيد للفترات التالية."
  },

  "Input VAT Credit": {
    "ar": "رصيد ضريبة المدخلات"
  },

  "Input VAT credit refers to the amount a business can reclaim for VAT paid on eligible business expenses. Claiming input tax requires holding proper tax invoices and ensuring the expense relates to taxable supplies.": {
    "ar": "يشير رصيد ضريبة المدخلات إلى المبلغ الذي يمكن للمنشأة استرداده مقابل الضريبة المدفوعة على المصروفات التجارية المؤهلة. ويتطلب استرداد الضريبة وجود فواتير ضريبية صحيحة والتأكد من أن المصروف مرتبط بتوريدات خاضعة للضريبة."
  },

  "Example: A business pays one thousand dirhams VAT for rent and two thousand dirhams VAT for purchases. Five hundred dirhams of additional VAT relates to personal expenses and is not recoverable. Recoverable VAT is therefore two thousand five hundred dirhams.": {
    "ar": "مثال: تدفع منشأة ألف درهم كضريبة على الإيجار وألفي درهم كضريبة على المشتريات. خمسمئة درهم من الضريبة الإضافية تتعلق بمصروفات شخصية وغير قابلة للاسترداد. وبالتالي، تبلغ الضريبة القابلة للاسترداد ألفين وخمسمئة درهم."
  },

  "VAT Refund Calculations": {
    "ar": "حسابات استرداد ضريبة القيمة المضافة"
  },

  "If input VAT exceeds output VAT in a filing period, the business qualifies for a refund. This often applies to exporters or companies with high input-related costs.": {
    "ar": "إذا تجاوزت ضريبة المدخلات ضريبة المخرجات خلال فترة الإقرار، تكون المنشأة مؤهلة لاسترداد. وغالباً ما ينطبق هذا على المصدّرين أو الشركات ذات المصروفات العالية المرتبطة بالمدخلات."
  },

  "Example: Input VAT is five thousand dirhams and output VAT is four thousand dirhams. The refundable amount is one thousand dirhams.": {
    "ar": "مثال: ضريبة المدخلات خمسة آلاف درهم وضريبة المخرجات أربعة آلاف درهم. قيمة الاسترداد ألف درهم."
  },

  "VAT on Discounted Transactions": {
    "ar": "ضريبة القيمة المضافة على المعاملات المخفضة"
  },

  "VAT must be calculated on the value after applying the discount.": {
    "ar": "يجب احتساب الضريبة على القيمة بعد تطبيق الخصم."
  },

  "Example: The original price of one thousand dirhams with a discount of one hundred gives a net price of nine hundred. VAT equals forty-five dirhams, and the customer pays nine hundred forty-five dirhams.": {
    "ar": "مثال: السعر الأصلي ألف درهم ومع خصم قدره مئة يصبح السعر الصافي تسعمئة درهم. الضريبة تساوي خمسة وأربعين درهماً، ويدفع العميل تسعمئة وخمسة وأربعين درهماً."
  },

  "VAT on Mixed Supplies": {
    "ar": "ضريبة القيمة المضافة على التوريدات المختلطة"
  },

  "When a business makes taxable and exempt supplies, input VAT must be apportioned. Only the portion of expenses related to taxable activities can be recovered.": {
    "ar": "عندما تقدم المنشأة توريدات خاضعة للضريبة وأخرى معفاة، يجب توزيع ضريبة المدخلات. ولا يمكن استرداد سوى الجزء المرتبط بالأنشطة الخاضعة للضريبة."
  },

  "Example: If total input VAT is one thousand dirhams, and seventy percent of supplies are taxable, recoverable VAT is seven hundred dirhams.": {
    "ar": "مثال: إذا كانت ضريبة المدخلات الإجمالية ألف درهم وكانت 70% من التوريدات خاضعة للضريبة، فإن الضريبة القابلة للاسترداد هي سبعمئة درهم."
  },

  "VAT on Imported Goods at Customs": {
    "ar": "ضريبة القيمة المضافة على السلع المستوردة في الجمارك"
  },

  "The VAT amount for imports is based on the customs value which includes cost, insurance, freight and any applicable customs duties.": {
    "ar": "يُحتسب مبلغ الضريبة على الواردات بناءً على القيمة الجمركية التي تشمل التكلفة والتأمين والشحن وأي رسوم جمركية مطبقة."
  },

  "Example: CIF value is nine thousand dirhams and customs duty is one thousand dirhams. The total taxable value is ten thousand dirhams. VAT equals five hundred dirhams.": {
    "ar": "مثال: قيمة التكلفة والتأمين والشحن (CIF) هي تسعة آلاف درهم والرسوم الجمركية ألف درهم. القيمة الخاضعة للضريبة عشرة آلاف درهم. الضريبة تساوي خمسمئة درهم."
  },

  "VAT Group Calculations": {
    "ar": "حسابات المجموعة الضريبية"
  },

  "Businesses under common control may register as a VAT group. The group files a single VAT return and internal transactions are ignored for VAT purposes. Only external supplies and external purchases count toward VAT calculations.": {
    "ar": "يمكن للشركات الخاضعة لسيطرة مشتركة التسجيل كمجموعة ضريبية. وتقدم المجموعة إقراراً واحداً ويتم تجاهل المعاملات الداخلية لأغراض الضريبة. ولا تُحتسب إلا التوريدات والمشتريات الخارجية."
  },

  "Frequent Errors in VAT Calculations": {
    "ar": "الأخطاء الشائعة في حساب ضريبة القيمة المضافة"
  },

  "Businesses often make mistakes when charging, calculating, or claiming VAT. The most common errors include:": {
    "ar": "غالباً ما ترتكب الشركات أخطاء عند فرض الضريبة أو حسابها أو المطالبة بها. وتشمل أبرز الأخطاء:"
  },

  "Confusing zero-rated and exempt supplies": {
    "ar": "الخلط بين التوريدات الخاضعة للصفر والتوريدات المعفاة"
  },

  "Recovering VAT without proper tax invoices": {
    "ar": "استرداد الضريبة دون وجود فواتير ضريبية سليمة"
  },

  "Applying VAT incorrectly to discounts": {
    "ar": "تطبيق الضريبة بشكل غير صحيح على الخصومات"
  },

  "Claiming VAT on personal or non-business expenses": {
    "ar": "المطالبة بالضريبة على المصروفات الشخصية أو غير التجارية"
  },

  "Missing VAT filing deadlines": {
    "ar": "تفويت مواعيد تقديم الإقرارات الضريبية"
  },

  "Not identifying reverse charge transactions": {
    "ar": "عدم تحديد معاملات الاحتساب العكسي"
  },

  "Incorrectly handling VAT inclusive prices": {
    "ar": "التعامل غير الصحيح مع الأسعار الشاملة للضريبة"
  },

  "Avoiding these errors ensures compliance and helps prevent penalties.": {
    "ar": "يساعد تجنب هذه الأخطاء على تحقيق الامتثال ومنع الغرامات."
  },

  "Why Businesses Use VAT Calculators and Digital Tools": {
    "ar": "لماذا تستخدم الشركات حاسبات الضريبة والأدوات الرقمية"
  },

  "Modern VAT calculators support businesses by providing immediate results for inclusive and exclusive values, reverse charge scenarios, mixed supply apportionment, and bulk uploads. They reduce errors and improve compliance accuracy. Digital tools are especially valuable for companies processing large invoice volumes or operating across multiple emirates.": {
    "ar": "تساعد حاسبات الضريبة الحديثة الشركات من خلال تقديم نتائج فورية للقيم الشاملة وغير الشاملة، ومعاملات الاحتساب العكسي، وتوزيع التوريدات المختلطة، وعمليات الرفع الجماعي. وتقلل هذه الأدوات من الأخطاء وتُحسن دقة الامتثال. وتعد الأدوات الرقمية ذات قيمة خاصة للشركات التي تتعامل مع كميات كبيرة من الفواتير أو تعمل عبر عدة إمارات."
  },

  "Accurate VAT calculation is essential for compliance in the UAE. Whether your business deals with standard supplies, imports, discounted items, or mixed supply structures, every amount must be calculated precisely and supported by valid documentation. A clear understanding of inclusive and exclusive pricing, the reverse charge mechanism, and refund eligibility helps maintain compliance and ensures seamless reporting to the Federal Tax Authority.": {
    "ar": "يُعد حساب ضريبة القيمة المضافة بدقة أمراً أساسياً لتحقيق الامتثال في الإمارات. سواء كانت منشأتك تتعامل مع توريدات قياسية أو واردات أو معاملات مخفضة أو هياكل توريد مختلطة، يجب احتساب كل مبلغ بدقة وبدعم من مستندات صحيحة. ويساعد الفهم الواضح للأسعار الشاملة وغير الشاملة وآلية الاحتساب العكسي وأهلية الاسترداد على الحفاظ على الامتثال وضمان تقارير سلسة للهيئة الاتحادية للضرائب."
  },

  "Many businesses strengthen their processes by adopting structured financial systems that ensure reliability and accuracy. Platforms like Accqrate play a role in supporting these efforts by simplifying financial data management and offering tools that help businesses maintain consistent tax compliance without adding unnecessary complexity.": {
    "ar": "تعزز العديد من الشركات عملياتها باعتماد أنظمة مالية منظمة تضمن الموثوقية والدقة. وتساعد منصات مثل أكيوريت في دعم هذه الجهود من خلال تبسيط إدارة البيانات المالية وتوفير أدوات تساعد الشركات على الحفاظ على الامتثال الضريبي بشكل متسق دون إضافة تعقيد غير ضروري."
  },

  "Value Added Tax has become a central part of the UAE's fiscal system since its introduction in 2018. The framework is designed to create a transparent consumption-based tax model that supports government revenue without disrupting economic competitiveness. With a standard tax rate of 5 percent, VAT applies to most goods and services supplied within the UAE, although several categories fall under zero rating or exemption depending on their nature and purpose.": {
    "ar": "أصبحت ضريبة القيمة المضافة جزءاً محورياً من النظام المالي لدولة الإمارات منذ تطبيقها في عام 2018. وقد صُمم الإطار ليُنشئ نموذجاً ضريبياً شفافاً قائماً على الاستهلاك يدعم إيرادات الحكومة دون التأثير على القدرة التنافسية الاقتصادية. ومع معدل قياسي يبلغ 5%، تُفرض الضريبة على معظم السلع والخدمات الموردة داخل الدولة، على الرغم من أن بعض الفئات تخضع للصفر أو الإعفاء وفقاً لطبيعتها والغرض منها."
  },

  "This comprehensive guide breaks down the VAT structure in the UAE, including how VAT operates, the obligations placed on businesses, compliance requirements, and the growing importance of e-invoicing as the UAE moves toward advanced digital tax governance.": {
    "ar": "يقدم هذا الدليل الشامل شرحاً مفصلاً لبنية ضريبة القيمة المضافة في الإمارات، بما في ذلك كيفية عملها، والالتزامات المفروضة على الشركات، ومتطلبات الامتثال، والأهمية المتزايدة للفوترة الإلكترونية مع توجه الدولة نحو حوكمة ضريبية رقمية متقدمة."
  },

  "Evolution of VAT in the UAE": {
    "ar": "تطور ضريبة القيمة المضافة في الإمارات"
  },

  "The UAE has gradually strengthened its VAT framework over the past years. Key milestones include:": {
    "ar": "عززت دولة الإمارات إطار ضريبة القيمة المضافة تدريجياً خلال السنوات الماضية. وتشمل أبرز المحطات:"
  },

  "2017: The government issues the foundational legislation that outlines the implementation of VAT": {
    "ar": "2017: أصدرت الحكومة التشريعات الأساسية التي تحدد كيفية تطبيق ضريبة القيمة المضافة"
  },

  "January 2018: VAT becomes applicable at a standard rate of 5 percent": {
    "ar": "يناير 2018: بدء تطبيق ضريبة القيمة المضافة بنسبة 5%"
  },

  "2023: Significant updates are introduced to the VAT Law, enhancing clarity around several taxable activities and documentation rules": {
    "ar": "2023: إدخال تحديثات جوهرية على قانون الضريبة لتعزيز الوضوح حول عدد من الأنشطة الخاضعة للضريبة ومتطلبات التوثيق"
  },

  "Late 2024: The Cabinet approves new Executive Regulations that reshape procedural and compliance requirements": {
    "ar": "أواخر 2024: اعتماد مجلس الوزراء للوائح تنفيذية جديدة تعيد تشكيل المتطلبات الإجرائية ومتطلبات الامتثال"
  },

  "2026 (Planned): Mandatory e-invoicing is scheduled to go live in phases for B2B and B2G transactions": {
    "ar": "2026 (مخطط): بدء التطبيق الإلزامي للفوترة الإلكترونية على مراحل لمعاملات الشركات (B2B) والجهات الحكومية (B2G)"
  },

  "What VAT Means in the UAE": {
    "ar": "مفهوم ضريبة القيمة المضافة في الإمارات"
  },

  "VAT in the UAE is an indirect consumption tax imposed on most domestic and imported goods and services. The tax burden ultimately rests with the end consumer, while businesses act as intermediaries who collect VAT on behalf of the Federal Tax Authority.": {
    "ar": "ضريبة القيمة المضافة في الإمارات هي ضريبة غير مباشرة تُفرض على معظم السلع والخدمات المحلية والمستوردة. ويتحمل المستهلك النهائي العبء الضريبي بينما تعمل الشركات كجهات وسيطة تقوم بتحصيل الضريبة نيابة عن الهيئة الاتحادية للضرائب."
  },

  "Every registered business performs two core functions:": {
    "ar": "تقوم كل منشأة مسجلة بوظيفتين أساسيتين:"
  },

  "Collect VAT on its taxable sales: This is known as output tax": {
    "ar": "تحصيل الضريبة على مبيعاتها الخاضعة للضريبة: ويُعرف ذلك بضريبة المخرجات"
  },

  "Recover VAT paid on its eligible business expenses: This is input tax": {
    "ar": "استرداد الضريبة المدفوعة على مصروفاتها التجارية المؤهلة: ويُعرف ذلك بضريبة المدخلات"
  },

  "The difference between these amounts determines the amount payable or refundable in each tax period.": {
    "ar": "يحدد الفرق بين هذين المبلغين قيمة الضريبة المستحقة أو القابلة للاسترداد في كل فترة ضريبية."
  },

  "How VAT Is Applied Across the Supply Chain": {
    "ar": "كيفية تطبيق ضريبة القيمة المضافة عبر سلسلة التوريد"
  },

  "The VAT system ensures tax is collected at every stage, yet avoids double taxation through an input tax credit mechanism. As goods or services move through production, distribution, and retail, each business charges VAT on its sale and deducts VAT paid on its purchases.": {
    "ar": "يضمن نظام ضريبة القيمة المضافة تحصيل الضريبة في كل مرحلة، مع تجنب الازدواج الضريبي من خلال آلية رصيد ضريبة المدخلات. ومع انتقال السلع أو الخدمات عبر الإنتاج والتوزيع والتجزئة، يقوم كل نشاط بفرض الضريبة على مبيعاته وخصم الضريبة المدفوعة على مشترياته."
  },

  "This creates a neutral tax environment in which the final consumer absorbs the full VAT cost while businesses only remit the net amount after input recovery.": {
    "ar": "يخلق هذا بيئة ضريبية محايدة يتحمل فيها المستهلك النهائي التكلفة الكاملة للضريبة بينما تقوم الشركات بسداد صافي المبلغ فقط بعد استرداد ضريبة المدخلات."
  },

  "VAT Rate Categories in the UAE": {
    "ar": "فئات معدلات ضريبة القيمة المضافة في الإمارات"
  },

  "The UAE uses a three-tier rate structure:": {
    "ar": "تستخدم دولة الإمارات هيكل معدلات مكوناً من ثلاث فئات:"
  },

  "Standard Rated Supplies: 5 Percent": {
    "ar": "التوريدات الخاضعة للمعدل القياسي: 5%"
  },

  "The majority of goods and services fall under this category, including:": {
    "ar": "تندرج غالبية السلع والخدمات تحت هذه الفئة، بما في ذلك:"
  },

  "Retail products": {
    "ar": "منتجات التجزئة"
  },

  "Professional and consultancy services": {
    "ar": "الخدمات المهنية والاستشارية"
  },

  "Commercial real estate leases": {
    "ar": "عقود إيجار العقارات التجارية"
  },

  "Food and beverages": {
    "ar": "الأغذية والمشروبات"
  },

  "Utilities": {
    "ar": "الخدمات العامة"
  },

  "Digital services": {
    "ar": "الخدمات الرقمية"
  },

  "Imported goods": {
    "ar": "السلع المستوردة"
  },

  "Zero Rated Supplies: 0 Percent": {
    "ar": "التوريدات الخاضعة لنسبة الصفر: 0%"
  },

  "These supplies are still taxable, although at zero percent, meaning input tax can be reclaimed. They include:": {
    "ar": "تظل هذه التوريدات خاضعة للضريبة ولكن بنسبة صفر بالمئة، مما يسمح باسترداد ضريبة المدخلات. وتشمل:"
  },
  "Exports to non-GCC implementing states": {
    "ar": "الصادرات إلى الدول غير المطبِّقة ضمن مجلس التعاون الخليجي"
  },

  "International transport of passengers and goods": {
    "ar": "النقل الدولي للمسافرين والبضائع"
  },

  "Supply of investment-grade gold": {
    "ar": "توريد الذهب بدرجة الاستثمار"
  },

  "Education services provided by accredited institutions": {
    "ar": "الخدمات التعليمية المقدمة من مؤسسات معتمدة"
  },

  "Healthcare supplied by licensed medical providers": {
    "ar": "الخدمات الصحية المقدمة من مزودي خدمات مرخصين"
  },

  "First supply of residential property within three years of completion": {
    "ar": "التوريد الأول للعقار السكني خلال ثلاث سنوات من اكتماله"
  },

  "Exempt Supplies": {
    "ar": "التوريدات المعفاة"
  },

  "These supplies do not attract VAT, and businesses cannot recover VAT incurred on associated expenses. Common exempt categories include:": {
    "ar": "لا تخضع هذه التوريدات لضريبة القيمة المضافة، ولا يمكن للشركات استرداد الضريبة المتكبدة على النفقات المرتبطة بها. وتشمل الفئات المعفاة الشائعة:"
  },

  "Residential buildings other than first supply": {
    "ar": "العقارات السكنية بخلاف التوريد الأول"
  },

  "Local passenger transportation": {
    "ar": "نقل الركاب داخل الدولة"
  },

  "Certain margin-based financial services": {
    "ar": "بعض الخدمات المالية المعتمدة على هامش الربح"
  },

  "Bare land transactions": {
    "ar": "تداول الأراضي الخالية"
  },

  "How VAT Is Calculated in the UAE": {
    "ar": "كيفية احتساب ضريبة القيمة المضافة في الإمارات"
  },

  "VAT is calculated by applying the standard rate to the taxable value of goods or services.": {
    "ar": "يُحتسب مقدار الضريبة بتطبيق المعدل القياسي على القيمة الخاضعة للضريبة للسلع أو الخدمات."
  },

  "Example: A product priced at AED 2,000 would attract AED 100 VAT at 5 percent, resulting in a total selling price of AED 2,100.": {
    "ar": "مثال: منتج بسعر 2,000 درهم يخضع لضريبة مقدارها 100 درهم بنسبة 5%، ليصبح السعر الإجمالي 2,100 درهم."
  },

  "Businesses then subtract input VAT paid on their own purchases from the VAT collected on sales. The resulting amount is the figure payable to the Federal Tax Authority.": {
    "ar": "تقوم الشركات بعد ذلك بطرح ضريبة المدخلات المدفوعة على مشترياتها من ضريبة المخرجات المحصّلة على المبيعات. ويُعد الناتج هو المبلغ المستحق للهيئة الاتحادية للضرائب."
  },

  "Businesses must register for VAT if their taxable turnover exceeds AED 375,000 within a 12-month period. Once this threshold is reached, registration must be completed within thirty days.": {
    "ar": "يجب على الشركات التسجيل في ضريبة القيمة المضافة إذا تجاوزت توريداتها الخاضعة للضريبة 375,000 درهم خلال فترة 12 شهراً. ويجب إتمام التسجيل خلال ثلاثين يوماً من بلوغ هذا الحد."
  },

  "A voluntary registration option is available at AED 187,500, which is often used by growing businesses seeking input tax recovery and formal recognition.": {
    "ar": "يتاح خيار التسجيل الطوعي عند 187,500 درهم، وغالباً ما تستخدمه الشركات الناشئة التي ترغب في استرداد ضريبة المدخلات والحصول على اعتراف رسمي."
  },

  "Issuing VAT Invoices": {
    "ar": "إصدار فواتير ضريبة القيمة المضافة"
  },

  "Every taxable supply must be supported with a compliant VAT invoice. The requirements include:": {
    "ar": "يجب أن تدعم كل توريد خاضع للضريبة بفاتورة ضريبية متوافقة. وتشمل المتطلبات:"
  },

  "A clear \"Tax Invoice\" title": {
    "ar": "عنوان واضح يوضح أنها «فاتورة ضريبية»"
  },

  "Accurate supplier and recipient information": {
    "ar": "معلومات دقيقة عن المورد والمتلقي"
  },

  "Tax Registration Numbers for both parties where applicable": {
    "ar": "أرقام التسجيل الضريبي للطرفين عند الاقتضاء"
  },

  "A unique invoice number": {
    "ar": "رقم فاتورة فريد"
  },

  "Description of goods or services": {
    "ar": "وصف السلع أو الخدمات"
  },

  "Quantity, price, and total value before VAT": {
    "ar": "الكمية والسعر والقيمة الإجمالية قبل الضريبة"
  },

  "Invoice date and supply date": {
    "ar": "تاريخ الفاتورة وتاريخ التوريد"
  },

  "Reverse charge indication where relevant": {
    "ar": "إشارة إلى تطبيق آلية الاحتساب العكسي عند الاقتضاء"
  },

  "Simplified invoices are permitted for B2C supplies below AED 10,000.": {
    "ar": "تُسمح الفواتير المبسطة لتوريدات الأعمال إلى المستهلك بقيمة تقل عن 10,000 درهم."
  },

  "VAT returns are submitted online through the EMARATAX portal. Filing frequency depends on annual turnover:": {
    "ar": "يتم تقديم الإقرارات الضريبية عبر بوابة «إمارات تاكس». وتختلف وتيرة التقديم حسب حجم الإيرادات السنوية:"
  },

  "Monthly filing for businesses with turnover above AED 150 million": {
    "ar": "تقديم شهري للشركات التي تتجاوز إيراداتها 150 مليون درهم"
  },

  "Quarterly filing for all other registrants": {
    "ar": "تقديم ربع سنوي لبقية المسجلين"
  },

  "Returns must be submitted within twenty-eight days after the end of each tax period. Businesses must report:": {
    "ar": "يجب تقديم الإقرارات خلال 28 يوماً من نهاية الفترة الضريبية. ويجب على الشركات الإبلاغ عن:"
  },

  "Standard rated supplies": {
    "ar": "التوريدات الخاضعة للمعدل القياسي"
  },

  "Zero rated supplies": {
    "ar": "التوريدات الخاضعة لنسبة الصفر"
  },

  "Imports under reverse charge": {
    "ar": "الواردات الخاضعة لآلية الاحتساب العكسي"
  },

  "Adjustments to previous declarations": {
    "ar": "التعديلات على الإقرارات السابقة"
  },

  "Payment and Remittance of VAT": {
    "ar": "دفع وتسوية ضريبة القيمة المضافة"
  },

  "The net VAT payable must be remitted by the filing deadline. Payments can be made through bank transfer, eDebit, eDirham, credit card, or GIBAN. Failure to pay on time results in financial penalties that compound over time.": {
    "ar": "يجب سداد صافي الضريبة المستحقة قبل الموعد النهائي للتقديم. ويمكن الدفع عبر التحويل البنكي أو eDebit أو eDirham أو البطاقة الائتمانية أو GIBAN. ويؤدي التأخر في السداد إلى غرامات مالية تتزايد بمرور الوقت."
  },

  "Record-Keeping Requirements": {
    "ar": "متطلبات حفظ السجلات"
  },

  "VAT registered businesses must maintain comprehensive records, including:": {
    "ar": "يجب على الشركات المسجلة ضريبياً الاحتفاظ بسجلات شاملة، تشمل:"
  },

  "Tax invoices and credit notes": {
    "ar": "الفواتير الضريبية والإشعارات الدائنة"
  },

  "Statements of supplies and purchases": {
    "ar": "بيانات التوريدات والمشتريات"
  },

  "Export documentation": {
    "ar": "مستندات التصدير"
  },

  "Records of reverse charge supplies": {
    "ar": "سجلات التوريدات الخاضعة للاحتساب العكسي"
  },

  "Details of goods imported or used for non-business activities": {
    "ar": "تفاصيل السلع المستوردة أو المستخدمة لأنشطة غير تجارية"
  },

  "Any documentation supporting apportionment or exemptions": {
    "ar": "أي مستندات تدعم التوزيع أو الإعفاءات"
  },

  "These records must generally be retained for at least five years.": {
    "ar": "يجب الاحتفاظ بهذه السجلات لمدة لا تقل عن خمس سنوات."
  },

  "VAT Recovery and Input Tax Credits": {
    "ar": "استرداد الضريبة ورصيد ضريبة المدخلات"
  },

  "Businesses can reclaim input VAT on expenses used to make taxable supplies. Key considerations include:": {
    "ar": "يمكن للشركات استرداد ضريبة المدخلات على النفقات المستخدمة في التوريدات الخاضعة للضريبة. وتشمل الاعتبارات الأساسية:"
  },

  "Full recovery on expenses related to taxable and zero rated activities": {
    "ar": "الاسترداد الكامل على النفقات المتعلقة بالتوريدات الخاضعة وضريبة الصفر"
  },

  "No recovery on expenses connected solely to exempt supplies": {
    "ar": "عدم استرداد الضريبة على النفقات المرتبطة فقط بالتوريدات المعفاة"
  },

  "No recovery on specific categories such as entertainment, personal vehicles, and certain employee benefits": {
    "ar": "عدم استرداد الضريبة على فئات معينة مثل الترفيه والمركبات الشخصية وبعض مزايا الموظفين"
  },

  "Apportionment required for mixed supplies": {
    "ar": "تطبيق التوزيع للتوريدات المختلطة"
  },

  "Recoverability for capital assets may change over time if usage shifts": {
    "ar": "قد تتغير قابلية الاسترداد للأصول الرأسمالية إذا تغير نمط استخدامها مع الوقت"
  },

  "VAT on Cross-Border Transactions": {
    "ar": "ضريبة القيمة المضافة على المعاملات عبر الحدود"
  },

  "Cross-border supplies follow internationally aligned rules:": {
    "ar": "تخضع التوريدات عبر الحدود لقواعد متوافقة دولياً:"
  },

  "Exports are zero rated": {
    "ar": "التصدير خاضع لنسبة الصفر"
  },

  "Imports attract 5 percent VAT": {
    "ar": "تُفرض ضريبة بنسبة 5% على الواردات"
  },

  "Import VAT for registered businesses is typically accounted for through the reverse charge mechanism": {
    "ar": "يتم عادةً احتساب ضريبة الواردات عبر آلية الاحتساب العكسي للشركات المسجلة"
  },

  "Digital service providers outside the UAE may be required to register and charge VAT on B2C supplies": {
    "ar": "قد يُطلب من مزودي الخدمات الرقمية خارج الدولة التسجيل وفرض الضريبة على توريدات الأعمال إلى المستهلك"
  },

  "Services connected to UAE real estate or events are always taxed in the UAE": {
    "ar": "الخدمات المرتبطة بالعقارات أو الفعاليات داخل الإمارات تُفرض عليها الضريبة دائماً داخل الدولة"
  },

  "Sector Specific Considerations": {
    "ar": "اعتبارات خاصة بالقطاعات"
  },

  "VAT applies differently across industries. For example:": {
    "ar": "تُطبق الضريبة بشكل مختلف حسب القطاع. على سبيل المثال:"
  },

  "Education: Core services are zero rated, while uniforms and materials are standard rated": {
    "ar": "التعليم: الخدمات الأساسية خاضعة لنسبة الصفر، بينما تخضع الزي المدرسي والمواد للمعدل القياسي"
  },

  "Real Estate: Commercial buildings are fully taxable, while most residential supplies are exempt after the first supply": {
    "ar": "العقارات: العقارات التجارية خاضعة للضريبة بالكامل، بينما تُعفى معظم التوريدات السكنية بعد التوريد الأول"
  },

  "Healthcare: Essential services are zero rated, but non-essential procedures may attract the standard rate": {
    "ar": "الرعاية الصحية: الخدمات الأساسية خاضعة لنسبة الصفر، بينما قد تخضع الإجراءات غير الأساسية للمعدل القياسي"
  },

  "Oil and Gas: Crude oil is zero rated, while downstream products carry the standard rate": {
    "ar": "النفط والغاز: النفط الخام خاضع لنسبة الصفر، بينما المنتجات المعالجة خاضعة للمعدل القياسي"
  },

  "Financial Services: Margin-based financial activities are exempt": {
    "ar": "الخدمات المالية: الأنشطة المالية القائمة على هامش الربح معفاة"
  },

  "E-Invoicing and Digital Compliance": {
    "ar": "الفوترة الإلكترونية والامتثال الرقمي"
  },

  "The UAE is preparing for a nationwide e-invoicing system that will transform the compliance landscape. Under the upcoming framework:": {
    "ar": "تستعد الدولة لاعتماد نظام وطني شامل للفوترة الإلكترونية سيغير مشهد الامتثال. ووفقاً للإطار المرتقب:"
  },

  "Invoices will be created and transmitted in structured digital formats": {
    "ar": "سيتم إنشاء الفواتير وإرسالها بصيغ رقمية منظمة"
  },

  "Approved service providers will validate and route invoices": {
    "ar": "سيقوم مزودو الخدمة المعتمدون بالتحقق من الفواتير وتمريرها"
  },

  "Data will reach the Federal Tax Authority in near real time": {
    "ar": "ستصل البيانات إلى الهيئة الاتحادية للضرائب في وقت شبه فوري"
  },

  "The system is expected to reduce fraud, improve audit accuracy, and streamline VAT filings": {
    "ar": "من المتوقع أن يقلل النظام من التلاعب، وأن يعزز دقة التدقيق، وأن يسهل تقديم الإقرارات الضريبية"
  },

  "Businesses using ERP systems must ensure compatibility with the new standards": {
    "ar": "يجب على الشركات التي تستخدم أنظمة تخطيط الموارد المؤسسية ضمان التوافق مع المعايير الجديدة"
  },

  "VAT Penalties in the UAE": {
    "ar": "الغرامات الضريبية في الإمارات"
  },

  "Penalties apply for a wide range of non-compliance activities, including late filing, late payment, incorrect invoicing, record keeping failures, and inaccurate declarations. Some violations carry fixed monetary penalties, while others involve a percentage of unpaid tax, with maximum ceilings reaching up to three hundred percent.": {
    "ar": "تُفرض غرامات على مجموعة واسعة من المخالفات، بما في ذلك التأخر في التقديم، التأخر في السداد، الفواتير غير الصحيحة، ضعف حفظ السجلات، والإقرارات غير الدقيقة. وتتراوح العقوبات بين مبالغ ثابتة ونسب مئوية من الضريبة غير المسددة، مع سقوف قد تصل إلى 300%."
  },

  "VAT has become an essential component of the UAE's financial structure, shaping how businesses manage billing, pricing, record keeping, and reporting. With ongoing regulatory enhancements, including the shift toward mandatory e-invoicing, compliance is becoming more structured and data driven. Businesses that invest early in robust systems and processes will find it easier to stay compliant and avoid penalties.": {
    "ar": "أصبحت ضريبة القيمة المضافة جزءاً أساسياً من البنية المالية في الإمارات، مما يؤثر على كيفية إدارة الشركات للفوترة والتسعير وحفظ السجلات والتقارير. ومع التطورات التنظيمية المستمرة، بما فيها التحول نحو الفوترة الإلكترونية الإلزامية، أصبح الامتثال أكثر تنظيماً وقائماً على البيانات. وستجد الشركات التي تستثمر مبكراً في أنظمة قوية أنه من الأسهل الالتزام وتجنب الغرامات."
  },

  "Modern ERP and tax automation solutions can simplify this transition. Platforms such as Accqrate are helping businesses streamline VAT calculations, e-invoicing workflows, and regulatory reporting, making compliance more manageable as the UAE's tax landscape continues to evolve.": {
    "ar": "يمكن لحلول تخطيط الموارد المؤسسية وأنظمة الأتمتة الضريبية الحديثة تبسيط هذا التحول. وتساعد منصات مثل أكيوريت الشركات في تبسيط حسابات الضريبة، وتدفقات الفوترة الإلكترونية، والتقارير التنظيمية، مما يجعل الامتثال أكثر سهولة مع تطور البيئة الضريبية في الإمارات."
  },

  "Value Added Tax has become an integral part of commercial operations in the United Arab Emirates. Every registered business must document its taxable supplies through VAT compliant invoices that meet the Federal Tax Authority's standards. These invoices serve as formal evidence of the supply, support the calculation of VAT payable, and ensure the buyer can legitimately recover input VAT.": {
    "ar": "أصبحت ضريبة القيمة المضافة جزءاً أساسياً من العمليات التجارية في الإمارات. ويجب على كل منشأة مسجلة توثيق توريداتها الخاضعة للضريبة من خلال فواتير متوافقة مع معايير الهيئة الاتحادية للضرائب. وتعمل هذه الفواتير كدليل رسمي على التوريد، وتدعم حساب الضريبة المستحقة، وتضمن قدرة المشتري على استرداد ضريبة المدخلات بشكل قانوني."
  },

  "Although VAT invoicing may appear straightforward, the rules governing formats, fields, wording, and when each format must be used are detailed and strictly enforced. Understanding the difference between a tax invoice and a simplified tax invoice is essential for day-to-day compliance.": {
    "ar": "على الرغم من أن إصدار الفواتير الضريبية قد يبدو بسيطاً، فإن القواعد الحاكمة للصيغ والحقول والصياغة وتوقيت استخدام كل نوع هي قواعد دقيقة وتُطبق بشكل صارم. ويُعد فهم الفرق بين الفاتورة الضريبية والفاتورة الضريبية المبسطة أمراً ضرورياً للامتثال اليومي."
  },

  "Understanding VAT Invoices in the UAE": {
    "ar": "فهم فواتير ضريبة القيمة المضافة في الإمارات"
  },

  "A VAT invoice confirms that a taxable supply has taken place. It describes the nature of the transaction, the value of the supply, the VAT charged, and identifies both parties involved. This information enables the Federal Tax Authority to verify compliance and assists the buyer in claiming input VAT.": {
    "ar": "تؤكد الفاتورة الضريبية أن توريداً خاضعاً للضريبة قد تم. وهي تصف طبيعة المعاملة وقيمتها والضريبة المحتسبة، وتحدد بيانات الطرفين. وتمكّن هذه المعلومات الهيئة الاتحادية للضرائب من التحقق من الامتثال، وتساعد المشتري في استرداد ضريبة المدخلات."
  },

  "There are two recognised invoice types in the UAE. The full tax invoice is used for detailed business-to-business transactions, while the simplified tax invoice is reserved mainly for business-to-consumer transactions or smaller business-to-business transactions. Every VAT registered supplier must be able to issue both formats when required.": {
    "ar": "توجد فئتان معتمدتان من الفواتير في الإمارات. تُستخدم الفاتورة الضريبية الكاملة للمعاملات التفصيلية بين الشركات، بينما تُستخدم الفاتورة الضريبية المبسطة غالباً للمعاملات بين الأعمال والمستهلكين أو للمعاملات الصغيرة بين الشركات. ويجب على كل مورد مسجل ضريبياً إصدار كلا النوعين عند الحاجة."
  },

  "The Full Tax Invoice": {
    "ar": "الفاتورة الضريبية الكاملة"
  },

  "When It Must Be Issued and Why It Matters": {
    "ar": "متى يجب إصدارها ولماذا هي مهمة"
  },

  "A full tax invoice is mandatory for any business-to-business transaction where the consideration exceeds ten thousand dirhams. It is also the default format many companies use because it provides complete information required for VAT documentation and internal bookkeeping.": {
    "ar": "تُعد الفاتورة الضريبية الكاملة إلزامية لأي معاملة بين الشركات تزيد قيمتها عن عشرة آلاف درهم. وهي الصيغة الافتراضية التي تعتمدها العديد من الشركات لأنها توفر المعلومات الكاملة المطلوبة للتوثيق الضريبي ومسك الدفاتر الداخلي."
  },

  "This invoice must also be issued in situations where the supply falls under the reverse charge mechanism. Under this mechanism, the supplier must state clearly on the invoice that the recipient is responsible for accounting for VAT. This ensures that the buyer correctly reports the VAT in their return even though the supplier does not collect tax on the transaction.": {
    "ar": "يجب أيضاً إصدار هذه الفاتورة في الحالات التي يخضع فيها التوريد لآلية الاحتساب العكسي. ووفقاً لهذه الآلية، يجب أن يذكر المورد بوضوح في الفاتورة أن المتلقي مسؤول عن احتساب الضريبة. وهذا يضمن أن يقوم المشتري بالإبلاغ الصحيح عن الضريبة في إقراره رغم أن المورد لا يقوم بتحصيلها."
  },

  "A full tax invoice is also critical for the buyer because input VAT recovery depends on the presence of a valid invoice that includes all mandatory fields. If any required information is missing, the Federal Tax Authority can deny the input tax claim, which can result in financial loss or penalties.": {
    "ar": "تُعد الفاتورة الضريبية الكاملة ضرورية أيضاً للمشتري لأن استرداد ضريبة المدخلات يعتمد على وجود فاتورة صحيحة تحتوي على جميع الحقول الإلزامية. وإذا كانت أي معلومات مطلوبة مفقودة، يمكن للهيئة الاتحادية للضرائب رفض المطالبة بالضريبة، مما قد يؤدي إلى خسائر مالية أو غرامات."
  },

  "Mandatory Information Required on a Full Tax Invoice": {
    "ar": "المعلومات الإلزامية المطلوبة في الفاتورة الضريبية الكاملة"
  },

  "The Federal Tax Authority requires the following details to appear clearly and in a structured format:": {
    "ar": "تتطلب الهيئة الاتحادية للضرائب ظهور التفاصيل التالية بوضوح وبصيغة منظمة:"
  },

  "Identification Details": {
    "ar": "بيانات التعريف"
  },

  "The words \"tax invoice\" must appear prominently at the top of the document": {
    "ar": "يجب أن تظهر عبارة «فاتورة ضريبية» بشكل واضح في أعلى المستند"
  },

  "The supplier's legal name, complete address, and Tax Registration Number": {
    "ar": "الاسم القانوني للمورد وعنوانه الكامل ورقم التسجيل الضريبي"
  },

  "The recipient's legal name, complete address, and Tax Registration Number": {
    "ar": "الاسم القانوني للمتلقي وعنوانه الكامل ورقم التسجيل الضريبي"
  },

  "Invoice Reference Details": {
    "ar": "بيانات مرجع الفاتورة"
  },

  "A unique and sequential invoice number that allows tracking and audit retrieval": {
    "ar": "رقم فاتورة فريد ومتسلسل يتيح التتبع والاسترجاع لأغراض التدقيق"
  },

  "The date the invoice is issued": {
    "ar": "تاريخ إصدار الفاتورة"
  },

  "The date of supply, if the supply occurred earlier than the invoice date": {
    "ar": "تاريخ التوريد إذا حدث التوريد قبل تاريخ الفاتورة"
  },

  "Supply Details": {
    "ar": "تفاصيل التوريد"
  },

  "A clear description of each good or service provided": {
    "ar": "وصف واضح لكل سلعة أو خدمة مقدمة"
  },

  "The quantity delivered or the nature of the service performed": {
    "ar": "الكمية المسلّمة أو طبيعة الخدمة المقدمة"
  },

  "The unit price before VAT": {
    "ar": "سعر الوحدة قبل الضريبة"
  },

  "Any discount given prior to VAT calculation": {
    "ar": "أي خصم مقدم قبل احتساب الضريبة"
  },

  "The taxable value before VAT": {
    "ar": "القيمة الخاضعة للضريبة قبل احتساب الضريبة"
  },

  "The VAT rate applied": {
    "ar": "معدل الضريبة المطبق"
  },

  "The VAT amount charged on each line or on the total": {
    "ar": "مبلغ الضريبة المحتسب على كل بند أو على الإجمالي"
  },

  "The total payable amount including VAT": {
    "ar": "إجمالي المبلغ المستحق شاملاً الضريبة"
  },

  "Reverse Charge Declaration": {
    "ar": "إقرار آلية الاحتساب العكسي"
  },

  "If applicable, a statement confirming that the buyer must account for VAT under the reverse charge mechanism": {
    "ar": "عند الاقتضاء، بيان يؤكد أن المشتري يجب أن يحتسب الضريبة بموجب آلية الاحتساب العكسي"
  },

  "Each element serves a compliance purpose. The Federal Tax Authority cross-checks these details with VAT returns, customs records, and supplier filings to validate accuracy.": {
    "ar": "كل عنصر يخدم غرض الامتثال. وتقوم الهيئة الاتحادية للضرائب بمراجعة هذه التفاصيل مع الإقرارات الضريبية وسجلات الجمارك وملفات الموردين للتحقق من الدقة."
  },
  "The Simplified Tax Invoice": {
    "ar": "الفاتورة الضريبية المبسطة"
  },

  "When Businesses Can Issue It and Its Required Fields": {
    "ar": "متى يمكن للشركات إصدارها وما هي الحقول المطلوبة"
  },

  "A simplified tax invoice was introduced to reduce administrative complexity for lower value transactions, particularly in retail, hospitality, and consumer-facing services. It can be issued under two conditions:": {
    "ar": "تم تقديم الفاتورة الضريبية المبسطة لتقليل التعقيدات الإدارية في المعاملات منخفضة القيمة، خصوصاً في قطاعات التجزئة والضيافة والخدمات الموجهة للمستهلك. ويمكن إصدارها في حالتين:"
  },

  "First, when the buyer is not registered for VAT": {
    "ar": "أولاً، عندما لا يكون المشتري مسجلاً في ضريبة القيمة المضافة"
  },

  "Second, when the buyer is VAT registered but the value of the supply does not exceed ten thousand dirhams": {
    "ar": "ثانياً، عندما يكون المشتري مسجلاً ضريبياً لكن قيمة التوريد لا تتجاوز عشرة آلاف درهم"
  },

  "This format does not contain the detailed breakdown required in a full tax invoice, but it still provides enough information for VAT calculation and reporting.": {
    "ar": "لا تتضمن هذه الصيغة التفاصيل الكاملة المطلوبة في الفاتورة الضريبية الكاملة، لكنها توفر معلومات كافية لحساب الضريبة وإعداد التقارير."
  },

  "Mandatory Information Required on a Simplified Tax Invoice": {
    "ar": "المعلومات الإلزامية المطلوبة في الفاتورة الضريبية المبسطة"
  },

  "The simplified invoice must show the following:": {
    "ar": "يجب أن تتضمن الفاتورة المبسطة العناصر التالية:"
  },

  "The words \"tax invoice\" in a clearly visible location": {
    "ar": "ظهور عبارة «فاتورة ضريبية» بشكل واضح"
  },

  "The legal name, address, and Tax Registration Number of the supplier": {
    "ar": "الاسم القانوني للمورد وعنوانه ورقم التسجيل الضريبي"
  },

  "The date of issue": {
    "ar": "تاريخ الإصدار"
  },

  "A simple description of the goods or services supplied": {
    "ar": "وصف بسيط للسلع أو الخدمات المقدمة"
  },

  "The total consideration payable by the customer": {
    "ar": "إجمالي المقابل المستحق على العميل"
  },

  "The VAT amount included within the total": {
    "ar": "مبلغ الضريبة المضمن ضمن الإجمالي"
  },

  "Although the simplified format contains fewer details, the accuracy of each field remains essential. Retailers and service providers should ensure their point-of-sale systems automatically meet these requirements.": {
    "ar": "على الرغم من أن الصيغة المبسطة تتضمن تفاصيل أقل، تبقى دقة كل حقل أمراً أساسياً. وينبغي لمتاجر التجزئة ومقدمي الخدمات التأكد من أن أنظمة نقاط البيع تلبي هذه المتطلبات تلقائياً."
  },

  "Why Correct VAT Invoicing Is Essential for Compliance": {
    "ar": "لماذا يعد إصدار الفواتير الضريبية بشكل صحيح أمراً أساسياً للامتثال"
  },

  "VAT invoices are more than commercial documents. They form the foundation of the VAT reporting system. The Federal Tax Authority relies on correct invoicing to validate taxable supplies, match seller and buyer records, and identify discrepancies.": {
    "ar": "الفواتير الضريبية ليست مجرد مستندات تجارية؛ فهي تشكل الأساس لنظام التقارير الضريبية. وتعتمد الهيئة الاتحادية للضرائب على الفواتير الصحيحة للتحقق من التوريدات الخاضعة للضريبة ومطابقة سجلات البائع والمشتري وتحديد أي فروقات."
  },

  "Incorrect or incomplete invoices can trigger several issues, including the inability of the buyer to recover input VAT, penalties for non-compliance, additional audit scrutiny, and amended VAT returns. For this reason, businesses should regularly review invoice templates, train staff, and implement automated invoicing processes to reduce errors.": {
    "ar": "يمكن أن تؤدي الفواتير غير الصحيحة أو غير المكتملة إلى عدة مشكلات، بما في ذلك عدم قدرة المشتري على استرداد ضريبة المدخلات، والغرامات، وزيادة التدقيق، والحاجة لتعديل الإقرارات الضريبية. لذلك يجب على الشركات مراجعة نماذج الفواتير بانتظام، وتدريب الموظفين، وتطبيق أنظمة فوترة آلية لتقليل الأخطاء."
  },

  "Practical Considerations for UAE Businesses": {
    "ar": "اعتبارات عملية للشركات في دولة الإمارات"
  },

  "Automation and ERP Integration": {
    "ar": "الأتمتة والربط مع أنظمة تخطيط الموارد المؤسسية"
  },

  "Automated accounting and invoicing systems reduce human error, ensure mandatory fields are always included, and support efficient reconciliation during VAT return preparation.": {
    "ar": "تقلل أنظمة المحاسبة والفوترة الآلية من الأخطاء البشرية، وتضمن تضمين الحقول الإلزامية، وتدعم التسوية الفعّالة عند إعداد الإقرارات الضريبية."
  },

  "Storage and Record Keeping": {
    "ar": "التخزين وحفظ السجلات"
  },

  "VAT invoices must be stored for the duration required under UAE tax law. Good record keeping supports VAT audits and protects the business in case of disputes.": {
    "ar": "يجب الاحتفاظ بالفواتير الضريبية للمدة المحددة بموجب القانون الضريبي في الإمارات. ويساعد حفظ السجلات بشكل جيد في عمليات التدقيق ويحمي الشركة في حال حدوث نزاعات."
  },

  "Reverse Charge Awareness": {
    "ar": "الوعي بآلية الاحتساب العكسي"
  },

  "Businesses dealing with international supplies, imported services, or certain local transactions must understand when reverse charge applies and include the correct statements on the invoice.": {
    "ar": "على الشركات التي تتعامل مع التوريدات الدولية أو الخدمات المستوردة أو بعض المعاملات المحلية فهم حالات تطبيق آلية الاحتساب العكسي وتضمين البيانات المناسبة في الفاتورة."
  },

  "Adaptation for E-Invoicing": {
    "ar": "الاستعداد للفوترة الإلكترونية"
  },

  "The UAE will gradually align with global digital invoicing practices. Businesses that invest early in structured, compliant invoicing systems will be better prepared for future regulatory changes.": {
    "ar": "ستنضم الإمارات تدريجياً إلى الممارسات العالمية للفوترة الرقمية. وستكون الشركات التي تستثمر مبكراً في أنظمة فوترة منظمة ومتوافقة أكثر استعداداً للتغييرات التنظيمية المستقبلية."
  },

  "VAT invoicing in the UAE follows a structured and rule-based framework designed to ensure transparency, accuracy, and auditability. Whether using a full tax invoice for high-value or business-to-business transactions or a simplified tax invoice for consumer-facing sales, businesses must understand the mandatory fields and the conditions under which each format applies.": {
    "ar": "تتبع الفوترة الضريبية في الإمارات إطاراً منظماً قائماً على قواعد تهدف إلى ضمان الشفافية والدقة وقابلية التدقيق. سواء تم استخدام فاتورة ضريبية كاملة للمعاملات الكبيرة أو بين الشركات، أو فاتورة مبسطة للمبيعات الموجهة للمستهلك، يجب على الشركات فهم الحقول الإلزامية وشروط استخدام كل صيغة."
  },

  "Establishing reliable invoicing processes and using modern digital tools significantly reduces compliance risk. Many organisations choose platforms such as Accqrate to streamline invoice generation and maintain precision across their financial operations while keeping pace with regulatory expectations.": {
    "ar": "إن إنشاء عمليات فوترة موثوقة واستخدام الأدوات الرقمية الحديثة يقللان بشكل كبير من مخاطر عدم الامتثال. وتختار العديد من المؤسسات منصات مثل أكيوريت لتبسيط إنشاء الفواتير والحفاظ على الدقة في العمليات المالية مع مواكبة المتطلبات التنظيمية."
  },

  "The introduction of Value Added Tax in the United Arab Emirates marked a major shift in how businesses record, report, and account for transactions. Since the first of January 2018, the Federal Tax Authority has enforced strict rules designed to uphold transparency, prevent revenue leakage, and ensure that companies operate within a well-regulated tax environment.": {
    "ar": "مثّل تطبيق ضريبة القيمة المضافة في دولة الإمارات تحولاً كبيراً في كيفية تسجيل الشركات للمعاملات والإبلاغ عنها ومعالجتها محاسبياً. ومنذ الأول من يناير 2018، تفرض الهيئة الاتحادية للضرائب قواعد صارمة تهدف إلى تعزيز الشفافية ومنع فقدان الإيرادات وضمان عمل الشركات ضمن بيئة ضريبية منظمة."
  },

  "Non-compliance with VAT obligations is taken seriously in the UAE. Penalties apply for delays, errors, incomplete information, failure to register, improper invoicing, and other breaches of the VAT legislation. Understanding these penalties is essential not only to avoid financial consequences but also to maintain a strong compliance posture and reduce the risk of tax audits.": {
    "ar": "يُنظر إلى عدم الامتثال لالتزامات ضريبة القيمة المضافة بجدية كبيرة في الإمارات. وتُفرض الغرامات على التأخير والأخطاء ونقص المعلومات والإخفاق في التسجيل والفواتير غير المتوافقة وغيرها من المخالفات. ويعد فهم هذه العقوبات أمراً ضرورياً ليس فقط لتجنب العواقب المالية، بل أيضاً للحفاظ على وضع امتثال قوي وتقليل مخاطر التدقيق الضريبي."
  },

  "This comprehensive guide explains every category of VAT penalty, why it exists, and the types of actions that trigger administrative fines.": {
    "ar": "يشرح هذا الدليل الشامل كل فئة من فئات الغرامات الضريبية، وسبب وجودها، وأنواع الأفعال التي تؤدي إلى فرض الغرامات الإدارية."
  },

  "Why VAT Penalties Exist in the UAE": {
    "ar": "لماذا توجد غرامات ضريبة القيمة المضافة في الإمارات"
  },

  "VAT penalties are not simply fines. They serve three significant purposes:": {
    "ar": "الغرامات الضريبية ليست مجرد عقوبات مالية؛ بل تخدم ثلاثة أهداف مهمة:"
  },

  "Strengthening tax compliance: The system ensures that all registered businesses follow consistent rules when issuing invoices, maintaining records, and reporting VAT.": {
    "ar": "تعزيز الامتثال الضريبي: يضمن النظام التزام جميع الشركات المسجلة بالقواعد الموحدة عند إصدار الفواتير وحفظ السجلات والإبلاغ عن الضريبة."
  },

  "Promoting fair competition: Companies that meet their tax obligations should not be placed at a disadvantage when competing with businesses that underreport or delay payment.": {
    "ar": "تعزيز المنافسة العادلة: لا ينبغي للشركات الملتزمة بضريبة القيمة المضافة أن تكون في وضع غير متكافئ أمام الشركات التي تقلل الإبلاغ أو تؤخر السداد."
  },

  "Preserving the integrity of the tax ecosystem: Accurate VAT reporting allows the government to monitor supply chains, prevent fraudulent practices, and maintain stable revenue streams.": {
    "ar": "الحفاظ على نزاهة النظام الضريبي: يتيح الإبلاغ الدقيق مراقبة سلاسل الإمداد ومنع الممارسات الاحتيالية والحفاظ على تدفق إيرادات مستقر."
  },

  "With these goals in mind, the UAE Cabinet approved a structured list of penalties that apply whenever a business fails to comply with the VAT law or the broader Tax Procedures Law.": {
    "ar": "وبناءً على هذه الأهداف، اعتمد مجلس الوزراء قائمة منظمة بالغرامات التي تُطبق عند مخالفة الشركات لقانون ضريبة القيمة المضافة أو لقانون الإجراءات الضريبية."
  },

  "Penalties Related to VAT Invoicing, Pricing, and Documentation": {
    "ar": "الغرامات المتعلقة بالفواتير الضريبية والتسعير والتوثيق"
  },

  "Prices Not Shown Inclusive of VAT": {
    "ar": "عدم عرض الأسعار شاملة لضريبة القيمة المضافة"
  },

  "Every item sold in the UAE must be displayed with a VAT-inclusive price. When a business fails to do this, the penalty is five thousand dirhams. This rule prevents misleading pricing and ensures transparency for customers.": {
    "ar": "يجب عرض كل سلعة تُباع في الإمارات بسعر يشمل ضريبة القيمة المضافة. وفي حال عدم الالتزام، تُفرض غرامة قدرها خمسة آلاف درهم. ويمنع هذا الإجراء التضليل في التسعير ويضمن الشفافية للمستهلك."
  },

  "Not Informing the Authority When Applying the Profit Margin Scheme": {
    "ar": "عدم إخطار الهيئة عند تطبيق نظام هامش الربح"
  },

  "Businesses using the profit margin scheme must declare this to the Federal Tax Authority. Failure to make this notification leads to a penalty of two thousand five hundred dirhams.": {
    "ar": "يجب على الشركات التي تطبق نظام هامش الربح إخطار الهيئة الاتحادية للضرائب. ويؤدي عدم القيام بذلك إلى غرامة قدرها ألفان وخمسمائة درهم."
  },

  "Non-Compliance with Rules Relating to Designated Zones": {
    "ar": "عدم الالتزام بقواعد المناطق المحددة"
  },

  "Goods moving into or out of designated zones must follow strict transfer procedures. If a business violates these procedures, the penalty will be whichever is higher:": {
    "ar": "يجب أن تلتزم السلع المتحركة من وإلى المناطق المحددة بإجراءات نقل صارمة. وإذا تمت مخالفة ذلك، تُفرض الغرامة التالية أيهما أعلى:"
  },

  "Fifty thousand dirhams, or": {
    "ar": "خمسون ألف درهم، أو"
  },

  "Fifty percent of the unpaid VAT related to the violation": {
    "ar": "خمسون بالمائة من الضريبة غير المسددة المتعلقة بالمخالفة"
  },

  "Failure to Issue a Tax Invoice or Approved Alternative": {
    "ar": "عدم إصدار فاتورة ضريبية أو بديل معتمد"
  },

  "Whenever a taxable supply is made, a tax invoice must be issued. If a business fails to do so, a penalty of two thousand five hundred dirhams applies for every instance.": {
    "ar": "عند إجراء توريد خاضع للضريبة، يجب إصدار فاتورة ضريبية. وفي حال عدم القيام بذلك، تُفرض غرامة قدرها ألفان وخمسمائة درهم عن كل حالة."
  },

  "Failure to Issue a Tax Credit Note": {
    "ar": "عدم إصدار إشعار دائن ضريبي"
  },

  "When adjustments are required such as return of goods, cancellation of service, or correction of an invoice, a tax credit note must be issued. Each missed or incorrect credit note attracts a penalty of two thousand five hundred dirhams.": {
    "ar": "عند الحاجة إلى تسويات مثل إرجاع سلع أو إلغاء خدمة أو تصحيح فاتورة، يجب إصدار إشعار دائن ضريبي. وكل إشعار مفقود أو غير صحيح يؤدي إلى غرامة قدرها ألفان وخمسمائة درهم."
  },

  "Errors in Issuing Electronic Invoices and Credit Notes": {
    "ar": "الأخطاء في إصدار الفواتير والإشعارات الدائنة الإلكترونية"
  },

  "If a business does not follow the technical or procedural requirements for issuing electronic invoices or electronic credit notes, a penalty of two thousand five hundred dirhams applies for each violation.": {
    "ar": "إذا لم تلتزم الشركة بالمتطلبات الفنية أو الإجرائية لإصدار الفواتير أو الإشعارات الدائنة الإلكترونية، تُفرض غرامة قدرها ألفان وخمسمائة درهم عن كل مخالفة."
  },

  "Penalties Arising from Violations of General Tax Procedures": {
    "ar": "الغرامات الناشئة عن مخالفات الإجراءات الضريبية العامة"
  },

  "These penalties fall under the broader Tax Procedures Law that applies across VAT, corporate tax, and excise tax.": {
    "ar": "تندرج هذه الغرامات ضمن قانون الإجراءات الضريبية الأوسع الذي ينطبق على ضريبة القيمة المضافة وضريبة الشركات والضريبة الانتقائية."
  },

  "Failure to Maintain Proper Records": {
    "ar": "عدم الاحتفاظ بالسجلات المطلوبة"
  },

  "Businesses must keep accounting records, VAT-related documentation, import and export records, and other materials required by law.": {
    "ar": "يجب على الشركات الاحتفاظ بالسجلات المحاسبية والمستندات المتعلقة بضريبة القيمة المضافة وسجلات الاستيراد والتصدير وغيرها من المواد التي يفرضها القانون."
  },

  "First offense: ten thousand dirhams": {
    "ar": "المخالفة الأولى: عشرة آلاف درهم"
  },

  "Repeat offense: twenty thousand dirhams": {
    "ar": "تكرار المخالفة: عشرون ألف درهم"
  },

  "Failure to Provide Records in Arabic": {
    "ar": "عدم تقديم السجلات باللغة العربية"
  },

  "If the authority requests Arabic copies of records and the business fails to provide them, the penalty is twenty thousand dirhams.": {
    "ar": "إذا طلبت الهيئة نسخاً عربية من السجلات ولم تقدمها الشركة، تُفرض غرامة قدرها عشرون ألف درهم."
  },

  "Late Tax Registration": {
    "ar": "التسجيل المتأخر في الضريبة"
  },

  "Businesses that cross the mandatory registration threshold must register within the stipulated timeline. Failing to register results in a penalty of ten thousand dirhams.": {
    "ar": "يجب على الشركات التي تتجاوز حد التسجيل الإلزامي إتمام التسجيل خلال المدة المحددة. ويؤدي عدم التسجيل إلى غرامة قدرها عشرة آلاف درهم."
  },

  "Late Deregistration": {
    "ar": "إلغاء التسجيل المتأخر"
  },

  "Businesses no longer required to be under VAT must apply for deregistration. If they do not, a monthly penalty of one thousand dirhams applies, up to a maximum of ten thousand dirhams.": {
    "ar": "يجب على الشركات التي لم تعد خاضعة للضريبة التقدم بطلب إلغاء التسجيل. وفي حال عدم القيام بذلك، تُفرض غرامة شهرية قدرها ألف درهم، وبحد أقصى عشرة آلاف درهم."
  },

  "Failure to Update Registration Information": {
    "ar": "عدم تحديث معلومات التسجيل"
  },

  "Changes in ownership, address, business activity, or other registration details must be reported to the authority.": {
    "ar": "يجب الإبلاغ عن أي تغييرات في الملكية أو العنوان أو النشاط التجاري أو تفاصيل التسجيل الأخرى."
  },

  "First offense: five thousand dirhams": {
    "ar": "المخالفة الأولى: خمسة آلاف درهم"
  },

  "Repeat offense: ten thousand dirhams": {
    "ar": "تكرار المخالفة: عشرة آلاف درهم"
  },

  "Delay in Notifying the Appointment of a Legal Representative": {
    "ar": "التأخر في إخطار تعيين ممثل قانوني"
  },

  "If a legal representative is appointed for tax matters, the authority must be notified. If the notification is delayed, a penalty of ten thousand dirhams applies, payable by the representative.": {
    "ar": "إذا تم تعيين ممثل قانوني للضرائب، يجب إخطار الهيئة. وفي حال التأخر، تُفرض غرامة قدرها عشرة آلاف درهم تُسدد من قبل الممثل."
  },

  "Legal Representative Failing to File a Return": {
    "ar": "فشل الممثل القانوني في تقديم الإقرار"
  },

  "If the representative does not file the required return within the specified timeframe, the penalty is one thousand dirhams for the first violation and two thousand dirhams for any repeat within twenty-four months.": {
    "ar": "إذا لم يقدم الممثل الإقرار المطلوب ضمن المهلة المحددة، تُفرض غرامة قدرها ألف درهم للمخالفة الأولى وألفا درهم لأي تكرار خلال أربعة وعشرين شهراً."
  },

  "Penalties for Late Filing, Late Payment, and Incorrect Submissions": {
    "ar": "غرامات التأخر في التقديم والسداد والتقديم غير الصحيح"
  },

  "Late VAT Return Filing": {
    "ar": "التأخر في تقديم الإقرار الضريبي"
  },

  "If a business submits its VAT return after the deadline, the fine is:": {
    "ar": "إذا قدمت الشركة إقرارها الضريبي بعد الموعد النهائي، تكون الغرامة:"
  },

  "One thousand dirhams for the first violation": {
    "ar": "ألف درهم للمخالفة الأولى"
  },

  "Two thousand dirhams for subsequent violations within twenty-four months": {
    "ar": "ألفا درهم للمخالفات اللاحقة خلال أربعة وعشرين شهراً"
  },

  "Late VAT Payment": {
    "ar": "التأخر في سداد الضريبة"
  },

  "This is one of the most severe categories of penalties, as it accumulates over time. The structure is as follows:": {
    "ar": "يُعد هذا أحد أكثر أنواع الغرامات شدة لأنه يتراكم بمرور الوقت. وتكون هيكلية الغرامة كما يلي:"
  },

  "Two percent of the unpaid tax applies immediately on the day after the due date": {
    "ar": "تطبق نسبة 2% من الضريبة غير المسددة مباشرة في اليوم التالي لتاريخ الاستحقاق"
  },

  "Four percent is charged for every additional month the amount remains outstanding": {
    "ar": "يتم فرض 4% إضافية عن كل شهر يبقى فيه المبلغ غير مسدد"
  },

  "The total penalties can reach up to three hundred percent of the unpaid tax": {
    "ar": "يمكن أن تصل الغرامات الإجمالية إلى 300% من الضريبة غير المسددة"
  },

  "Filing Incorrect VAT Returns": {
    "ar": "تقديم إقرارات ضريبية غير صحيحة"
  },

  "When incorrect information is included in a return, the penalty is:": {
    "ar": "عند تضمين معلومات غير صحيحة في الإقرار، تكون الغرامة:"
  },

  "One thousand dirhams for the first incorrect return": {
    "ar": "ألف درهم للإقرار غير الصحيح الأول"
  },

  "Two thousand dirhams for repeat occurrences": {
    "ar": "ألفا درهم لتكرار المخالفة"
  },

  "However, if the difference in tax resulting from the error is less than the penalty above, the fine will be limited to the tax difference or five hundred dirhams. If the business corrects the mistake before the payment deadline, no penalty is applied.": {
    "ar": "ولكن إذا كان الفرق في الضريبة الناتج عن الخطأ أقل من الغرامة المذكورة، فستقتصر الغرامة على فرق الضريبة أو خمسمائة درهم. وإذا صححت الشركة الخطأ قبل الموعد النهائي للسداد، فلن تُفرض أي غرامة."
  },

  "Penalties for Voluntary Disclosure of Errors": {
    "ar": "غرامات الإفصاح الطوعي عن الأخطاء"
  },

  "Taxpayers can voluntarily report mistakes using the voluntary disclosure mechanism. The penalty depends on how long after the original deadline the disclosure is made.": {
    "ar": "يمكن لدافعي الضرائب الإبلاغ طوعاً عن الأخطاء باستخدام آلية الإفصاح الطوعي. وتعتمد الغرامة على الفترة الزمنية بين موعد الاستحقاق الأصلي وتاريخ الإفصاح."
  },

  "Disclosure within one year: five percent of the tax difference": {
    "ar": "الإفصاح خلال سنة: 5% من فرق الضريبة"
  },

  "Disclosure within two years: ten percent": {
    "ar": "الإفصاح خلال سنتين: 10%"
  },

  "Disclosure within three years: twenty percent": {
    "ar": "الإفصاح خلال ثلاث سنوات: 20%"
  },

  "Disclosure within four years: thirty percent": {
    "ar": "الإفصاح خلال أربع سنوات: 30%"
  },

  "If the disclosure is made after four years but before an audit begins, the penalty increases to fifty percent of the tax difference. Additional monthly penalties of four percent apply to unpaid tax and ineligible refunds.": {
    "ar": "إذا تم الإفصاح بعد أربع سنوات ولكن قبل بدء التدقيق، ترتفع الغرامة إلى 50% من فرق الضريبة. كما تُفرض غرامات شهرية إضافية بنسبة 4% على الضريبة غير المسددة والمبالغ المستردة غير المستحقة."
  },

  "Penalties Related to Tax Audits and Import-Related Obligations": {
    "ar": "الغرامات المتعلقة بالتدقيقات الضريبية والالتزامات المرتبطة بالاستيراد"
  },

  "Obstructing or Not Assisting a Tax Auditor": {
    "ar": "إعاقة المدقق الضريبي أو عدم مساعدته"
  },

  "If a business fails to cooperate with an auditor, a fixed penalty of twenty thousand dirhams applies.": {
    "ar": "إذا لم تتعاون الشركة مع المدقق الضريبي، تُفرض غرامة ثابتة قدرها عشرون ألف درهم."
  },

  "Failure to Account for Tax on Behalf of Another Party": {
    "ar": "عدم احتساب الضريبة نيابة عن طرف آخر"
  },

  "When a person or business is required to calculate tax for someone else and does not, the penalty follows the same structure as late VAT payment:": {
    "ar": "عندما يكون شخص أو منشأة ملزمة باحتساب الضريبة لصالح طرف آخر ولا تقوم بذلك، تُطبق الغرامة وفق نفس هيكلية غرامات التأخر في السداد:"
  },

  "Two percent immediately": {
    "ar": "2% فوراً"
  },

  "Four percent monthly": {
    "ar": "4% شهرياً"
  },

  "Capped at three hundred percent": {
    "ar": "وبحد أقصى 300%"
  },

  "Not Accounting for VAT on Imported Goods": {
    "ar": "عدم احتساب الضريبة على السلع المستوردة"
  },

  "When VAT on imports is not declared or under-declared, a penalty equal to fifty percent of the unpaid or undeclared tax applies.": {
    "ar": "عندما لا يتم التصريح عن ضريبة الواردات أو يتم التصريح عنها بشكل ناقص، تُفرض غرامة تعادل 50% من الضريبة غير المسددة أو غير المصرح عنها."
  },

  "Why Understanding Penalties Is Crucial for Businesses": {
    "ar": "لماذا يعد فهم الغرامات أمراً حاسماً للشركات"
  },

  "VAT penalties are preventable. Most arise from avoidable oversights such as issuing incorrect documents, missing filing deadlines, or failing to keep accurate records.": {
    "ar": "غرامات ضريبة القيمة المضافة يمكن تجنبها. ومعظمها ينشأ من أخطاء بسيطة يمكن تفاديها مثل إصدار مستندات غير صحيحة، أو التأخر في التقديم، أو عدم حفظ السجلات بدقة."
  },

  "Businesses reduce their risk significantly when they:": {
    "ar": "تقلل الشركات من مخاطرها بشكل كبير عندما تقوم بما يلي:"
  },

  "Maintain a clear audit trail": {
    "ar": "الاحتفاظ بسجل تدقيق واضح"
  },

  "Issue accurate VAT invoices": {
    "ar": "إصدار فواتير ضريبية صحيحة"
  },

  "Use properly configured accounting systems": {
    "ar": "استخدام أنظمة محاسبية مُعدّة بشكل صحيح"
  },

  "Update the Federal Tax Authority on any registration changes": {
    "ar": "إخطار الهيئة الاتحادية للضرائب بأي تغييرات في التسجيل"
  },

  "Train staff on VAT requirements": {
    "ar": "تدريب الموظفين على متطلبات ضريبة القيمة المضافة"
  },

  "Review filings before submission": {
    "ar": "مراجعة الإقرارات قبل تقديمها"
  },

  "Monitor deadlines using automated reminders": {
    "ar": "متابعة المواعيد النهائية باستخدام تذكيرات آلية"
  },

  "Non-compliance does not only result in penalties. It can also affect a company's credit standing, regulatory relationships, and reputation in the market.": {
    "ar": "إن عدم الامتثال لا يؤدي إلى الغرامات فقط، بل قد يؤثر أيضاً على التصنيف الائتماني للشركة وعلاقاتها التنظيمية وسمعتها في السوق."
  },

  "The UAE VAT penalty framework is structured to encourage responsible behaviour, accuracy, and timely compliance. Businesses that understand these rules can operate confidently and avoid the financial impact associated with mistakes, delays, or incomplete documentation.": {
    "ar": "تم تصميم إطار الغرامات الضريبية في الإمارات لتعزيز السلوك المسؤول والدقة والامتثال في الوقت المناسب. ويمكن للشركات التي تفهم هذه القواعد العمل بثقة وتجنب الآثار المالية الناتجة عن الأخطاء أو التأخير أو نقص المستندات."
  },

  "Reliable tax and accounting systems play a major role in maintaining compliance. Platforms such as Accqrate support businesses by helping them manage invoicing, VAT calculations, and detailed record keeping, reducing the chances of errors and ensuring a smoother interaction with the Federal Tax Authority.": {
    "ar": "تلعب الأنظمة المحاسبية والضريبية الموثوقة دوراً أساسياً في الحفاظ على الامتثال. وتدعم منصات مثل أكيوريت الشركات من خلال إدارة الفوترة وحساب الضريبة وحفظ السجلات التفصيلية، مما يقلل فرص الأخطاء ويضمن تفاعلاً أسلس مع الهيئة الاتحادية للضرائب."
  },
  "The Value Added Tax framework in the United Arab Emirates began on the first of January 2018 through Federal Decree Law No. 8 of 2017. Since its introduction, VAT has become a central part of every business transaction in the country. The Federal Tax Authority assigns specific VAT rates depending on the nature of the supply, and every registered business must charge the correct rate, issue a compliant invoice, and remit the collected tax through periodic VAT returns.": {
    "ar": "بدأ إطار ضريبة القيمة المضافة في دولة الإمارات العربية المتحدة في الأول من يناير 2018 بموجب المرسوم بقانون اتحادي رقم 8 لسنة 2017. ومنذ تطبيقها، أصبحت الضريبة جزءاً أساسياً من كل معاملة تجارية في الدولة. وتحدد الهيئة الاتحادية للضرائب النسبة الضريبية المناسبة بحسب طبيعة التوريد، ويتعين على كل منشأة مسجلة فرض النسبة الصحيحة، وإصدار فاتورة متوافقة، وسداد الضريبة المحصلة من خلال الإقرارات الدورية."
  },

  "Although the general VAT rate in the UAE is five percent, not all supplies attract this rate. The law classifies transactions into three broad categories: standard rated supplies, zero rated supplies, and exempt supplies. Understanding the difference between these categories is essential for accurate invoicing, proper input tax recovery, and overall VAT compliance.": {
    "ar": "على الرغم من أن النسبة العامة لضريبة القيمة المضافة في الإمارات هي خمسة بالمائة، إلا أن هذه النسبة لا تنطبق على جميع التوريدات. ويصنف القانون المعاملات ضمن ثلاث فئات رئيسية: التوريدات الخاضعة للنسبة الأساسية، والتوريدات الخاضعة لنسبة الصفر بالمائة، والتوريدات المعفاة. ويعد فهم الفروق بين هذه الفئات ضرورياً لإصدار فواتير دقيقة، واسترداد صحيح لضريبة المدخلات، وضمان الامتثال الضريبي."
  },

  "Understanding the VAT Rates in the UAE": {
    "ar": "فهم نسب ضريبة القيمة المضافة في دولة الإمارات"
  },

  "A business registered for VAT must generally add five percent VAT to the taxable value of its goods or services. However, the VAT regime has carved out specific groups of supplies that fall under special treatment. Some are taxed at zero percent even though the transaction forms part of the VAT system, while others are completely exempt and fall outside the scope of taxation for input VAT recovery purposes.": {
    "ar": "يجب على المنشأة المسجلة في ضريبة القيمة المضافة إضافة نسبة 5% إلى القيمة الخاضعة للضريبة للسلع أو الخدمات. ومع ذلك، يحدد النظام الضريبي مجموعات معينة من التوريدات التي تخضع لمعالجة خاصة. فبعضها يخضع لنسبة صفر بالمائة رغم دخوله ضمن نظام الضريبة، بينما البعض الآخر معفى بالكامل ويقع خارج نطاق استرداد ضريبة المدخلات."
  },

  "The three VAT categories can be viewed as follows:": {
    "ar": "يمكن تلخيص الفئات الثلاث لضريبة القيمة المضافة كما يلي:"
  },

  "Standard rated supplies: These attract a VAT rate of five percent": {
    "ar": "التوريدات الخاضعة للنسبة الأساسية: وتخضع لنسبة 5%"
  },

  "Zero rated supplies: These attract a VAT rate of zero percent, but the supplier is still within the VAT system and may recover input VAT": {
    "ar": "التوريدات الخاضعة لنسبة الصفر بالمائة: تخضع لنسبة 0%، لكن المورد يظل ضمن النظام الضريبي ويجوز له استرداد ضريبة المدخلات"
  },

  "Exempt supplies: These do not attract VAT, and the supplier cannot recover input VAT on related expenses": {
    "ar": "التوريدات المعفاة: لا تخضع لضريبة القيمة المضافة، ولا يجوز للمورد استرداد ضريبة المدخلات على النفقات المرتبطة بها"
  },

  "Each category has its own conditions, qualifying rules, and documentary requirements. Businesses must classify supplies correctly to avoid penalties and to maintain accurate VAT returns.": {
    "ar": "لكل فئة شروطها وقواعدها ومتطلبات التوثيق الخاصة بها. ويجب على الشركات تصنيف التوريدات بدقة لتجنب الغرامات والحفاظ على دقة الإقرارات الضريبية."
  },

  "Standard Rated Supplies: VAT Applied at Five Percent": {
    "ar": "التوريدات الخاضعة للنسبة الأساسية: تطبيق ضريبة بنسبة خمسة بالمائة"
  },

  "The standard rate applies to the majority of goods and services supplied within the UAE. These transactions form the core of the VAT system. Any supply that does not fall within the statutory list of zero rated or exempt supplies is considered standard rated.": {
    "ar": "تنطبق النسبة الأساسية على معظم السلع والخدمات المقدمة داخل الإمارات. وتشكل هذه المعاملات جوهر نظام ضريبة القيمة المضافة. وأي توريد لا يندرج ضمن قائمة التوريدات الخاضعة لنسبة الصفر بالمائة أو المعفاة يُعد خاضعاً للنسبة الأساسية."
  },

  "Common examples include the following:": {
    "ar": "وتشمل الأمثلة الشائعة ما يلي:"
  },

  "Retail sales across all sectors": {
    "ar": "مبيعات التجزئة في جميع القطاعات"
  },

  "Hotel accommodation and restaurant services": {
    "ar": "الإقامة الفندقية وخدمات المطاعم"
  },

  "Construction and contracting services": {
    "ar": "خدمات البناء والمقاولات"
  },

  "Maintenance and repair services": {
    "ar": "خدمات الصيانة والإصلاح"
  },

  "Events, entertainment, and leisure activities": {
    "ar": "الفعاليات والترفيه والأنشطة الترفيهية"
  },

  "General consulting, technical, and professional services": {
    "ar": "الاستشارات العامة والخدمات الفنية والمهنية"
  },

  "Imported goods of any kind unless specifically zero rated": {
    "ar": "السلع المستوردة بجميع أنواعها ما لم تكن مصنفة ضمن التوريدات الخاضعة لنسبة الصفر بالمائة"
  },

  "Under this category, the supplier must collect five percent VAT, issue a full or simplified tax invoice depending on the situation, and report the transaction in the periodic VAT return. Input VAT incurred on business-related purchases is normally recoverable.": {
    "ar": "في هذه الفئة، يجب على المورد تحصيل ضريبة بنسبة 5%، وإصدار فاتورة ضريبية كاملة أو مبسطة بحسب الحالة، والإبلاغ عن المعاملة في الإقرار الضريبي الدوري. وتكون ضريبة المدخلات على المشتريات المرتبطة بالأعمال قابلة للاسترداد عادة."
  },

  "Zero Rated Supplies: VAT Applied at Zero Percent with Full Input Tax Recovery": {
    "ar": "التوريدات الخاضعة لنسبة الصفر بالمائة: ضريبة بنسبة صفر مع استرداد كامل لضريبة المدخلات"
  },

  "Zero rated supplies are taxable supplies where VAT is charged at zero percent. Even though no VAT is collected from the customer, the supplier remains eligible to reclaim input VAT paid on expenses connected with making these supplies. This is a key distinction between zero rated and exempt transactions.": {
    "ar": "التوريدات الخاضعة لنسبة الصفر بالمائة هي توريدات خاضعة للضريبة ولكن بنسبة 0%. وعلى الرغم من عدم تحصيل أي ضريبة من العميل، يظل المورد مؤهلاً لاسترداد ضريبة المدخلات المدفوعة على النفقات المرتبطة بهذه التوريدات. وهذا ما يميزها عن التوريدات المعفاة."
  },

  "The UAE VAT law provides a defined list of transactions that qualify for zero rating. These include the following:": {
    "ar": "يوضح قانون ضريبة القيمة المضافة في الإمارات قائمة محددة بالمعاملات التي تُصنف ضمن نسبة الصفر بالمائة، ومنها:"
  },

  "Exports of goods to destinations outside the UAE": {
    "ar": "تصدير السلع إلى وجهات خارج الإمارات"
  },

  "Exports of services provided that the benefit is consumed outside the UAE and conditions in the law are satisfied": {
    "ar": "تصدير الخدمات بشرط استهلاك المنفعة خارج الإمارات واستيفاء شروط القانون"
  },

  "International transportation of passengers and goods": {
    "ar": "النقل الدولي للركاب والبضائع"
  },

  "Supply or import of precious metals that meet the required purity standards": {
    "ar": "توريد أو استيراد المعادن الثمينة التي تستوفي معايير النقاء المطلوبة"
  },

  "First supply of residential buildings within three years of completion": {
    "ar": "التوريد الأول للمباني السكنية خلال ثلاث سنوات من اكتمالها"
  },

  "Certain buildings supplied to charitable organisations": {
    "ar": "بعض المباني التي تُورد للمنظمات الخيرية"
  },

  "Educational services provided by approved institutions": {
    "ar": "الخدمات التعليمية المقدمة من مؤسسات معتمدة"
  },

  "Healthcare services provided by qualified medical professionals": {
    "ar": "الخدمات الصحية المقدمة من مختصين مؤهلين"
  },

  "Each activity must satisfy specific conditions outlined in the Executive Regulations. Businesses must maintain strong documentation to justify their application of the zero percent rate during audits.": {
    "ar": "يجب أن تستوفي كل معاملة الشروط المحددة في اللائحة التنفيذية. كما يجب على الشركات الاحتفاظ بوثائق قوية لتبرير تطبيق نسبة الصفر بالمائة أثناء التدقيق."
  },

  "Exempt Supplies: Outside the VAT System with No Input VAT Recovery": {
    "ar": "التوريدات المعفاة: خارج نظام الضريبة وبدون استرداد لضريبة المدخلات"
  },

  "Exempt supplies occupy a different status within the VAT framework. Although these supplies are recognised under the law, they do not attract VAT and the supplier cannot claim input VAT on expenses related to making these supplies. This often creates an irrecoverable VAT cost for businesses operating in exempt sectors.": {
    "ar": "تحتل التوريدات المعفاة وضعاً مختلفاً ضمن إطار ضريبة القيمة المضافة. فرغم الاعتراف بها قانوناً، إلا أنها لا تخضع للضريبة ولا يجوز للمورد استرداد ضريبة المدخلات على النفقات المرتبطة بها، مما يؤدي غالباً إلى تكبد الشركات في القطاعات المعفاة تكلفة ضريبية غير قابلة للاسترداد."
  },

  "The UAE VAT law identifies the following categories as exempt:": {
    "ar": "يحدد قانون ضريبة القيمة المضافة في الإمارات الفئات التالية كتوريدات معفاة:"
  },

  "Specified financial services that do not charge explicit fees": {
    "ar": "الخدمات المالية المحددة التي لا تُفرض عليها رسوم صريحة"
  },

  "Residential buildings that are not new and therefore do not fall under the zero rated category": {
    "ar": "المباني السكنية غير الجديدة، وبالتالي لا تندرج ضمن فئة التوريد الأول الخاضع لنسبة الصفر بالمائة"
  },

  "Bare land with no developed structures": {
    "ar": "الأراضي الخالية غير المطورة"
  },

  "Local passenger transportation by land, air, or sea within the UAE": {
    "ar": "النقل المحلي للركاب براً أو بحراً أو جواً داخل الإمارات"
  },

  "Businesses dealing in both taxable and exempt supplies may need to use an apportionment method to determine how much of their input VAT can be recovered. Proper record keeping and category identification become essential for accurate VAT recovery.": {
    "ar": "قد تحتاج الشركات التي تتعامل في توريدات خاضعة ومعفاة إلى استخدام طريقة التخصيص لتحديد مقدار ضريبة المدخلات القابل للاسترداد. ويصبح حفظ السجلات وتحديد الفئات بدقة أمراً ضرورياً لاسترداد الضريبة بشكل صحيح."
  },

  "Why VAT Rate Classification Is Important": {
    "ar": "أهمية تصنيف نسب ضريبة القيمة المضافة"
  },

  "Incorrect classification of VAT rates can result in underpaid tax, denied input tax credits, or penalties. A supplier charging zero percent VAT incorrectly may lose the right to recover input VAT. Conversely, applying five percent VAT on a zero rated sale can create undue cost for the customer and increase compliance risk.": {
    "ar": "قد يؤدي التصنيف غير الصحيح للنسب الضريبية إلى ضريبة غير مسددة، أو رفض استرداد ضريبة المدخلات، أو فرض غرامات. فقد يفقد المورد الذي يطبق نسبة الصفر بالمائة بشكل خاطئ حقه في استرداد ضريبة المدخلات، وفي المقابل فإن تطبيق نسبة 5% على توريد خاضع للصفر بالمائة قد يسبب تكلفة إضافية للعميل ويزيد مخاطر عدم الامتثال."
  },

  "Businesses should therefore carry out a detailed review of their products, services, and supply chains to ensure correct VAT treatment. Clear documentation, accurate invoicing, and reliable VAT reporting systems are crucial for maintaining compliance in the UAE.": {
    "ar": "يجب على الشركات إجراء مراجعة دقيقة لمنتجاتها وخدماتها وسلاسل التوريد الخاصة بها لضمان المعالجة الضريبية الصحيحة. كما تعد الوثائق الواضحة والفوترة الدقيقة وأنظمة التقارير الضريبية الموثوقة عناصر أساسية للحفاظ على الامتثال في الإمارات."
  },

  "The UAE VAT system is built around three primary rate categories that determine how tax is charged and how input VAT is recovered. Most transactions are subject to the standard five percent rate, while a specific list of supplies qualifies for zero percent VAT with the benefit of input tax recovery. A limited set of supplies remains exempt and sits outside the VAT credit chain.": {
    "ar": "يستند نظام ضريبة القيمة المضافة في دولة الإمارات إلى ثلاث فئات رئيسية تحدد كيفية فرض الضريبة وكيفية استرداد ضريبة المدخلات. تخضع معظم المعاملات لنسبة 5%، بينما تستفيد مجموعة محددة من التوريدات من نسبة 0% مع إمكانية استرداد الضريبة. وتبقى فئة محدودة من التوريدات معفاة وتقع خارج سلسلة الائتمان الضريبي."
  },

  "Accurate classification ensures proper invoicing, compliant VAT filings, and smooth audits. Many organisations rely on digital platforms such as Accqrate to ensure consistent VAT categorisation and seamless reporting across their financial operations.": {
    "ar": "يضمن التصنيف الدقيق إصدار فواتير صحيحة، وتقديم إقرارات ضريبية متوافقة، وإجراء تدقيقات سلسة. وتعتمد العديد من المؤسسات على منصات مثل أكيوريت لضمان تصنيف ضريبي متسق وتقديم تقارير دقيقة في عملياتها المالية."
  },

  "Since the introduction of Value Added Tax in the United Arab Emirates in January 2018, several refund mechanisms have been put in place to ensure eligible groups can reclaim VAT paid on specific expenses. These refund pathways are designed to keep the UAE competitive, reduce unnecessary costs for residents and international visitors, and support economic growth across multiple sectors.": {
    "ar": "منذ تطبيق ضريبة القيمة المضافة في دولة الإمارات في يناير 2018، تم وضع عدة آليات لاسترداد الضريبة لضمان قدرة الفئات المؤهلة على استرجاع الضريبة المدفوعة على نفقات محددة. وقد صُممت هذه المسارات للحفاظ على تنافسية الإمارات وتقليل التكاليف غير الضرورية على السكان والزوار الدوليين ودعم النمو الاقتصادي في قطاعات متعددة."
  },

  "This guide explains what a VAT refund is, who can claim it, the conditions for eligibility, and the step-by-step processes for each category.": {
    "ar": "يوضح هذا الدليل معنى استرداد ضريبة القيمة المضافة، ومن يمكنه المطالبة به، وشروط الاستحقاق، والخطوات التفصيلية لكل فئة."
  },

  "What is a VAT Refund in the UAE": {
    "ar": "ما هو استرداد ضريبة القيمة المضافة في الإمارات"
  },

  "A VAT refund enables an individual or business to recover VAT that was paid on eligible goods or services. A refund is typically available when the VAT incurred on purchases is greater than the VAT collected on sales within the same tax period. In this case, the excess VAT becomes refundable.": {
    "ar": "يتيح استرداد ضريبة القيمة المضافة للفرد أو المنشأة استرجاع الضريبة المدفوعة على السلع أو الخدمات المؤهلة. ويكون الاسترداد متاحاً عادة عندما تكون الضريبة المدفوعة على المشتريات أعلى من الضريبة المحصلة على المبيعات في نفس الفترة الضريبية. وفي هذه الحالة، تصبح الضريبة الزائدة قابلة للاسترداد."
  },

  "A refund is different from a simple offset in the periodic VAT return. In an offset, the difference between input VAT and output VAT is adjusted against the payable amount. In a refund, the excess amount is returned to the applicant by the Federal Tax Authority.": {
    "ar": "يختلف الاسترداد عن التسوية في الإقرار الضريبي الدوري. ففي التسوية، يتم خصم الفرق بين ضريبة المدخلات وضريبة المخرجات من المبلغ المستحق. أما في الاسترداد، فيتم إعادة المبلغ الزائد إلى مقدم الطلب من قبل الهيئة الاتحادية للضرائب."
  },

  "Three main groups may qualify for refunds in the UAE:": {
    "ar": "ثلاث فئات رئيسية قد تكون مؤهلة لاسترداد الضريبة في الإمارات:"
  },

  "Foreign businesses that incur VAT on local expenses": {
    "ar": "الشركات الأجنبية التي تتحمل ضريبة على نفقاتها المحلية"
  },

  "UAE nationals who build new residential properties": {
    "ar": "المواطنون الإماراتيون الذين يبنون عقارات سكنية جديدة"
  },

  "Tourists who purchase goods for personal use during their stay": {
    "ar": "السياح الذين يشترون سلعاً للاستخدام الشخصي خلال إقامتهم"
  },

  "Each group has its own process, documentation requirements, and timelines.": {
    "ar": "لكل فئة خطوات وإجراءات ووثائق ومتطلبات زمنية خاصة بها."
  },

  "VAT Refund for Foreign Businesses": {
    "ar": "استرداد ضريبة القيمة المضافة للشركات الأجنبية"
  },

  "How Non-Resident Entities Can Reclaim VAT": {
    "ar": "كيف يمكن للكيانات غير المقيمة استرداد الضريبة"
  },

  "Foreign companies that do not have a fixed establishment in the UAE but incur VAT on business-related expenses may be able to recover VAT under the foreign business refund scheme. This model prevents double taxation and supports cross-border trade.": {
    "ar": "يمكن للشركات الأجنبية التي لا تمتلك منشأة ثابتة في الإمارات ولكنها تتحمل ضريبة على نفقات متعلقة بالأعمال استرداد الضريبة بموجب نظام استرداد الشركات الأجنبية. ويمنع هذا النظام الازدواج الضريبي ويدعم التجارة عبر الحدود."
  },

  "Eligibility Requirements for Foreign Businesses": {
    "ar": "متطلبات الأهلية للشركات الأجنبية"
  },

  "The applicant must not maintain a fixed establishment in the UAE": {
    "ar": "يجب ألا يمتلك مقدم الطلب منشأة ثابتة في الإمارات"
  },

  "The applicant must not be carrying out business activities in the UAE on a regular basis": {
    "ar": "يجب ألا يمارس مقدم الطلب أنشطة تجارية في الإمارات بشكل منتظم"
  },

  "The applicant must be registered for tax in its home country": {
    "ar": "يجب أن يكون مقدم الطلب مسجلاً ضريبياً في بلده الأم"
  },

  "The minimum claim amount is AED 2,000": {
    "ar": "الحد الأدنى لمبلغ المطالبة هو 2,000 درهم"
  },

  "Only one refund claim can be submitted for each twelve-month period": {
    "ar": "لا يمكن تقديم أكثر من طلب استرداد واحد خلال كل فترة 12 شهراً"
  },

  "Steps to Submit a Foreign Business VAT Refund": {
    "ar": "خطوات تقديم طلب استرداد ضريبة القيمة المضافة للشركات الأجنبية"
  },

  "Sign in to the Federal Tax Authority electronic services portal": {
    "ar": "تسجيل الدخول إلى بوابة الخدمات الإلكترونية للهيئة الاتحادية للضرائب"
  },

  "Open the VAT section, select refunds, and access the refund request form": {
    "ar": "فتح قسم ضريبة القيمة المضافة، اختيار الاستردادات، والوصول إلى نموذج طلب الاسترداد"
  },

  "Enter all required details, including bank information and expense data": {
    "ar": "إدخال جميع التفاصيل المطلوبة، بما في ذلك معلومات البنك وبيانات النفقات"
  },

  "Upload supporting documents and review the information for accuracy": {
    "ar": "رفع المستندات الداعمة ومراجعة المعلومات لضمان دقتها"
  },

  "Submit the request and wait for confirmation": {
    "ar": "تقديم الطلب وانتظار التأكيد"
  },

  "The FTA generally processes a claim within twenty business days. Once approved, the refund is usually transferred within five business days.": {
    "ar": "تعالج الهيئة الطلب عادة خلال عشرين يوم عمل. وبعد الموافقة، يتم تحويل مبلغ الاسترداد خلال خمسة أيام عمل."
  },

  "VAT Refund for UAE Nationals Constructing New Residences": {
    "ar": "استرداد ضريبة القيمة المضافة للمواطنين الإماراتيين لبناء مساكن جديدة"
  },

  "A Dedicated Scheme to Support Home Building": {
    "ar": "برنامج مخصص لدعم بناء المساكن"
  },

  "UAE nationals who build a new home for personal use may reclaim VAT paid on specific construction-related services and materials. The refund is available once per residential project and applies only to essential items required to complete the structure.": {
    "ar": "يمكن للمواطنين الإماراتيين الذين يبنون منزلاً جديداً للاستخدام الشخصي استرداد الضريبة المدفوعة على بعض الخدمات والمواد المتعلقة بالبناء. ويتاح الاسترداد مرة واحدة لكل مشروع سكني ويشمل فقط العناصر الأساسية اللازمة لاستكمال الهيكل."
  },

  "Eligibility Criteria": {
    "ar": "معايير الأهلية"
  },

  "The applicant must be a UAE national": {
    "ar": "يجب أن يكون مقدم الطلب مواطناً إماراتياً"
  },

  "The property must be intended for personal residential use": {
    "ar": "يجب أن يكون العقار مخصصاً للاستخدام السكني الشخصي"
  },

  "The claim must be submitted within twelve months from the earlier of the completion certificate date or the date the property is first occupied": {
    "ar": "يجب تقديم الطلب خلال 12 شهراً من تاريخ شهادة الإنجاز أو تاريخ الإشغال الأول أيهما أسبق"
  },

  "Examples of Eligible Goods and Services": {
    "ar": "أمثلة على السلع والخدمات المؤهلة"
  },

  "Air conditioning systems": {
    "ar": "أنظمة التكييف"
  },

  "Doors, frames, and windows": {
    "ar": "الأبواب وإطاراتها والنوافذ"
  },

  "Non-carpet flooring": {
    "ar": "الأرضيات غير المفروشة بالسجاد"
  },

  "Basic sanitary fixtures": {
    "ar": "التركيبات الصحية الأساسية"
  },

  "Fitted cupboards and worktops": {
    "ar": "الخزائن المدمجة وأسطح العمل"
  },

  "Electrical wiring and essential mechanical installations": {
    "ar": "الأسلاك الكهربائية والتركيبات الميكانيكية الأساسية"
  },

  "Steps to Claim the Refund for New Residences": {
    "ar": "خطوات تقديم طلب استرداد الضريبة للمساكن الجديدة"
  },

  "Collect all tax invoices and supporting evidence of expenditure": {
    "ar": "جمع جميع الفواتير الضريبية والأدلة الداعمة للنفقات"
  },

  "Download the dedicated refund form for UAE nationals from the FTA website": {
    "ar": "تنزيل النموذج المخصص للمواطنين الإماراتيين من موقع الهيئة الاتحادية للضرائب"
  },

  "Complete the form with accurate expense details and attach all documents": {
    "ar": "استكمال النموذج ببيانات دقيقة عن النفقات وإرفاق جميع المستندات"
  },

  "Submit the package for review without the need for an FTA account": {
    "ar": "تقديم الطلب للمراجعة دون الحاجة إلى حساب في الهيئة"
  },

  "Wait for approval and receive the refund, which is usually processed within five business days after confirmation": {
    "ar": "انتظار الموافقة واستلام الاسترداد، والذي تتم معالجته عادة خلال خمسة أيام عمل بعد التأكيد"
  },

  "VAT Refund for Tourists": {
    "ar": "استرداد ضريبة القيمة المضافة للسياح"
  },

  "How Visitors Can Recover VAT Before Leaving the UAE": {
    "ar": "كيف يمكن للزوار استرداد الضريبة قبل مغادرة الإمارات"
  },
  "Tourists benefit from the electronic tax refund system, which allows them to recover a portion of the VAT paid on eligible purchases made during their visit. The refund applies to personal goods that are taken out of the country within ninety days of purchase.": {
    "ar": "يستفيد السياح من نظام الاسترداد الضريبي الإلكتروني الذي يتيح لهم استرجاع جزء من ضريبة القيمة المضافة المدفوعة على المشتريات المؤهلة خلال زيارتهم. وينطبق الاسترداد على السلع الشخصية التي يتم إخراجها من الدولة خلال تسعين يوماً من تاريخ الشراء."
  },

  "Goods must be purchased from retailers participating in the tourist refund system": {
    "ar": "يجب شراء السلع من تجار تجزئة مشاركين في نظام استرداد الضريبة للسياح"
  },

  "The minimum purchase amount eligible for a refund is AED 250": {
    "ar": "الحد الأدنى للمشتريات المؤهلة للاسترداد هو 250 درهماً"
  },

  "All purchases must be validated before departure": {
    "ar": "يجب التحقق من جميع المشتريات قبل المغادرة"
  },

  "Steps for Tourists to Receive VAT Refunds": {
    "ar": "خطوات حصول السياح على استرداد ضريبة القيمة المضافة"
  },

  "Make purchases at VAT-registered retailers that participate in the tourist refund program": {
    "ar": "إجراء المشتريات من تجار تجزئة مسجلين لضريبة القيمة المضافة ويشاركون في برنامج استرداد الضريبة للسياح"
  },

  "Provide a passport to the retailer so that the purchase can be registered electronically": {
    "ar": "تقديم جواز السفر إلى التاجر ليتم تسجيل عملية الشراء إلكترونياً"
  },

  "At the airport, visit the validation counter or use a self-service kiosk before checking in": {
    "ar": "في المطار، زيارة مكتب التحقق أو استخدام كشك الخدمة الذاتية قبل إنهاء إجراءات السفر"
  },

  "Select the preferred refund method, which may include cash, credit card, or digital wallet": {
    "ar": "اختيار طريقة الاسترداد المفضلة، والتي قد تشمل النقد، أو البطاقة الائتمانية، أو المحفظة الرقمية"
  },

  "Complete validation and depart the UAE within six hours": {
    "ar": "استكمال عملية التحقق ومغادرة الإمارات خلال ست ساعات"
  },

  "Refunds issued to cards or digital wallets typically appear within nine days.": {
    "ar": "تظهر مبالغ الاسترداد المرسلة إلى البطاقات أو المحافظ الرقمية عادة خلال تسعة أيام."
  },

  "Overview of UAE VAT Refund Schemes": {
    "ar": "نظرة عامة على أنظمة استرداد ضريبة القيمة المضافة في الإمارات"
  },

  "Scheme": {
    "ar": "النظام"
  },

  "Eligible Group": {
    "ar": "الفئة المؤهلة"
  },

  "Refund for foreign businesses": {
    "ar": "استرداد للشركات الأجنبية"
  },

  "Foreign companies with no UAE establishment": {
    "ar": "الشركات الأجنبية التي لا تمتلك منشأة في الإمارات"
  },

  "To recover VAT on business expenses incurred in the UAE": {
    "ar": "لاسترداد الضريبة المدفوعة على نفقات الأعمال داخل الإمارات"
  },

  "Refund for UAE nationals building new homes": {
    "ar": "استرداد للمواطنين الإماراتيين الذين يبنون منازل جديدة"
  },

  "UAE nationals constructing private residences": {
    "ar": "المواطنون الإماراتيون الذين يشيدون مساكن خاصة"
  },

  "To reduce construction costs and support home ownership": {
    "ar": "لتقليل تكاليف البناء ودعم تملك السكن"
  },

  "Tourist refund scheme": {
    "ar": "نظام استرداد الضريبة للسياح"
  },

  "Tourists departing the UAE": {
    "ar": "السياح المغادرون الإمارات"
  },

  "To encourage tourism and retail spending": {
    "ar": "لتشجيع السياحة والإنفاق في قطاع التجزئة"
  },

  "The UAE's VAT refund system is structured to support economic activity, reduce unnecessary financial burdens, and enhance the country's attractiveness to investors, residents, and visitors. Whether the applicant is a foreign business recovering operational costs, a national building a new home, or a tourist claiming tax back on eligible purchases, the process is designed to be straightforward with clear documentation requirements and predictable timelines.": {
    "ar": "تم تصميم نظام استرداد ضريبة القيمة المضافة في الإمارات لدعم النشاط الاقتصادي، وتقليل الأعباء المالية غير الضرورية، وتعزيز جاذبية الدولة للمستثمرين والمقيمين والزوار. سواء كان مقدم الطلب شركة أجنبية تسترد تكاليف تشغيلية، أو مواطناً يبني منزلاً جديداً، أو سائحاً يطالب باسترداد الضريبة على مشتريات مؤهلة، فإن العملية تتميز بالوضوح وسهولة المتطلبات ودقة الجداول الزمنية."
  },

  "Businesses that process significant VAT volumes or operate in multiple jurisdictions often rely on structured platforms to keep refund records accurate and compliant. Solutions like Accqrate can help streamline the preparation, validation, and record keeping needed when applying for VAT refunds, adding efficiency to an otherwise detailed process.": {
    "ar": "تعتمد الشركات التي تتعامل مع كميات كبيرة من عمليات ضريبة القيمة المضافة أو تعمل في عدة ولايات قضائية على منصات منظمة لضمان دقة وسلامة سجلات الاسترداد. ويمكن للحلول مثل أكيوريت تبسيط عملية الإعداد والتحقق وحفظ السجلات اللازمة عند التقدم بطلبات استرداد الضريبة، مما يعزز الكفاءة في عملية معقدة بطبيعتها."
  },

  "Businesses that are registered for Value Added Tax in the UAE are required to submit VAT returns for every tax period assigned to them by the Federal Tax Authority. These returns must be filed through the EMARATAX online system and must accurately reflect all sales, purchases, imports, exports, and the VAT collected or paid during the period.": {
    "ar": "يجب على الشركات المسجلة في ضريبة القيمة المضافة في الإمارات تقديم إقرارات ضريبية عن كل فترة ضريبية تحددها الهيئة الاتحادية للضرائب لها. ويجب تقديم هذه الإقرارات من خلال نظام إماراتاكس الإلكتروني، وأن تعكس بدقة جميع المبيعات، والمشتريات، والاستيرادات، والتصديرات، والضريبة المحصلة أو المدفوعة خلال الفترة."
  },

  "Filing VAT returns correctly is essential for maintaining compliance, avoiding penalties, and ensuring smooth tax administration. This guide walks through what a VAT return is, who must file, the statutory timelines, the information required, and the steps to submit VAT 201 through EMARATAX.": {
    "ar": "يعد تقديم الإقرارات الضريبية بشكل صحيح أمراً ضرورياً للحفاظ على الامتثال، وتجنب الغرامات، وضمان إدارة ضريبية سلسة. ويشرح هذا الدليل ماهية الإقرار الضريبي، ومن يجب عليه التقديم، والجداول الزمنية القانونية، والمعلومات المطلوبة، وخطوات تقديم نموذج ضريبة القيمة المضافة 201 عبر إماراتاكس."
  },

  "Understanding VAT Returns in the UAE": {
    "ar": "فهم الإقرارات الضريبية في دولة الإمارات"
  },

  "A VAT return is an official report submitted to the Federal Tax Authority that outlines a business's taxable activities for a specific period. It aggregates information on the VAT collected from customers on sales, the VAT paid to suppliers on purchases, and all other adjustments that impact the overall tax position.": {
    "ar": "الإقرار الضريبي هو تقرير رسمي يقدم إلى الهيئة الاتحادية للضرائب يوضح الأنشطة الخاضعة للضريبة لمنشأة خلال فترة محددة. ويجمع بيانات الضريبة المحصلة من العملاء على المبيعات، والضريبة المدفوعة للموردين على المشتريات، وأي تعديلات أخرى تؤثر على الوضع الضريبي العام."
  },

  "The return reconciles the difference between output VAT and input VAT to determine whether the business must pay tax to the FTA or is entitled to a refund or carry forward.": {
    "ar": "يقوم الإقرار بالمصالحة بين ضريبة المخرجات وضريبة المدخلات لتحديد ما إذا كانت المنشأة مطالبة بسداد ضريبة للهيئة أو يحق لها الاسترداد أو الترحيل."
  },

  "The VAT return used in the UAE is called VAT 201. It consists of several sections that track all VAT-related data, including output tax, input tax, adjustments, imports, exempt supplies, and zero-rated transactions.": {
    "ar": "الإقرار الضريبي المستخدم في الإمارات يسمى ضريبة القيمة المضافة 201، ويتضمن عدة أقسام تتابع جميع البيانات المتعلقة بالضريبة، بما في ذلك ضريبة المخرجات، وضريبة المدخلات، والتعديلات، والاستيرادات، والتوريدات المعفاة، والتوريدات الخاضعة لنسبة الصفر."
  },

  "Who Has to File VAT Returns in the UAE": {
    "ar": "من يجب عليه تقديم الإقرارات الضريبية في الإمارات"
  },

  "Any business that is registered for VAT in the UAE must file VAT returns for the tax periods assigned by the FTA. Mandatory registration is required when taxable supplies exceed three hundred seventy-five thousand dirhams annually. Businesses that make supplies between one hundred eighty-seven thousand five hundred dirhams and the mandatory registration threshold may choose to register voluntarily.": {
    "ar": "يجب على أي منشأة مسجلة في ضريبة القيمة المضافة في الإمارات تقديم الإقرارات الضريبية للفترات المحددة من قبل الهيئة. وتكون التسجيلات إلزامية عندما تتجاوز التوريدات الخاضعة للضريبة 375,000 درهم سنوياً. ويمكن للمنشآت التي تقع توريداتها بين 187,500 درهم والحد الإلزامي اختيار التسجيل طوعياً."
  },

  "Only businesses that are registered for VAT are required to file returns. Businesses engaged solely in exempt activities or those not registered do not submit VAT returns.": {
    "ar": "فقط المنشآت المسجلة في ضريبة القيمة المضافة مطالبة بتقديم الإقرارات. أما المنشآت التي تمارس أنشطة معفاة فقط أو غير المسجلة فلا تقدم إقرارات ضريبية."
  },

  "VAT Filing Deadlines in the UAE": {
    "ar": "مواعيد تقديم الإقرارات الضريبية في الإمارات"
  },

  "Businesses must file their VAT return within twenty-eight days from the end of their tax period. The FTA assigns either a quarterly or monthly period depending on the size of the business and the nature of its activities.": {
    "ar": "يجب على الشركات تقديم إقراراتها الضريبية خلال 28 يوماً من نهاية الفترة الضريبية. وتحدد الهيئة فترة ربع سنوية أو شهرية حسب حجم الشركة وطبيعة أنشطتها."
  },

  "Quarterly Filing": {
    "ar": "التقديم ربع السنوي"
  },

  "This schedule is normally assigned to businesses with annual turnover below one hundred fifty million dirhams.": {
    "ar": "تُخصص هذه الدورة عادة للمنشآت التي يقل حجم أعمالها السنوي عن 150 مليون درهم."
  },

  "For illustration purposes:": {
    "ar": "على سبيل المثال:"
  },

  "First quarter covering January to March is due by 28th of April": {
    "ar": "الربع الأول من يناير إلى مارس مستحق في 28 أبريل"
  },

  "Second quarter covering April to June is due by 28th of July": {
    "ar": "الربع الثاني من أبريل إلى يونيو مستحق في 28 يوليو"
  },

  "Third quarter covering July to September is due by 28th of October": {
    "ar": "الربع الثالث من يوليو إلى سبتمبر مستحق في 28 أكتوبر"
  },

  "Fourth quarter covering October to December is due by 28th of January": {
    "ar": "الربع الرابع من أكتوبر إلى ديسمبر مستحق في 28 يناير"
  },

  "Monthly Filing": {
    "ar": "التقديم الشهري"
  },

  "Businesses with an annual turnover above one hundred fifty million dirhams must file each month. The filing is due within twenty-eight days after the end of the month.": {
    "ar": "يجب على الشركات التي يتجاوز حجم أعمالها السنوي 150 مليون درهم تقديم الإقرار شهرياً. ويكون الإقرار مستحقاً خلال 28 يوماً من نهاية الشهر."
  },

  "The Federal Tax Authority may change the assigned tax period when necessary.": {
    "ar": "يجوز للهيئة الاتحادية للضرائب تعديل الفترة الضريبية المقررة عند الضرورة."
  },

  "Information Needed to File VAT 201": {
    "ar": "المعلومات المطلوبة لتقديم نموذج ضريبة القيمة المضافة 201"
  },

  "Before starting the filing process, businesses must have accurate and complete information about their transactions for the period. This includes:": {
    "ar": "قبل بدء عملية التقديم، يجب أن تكون لدى الشركات معلومات دقيقة وكاملة عن معاملاتها خلال الفترة، وتشمل:"
  },

  "Taxable sales broken down by emirate": {
    "ar": "المبيعات الخاضعة للضريبة مصنفة حسب الإمارة"
  },

  "Zero-rated and exempt supplies": {
    "ar": "التوريدات الخاضعة لنسبة الصفر والتوريدات المعفاة"
  },

  "Imports recorded through customs": {
    "ar": "الاستيرادات المسجلة عبر الجمارك"
  },

  "Purchases and expenses eligible for input VAT": {
    "ar": "المشتريات والمصاريف المؤهلة لاسترداد ضريبة المدخلات"
  },

  "Reverse charge transactions": {
    "ar": "المعاملات الخاضعة لآلية الاحتساب العكسي"
  },

  "Credit notes and debit notes": {
    "ar": "الإشعارات الدائنة والمدينة"
  },

  "Any adjustments required by law": {
    "ar": "أي تعديلات مطلوبة بموجب القانون"
  },

  "The VAT 201 form is divided into several sections, covering taxpayer information, tax period details, output tax, input tax, adjustments, and the final declaration.": {
    "ar": "ينقسم نموذج ضريبة القيمة المضافة 201 إلى عدة أقسام تتضمن بيانات المكلف، وبيانات الفترة الضريبية، وضريبة المخرجات، وضريبة المدخلات، والتعديلات، والإقرار النهائي."
  },

  "Step-by-Step Guide to Filing a VAT Return in the UAE": {
    "ar": "دليل خطوة بخطوة لتقديم الإقرار الضريبي في الإمارات"
  },

  "The filing process follows a clear sequence inside the EMARATAX platform. The steps below describe the full journey from logging in to submitting the return.": {
    "ar": "تتبع عملية التقديم تسلسلاً واضحاً داخل منصة إماراتاكس. وتوضح الخطوات أدناه الرحلة الكاملة من تسجيل الدخول حتى تقديم الإقرار."
  },

  "Step 1": {
    "ar": "الخطوة 1"
  },

  "Access EMARATAX and log in using your registered credentials.": {
    "ar": "الدخول إلى منصة إماراتاكس وتسجيل الدخول باستخدام بيانات الاعتماد المسجلة."
  },

  "Step 2": {
    "ar": "الخطوة 2"
  },

  "Navigate to the VAT section, open the filings area, and select the tax period you wish to file.": {
    "ar": "الانتقال إلى قسم ضريبة القيمة المضافة، وفتح منطقة الإقرارات، واختيار الفترة الضريبية المراد تقديمها."
  },

  "Step 3": {
    "ar": "الخطوة 3"
  },

  "Review the instructions shown on screen and confirm that you understand the filing requirements.": {
    "ar": "مراجعة التعليمات المعروضة على الشاشة والتأكيد على فهم متطلبات التقديم."
  },

  "Step 4": {
    "ar": "الخطوة 4"
  },

  "The system displays the tax period details. Verify that the information matches the period you intend to file.": {
    "ar": "يعرض النظام تفاصيل الفترة الضريبية. يجب التحقق من مطابقة المعلومات للفترة المراد تقديمها."
  },

  "Step 5": {
    "ar": "الخطوة 5"
  },

  "You may download the offline Excel template to prepare data outside the portal. Once completed, upload the file to populate the return or enter the data manually.": {
    "ar": "يمكن تنزيل نموذج Excel للعمل دون اتصال لإعداد البيانات خارج المنصة. وبعد إكماله، يتم رفع الملف لتعبئة الإقرار أو إدخال البيانات يدوياً."
  },

  "Step 6": {
    "ar": "الخطوة 6"
  },

  "Enter sales and output VAT amounts in the relevant sections. Ensure figures match your accounting records.": {
    "ar": "إدخال بيانات المبيعات وضريبة المخرجات في الأقسام المخصصة. يجب التأكد من مطابقة الأرقام مع السجلات المحاسبية."
  },

  "Step 7": {
    "ar": "الخطوة 7"
  },

  "Report standard-rated sales emirate-wise. These values must reflect the place of supply rules.": {
    "ar": "الإبلاغ عن المبيعات الخاضعة للنسبة الأساسية حسب الإمارة. يجب أن تتوافق هذه القيم مع قواعد مكان التوريد."
  },

  "Step 8": {
    "ar": "الخطوة 8"
  },

  "Any refunds issued under the tourist refund scheme will appear automatically. Review the pre-filled values.": {
    "ar": "تظهر أي استردادات صادرة ضمن نظام الاسترداد للسياح تلقائياً. يجب مراجعة القيم المدخلة مسبقاً."
  },

  "Step 9": {
    "ar": "الخطوة 9"
  },

  "Include all reverse charge supplies and purchases where applicable.": {
    "ar": "تضمين جميع التوريدات والمشتريات الخاضعة لآلية الاحتساب العكسي عند الاقتضاء."
  },

  "Step 10": {
    "ar": "الخطوة 10"
  },

  "Record zero-rated and exempt supplies in their respective sections.": {
    "ar": "تسجيل التوريدات الخاضعة لنسبة الصفر والتوريدات المعفاة في أقسامها المخصصة."
  },

  "Step 11": {
    "ar": "الخطوة 11"
  },

  "Imports reported through customs will appear automatically. Make necessary adjustments if data requires correction.": {
    "ar": "تظهر الاستيرادات المسجلة عبر الجمارك تلقائياً. يجب إجراء التعديلات اللازمة إذا كانت البيانات بحاجة إلى تصحيح."
  },

  "Step 12": {
    "ar": "الخطوة 12"
  },

  "The system totals all sales and output VAT.": {
    "ar": "يقوم النظام بجمع إجمالي المبيعات وضريبة المخرجات."
  },

  "Step 13": {
    "ar": "الخطوة 13"
  },

  "Enter eligible standard-rated expenses and associated input VAT.": {
    "ar": "إدخال المصاريف الخاضعة للنسبة الأساسية وضريبة المدخلات المرتبطة بها."
  },

  "Step 14": {
    "ar": "الخطوة 14"
  },

  "Include reverse charge purchases.": {
    "ar": "تضمين المشتريات الخاضعة لآلية الاحتساب العكسي."
  },

  "Step 15": {
    "ar": "الخطوة 15"
  },

  "The total input VAT is calculated automatically.": {
    "ar": "يتم احتساب إجمالي ضريبة المدخلات تلقائياً."
  },

  "Step 16": {
    "ar": "الخطوة 16"
  },

  "The system displays the final net VAT position which shows whether you owe tax or have excess input VAT to carry forward or reclaim.": {
    "ar": "يعرض النظام صافي الوضع الضريبي النهائي الذي يوضح ما إذا كانت المنشأة مطالبة بسداد ضريبة أو لديها فائض من ضريبة المدخلات يمكن ترحيله أو استرداده."
  },
  "Step 17": {
    "ar": "الخطوة 17"
  },

  "Confirm whether you have used the profit margin scheme if applicable.": {
    "ar": "تأكيد ما إذا كان قد تم استخدام نظام هامش الربح عند الاقتضاء."
  },

  "Step 18": {
    "ar": "الخطوة 18"
  },

  "Review the entire return to ensure accuracy.": {
    "ar": "مراجعة الإقرار كاملاً للتأكد من الدقة."
  },

  "Step 19": {
    "ar": "الخطوة 19"
  },

  "Complete the declaration and confirm that the information provided is true and correct.": {
    "ar": "إكمال الإقرار والتأكيد على أن المعلومات المقدمة صحيحة ودقيقة."
  },

  "Step 20": {
    "ar": "الخطوة 20"
  },

  "Submit the return and note the reference number for future correspondence.": {
    "ar": "تقديم الإقرار وتدوين رقم المرجع للاستخدام في المراسلات المستقبلية."
  },

  "Step 21": {
    "ar": "الخطوة 21"
  },

  "Make the VAT payment through one of the payment methods provided in EMARATAX. Payment must be completed by the deadline to avoid penalties.": {
    "ar": "سداد ضريبة القيمة المضافة عبر إحدى طرق الدفع المتاحة في منصة إماراتاكس. يجب إكمال الدفع قبل الموعد النهائي لتجنب الغرامات."
  },

  "Documents Needed for VAT Return Filing": {
    "ar": "المستندات المطلوبة لتقديم الإقرار الضريبي"
  },

  "To prepare and support the VAT return, businesses should maintain and refer to the following documents:": {
    "ar": "لإعداد الإقرار الضريبي ودعمه، يجب على الشركات الاحتفاظ بالمستندات التالية والرجوع إليها:"
  },

  "VAT registration certificate": {
    "ar": "شهادة التسجيل في ضريبة القيمة المضافة"
  },

  "Business license": {
    "ar": "الرخصة التجارية"
  },

  "Tax invoices issued and received": {
    "ar": "الفواتير الضريبية الصادرة والواردة"
  },

  "Bank statements and financial records": {
    "ar": "كشوفات الحسابات البنكية والسجلات المالية"
  },

  "Import and export documents": {
    "ar": "مستندات الاستيراد والتصدير"
  },

  "Customs declarations": {
    "ar": "إقرارات الجمارك"
  },

  "Contracts or supporting documentation for exempt or zero-rated supplies": {
    "ar": "العقود أو المستندات الداعمة للتوريدات المعفاة أو الخاضعة لنسبة الصفر"
  },

  "Accurate documentation ensures compliance and makes the business audit-ready at all times.": {
    "ar": "تضمن المستندات الدقيقة الامتثال وتُعد المنشأة جاهزة للتدقيق في أي وقت."
  },

  "Penalties for VAT Return Non-Compliance in the UAE": {
    "ar": "الغرامات المتعلقة بعدم الامتثال في تقديم الإقرارات الضريبية في الإمارات"
  },

  "Non-compliance with VAT filing and payment obligations carries monetary penalties. Common violations include late filing, incorrect returns, late payment, and failure to maintain records.": {
    "ar": "يترتب على عدم الامتثال في تقديم الإقرارات وسداد الضريبة غرامات مالية. وتشمل المخالفات الشائعة التأخر في التقديم، الإقرارات غير الصحيحة، التأخر في السداد، وعدم الاحتفاظ بالسجلات."
  },

  "For example:": {
    "ar": "على سبيل المثال:"
  },

  "Late filing attracts a penalty of one thousand dirhams for the first occurrence and two thousand dirhams for repeated violations": {
    "ar": "التأخر في التقديم يترتب عليه غرامة قدرها ألف درهم للمرة الأولى وألفا درهم للتكرار"
  },

  "Late payment charges begin at two percent immediately after the deadline and continue increasing if unpaid": {
    "ar": "تبدأ غرامات التأخر في السداد بنسبة 2٪ مباشرة بعد الموعد النهائي وتستمر بالزيادة إذا لم يتم السداد"
  },

  "Incorrect returns may lead to additional fines, especially when a voluntary disclosure is required": {
    "ar": "قد تؤدي الإقرارات غير الصحيحة إلى غرامات إضافية، خصوصاً عند الحاجة إلى الإفصاح الطوعي"
  },

  "Failure to maintain proper documentation may result in penalties starting from ten thousand dirhams": {
    "ar": "عدم الاحتفاظ بالمستندات المطلوبة قد يؤدي إلى غرامات تبدأ من عشرة آلاف درهم"
  },

  "Timely and accurate filing helps avoid unnecessary financial consequences.": {
    "ar": "يساعد التقديم في الوقت المحدد وبشكل دقيق على تجنب العواقب المالية غير الضرورية."
  },

  "Filing VAT returns in the UAE is a structured process that requires accurate data, timely submission, and complete supporting records. Businesses must prepare their VAT 201 form carefully, understand their tax period, enter detailed information on sales and purchases, and submit the return through EMARATAX before the deadline.": {
    "ar": "يعد تقديم الإقرارات الضريبية في الإمارات عملية منظمة تتطلب بيانات دقيقة، وتقديمها في الوقت المحدد، وتوفير المستندات الداعمة كاملة. يجب على الشركات إعداد نموذج ضريبة القيمة المضافة 201 بعناية، وفهم فترتها الضريبية، وإدخال البيانات التفصيلية للمبيعات والمشتريات، وتقديم الإقرار عبر إماراتاكس قبل الموعد النهائي."
  },

  "As companies work to maintain consistent VAT compliance, many rely on streamlined digital systems to reduce errors and improve reporting quality. Solutions like Accqrate can support businesses by helping them maintain reliable financial data and simplifying compliance workflows while keeping processes efficient and transparent.": {
    "ar": "ومع سعي الشركات للحفاظ على امتثال مستمر لضريبة القيمة المضافة، يعتمد الكثيرون على أنظمة رقمية مبسطة لتقليل الأخطاء وتحسين جودة التقارير. وتساعد حلول مثل أكيوريت الشركات في الحفاظ على بيانات مالية موثوقة وتبسيط عمليات الامتثال مع ضمان الكفاءة والشفافية."
  },

  "Understanding whether a supply is zero rated or exempt is one of the most important VAT decisions a business has to make. The difference matters because it determines whether input tax can be recovered, how pricing should be set, and what reporting is required. This guide explains the concepts, lists common categories, shows how to treat mixed activities, highlights common mistakes, and offers practical actions to stay compliant.": {
    "ar": "يعد تحديد ما إذا كان التوريد خاضعاً لنسبة الصفر أو معفى أحد أهم القرارات المتعلقة بضريبة القيمة المضافة التي يجب على الشركات اتخاذها. فالفارق بينهما يؤثر على استرداد الضريبة، وتسعير المنتجات، والمتطلبات المتعلقة بالتقارير. ويشرح هذا الدليل المفاهيم الأساسية، ويعرض الفئات الشائعة، ويوضح كيفية التعامل مع الأنشطة المختلطة، ويبرز الأخطاء المتكررة، ويقدم إجراءات عملية للحفاظ على الامتثال."
  },

  "What Zero Rated Means": {
    "ar": "ماذا تعني التوريدات الخاضعة لنسبة الصفر"
  },

  "A zero rated supply is a taxable supply with a VAT rate of zero percent. The supply itself carries a zero VAT rate but remains within the VAT system. Businesses making zero rated supplies must register for VAT if they meet the registration threshold and must report those supplies on their VAT returns. Crucially, input VAT incurred on purchases used to make zero rated supplies can be recovered in the normal way, subject to the usual documentation and eligibility rules.": {
    "ar": "التوريد الخاضع لنسبة الصفر هو توريد خاضع للضريبة بنسبة 0٪. ورغم عدم فرض ضريبة على هذا التوريد، فإنه يظل ضمن نظام ضريبة القيمة المضافة. يجب على الشركات التي تقدم توريدات خاضعة لنسبة الصفر التسجيل في الضريبة إذا استوفت حد التسجيل، والإبلاغ عن تلك التوريدات في إقراراتها الضريبية. ويمكن استرداد ضريبة المدخلات المرتبطة بهذه التوريدات وفقاً للقواعد المعتمدة ومتطلبات المستندات."
  },

  "Common examples of zero rated supplies in the UAE include:": {
    "ar": "تشمل الأمثلة الشائعة للتوريدات الخاضعة لنسبة الصفر في الإمارات:"
  },

  "Exports outside the GCC": {
    "ar": "التصدير خارج دول مجلس التعاون"
  },

  "International transport of goods and passengers": {
    "ar": "النقل الدولي للركاب والبضائع"
  },

  "Certain means of transport such as ships, aircraft, and trains when conditions are met": {
    "ar": "بعض وسائل النقل مثل السفن والطائرات والقطارات عند استيفاء الشروط"
  },

  "Investment grade precious metals with specified purity": {
    "ar": "المعادن الثمينة ذات الدرجة الاستثمارية التي تستوفي معايير النقاء"
  },

  "Qualifying education services delivered by recognised institutions": {
    "ar": "الخدمات التعليمية المؤهلة المقدمة من مؤسسات معترف بها"
  },

  "Qualifying healthcare services": {
    "ar": "الخدمات الصحية المؤهلة"
  },

  "First supply of new residential buildings within three years of completion when the legal conditions are satisfied": {
    "ar": "أول توريد للمباني السكنية الجديدة خلال ثلاث سنوات من الانتهاء عند استيفاء الشروط القانونية"
  },

  "What Exempt Means": {
    "ar": "ماذا تعني التوريدات المعفاة"
  },

  "An exempt supply is outside the VAT net in the sense that no VAT is charged on the sale and the supplier cannot recover input VAT on purchases connected to those exempt activities. There is no output VAT to collect or remit, but input VAT related to exempt supplies becomes a cost for the business. Exempt supplies are treated differently for recovery and pricing, and businesses that supply only exempt goods or services may not need to register for VAT.": {
    "ar": "التوريد المعفى يقع خارج نطاق ضريبة القيمة المضافة بمعنى أنه لا يتم فرض ضريبة على بيعه، ولا يستطيع المورد استرداد ضريبة المدخلات المرتبطة بهذه الأنشطة. ولا توجد ضريبة مخرجات لتحصيلها أو سدادها، لكن ضريبة المدخلات تصبح تكلفة على الشركة. وتُعامل التوريدات المعفاة بشكل مختلف فيما يتعلق بالاسترداد والتسعير، وقد لا تحتاج الشركات التي تقدم توريدات معفاة فقط إلى التسجيل في الضريبة."
  },

  "Typical exempt supplies in the UAE include:": {
    "ar": "تشمل التوريدات المعفاة الشائعة في الإمارات:"
  },

  "Certain financial services where fees are not explicit": {
    "ar": "بعض الخدمات المالية التي لا تكون رسومها صريحة"
  },

  "The sale or lease of residential property that does not qualify for zero rating": {
    "ar": "بيع أو تأجير العقارات السكنية التي لا تستوفي شروط الخضوع لنسبة الصفر"
  },

  "The sale of bare land": {
    "ar": "بيع الأراضي الخالية"
  },

  "The Practical Difference in One Sentence": {
    "ar": "الفرق العملي في جملة واحدة"
  },

  "Zero rated supplies allow recovery of input tax and require reporting on VAT returns. Exempt supplies prevent recovery of input tax and remove the related sales from output VAT, but may also remove the supplier from compulsory registration if those supplies are the sole business activity.": {
    "ar": "تتيح التوريدات الخاضعة لنسبة الصفر استرداد ضريبة المدخلات وتتطلب الإبلاغ عنها في الإقرار الضريبي. أما التوريدات المعفاة فلا تسمح باسترداد ضريبة المدخلات وتخرج المبيعات المرتبطة بها من نطاق ضريبة المخرجات، وقد تعفي المورد من التسجيل الإلزامي إذا كانت هذه التوريدات نشاطه الوحيد."
  },

  "How the Difference Affects Your Business": {
    "ar": "كيف يؤثر الفرق على نشاطك التجاري"
  },

  "Cash Flow": {
    "ar": "التدفقات النقدية"
  },

  "Input VAT recovery on zero rated supplies improves operating cash flow because VAT paid on purchases can be reclaimed. Exempt supplies force the business to absorb VAT on inputs, increasing effective cost.": {
    "ar": "يسهم استرداد ضريبة المدخلات على التوريدات الخاضعة لنسبة الصفر في تحسين التدفقات النقدية التشغيلية، لأن الضريبة المدفوعة على المشتريات يمكن استردادها. أما التوريدات المعفاة فتجعل الشركة تتحمل ضريبة المدخلات، مما يزيد التكلفة الفعلية."
  },

  "Pricing": {
    "ar": "التسعير"
  },

  "A business that cannot reclaim input VAT may need to increase prices or accept compressed margins. A business that can reclaim input VAT can keep prices more competitive.": {
    "ar": "قد تضطر الشركات التي لا تستطيع استرداد ضريبة المدخلات إلى رفع الأسعار أو قبول هوامش ربح أقل. أما الشركات التي يمكنها الاسترداد فتستطيع الحفاظ على أسعار أكثر تنافسية."
  },

  "Registration and Reporting": {
    "ar": "التسجيل والتقارير"
  },

  "Zero rated suppliers are usually required to register and to file standard VAT returns reporting their zero rated activity. Businesses that deal only in exempt supplies may be outside registration thresholds and administrative obligations, but careful verification is required.": {
    "ar": "يجب على الموردين الذين يقدمون توريدات خاضعة لنسبة الصفر التسجيل عادة وتقديم الإقرارات الضريبية القياسية التي تتضمن نشاطهم الخاضع لنسبة الصفر. أما الشركات التي تتعامل فقط في توريدات معفاة فقد تكون خارج حدود التسجيل والالتزامات الإدارية، لكن يتعين التحقق بعناية."
  },

  "Documentation and Proof": {
    "ar": "المستندات والإثباتات"
  },

  "Zero rated treatments often require documentary proof such as export declarations, transport documents, or certificates from recognised institutions. Failure to hold the required proof risks reclassification and tax assessments.": {
    "ar": "تتطلب المعالجات الخاضعة لنسبة الصفر عادة إثباتات مستندية مثل إقرارات التصدير، مستندات النقل، أو الشهادات الصادرة من مؤسسات معترف بها. وقد يؤدي عدم توفر هذه المستندات إلى إعادة تصنيف التوريد وفرض التزامات ضريبية."
  },

  "Common Zero Rated Categories and Required Evidence": {
    "ar": "الفئات الشائعة للتوريدات الخاضعة لنسبة الصفر والمستندات المطلوبة"
  },

  "Category": {
    "ar": "الفئة"
  },

  "Evidence Required": {
    "ar": "الإثبات المطلوب"
  },

  "Exports of goods outside the GCC": {
    "ar": "تصدير السلع خارج دول مجلس التعاون"
  },

  "Customs export declarations, shipping documentation, commercial invoices showing buyer and destination": {
    "ar": "إقرارات التصدير الجمركية، مستندات الشحن، الفواتير التجارية التي توضح المشتري والوجهة"
  },

  "Export of services where benefit is outside the UAE": {
    "ar": "تصدير الخدمات عندما يكون الانتفاع بها خارج الإمارات"
  },

  "Contracts, evidence that recipient is outside UAE, place of supply documentation": {
    "ar": "العقود، إثبات وجود المستفيد خارج الإمارات، مستندات مكان التوريد"
  },

  "International transport of passengers or goods": {
    "ar": "النقل الدولي للركاب أو البضائع"
  },

  "Transport manifests, tickets, waybills, international documentation": {
    "ar": "قوائم النقل، التذاكر، بوليصات الشحن، المستندات الدولية"
  },

  "First supply of new residential buildings within three years": {
    "ar": "أول توريد للمباني السكنية الجديدة خلال ثلاث سنوات"
  },

  "Construction completion certificates, contracts, evidence of date of first supply": {
    "ar": "شهادات إتمام البناء، العقود، إثبات تاريخ أول توريد"
  },

  "Investment grade precious metals": {
    "ar": "المعادن الثمينة ذات الدرجة الاستثمارية"
  },

  "Supplier and assay documentation proving purity and qualifying nature": {
    "ar": "مستندات المورد وبيانات الفحص التي تثبت النقاء والطبيعة المؤهلة"
  },

  "Recognised education and qualifying healthcare": {
    "ar": "التعليم المعترف به والرعاية الصحية المؤهلة"
  },

  "Accreditation, registration, documentary proof of institution status and service nature": {
    "ar": "الاعتماد، التسجيل، إثبات مستندي لحالة المؤسسة وطبيعة الخدمة"
  },

  "Always retain original documents. The FTA expects suppliers to hold clear, auditable evidence before allowing zero rating.": {
    "ar": "يجب الاحتفاظ بالمستندات الأصلية دائماً. وتتوقع الهيئة الاتحادية للضرائب تقديم أدلة واضحة وقابلة للتدقيق قبل السماح بتطبيق نسبة الصفر."
  },

  "How Exemptions Typically Arise": {
    "ar": "كيف تنشأ الإعفاءات عادة"
  },

  "Financial services where consideration is implicit: This includes margin-based lending or similar products where fees are embedded in spreads": {
    "ar": "الخدمات المالية التي تكون فيها المقابل ضمنياً: ويشمل ذلك الإقراض القائم على الهامش أو المنتجات المماثلة التي تُضمّن رسومها ضمن الفروق السعرية"
  },

  "Residential rental and sale outside the zero rating conditions: Subsequent sales or leases of a building beyond the first time supply often fall under exemption rules": {
    "ar": "تأجير وبيع العقارات السكنية خارج شروط الخضوع لنسبة الصفر: فعادة ما تخضع عمليات البيع أو التأجير اللاحقة بعد أول توريد لقواعد الإعفاء"
  },

  "Local passenger transport: Tickets and receipts showing domestic transport services": {
    "ar": "النقل المحلي للركاب: وتشمل التذاكر والإيصالات التي تثبت تقديم خدمات النقل داخل الدولة"
  },

  "Bare land: Sale of undeveloped land without buildings or infrastructure": {
    "ar": "الأراضي الخالية: بيع الأراضي غير المطورة التي لا تحتوي على مبانٍ أو بنية تحتية"
  },

  "Exempt supplies reduce administrative complexity in one area but create a hidden cost because related input VAT cannot be reclaimed.": {
    "ar": "تقلل التوريدات المعفاة من التعقيد الإداري في جانب ما لكنها تخلق تكلفة غير مباشرة لعدم إمكانية استرداد ضريبة المدخلات المرتبطة بها."
  },

  "Mixed Activities and Apportionment": {
    "ar": "الأنشطة المختلطة وآلية التخصيص"
  },

  "When a business makes both taxable supplies (including zero rated) and exempt supplies, input VAT recovery must be apportioned. The correct approach requires:": {
    "ar": "عندما تقدم المنشأة توريدات خاضعة للضريبة (بما في ذلك الخاضعة لنسبة الصفر) وتوريدات معفاة، يجب تخصيص ضريبة المدخلات. ويتطلب النهج الصحيح ما يلي:"
  },

  "Identifying which expenses relate directly to taxable or exempt activities and recovering input VAT in full for expenses directly attributable to taxable or zero rated outputs": {
    "ar": "تحديد النفقات المرتبطة مباشرة بالأنشطة الخاضعة للضريبة أو المعفاة واسترداد ضريبة المدخلات بالكامل للنفقات المرتبطة مباشرة بالتوريدات الخاضعة للضريبة أو لنسبة الصفر"
  },

  "Apportioning input VAT for overhead and shared costs using a reasonable and consistent allocation method. The common methods are sales value based apportionment or a usage based allocation. The method chosen must be documented and defensible to the tax authority": {
    "ar": "تخصيص ضريبة المدخلات للنفقات العامة والتكاليف المشتركة باستخدام طريقة تخصيص معقولة ومتسقة. وتشمل الطرق الشائعة التخصيص بناءً على قيمة المبيعات أو التخصيص بناءً على الاستخدام. ويجب توثيق الطريقة المختارة وأن تكون قابلة للدفاع أمام الهيئة الضريبية"
  },

  "Applying adjustments where the business changes the use of an asset or activity that affects the recovery ratio. The law requires adjustments if, for example, a capital item initially used for taxable supplies later supports exempt supplies": {
    "ar": "تطبيق التعديلات عندما تغير المنشأة استخدام أصل أو نشاط يؤثر على نسبة الاسترداد. ويتطلب القانون إجراء التعديلات إذا بدأ استخدام أصل رأسمالي في توريدات خاضعة للضريبة ثم أصبح يُستخدم لاحقاً لتوريدات معفاة"
  },

  "Maintain contemporaneous calculations and keep them for audit.": {
    "ar": "الاحتفاظ بالحسابات في وقتها والاحتفاظ بها لأغراض التدقيق."
  },

  "Practical Steps to Classify Supplies Correctly": {
    "ar": "خطوات عملية لتصنيف التوريدات بشكل صحيح"
  },

  "Start with the contract and the invoice: Place of supply and the contractual terms often determine whether a supply qualifies for zero rating or is exempt": {
    "ar": "البدء بالعقد والفاتورة: إذ غالباً ما يحدد مكان التوريد والشروط التعاقدية ما إذا كان التوريد خاضعاً لنسبة الصفر أو معفى"
  },

  "Confirm the recipient and destination: For exports and international supplies, the customer location and movement documents determine the VAT treatment": {
    "ar": "تأكيد هوية المستفيد والوجهة: ففي التصدير والتوريدات الدولية تحدد موقع العميل ومستندات حركة البضائع المعالجة الضريبية المناسبة"
  },
"Check statutory conditions: Zero rating and exemptions have conditions in legislation or guidance. Do not rely on commercial practice alone": {
    ar: "تحقق من الشروط النظامية: تخضع التوريدات الخاضعة لنسبة الصفر والإعفاء لشروط منصوص عليها في التشريعات أو الإرشادات. لا تعتمد على الممارسات التجارية وحدها."
  },

"Document everything: Hold contracts, transport documents, customs paperwork, accreditation certificates and any third party confirmations needed for the VAT treatment": {
    ar: "قم بتوثيق كل شيء: احتفظ بالعقود، ومستندات النقل، والمستندات الجمركية، وشهادات الاعتماد، وأي تأكيدات من أطراف أخرى مطلوبة لمعالجة الضريبة."
  },

"Use written policies: Adopt and publish internal VAT classification policies to ensure consistency across teams. That reduces human error and improves audit readiness": {
    ar: "استخدم سياسات مكتوبة: اعتمد وانشر سياسات داخلية لتصنيف الضريبة لضمان الاتساق بين الفرق. هذا يقلل الأخطاء البشرية ويعزز الجاهزية للتدقيق."
  },

"Review annually: Legislation, FTA guidance and judicial decisions change. Review classifications at least once a year or whenever you enter a new line of business": {
    ar: "راجع سنوياً: تتغير التشريعات وإرشادات الهيئة الاتحادية للضرائب والقرارات القضائية. راجع التصنيفات مرة واحدة سنوياً على الأقل أو عند الدخول في خط أعمال جديد."
  },

"Common Mistakes and How to Avoid Them": {
    ar: "الأخطاء الشائعة وكيفية تجنبها"
  },

"Mistake": {
    ar: "الخطأ"
  },

"Remedy": {
    ar: "العلاج"
  },

"Confusing zero rated with exempt": {
    ar: "الخلط بين التوريدات الخاضعة لنسبة الصفر والمعفاة"
  },

"Make a simple test: If input VAT can be reclaimed, it's zero rated. If it cannot, it's exempt": {
    ar: "اختبار بسيط: إذا كان يمكن استرداد ضريبة المدخلات فهي خاضعة لنسبة الصفر، وإذا لم يكن بالإمكان فهي معفاة."
  },

"Missing documentary proof for exports and international supplies": {
    ar: "عدم توفر المستندات المطلوبة للتصدير والتوريدات الدولية"
  },

"Implement a mandatory export checklist and keep physical/digital copies of all documentation": {
    ar: "قم بتطبيق قائمة فحص إلزامية للتصدير واحتفظ بنسخ ورقية أو رقمية من جميع المستندات."
  },

"Failing to apportion input VAT correctly for mixed supplies": {
    ar: "عدم توزيع ضريبة المدخلات بشكل صحيح للتوريدات المختلطة"
  },

"Adopt a consistent apportionment method supported by periodic reconciliation and management review": {
    ar: "اعتمد منهجية توزيع متسقة مدعومة بالتسويات الدورية ومراجعات الإدارة."
  },

"Assuming treatments used in other jurisdictions automatically apply to the UAE": {
    ar: "افتراض أن المعالجات المستخدمة في ولايات قضائية أخرى تنطبق تلقائياً في دولة الإمارات"
  },

"Verify UAE specific rules and evidence requirements. The UAE has precise documentary standards for zero rating": {
    ar: "تحقق من القواعد والمتطلبات الخاصة بدولة الإمارات. تمتلك الإمارات معايير دقيقة للمستندات الخاصة بالتوريد الخاضع لنسبة الصفر."
  },

"Not registering when required": {
    ar: "عدم التسجيل عند الحاجة"
  },

"Monitor turnover and potential thresholds. Registration is obligatory when taxable turnover exceeds statutory thresholds": {
    ar: "راقب حجم الأعمال والحدود المحتملة. يصبح التسجيل إلزامياً عند تجاوز حجم التوريدات الخاضعة للضريبة الحدود القانونية."
  },

"Reporting and Return Implications": {
    ar: "آثار الإبلاغ والإقرارات الضريبية"
  },

"Zero rated supplies must appear on the VAT return and on any specified listings such as sales by jurisdiction if required by the FTA. Exempt supplies are reported differently and typically cannot be used to determine input tax recovery. Businesses that only make exempt supplies may not need to register but should confirm eligibility before assuming exemption.": {
    ar: "يجب أن تظهر التوريدات الخاضعة لنسبة الصفر في الإقرار الضريبي وفي أي قوائم محددة مثل المبيعات حسب الإمارة إذا طُلب ذلك من الهيئة الاتحادية للضرائب. يتم الإبلاغ عن التوريدات المعفاة بشكل مختلف ولا يمكن استخدامها عادةً لتحديد استرداد ضريبة المدخلات. قد لا تحتاج الأعمال التي تقتصر على التوريدات المعفاة إلى التسجيل، ولكن يجب التحقق من الأهلية قبل افتراض الإعفاء."
  },

"Financial and Pricing Consequences": {
    ar: "الآثار المالية والتسعيرية"
  },

"Margin impact: Exempt supplies create a higher effective cost base because input VAT cannot be offset. This often requires a pricing review to maintain margin": {
    ar: "تأثير الهامش: التوريدات المعفاة تخلق تكلفة فعّالة أعلى لأن ضريبة المدخلات لا يمكن خصمها. غالباً ما يتطلب ذلك مراجعة الأسعار للحفاظ على الهامش."
  },

"Competitive implications: Suppliers of zero rated goods can remain price competitive because they can recover input VAT. Suppliers of exempt goods may need to redesign procurement or pass costs to customers": {
    ar: "الآثار التنافسية: يمكن لموردي السلع الخاضعة لنسبة الصفر الحفاظ على تنافسية أسعارهم بسبب قدرتهم على استرداد ضريبة المدخلات. بينما قد يحتاج موردي السلع المعفاة إلى إعادة تصميم المشتريات أو تمرير التكاليف إلى العملاء."
  },

"Working capital: Zero rated suppliers recover VAT which improves working capital. Exempt suppliers should model VAT on inputs as a permanent cost": {
    ar: "رأس المال التشغيلي: يسترد مورّدو التوريدات الخاضعة لنسبة الصفر الضريبة مما يحسن رأس المال التشغيلي. بينما يجب على مورّدي التوريدات المعفاة اعتبار ضريبة المدخلات تكلفة دائمة."
  },

"Decision Checklist for Each Supply": {
    ar: "قائمة قرارات لكل توريد"
  },

"Use this quick checklist for every new product or service line:": {
    ar: "استخدم قائمة التحقق السريعة هذه لكل منتج أو خدمة جديدة:"
  },

"Who is the buyer and where are they located?": {
    ar: "من هو المشتري وأين يقع؟"
  },

"What is the place of supply under UAE rules?": {
    ar: "ما هو مكان التوريد وفقاً لقواعد دولة الإمارات؟"
  },

"Does the supply have a statutory zero rated category?": {
    ar: "هل يندرج التوريد تحت فئة خاضعة لنسبة الصفر قانوناً؟"
  },

"Is any documentary proof required and can we obtain it?": {
    ar: "هل هناك مستندات مطلوبة وهل يمكننا الحصول عليها؟"
  },

"Is the supply exempt and will that prevent input VAT recovery?": {
    ar: "هل التوريد معفى وهل سيمنع ذلك استرداد ضريبة المدخلات؟"
  },

"How should input VAT be allocated if activities are mixed?": {
    ar: "كيف يجب توزيع ضريبة المدخلات إذا كانت الأنشطة مختلطة؟"
  },

"How will this impact pricing and cash flow?": {
    ar: "كيف سيؤثر ذلك على التسعير والتدفقات النقدية؟"
  },

"Which box or field in the VAT return must reflect the supply?": {
    ar: "أي خانة أو حقل في الإقرار الضريبي يجب أن يعكس التوريد؟"
  },

"Short Scenario Examples": {
    ar: "أمثلة قصيرة على السيناريوهات"
  },

"Example 1: Export Business": {
    ar: "مثال 1: نشاط التصدير"
  },

"An exporter in Dubai sells manufacturing equipment to a buyer in Germany. The supplier secures customs export declarations and shipping documents. The supply is zero rated. The supplier recovers input VAT on the purchase of components used to produce the equipment.": {
    ar: "يقوم مُصدّر في دبي ببيع معدات تصنيع إلى مشترٍ في ألمانيا. يوفّر المورد التصاريح الجمركية للتصدير ومستندات الشحن. يُعامل التوريد كنسبة الصفر. ويسترد المورد ضريبة المدخلات على شراء المكونات المستخدمة في تصنيع المعدات."
  },

"Example 2: Local Transport Company": {
    ar: "مثال 2: شركة نقل محلية"
  },

"A local bus company provides domestic passenger journeys within the UAE. Those services are exempt. The operator cannot reclaim input VAT on fuel or maintenance costs in respect of exempt operations.": {
    ar: "تقدم شركة حافلات محلية رحلات نقل ركاب داخل دولة الإمارات. تُعتبر هذه الخدمات معفاة. ولا يمكن للمشغل استرداد ضريبة المدخلات على الوقود أو تكاليف الصيانة المتعلقة بالعمليات المعفاة."
  },

"Example 3: Property Developer": {
    ar: "مثال 3: مطور عقاري"
  },

"A property developer sells a residential apartment within one year of construction completion. If the sale qualifies as a first supply and meets documentary requirements, the developer may apply zero rating. Later resale of the same apartment will generally be exempt.": {
    ar: "يقوم مطوّر عقاري ببيع شقة سكنية خلال سنة واحدة من إتمام البناء. إذا استوفت عملية البيع شروط التوريد الأول والمتطلبات المستندية، يمكن تطبيق التوريد الخاضع لنسبة الصفر. بينما يكون بيع الشقة ذاتها لاحقاً معفىً عادة."
  },

"Practical Governance Recommendations": {
    ar: "توصيات الحوكمة العملية"
  },

"Map your processes: Map procurement, sales, and logistics processes against VAT treatments to identify where supporting documents are created and stored": {
    ar: "ارسم خرائط لعملياتك: اربط عمليات المشتريات والمبيعات واللوجستيات بمعالجات الضريبة لتحديد أماكن إنشاء المستندات الداعمة وتخزينها."
  },

"Centralise evidence: Keep proof of exports, transport, certification, and institutional recognition in a central repository with version control": {
    ar: "مركزة الأدلة: احتفظ بإثباتات التصدير والنقل وشهادات الاعتماد والاعتراف المؤسسي في مستودع مركزي مع إدارة للإصدارات."
  },

"Automate where possible: Use accounting or ERP systems that tag transactions according to VAT treatment and support reporting. Automation cuts errors in mixed activity apportionment": {
    ar: "قم بالأتمتة حيثما أمكن: استخدم أنظمة محاسبية أو أنظمة ERP تقوم بتصنيف المعاملات وفقاً للمعالجة الضريبية وتدعم التقارير. تقلل الأتمتة من الأخطاء في توزيع الأنشطة المختلطة."
  },

"Train relevant teams: Finance, sales, logistics, and the commercial team should understand the VAT implications of zero rated and exempt supplies": {
    ar: "تدريب الفرق ذات الصلة: يجب أن يفهم فريق المالية والمبيعات واللوجستيات والفريق التجاري الآثار الضريبية للتوريدات الخاضعة لنسبة الصفر والمعفاة."
  },

"Schedule tax health checks: Run a VAT health check at least annually or whenever you add a new product line or expand into new territories": {
    ar: "حدد فحوصات دورية للضريبة: أجرِ فحصاً لضريبة القيمة المضافة مرة واحدة سنوياً على الأقل أو عند إضافة خط إنتاج جديد أو التوسع في أسواق جديدة."
  },

"Final Note and Next Step": {
    ar: "ملاحظة ختامية والخطوة التالية"
  },

"Classifying supplies correctly is not a theoretical exercise. It affects cash flow, pricing, compliance cost, and ultimately profitability. If you operate across multiple product lines or have cross-border activity, treat classification as a governance priority and document every decision with supporting evidence.": {
    ar: "تصنيف التوريدات بشكل صحيح ليس ممارسة نظرية، بل يؤثر على التدفقات النقدية والتسعير وتكاليف الامتثال وربحية الأعمال. إذا كنت تعمل عبر عدة خطوط إنتاج أو في أنشطة عابرة للحدود، فاجعل التصنيف أولوية حوكمية ووثّق كل قرار بأدلة داعمة."
  },

"For businesses that want to simplify compliance and centralise tax controls, enterprise-grade tools can make the difference. Accqrate provides ERP features that help record the evidence trail, tag transactions by VAT treatment, and produce reports ready for FTA review while keeping bookkeeping consistent across complex supply chains.": {
    ar: "بالنسبة للأعمال التي ترغب في تبسيط الامتثال ومركزة الضوابط الضريبية، يمكن للأدوات المؤسسية أن تحدث فرقاً كبيراً. تقدم أكيوريت ميزات ERP تساعد في تسجيل سلسلة الأدلة، وتصنيف المعاملات حسب المعالجة الضريبية، وإنتاج تقارير جاهزة لمراجعة الهيئة الاتحادية للضرائب مع الحفاظ على اتساق السجلات عبر سلاسل التوريد المعقدة."
  },

"Frequently Asked Questions": { 
    ar: "الأسئلة المتكررة" 
  },

"Ask Everything You Need To Know About Our Solutions And Services": { 
    ar: "اطرح كل ما تريد معرفته عن حلولنا وخدماتنا" 
  },

"No FAQs available for this country yet.": { 
    ar: "لا توجد أسئلة متكررة متاحة لهذه الدولة حالياً." 
  },

"Please check back later or contact us directly.": { 
    ar: "يرجى إعادة التحقق لاحقاً أو التواصل معنا مباشرة." 
  },

"UAE-based businesses receive a 90-day free trial.": { 
    ar: "تحصل الشركات الموجودة في دولة الإمارات على تجربة مجانية لمدة 90 يوماً." 
  },

"Can I cancel my trial at any time?": { 
    ar: "هل يمكنني إلغاء الفترة التجريبية في أي وقت؟" 
  },

"Absolutely. You may cancel whenever you wish. Your account remains active for the full 90-day period and is automatically removed afterward.": { 
    ar: "نعم بالتأكيد. يمكنك الإلغاء في أي وقت. يبقى حسابك نشطاً طوال فترة الـ90 يوماً ويتم إزالته تلقائياً بعد ذلك." 
  },

"Is Accqrate cloud-based in the UAE?": { 
    ar: "هل أكيوريت يعمل بنظام السحابة داخل الإمارات؟" 
  },

"Yes. Accqrate Cloud is hosted within the UAE, with a disaster recovery server located in the GCC.": { 
    ar: "نعم. يتم استضافة أكيوريت السحابي داخل دولة الإمارات، مع وجود خادم لاستعادة الطوارئ ضمن دول مجلس التعاون الخليجي." 
  },

"Should I provide my Credit card or debit card or bank account details during the trial period?": { 
    ar: "هل يجب أن أقدم تفاصيل بطاقتي الائتمانية أو البنكية خلال الفترة التجريبية؟" 
  },

"No. We do not take any credit card or debit card or bank details. It is absolutely free and has no link with any payments.": { 
    ar: "لا. لا نطلب أي تفاصيل بنكية أو بطاقات. التجربة مجانية تماماً ولا ترتبط بأي مدفوعات." 
  },

"How do I pay my subscription?": { 
    ar: "كيف أقوم بدفع اشتراكي؟" 
  },

"You pay through invoices. Based on your subscription plan, we send you a tax invoice. You can pay it to our bank account within 10 days from the receipt of the invoice.": { 
    ar: "يتم الدفع من خلال الفواتير. بناءً على خطة اشتراكك، نرسل لك فاتورة ضريبية ويمكنك سدادها إلى حسابنا البنكي خلال 10 أيام من استلام الفاتورة." 
  },

"What subscription plans are available?": { 
    ar: "ما هي خطط الاشتراك المتاحة؟" 
  },

"We offer flexible half-yearly or annual subscription plans. Feel free to choose the option that best suits your business needs.": { 
    ar: "نقدم خطط اشتراك نصف سنوية أو سنوية مرنة. اختر الخطة التي تناسب احتياجات عملك." 
  },

"Is there any discount for annual subscription?": { 
    ar: "هل يوجد خصم للاشتراك السنوي؟" 
  },

"Annual subscription has 8% discount on the total subscription value.": { 
    ar: "يحصل الاشتراك السنوي على خصم بنسبة 8% من القيمة الإجمالية للاشتراك." 
  },

"What is PEPPOL e-invoicing, and how does it work in the UAE?": { 
    ar: "ما هو نظام فوترة PEPPOL الإلكتروني وكيف يعمل في الإمارات؟" 
  },

"PEPPOL e-invoicing standardizes the electronic exchange of invoices across borders using a decentralized model. Accqrate’s solution integrates with the PEPPOL network, ensuring your invoices meet UAE standards for secure and efficient transmission.": { 
    ar: "يوحّد نظام PEPPOL للفوترة الإلكترونية تبادل الفواتير عبر الحدود باستخدام نموذج لامركزي. يتكامل حل أكيوريت مع شبكة PEPPOL لضمان توافق الفواتير مع معايير الإمارات لنقل آمن وفعّال." 
  },

"When will mandatory e-invoicing be implemented in the UAE?": { 
    ar: "متى سيتم تطبيق الفوترة الإلكترونية الإلزامية في الإمارات؟" 
  },

"Mandatory e-invoicing for B2B and B2G transactions in the UAE is expected to begin in July 2026. Accqrate is preparing its platform to support this transition with full compliance and smooth integration.": { 
    ar: "من المتوقع أن تبدأ الفوترة الإلكترونية الإلزامية لمعاملات الشركات والجهات الحكومية في الإمارات في يوليو 2026. تعمل أكيوريت على تهيئة منصتها لدعم هذا التحول مع الامتثال الكامل وسلاسة التكامل." 
  },

"How does Accqrate ensure compliance with UAE tax and data regulations?": { 
    ar: "كيف يضمن أكيوريت الامتثال للوائح الضرائب والبيانات في الإمارات؟" 
  },

"We adhere to UAE regulations by using robust digital signatures, encryption protocols, and secure data hosting practices. Our platform works with Accredited Service Providers to guarantee that all invoice exchanges meet regulatory standards.": { 
    ar: "نلتزم بلوائح دولة الإمارات عبر استخدام التوقيعات الرقمية القوية وبروتوكولات التشفير وممارسات الاستضافة الآمنة للبيانات. تعمل منصتنا مع مزودي خدمات معتمدين لضمان توافق تبادل الفواتير مع المعايير التنظيمية." 
  },

"Can I integrate my current accounting software with Accqrate’s PEPPOL e-invoicing solution?": { 
    ar: "هل يمكنني دمج برنامج المحاسبة الحالي مع حل الفوترة الإلكترونية PEPPOL من أكيوريت؟" 
  },

"Yes, Accqrate is designed for easy integration with your existing accounting or ERP systems, allowing you to leverage the benefits of the PEPPOL network without overhauling your current infrastructure.": { 
    ar: "نعم، تم تصميم أكيوريت ليتكامل بسهولة مع أنظمة المحاسبة أو ERP الحالية لديك، مما يتيح لك الاستفادة من شبكة PEPPOL دون الحاجة لإعادة بناء بنيتك الحالية." 
  },

"How does Accqrate facilitate secure and timely invoice exchanges in the UAE?": { 
    ar: "كيف يسهل أكيوريت تبادل الفواتير بشكل آمن وفي الوقت المناسب داخل الإمارات؟" 
  },

"Our system ensures near real-time data integration and validation through certified channels, so your invoices are securely exchanged and reported to the Federal Tax Authority in compliance with local regulations.": { 
    ar: "يضمن نظامنا دمج البيانات والتحقق منها شبه الفوري عبر قنوات معتمدة، بحيث يتم تبادل الفواتير بشكل آمن والإبلاغ عنها للهيئة الاتحادية للضرائب وفقاً للوائح المحلية." 
  },

"If you have any other questions not addressed here": { 
    ar: "إذا كانت لديك أي أسئلة أخرى غير مذكورة هنا" 
  },

"Please feel free to contact us at": { 
    ar: "لا تتردد في التواصل معنا عبر" 
  },

"Contact Your Consultant": { 
    ar: "تواصل مع مستشارك" 
  },

"Get 100% Peppol compliant with Accqrate": { 
    ar: "احصل على توافق كامل بنسبة 100% مع PEPPOL عبر أكيوريت" 
  },

"Ready for UAE's 2026 mandate": { 
    ar: "جاهزون لمتطلبات الإمارات لعام 2026" 
  },

"EN 16931 compliant structured invoices": { 
    ar: "فواتير منظمة متوافقة مع معيار EN 16931" 
  },

"Seamless Peppol network integration": { 
    ar: "تكامل سلس مع شبكة PEPPOL" 
  },

"UBL format invoice generation": { 
    ar: "إنشاء فواتير بصيغة UBL" 
  },

"Seamless integration with any ERP/POS": { 
    ar: "تكامل سلس مع أي نظام ERP أو POS" 
  },

"Direct Integration & People integration": { 
    ar: "تكامل مباشر وتكامل مع الأنظمة البشرية" 
  },

"E-invoice generation in a fraction of a second": { 
    ar: "إنشاء الفاتورة الإلكترونية في جزء من الثانية" 
  },
"Book a Demo": { ar: "احجز عرضاً توضيحياً" },

"Tick": { ar: "علامة صح" },
"Invoice": { ar: "فاتورة" },
"Peppol Certified": { ar: "معتمد من Peppol" },
"Compliance Box": { ar: "مربع الامتثال" },
"Security Lock Illustration": { ar: "رسم توضيحي لقفل الأمان" },

"Save time, save money": {
  ar: "وفّر الوقت ووفّر المال"
},

"Get fresh product insights and exclusive company editorials delivered straight to your inbox. Subscribe now to never miss a beat!": {
  ar: "احصل على أحدث رؤى المنتج والمحتوى الحصري مباشرة إلى صندوق بريدك. اشترك الآن لتبقى على اطلاع دائم!"
},

"Want the latest on UAE e-invoicing mandate, fresh product updates, and exclusive Accqrate insights?": {
  ar: "هل ترغب في معرفة آخر تحديثات الفوترة الإلكترونية في الإمارات، وأحدث تطورات المنتج، ورؤى أكيوريت الحصرية؟"
},

"Subscribe to our newsletter and stay ahead, delivered straight to your inbox.": {
  ar: "اشترك في نشرتنا الإخبارية وابقَ في الصدارة مع التحديثات التي تصلك مباشرة إلى صندوق بريدك."
},

"Get Peppol Compliance Demo": {
  ar: "احصل على عرض توافق Peppol"
},


"Flexibility Meets Efficiency": { 
  ar: "المرونة تلتقي بالكفاءة" 
},

"Our innovative solutions are designed to fit your business's unique needs, offering both cloud-based and on-premises deployment. Experience the seamless integration of our application on your servers in under 3 hours, ensuring your data's privacy without compromising on functionality.": {
  ar: "تم تصميم حلولنا المبتكرة لتتناسب مع احتياجات عملك الفريدة، مع توفير خيارات النشر السحابي أو الداخلي. اختبر التكامل السلس لتطبيقنا على خوادمك في أقل من 3 ساعات، مع ضمان خصوصية بياناتك دون المساومة على الأداء."
},

"Transparent and Competitive Pricing": { 
  ar: "تسعير شفاف وتنافسي" 
},

"Forget the worries of per-invoice charges. Our competitive pricing plans offer astonishing slab variations, allowing you to plan your budget with confidence and avoid unexpected costs.": {
  ar: "تخلّص من القلق بشأن رسوم كل فاتورة. تقدم خطط التسعير التنافسية لدينا شرائح مدهشة تتيح لك التخطيط لميزانيتك بثقة وتجنب التكاليف غير المتوقعة."
},

"Swift Peppol Onboarding": { 
  ar: "انضمام سريع إلى Peppol" 
},

"Get started with UAE e-invoicing in minutes. Share your company details, and Accqrate activates your UAE PINT compliant, Peppol-ready setup instantly fully aligned with the FTA’s DCTCE 5-corner model for seamless B2B invoice exchange.": {
  ar: "ابدأ مع الفوترة الإلكترونية في الإمارات خلال دقائق. شارك تفاصيل شركتك، وتقوم أكيوريت بتفعيل إعدادك المتوافق مع UAE PINT والجاهز لـ Peppol فوراً، بما يتماشى تماماً مع نموذج FTA DCTCE ذي الخمس زوايا لضمان تبادل سلس لفواتير الأعمال."
},

"Automatic UAE PINT & EN 16931 Field Mapping": { 
  ar: "الربط التلقائي لحقول UAE PINT وEN 16931" 
},

"Eliminate formatting and VAT compliance errors with Accqrate’s automated mapping engine. All required UAE PINT and EN 16931 fields are validated and structured correctly, ensuring every invoice meets FTA, Peppol, and UBL 2.1 standards no manual intervention needed.": {
  ar: "تخلّص من أخطاء التنسيق والامتثال الضريبي مع محرك الربط التلقائي من أكيوريت. يتم التحقق من جميع الحقول المطلوبة في UAE PINT وEN 16931 وتنظيمها بشكل صحيح، لضمان توافق كل فاتورة مع معايير FTA وPeppol وUBL 2.1 دون أي تدخل يدوي."
},

"Custom PDF Template Replication": { 
  ar: "استنساخ مخصص لقوالب PDF" 
},

"Maintain consistency with precise replication of your existing invoice templates, allowing for seamless printing, downloading, and archiving within the middleware.": {
  ar: "حافظ على الاتساق من خلال الاستنساخ الدقيق لقوالب الفواتير الحالية، مما يتيح الطباعة والتنزيل والأرشفة بسلاسة عبر منصة الربط الوسيطة."
},

"Long-Term Invoice Archiving": { 
  ar: "أرشفة الفواتير طويلة المدى" 
},

"Securely archive your PDFs and XMLs in our middleware for a decade, with no additional costs, ensuring long-term compliance and peace of mind.": {
  ar: "قم بأرشفة ملفات PDF وXML بأمان ضمن منصتنا الوسيطة لمدة عشر سنوات دون أي تكاليف إضافية، مما يضمن الامتثال الطويل وراحة البال."
},

"Automated Email Notifications": { 
  ar: "إشعارات بريد إلكتروني تلقائية" 
},

"Stay informed with automated success and failure notifications sent directly to your designated finance email, keeping you updated on every transaction.": {
  ar: "ابقَ مطلعاً عبر إشعارات النجاح والفشل التلقائية المرسلة مباشرة إلى بريدك المالي المعتمد، لتكون على علم بكل معاملة."
},

"Comprehensive Peppol Exchange & Reconciliation Dashboard": { 
  ar: "لوحة تحكم شاملة لتبادل Peppol والتسوية" 
},

"Accqrate offers a unified dashboard to monitor and reconcile all invoices exchanged through the UAE’s Peppol network. Track submissions, confirmations, rejections, and statuses with real-time visibility, detailed FTA compliance reports, and exportable summaries for audit and VAT workflows.": {
  ar: "توفر أكيوريت لوحة تحكم موحدة لمراقبة وتسوية جميع الفواتير المتبادلة عبر شبكة Peppol في الإمارات. تابع عمليات الإرسال والتأكيدات والرفض والحالات مع رؤية فورية، وتقارير امتثال تفصيلية، وملخصات قابلة للتصدير للتدقيق وعمليات ضريبة القيمة المضافة."
},

"AI-Driven Error Analytics": { 
  ar: "تحليلات الأخطاء المدعومة بالذكاء الاصطناعي" 
},

"Our advanced analytics detect frequent errors and provide actionable insights to prevent them, optimizing your invoicing process with the power of artificial intelligence.": {
  ar: "تكشف التحليلات المتقدمة لدينا الأخطاء المتكررة وتقدم رؤى قابلة للتنفيذ لمنعها، مما يعزز عملية الفوترة لديك بفضل قوة الذكاء الاصطناعي."
},

"Future-Proof with ERP Scalability": { 
  ar: "جاهزية مستقبلية بفضل قابلية توسّع ERP" 
},

"When your business outgrows its current systems, our scalable ERP modules ensure compliance and growth without the need to overhaul your technology stack.": {
  ar: "عندما يتوسع عملك بما يتجاوز أنظمتك الحالية، تضمن وحدات ERP القابلة للتوسع الامتثال والنمو دون الحاجة إلى إعادة بناء بنيتك التقنية."
},

"Full Support for FTA E-Invoicing Compliance Reviews": { 
  ar: "دعم كامل لمراجعات الامتثال للفاتورة الإلكترونية من FTA" 
},

"Accqrate provides complete assistance during FTA compliance checks, ensuring your UAE PINT configurations, DCTCE exchange flows, digital signatures, and Peppol processes meet all regulatory expectations. Your business remains continuously compliant before, during, and after FTA audits.": {
  ar: "تقدم أكيوريت دعماً كاملاً أثناء عمليات فحص الامتثال من الهيئة الاتحادية للضرائب، مما يضمن توافق إعدادات UAE PINT وتدفقات تبادل DCTCE والتوقيعات الرقمية وعمليات Peppol مع جميع المتطلبات التنظيمية. يظل عملك ممتثلاً دائماً قبل التدقيق وأثناءه وبعده."
},

"High-Performance Application": { 
  ar: "تطبيق عالي الأداء" 
},

"Our platform stands tested and trusted, flawlessly handling over half a million invoices daily per customer, empowering your business to perform at its best.": {
  ar: "منصتنا مجربة وموثوقة، حيث تعالج أكثر من نصف مليون فاتورة يومياً لكل عميل دون أخطاء، مما يمكّن عملك من الأداء بأعلى كفاءة."
},

"A": { ar: "برنامج" },
"complete software": { ar: "متكامل" },
"to run your business better": { ar: "لتشغيل عملك بشكل أفضل" },

"Whether you've just started or are already established, you'll find all the features you need at each stage of your business.": {
  ar: "سواء كنت قد بدأت للتو أو كنت مؤسسة راسخة، ستجد جميع الميزات التي تحتاجها في كل مرحلة من مراحل عملك."
},

"VAT Return": { ar: "الإقرار الضريبي" },

"No need for an accountant – let Accqrate automatically generate your VAT return for you": {
  ar: "لا حاجة لمحاسب — دع أكيوريت ينشئ إقرار ضريبة القيمة المضافة لك تلقائياً."
},

"Customers & Suppliers": { ar: "العملاء والموردون" },

"Always know who you owe money to and who owes you money": {
  ar: "اعرف دائماً من تدين له بالمال ومن يدين لك."
},

"Reports & Insights": { ar: "التقارير والرؤى" },

"Generate single or consolidated reports for a holistic view of your finances.": {
  ar: "أنشئ تقارير فردية أو موحدة للحصول على رؤية شاملة لبياناتك المالية."
},

"Purchases & Claims": { ar: "المشتريات والمطالبات" },

"Manage bills, purchase orders and expenses from one place": {
  ar: "أدر الفواتير وأوامر الشراء والنفقات من مكان واحد."
},

"Payroll & Employees": { ar: "الرواتب والموظفون" },

"Run payroll and invite employees to submit their expense claims.": {
  ar: "قم بإدارة الرواتب ودع الموظفين يقدمون مطالبات نفقاتهم."
},

"Inventory tracking": { ar: "تتبع المخزون" },

"Easily keep track of stock levels and let Accqrate automatically book your Cost of Goods": {
  ar: "تابع مستويات المخزون بسهولة ودع أكيوريت يسجل تكلفة البضائع تلقائياً."
},

"Enable Your Business With E-invoicing.": { 
  ar: "مكّن عملك عبر الفوترة الإلكترونية." 
},

"Get 30 days free trial": { 
  ar: "احصل على تجربة مجانية لمدة 30 يوماً" 
},

"Simplified": { ar: "مبسّط" },
"Smart": { ar: "ذكي" },
"Complaint": { ar: "متوافق" },

"4.8 average rating from our customers": { 
  ar: "متوسط تقييم 4.8 من عملائنا" 
},

"Free Proof of Concept": { 
  ar: "إثبات مفهوم مجاني" 
},

"Flexible Solution: Cloud or On-Premises": { 
  ar: "حل مرن: سحابي أو داخلي" 
},

"PEPPOL Certified E-invoicing Software for UAE": { 
  ar: "برنامج فوترة إلكترونية معتمد من PEPPOL للإمارات" 
},

"Integrate With PEPPOL Network.": { 
  ar: "تكامل مع شبكة PEPPOL." 
},

"European Based <span class='text-[#508847]'>E-invoicing</span> Solution For UAE Companies.": {
  ar: "حل <span class='text-[#508847]'>الفوترة الإلكترونية</span> أوروبي للشركات الإماراتية."
},

"FTA VAT Compliance": { ar: "امتثال ضريبة القيمة المضافة للهيئة الاتحادية للضرائب" },

"Data Hosted in UAE Cloud": { ar: "البيانات مستضافة في سحابة داخل الإمارات" },

"Ready for Emirates Phase 2": { ar: "جاهز للمرحلة الثانية في الإمارات" },

"GDPR Compliant": { ar: "متوافق مع GDPR" },
"Data Hosted in UAE": { ar: "البيانات مستضافة في الإمارات" },

"5,000+ Across 30+ Industries": { 
  ar: "أكثر من 5,000 عميل عبر أكثر من 30 صناعة" 
},


"Construction & Engineering": { ar: "الإنشاءات والهندسة" },
"Logistics": { ar: "اللوجستيات" },
"Insurance": { ar: "التأمين" },
"Conglomerate": { ar: "التكتلات" },
"Pharmacy": { ar: "الصيدلة" },
"Energy": { ar: "الطاقة" },
"Packaging solutions": { ar: "حلول التغليف" },
"Food & Beverage": { ar: "الأغذية والمشروبات" },
"Trading": { ar: "التجارة" },
"Chemicals": { ar: "الكيماويات" },
"Hospitality and Tourism": { ar: "الضيافة والسياحة" },
"FMCD": { ar: "السلع الاستهلاكية المتينة" },
"Oil & Gas": { ar: "النفط والغاز" },
"Home Appliances": { ar: "الأجهزة المنزلية" },
"Manufacturing": { ar: "التصنيع" },
"Electrical Industries Co.": { ar: "شركة الصناعات الكهربائية" },
"Aerospace & Defense": { ar: "الفضاء والدفاع" },
"Retail": { ar: "التجزئة" },
"Ecommerce": { ar: "التجارة الإلكترونية" },
"Fashion": { ar: "الأزياء" },


"Customize and send invoices easily": { 
  ar: "خصص وأرسل الفواتير بسهولة" 
},

"Sending an invoice should be easy - and we`ve made it so": {
  ar: "يجب أن تكون عملية إرسال الفاتورة سهلة — وقد جعلناها كذلك."
},

"Perfectly aligned with your needs and brand": {
  ar: "متوافق تماماً مع احتياجاتك وهويتك التجارية"
},

"Invoices Custom-Made for Your Business": {
  ar: "فواتير مصممة خصيصاً لعملك"
},


"Change column labels": { ar: "تغيير تسميات الأعمدة" },

"Modify the text in any column to meet your specific requirements": {
  ar: "عدّل النص في أي عمود ليتوافق مع متطلباتك الخاصة"
},

"Adapt the color palette to align with your brand's identity.": {
  ar: "اضبط لوحة الألوان لتتناسب مع هوية علامتك التجارية."
},

"Save invoice emplates": { 
  ar: "احفظ قوالب الفواتير" 
},

"Leverage your favorite template for efficiency and time savings.": {
  ar: "استخدم قالبك المفضل لتعزيز الكفاءة وتوفير الوقت."
},

"Add your company Logo": { 
  ar: "أضف شعار شركتك" 
},

"Incorporate your company's seal on invoices, quotes, receipts, and other paperwork.": {
  ar: "أدرج ختم شركتك في الفواتير والعروض والإيصالات وغيرها من المستندات."
},


"Full Compliance with E-Invoicing Regulations": { 
  ar: "امتثال كامل للوائح الفوترة الإلكترونية" 
},

"Accqrate delivers compliant structured e-invoices with seamless integration, ensuring secure exchange, standardized processing, and continuous alignment with evolving regulatory frameworks.": {
  ar: "توفر أكيوريت فواتير إلكترونية منظمة ومتوافقة، مع تكامل سلس يضمن تبادلاً آمناً، ومعالجة قياسية، ومواءمة مستمرة مع الأطر التنظيمية المتطورة."
},

"Future-Ready E-Invoicing Solution": { 
  ar: "حل فوترة إلكترونية جاهز للمستقبل" 
},

"Built for interoperability, Accqrate supports cross-border e-invoicing, digital reporting, and automated workflows, positioning enterprises for upcoming compliance requirements.": {
  ar: "تم تصميم أكيوريت للتشغيل البيني، حيث يدعم الفوترة الإلكترونية عبر الحدود، والتقارير الرقمية، والعمليات الآلية، مما يهيئ الشركات للامتثال المستقبلي."
},

"Effortless E-Invoicing Automation": { 
  ar: "أتمتة سهلة للفوترة الإلكترونية" 
},

"Accqrate provides AI-driven validation, automated compliance checks, real-time error detection, and end-to-end invoice automation from creation to transmission, ensuring complete compliance without manual intervention.": {
  ar: "تقدم أكيوريت تحققاً مدعوماً بالذكاء الاصطناعي، وفحوصات امتثال تلقائية، وكشف أخطاء فوري، وأتمتة شاملة للفواتير من الإنشاء إلى الإرسال، لضمان الامتثال الكامل دون تدخل يدوي."
},

"Specialized Support and Implementation Expertise": { 
  ar: "دعم متخصص وخبرة تنفيذية" 
},

"Our experts deliver smooth onboarding, continuous guidance, and reliable assistance for every stage of your e-invoicing journey.": {
  ar: "يقدم خبراؤنا انضماماً سلساً، وتوجيهاً مستمراً، ودعماً موثوقاً في كل مرحلة من رحلة الفوترة الإلكترونية."
},

"Unified Global E-Invoicing Platform": { 
  ar: "منصة فوترة إلكترونية عالمية موحدة" 
},

"Multinational organizations can rely on Accqrate to generate, validate, and transmit compliant e-invoices across multiple jurisdictions, all from a single, integrated platform.": {
  ar: "يمكن للمنظمات متعددة الجنسيات الاعتماد على أكيوريت لإنشاء الفواتير الإلكترونية المتوافقة والتحقق منها وإرسالها عبر عدة ولايات تنظيمية، من خلال منصة موحدة ومتكاملة."
},


"Compliant with UAE’s Mandatory B2B E-Invoicing Regulation": { 
  ar: "متوافق مع لائحة الفوترة الإلكترونية الإلزامية للأعمال (B2B) في الإمارات" 
},

"Generate invoices fully compliant with UAE’s FTA 5 Corner Model (DCTCE)": {
  ar: "إنشاء فواتير متوافقة بالكامل مع نموذج الهيئة الاتحادية للضرائب ذي الخمس زوايا (DCTCE)"
},

"FTA and Peppol Requirements:": { 
  ar: "متطلبات الهيئة الاتحادية للضرائب وPeppol:" 
},

"Accqrate generates fully FTA-compliant structured eInvoices aligned to the UAE PINT framework and supports exchange through the DCTCE / 5-corner (PEPPOL) model.": {
  ar: "تقوم أكيوريت بإنشاء فواتير إلكترونية منظمة ومتوافقة بالكامل مع الهيئة الاتحادية للضرائب، ومتوافقة مع إطار UAE PINT، كما تدعم التبادل عبر نموذج DCTCE / الخمس زوايا (PEPPOL)."
},

"Accqrate is a Peppol Certified AP Provider and SMP": {
  ar: "أكيوريت هي مزود نقطة وصول وشركة فهرسة معتمدة من Peppol"
},


"Full Compliance with UAE": { ar: "امتثال كامل لدولة الإمارات" },
"E-Invoicing (FTA DCTCE)": { ar: "الفوترة الإلكترونية (DCTCE من الهيئة الاتحادية للضرائب)" },

"Accqrate ensures complete compliance with the UAE’s Decentralized Continuous Transaction Control and Exchange (DCTCE) framework. We generate UAE PINT–compliant e-invoices, aligned with EN 16931 and fully integrated with the national Peppol network for secure, standardized exchange. Every invoice is validated, signed, transmitted, and archived according to the latest FTA e-invoicing regulations.": {
  ar: "تضمن أكيوريت الامتثال الكامل لإطار التحكم والتبادل اللامركزي المستمر للمعاملات (DCTCE) في دولة الإمارات. نقوم بإنشاء فواتير إلكترونية متوافقة مع UAE PINT ومتوافقة مع EN 16931 ومتكاملة بالكامل مع شبكة Peppol الوطنية لضمان تبادل آمن وموحد. يتم التحقق من كل فاتورة وتوقيعها وإرسالها وأرشفتها وفقاً لأحدث لوائح الفوترة الإلكترونية الصادرة عن الهيئة الاتحادية للضرائب."
},
"Effortless E-Invoicing": { ar: "الفوترة الإلكترونية بدون مجهود" },
"Automation": { ar: "الأتمتة" },

"Accqrate automates the complete UAE e-invoicing cycle with:": { ar: "تقوم أكيوريت بأتمتة دورة الفوترة الإلكترونية الكاملة في دولة الإمارات من خلال:" },

"AI-driven invoice validation": { ar: "التحقق من صحة الفواتير المدعوم بالذكاء الاصطناعي" },
"Automated FTA compliance checks": { ar: "فحوصات الامتثال التلقائية لمتطلبات الهيئة الاتحادية للضرائب" },
"Real-time error and anomaly detection": { ar: "اكتشاف الأخطاء والشذوذ في الوقت الفعلي" },
"End-to-end creation, exchange, and archiving": { ar: "إنشاء الفواتير وتبادلها وأرشفتها بشكل متكامل" },

"Designed to reduce manual work and eliminate compliance risks.": { ar: "مصممة لتقليل العمل اليدوي والقضاء على مخاطر عدم الامتثال." },

"Expert UAE E-Invoicing Implementation Support": { ar: "دعم احترافي لتنفيذ الفوترة الإلكترونية في دولة الإمارات" },
"Our team provides smooth onboarding with:": { ar: "يوفّر فريقنا عملية تهيئة سلسة تتضمن:" },

"Fast ERP/POS integrations": { ar: "عمليات دمج سريعة مع أنظمة ERP/POS" },
"UAE PINT templates and APIs": { ar: "قوالب ومعايير واجهات برمجة تطبيقات متوافقة مع UAE PINT" },
"Setup with certified Peppol Access Points": { ar: "إعداد كامل بالتعاون مع نقاط وصول بيبول المعتمدة" },
"Dedicated UAE compliance guidance": { ar: "إرشاد متخصص للامتثال الضريبي في دولة الإمارات" },

"Accqrate ensures a reliable and low-disruption rollout for businesses of all sizes.": {
  ar: "تضمن أكيوريت تنفيذًا موثوقًا وسلسًا دون تعطّل لجميع أحجام الشركات."
},

"Future-Ready for UAE Digital Tax & VAT Compliance": { ar: "جاهز للمستقبل في الامتثال للضرائب الرقمية وضريبة القيمة المضافة في دولة الإمارات" },
"Accqrate is engineered for the UAE’s evolving digital taxation landscape. We support automated VAT validation, structured invoice exchange, and upcoming FTA digital reporting requirements, helping businesses stay compliant as the UAE expands its Peppol-based framework.": {
  ar: "تم تصميم أكيوريت ليتماشى مع البيئة المتطورة للضرائب الرقمية في دولة الإمارات. نحن ندعم التحقق التلقائي من ضريبة القيمة المضافة، وتبادل الفواتير المهيكلة، ومتطلبات التقارير الرقمية القادمة من الهيئة الاتحادية للضرائب، مما يساعد الشركات على البقاء متوافقة مع توسّع إطار بيبول في الدولة."
},

"Built for the UAE 5-Corner Peppol Model": { ar: "مصمم ليتوافق مع نموذج بيبول ذي الخمس زوايا في دولة الإمارات" },

"Accqrate supports the full UAE 5-corner e-invoicing model, enabling seamless interaction across suppliers, buyers, Peppol Access Points, and the FTA.": {
  ar: "تدعم أكيوريت نموذج الفوترة الإلكترونية الإماراتي ذي الخمس زوايا بالكامل، مما يمكّن من تواصل سلس بين المورّدين والمشترين ونقاط وصول بيبول والهيئة الاتحادية للضرائب."
},

"Our UAE PINT engine ensures consistent interoperability, real-time exchange, and full traceability across the digital tax ecosystem.": {
  ar: "يضمن محرك UAE PINT لدينا قابلية التشغيل البيني بشكل متسق، والتبادل الفوري، والشفافية الكاملة عبر منظومة الضرائب الرقمية."
},

"One Platform for Global E-Invoicing": { ar: "منصة واحدة للفوترة الإلكترونية العالمية" },

"Accqrate enables businesses to manage e-invoicing across UAE, GCC, EU, and other regulated markets from one platform.": {
  ar: "تمكّن أكيوريت الشركات من إدارة الفوترة الإلكترونية عبر الإمارات ودول الخليج والاتحاد الأوروبي وغيرها من الأسواق المنظمة من منصة واحدة."
},

"Generate, validate, transmit, and archive compliant e-invoices globally with a unified, scalable solution.": {
  ar: "أنشئ، وتحقق، وارسِل، وأرشِف فواتير إلكترونية متوافقة عالميًا عبر حل موحد وقابل للتوسّع."
},

"Flexible Deployment": { ar: "مرونة في النشر" },

"UAE Based <span class='text-[#508847]'>E-invoicing</span> Solution For UAE Companies.": {
  ar: "حل <span class='text-[#508847]'>الفوترة الإلكترونية</span> القائم في دولة الإمارات والمخصص للشركات الإماراتية."
},
"Accqrate E-Invoicing Solutions": {
  ar: "حلول الفوترة الإلكترونية من أككريت"
},
"Streamline Operations and Accelerate Business Growth": {
  ar: "تبسيط العمليات وتسريع نمو الأعمال"
},
"Integrate Your Existing": {
  ar: "قم بدمج أنظمتك الحالية"
},
"ERPs, POS & Applications With FTA (UAE PINT)": {
  ar: "أنظمة تخطيط موارد المؤسسات (ERP)، ونقاط البيع (POS)، والتطبيقات مع هيئة الضرائب الاتحادية (UAE PINT)"
},
/* =====================
   CLOUD SOLUTIONS
   ===================== */

"Cloud Based Solutions": { ar: "حلول قائمة على السحابة" },

"Subscribe, Use On-Demand: Fast, Secure, and Flexible Cloud Solutions": {
  ar: "اشترك واستخدم عند الحاجة: حلول سحابية سريعة وآمنة ومرنة"
},

"Subscribe and pay per use": { ar: "اشترك وادفع حسب الاستخدام" },
"Onboarding in 5 min": { ar: "بدء الاستخدام خلال 5 دقائق" },
"High Performance": { ar: "أداء عالي" },
"Encrypted and Secured": { ar: "مشفّر وآمن" },
"Disaster recovery": { ar: "التعافي من الكوارث" },
"Download backup anytime": { ar: "حمّل النسخ الاحتياطية في أي وقت" },


/* =====================
   ON-PREMISES SOLUTIONS
   ===================== */

"On Premises Solutions": { ar: "حلول داخلية (On-Premises)" },

"Customized, Secure On-Premises Solutions with Quick Implementation Support": {
  ar: "حلول داخلية مخصصة وآمنة مع دعم تنفيذ سريع"
},

"Customer infrastructure": { ar: "بنية العميل التحتية" },
"Get customized app": { ar: "احصل على تطبيق مخصص" },
"4 hours of implementation": { ar: "تنفيذ خلال 4 ساعات" },
"Secured and high performance": { ar: "آمن وعالي الأداء" },
"End to end support": { ar: "دعم شامل من البداية حتى النهاية" },


"Automatic UAE PINT & EN 16931 Field Mapping ": { ar: "الربط التلقائي لحقول UAE PINT وEN 16931" },

"Eliminate formatting and VAT compliance errors with Accqrate’s automated mapping engine. All required UAE PINT and EN 16931 fields are validated and structured correctly, ensuring every invoice meets FTA, Peppol, and UBL 2.1 standards—no manual intervention needed.": {
  ar: "تخلّص من أخطاء التنسيق والامتثال الضريبي عبر محرك الربط التلقائي من أكيوريت. تتم مراجعة جميع الحقول المطلوبة وفق UAE PINT وEN 16931 وهيكلتها بشكل صحيح لضمان توافق كل فاتورة مع معايير الهيئة الاتحادية للضرائب وPeppol وUBL 2.1 بدون أي تدخل يدوي."
},

"Whether adding VAT to a sale price or extracting it, our calculator handles both with precision:": {
  ar: "سواء كنت تضيف ضريبة القيمة المضافة إلى سعر البيع أو تستخرجها، فإن حاسبتنا تتعامل مع الحالتين بدقة:"
},

"VAT Calculation Made Simple": { ar: "تبسيط حساب ضريبة القيمة المضافة" },

"Excluding VAT: Ideal for sales prices that already include VAT.": {
  ar: "استبعاد ضريبة القيمة المضافة: مثالي للأسعار التي تتضمن الضريبة مسبقًا."
},

"Instant Calculations: Quick and straightforward VAT computations.": {
  ar: "حسابات فورية: عمليات حساب ضريبة سريعة وبسيطة."
},

"Accuracy: Precise invoicing every time.": {
  ar: "الدقة: فواتير دقيقة في كل مرة."
},

"Error Reduction: Minimize manual calculation mistakes.": {
  ar: "تقليل الأخطاء: الحد من أخطاء الحساب اليدوي."
},

"Time Savings: Spend less time on math and more on your business.": {
  ar: "توفير الوقت: خصص وقتك لعملك بدل الحسابات."
},

"Simplify VAT Calculations with Our UAE VAT Calculator": { ar: "بسّط حسابات ضريبة القيمة المضافة باستخدام حاسبة الضريبة الإماراتية" },

"Navigating VAT calculations has never been easier. Our UAE VAT Calculator removes the hassle, accurately calculating VAT for any sale amount instantly. Forget the formulas; with just a few clicks, determine the final sale price and VAT amount effortlessly.": {
  ar: "لم تكن عمليات حساب الضريبة أسهل من قبل. حاسبة ضريبة القيمة المضافة في الإمارات الخاصة بنا تزيل التعقيدات وتحسب الضريبة لأي مبلغ مبيعات على الفور. انسَ المعادلات؛ بضغطة زر تحدد السعر النهائي ومبلغ الضريبة بسهولة."
},

"Value Added Tax (VAT) is an indirect tax levied on most goods and services at each stage of the supply chain, from production to point-of-sale. Implemented in UAE in 2018 at 5%, the rate was adjusted to 15% in July 2020 to address COVID-19 impacts.": {
  ar: "ضريبة القيمة المضافة هي ضريبة غير مباشرة تُفرض على معظم السلع والخدمات في كل مرحلة من مراحل سلسلة التوريد من الإنتاج حتى نقطة البيع. تم تطبيقها في الإمارات عام 2018 بنسبة 5%، ثم تم تعديلها إلى 15% في يوليو 2020 لمواجهة آثار جائحة كوفيد-19."
},

"How to Calculate VAT in UAE": { ar: "كيفية حساب ضريبة القيمة المضافة في الإمارات" },

"Implemented in UAE in 2018 at a standard rate of 5% on most goods and services.": {
  ar: "تم تطبيقها في الإمارات عام 2018 بمعدل قياسي بلغ 5% على معظم السلع والخدمات."
},

"VAT Calculator": { ar: "حاسبة ضريبة القيمة المضافة" },
"Sale Value": { ar: "قيمة البيع" },
"VAT Rate (%)": { ar: "نسبة الضريبة (%)" },
"Is Sale Inclusive of VAT?": { ar: "هل السعر شامل لضريبة القيمة المضافة؟" },
"Yes": { ar: "نعم" },
"No": { ar: "لا" },
"Inclusive of VAT": { ar: "شامل الضريبة" },
"Exclusive of VAT": { ar: "غير شامل الضريبة" },
"VAT Amount": { ar: "قيمة الضريبة" },
"Total Value": { ar: "القيمة الإجمالية" },

"Total VAT this month": { ar: "إجمالي ضريبة القيمة المضافة لهذا الشهر" },
"Showing VAT breakdown for the current month": { ar: "عرض تفاصيل الضريبة للشهر الحالي" },

"What Is VAT?": { ar: "ما هي ضريبة القيمة المضافة؟" },

"Adding VAT: Perfect for when sales are exclusive of VAT.": {
  ar: "إضافة الضريبة: مثالي عندما تكون الأسعار غير شاملة لضريبة القيمة المضافة."
},

"With our": { ar: "مع" },
"VAT Calculator, enjoy:": { ar: "حاسبة ضريبة القيمة المضافة، استمتع بـ:" },


"Unlocking Insights Of Webinar": {
  ar: "اكتشاف أبرز نتائج الويبينار"
},

"This Webinar Is Essential For Professionals Who Handle Invoicing And Compliance In Their Organizations": {
  ar: "هذا الويبينار ضروري للمتخصصين المسؤولين عن الفوترة والامتثال في مؤسساتهم"
},

"We Will Keep You Updated At All Times": {
  ar: "سنُطلعكم على كل المستجدات في جميع الأوقات"
},

"Stay Updated With The Latest News And Updates From FTA and Accurate E-Invoicing Enhancements For Seamless Business Operations.": {
  ar: "ابقَ على اطلاع بأحدث الأخبار والتحديثات من الهيئة الاتحادية للضرائب وتعزيزات أكيوريت في الفوترة الإلكترونية لضمان عمليات تجارية سلسة."
},

"Subscribe Now": {
  ar: "اشترك الآن"
},

"Coming Soon ...": {
  ar: "قريبًا..."
},

"Get The Trial Version By Subscribing Here And Get A Feel Of Our Application": {
  ar: "احصل على النسخة التجريبية من خلال الاشتراك هنا وجرب تطبيقنا"
},

"Register your company for a trial application. Your data will be available in 30 days.": {
  ar: "سجل شركتك للحصول على النسخة التجريبية. ستكون بياناتك متاحة خلال 30 يومًا."
},


/* ----------------Navbar Items----------------- */

"E-invoicing": {
  ar: "الفوترة الإلكترونية"
},

"Accqrate E-Invoicing": {
  ar: "الفوترة الإلكترونية من أكيوريت"
},

"Simplify transactions, manage invoices effortlessly with our PEPPOL & FTA Compliant e-invoicing software.": {
  ar: "بَسّط عملياتك وأدر الفواتير بسهولة من خلال برنامج الفوترة الإلكترونية المتوافق مع بيبول ومعايير الهيئة الاتحادية للضرائب."
},

"E-Invoicing Integration": {
  ar: "تكامل الفوترة الإلكترونية"
},

"Integrate your ERP and POS with PEPPOL Network with our seamless, adaptable e-invoicing API or Offline integrators": {
  ar: "ادمج نظام ERP أو POS مع شبكة بيبول باستخدام واجهات API المرنة أو أدوات الدمج غير المتصلة."
},

"Resources": {
  ar: "الموارد"
},

"Support": {
  ar: "الدعم"
},

"Get help when you need it": {
  ar: "احصل على المساعدة عند الحاجة"
},

"Blogs": {
  ar: "المدونات"
},

"Insights, tips and industry news": {
  ar: "رؤى ونصائح وأخبار من الصناعة"
},

"Announcements": {
  ar: "الإعلانات"
},

"Find answers to common questions": {
  ar: "اعثر على إجابات للأسئلة الشائعة"
},

"FAQs": {
  ar: "الأسئلة الشائعة"
},

"Connect with other users": {
  ar: "تواصل مع مستخدمين آخرين"
},

"Tax Calculator": {
  ar: "حاسبة الضرائب"
},

"Calculate your VAT obligations": {
  ar: "احسب التزاماتك بضريبة القيمة المضافة"
},

"Events": {
  ar: "الفعاليات"
},

"Upcoming events and webinars": {
  ar: "الفعاليات والويبينارات القادمة"
},

"About us": {
  ar: "معلومات عنا"
},


"Contact Sales": {
  ar: "تواصل مع فريق المبيعات"
},

"Contact sales": {
  ar: "تواصل مع المبيعات"
},

"Select Language": {
  ar: "اختر اللغة"
},

"Select Country": {
  ar: "اختر الدولة"
},

"Loading...": {
  ar: "جارٍ التحميل..."
},


"E-Invoicing": {
  ar: "الفوترة الإلكترونية"
},
"Home": {
  ar: "الرئيسية"
},


/* ===================== Footer ===================== */

"One unified platform with zero silos integrated modules on a single data model, global compliance built-in, AI-powered automation, flexible cloud or on-prem deployment, fast implementation, and enterprise-grade security and scalability.": {
  ar: "منصة موحدة بدون عوائق، مع وحدات متكاملة على نموذج بيانات واحد، وامتثال عالمي مدمج، وأتمتة مدعومة بالذكاء الاصطناعي، وخيارات نشر مرنة سواء عبر السحابة أو داخل المنشأة، وتنفيذ سريع، وأمان ومرونة على مستوى المؤسسات."
},

"E-invoicing Solution": {
  ar: "حل الفوترة الإلكترونية"
},

"Integration Solution": {
  ar: "حلول التكامل"
},


/* ===================== Footer Navigation ===================== */

"Join our Team": {
  ar: "انضم إلى فريقنا"
},

"Company": {
  ar: "الشركة"
},


"Accelera": {
  ar: "أكسيليرا"
},

"Press": {
  ar: "الصحافة"
},

"Newsletter": {
  ar: "النشرة البريدية"
},

"Branding Assets": {
  ar: "أصول الهوية التجارية"
},


/* ===================== Footer Sections ===================== */

"FAQ": {
  ar: "الأسئلة الشائعة"
},

"Call: +41 76 475 36 65": {
  ar: "اتصل: ‎+41 76 475 36 65"
},

"Email: contact@accqrate-erp.com": {
  ar: "البريد الإلكتروني: contact@accqrate-erp.com"
},

"WhatsApp: +41 76 475 36 65": {
  ar: "واتساب: ‎+41 76 475 36 65"
},

"Connect with Accqrate Concierge": {
  ar: "تواصل مع خدمة كونسييرج أكيوريت"
},


/* ===================== Footer Bottom ===================== */

"© Copyright 2021 - 2025": {
  ar: "© حقوق النشر 2021 - 2025"
},

"All rights reserved.": {
  ar: "جميع الحقوق محفوظة."
},


/* ------------------Integration Page-------------------- */

"Why Choose ": {
  ar: "لماذا تختار "
},

"Seamlessly integrate your ERP/POS with the UAE’s Peppol-based DCTCE framework and achieve full UAE PINT compliance for FTA e-invoicing. ": {
  ar: "ادمج نظام ERP/POS الخاص بك بسلاسة مع إطار DCTCE المعتمد على بيبول في دولة الإمارات وحقق الامتثال الكامل لمعيار UAE PINT للفوترة الإلكترونية التابعة للهيئة الاتحادية للضرائب."
},


/* ===================== Top Left Items ===================== */

"Effortless Invoice Generation": {
  ar: "إنشاء فواتير بسهولة تامة"
},

"Create fully compliant UAE PINT–structured e-invoices, including credit notes and debit notes, ready for Peppol exchange within the UAE’s 5-corner model. ": {
  ar: "أنشئ فواتير إلكترونية مهيكلة ومتوافقة تمامًا مع UAE PINT، بما في ذلك إشعارات الدائن والمدين، وجاهزة للتبادل عبر بيبول ضمن نموذج الإمارات ذي الخمس زوايا."
},

"Secure Storage": {
  ar: "تخزين آمن"
},

"Store all UAE-compliant invoices in a high-availability, tamper-proof archiving environment, fully aligned with FTA retention and audit requirements. ": {
  ar: "قم بتخزين جميع الفواتير المتوافقة مع متطلبات دولة الإمارات في بيئة أرشفة ذات توافر عالٍ ومقاومة للعبث، ومتوافقة تمامًا مع متطلبات الهيئة الاتحادية للضرائب للاحتفاظ والتدقيق."
},
"Compliant Templates": {
  ar: "قوالب متوافقة"
},

"Access standardized UAE PINT-aligned invoice templates while preserving your brand formatting and business rules.": {
  ar: "الوصول إلى قوالب فواتير موحّدة ومتوافقة مع معيار UAE PINT مع الحفاظ على تنسيق الهوية التجارية وقواعد العمل الخاصة بك."
},

"Peppol Connectivity": {
  ar: "اتصال بيبول"
},

"Exchange invoices securely through the UAE Peppol network, ensuring guaranteed interoperability and regulatory compliance across all Accredited Service Providers.": {
  ar: "تبادل الفواتير بأمان عبر شبكة بيبول في دولة الإمارات، مع ضمان قابلية التشغيل البيني والامتثال التنظيمي عبر جميع مزودي الخدمة المعتمدين."
},

"Validation & Error Handling": {
  ar: "التحقق والتعامل مع الأخطاء"
},

"Automated UAE PINT, VAT, and schema validations ensure your invoices pass all FTA and Peppol checks before transmission—reducing rejections and MLS failures.": {
  ar: "عمليات التحقق التلقائية لمعايير UAE PINT وضريبة القيمة المضافة ومخططات البيانات تضمن اجتياز الفواتير لجميع فحوصات الهيئة الاتحادية للضرائب وبيبول قبل الإرسال، مما يقلل من حالات الرفض وإخفاقات MLS."
},

"Automated Communication": {
  ar: "اتصال تلقائي"
},


"Deliver invoices directly to buyers via Peppol, email, or file-based workflows fully integrated with your ERP/POS and UAE ASP. ": {
  ar: "إرسال الفواتير مباشرة إلى المشترين عبر بيبول أو البريد الإلكتروني أو مسارات العمل القائمة على الملفات، والمتكاملة بالكامل مع نظام ERP/POS ومزوّد الخدمة المعتمد في الإمارات."
},

"Financial Control": {
  ar: "التحكم المالي"
},

"Track payments, monitor outstanding balances, and maintain full visibility across your UAE e-invoice lifecycle, including MLS acknowledgments and DCTCE reporting status. ": {
  ar: "تتبع المدفوعات ومراقبة الأرصدة المستحقة والحفاظ على رؤية شاملة لدورة حياة الفاتورة الإلكترونية في دولة الإمارات، بما في ذلك إشعارات MLS وحالة تقارير DCTCE."
},

  "Trusted customers": {
    ar: "عملاء موثوقون"
  },
  "Integration engineers and Consultants": {
    ar: "مهندسو التكامل والمستشارون"
  },
  "Invoices per month": {
    ar: "الفواتير شهريًا"
  },
  "Completed integrations": {
    ar: "عمليات التكامل المكتملة"
  },

/* ===================== Bottom Right List ===================== */

"Peppol-ready onboarding": {
  ar: "تهيئة جاهزة لبيبول"
},

"Generate UAE PINT–Compliant XML Invoices ": {
  ar: "إنشاء فواتير XML متوافقة مع معيار UAE PINT"
},

"PDF/A-3 with embedded XML": {
  ar: "ملفات PDF/A-3 مع XML مدمج"
},

"Optional digital signature": {
  ar: "توقيع رقمي اختياري"
},

"Track submissions, acceptance & rejections": {
  ar: "تتبع الإرسال والقبول والرفض"
},

"Simple corrective actions": {
  ar: "إجراءات تصحيحية بسيطة"
},

"Send Invoices via Email, Peppol, or File-Based Workflows ": {
  ar: "إرسال الفواتير عبر البريد الإلكتروني أو بيبول أو مسارات العمل القائمة على الملفات"
},

/* ===================== Common ===================== */

"Integrate Your Existing ": {
  ar: "دمج نظامك الحالي "
},

"ERPs, POS": {
  ar: "ERP وPOS"
},

"& Applications With FTA (UAE PINT)": {
  ar: "والتطبيقات مع الهيئة الاتحادية للضرائب (UAE PINT)"
},


"FTA E-INVOICING INTEGRATION": {
  ar: "تكامل الفوترة الإلكترونية مع الهيئة الاتحادية للضرائب"
},

/* ===================== UAE Specific ===================== */

"A Peppol Certified - UAE PINT, 5 Corner Model Ready Solution": {
  ar: "حل معتمد من بيبول – جاهز لمعيار UAE PINT ونموذج الخمس زوايا"
},

"100% Compliance for UAE's E-Invoicing.": {
  ar: "امتثال بنسبة 100% لمتطلبات الفوترة الإلكترونية في دولة الإمارات."
},

/* ===================== Common ===================== */

"Flexible methods for": {
  ar: "أساليب مرنة لـ"
},

"Enhanced": {
  ar: "تعزيز"
},

"Electronic Invoicing": {
  ar: "الفوترة الإلكترونية"
},

"API-Based Integrations": {
  ar: "عمليات التكامل عبر واجهات API"
},

"FTP/S-FTP Integrations": {
  ar: "تكامل عبر FTP/S-FTP"
},

"Manual or Excel Uploads": {
  ar: "الرفع اليدوي أو عبر إكسل"
},

"Fully Compliant": {
  ar: "متوافق بالكامل"
},

"Audited & Verified": {
  ar: "مُدقّق ومُعتمد"
},

"Flexibility in Deployment": {
  ar: "مرونة في النشر"
},

"Rapid Implementation": {
  ar: "تنفيذ سريع"
},

"End-to-End Support": {
  ar: "دعم شامل من البداية للنهاية"
},

/* ===================== UAE Specific ===================== */

"UAE E-Invoicing": {
  ar: "الفوترة الإلكترونية في الإمارات"
},

"Adaptive, scalable approaches for seamless UAE PINT–compliant, Peppol-based e-invoicing under the FTA’s DCTCE framework": {
  ar: "أساليب قابلة للتوسع والتكيّف لتطبيق فوترة إلكترونية متوافقة مع UAE PINT ومعتمدة على بيبول ضمن إطار DCTCE التابع للهيئة الاتحادية للضرائب."
},

"UAE e-Invoicing Integration": {
  ar: "تكامل الفوترة الإلكترونية الإماراتية"
},

"Streamline your invoicing with Accqrate’s automated, Peppol-ready, UAE PINT–compliant platform built for secure, scalable, FTA-aligned e-invoicing across the UAE.": {
  ar: "بسّط عمليات الفوترة لديك عبر منصة أكيوريت المؤتمتة والمتوافقة مع بيبول وUAE PINT، والمصممة للفوترة الإلكترونية الآمنة والقابلة للتوسع والمتوافقة مع الهيئة الاتحادية للضرائب في جميع أنحاء دولة الإمارات."
},

"We provide complete assistance for UAE e-invoicing integration from onboarding to continuous compliance.": {
  ar: "نحن نوفر دعمًا كاملاً لتكامل الفوترة الإلكترونية في الإمارات من التهيئة وحتى الامتثال المستمر."
},

"Accqrate’s REST APIs enable real-time creation, validation, and exchange of UAE PINT-structured invoices through the UAE’s Peppol network. Achieve instant FTA alignment, automated status updates, and end-to-end connectivity across the UAE’s 5-corner model.": {
  ar: "تتيح واجهات REST من أكيوريت إنشاء الفواتير المهيكلة بـUAE PINT والتحقق منها وتبادلها في الوقت الفعلي عبر شبكة بيبول الإماراتية. احصل على توافق فوري مع الهيئة الاتحادية للضرائب وتحديثات حالة تلقائية واتصال شامل عبر نموذج الخمس زوايا."
},

"Accqrate supports secure file-based integrations with automated processing and a complete feedback loop. Your ERP or POS systems remain fully synchronized with all Peppol transactions, FTA responses, and DCTCE validations even in high-volume environments.": {
  ar: "تدعم أكيوريت عمليات التكامل القائمة على الملفات بأمان ومعالجة تلقائية ودورة تغذية راجعة كاملة. تظل أنظمة ERP وPOS لديك متزامنة بالكامل مع جميع معاملات بيبول وردود الهيئة الاتحادية للضرائب وعمليات التحقق DCTCE حتى في البيئات ذات الحجم الكبير."
},

"No integration? No problem. Upload invoices via our Excel template, and Accqrate automatically converts them into UAE PINT-compliant, EN 16931–aligned structured invoices ready for Peppol exchange. Perfect for SMEs and multi-entity setups transitioning into UAE e-invoicing.": {
  ar: "لا يوجد تكامل؟ لا مشكلة. قم بتحميل الفواتير عبر قالب الإكسل الخاص بنا، وستقوم أكيوريت بتحويلها تلقائيًا إلى فواتير مهيكلة متوافقة مع UAE PINT وEN 16931 وجاهزة للتبادل عبر بيبول. مثالي للشركات الصغيرة والمتوسطة والمؤسسات متعددة الكيانات التي تنتقل للفوترة الإلكترونية الإماراتية."
},

"Accqrate is UAE PINT–compliant and aligned with the FTA’s DCTCE 5-corner model, ensuring 100% audit-ready e-invoicing for the UAE mandate.": {
  ar: "أكيوريت متوافقة مع UAE PINT ومتناسقة مع نموذج DCTCE ذي الخمس زوايا التابع للهيئة الاتحادية للضرائب، مما يضمن فواتير إلكترونية جاهزة للتدقيق بنسبة 100%."
},

"Customer deployments are validated against UAE PINT specifications, Peppol exchange rules, and FTA compliance requirements to guarantee seamless interoperability.": {
  ar: "يتم التحقق من عمليات نشر العملاء وفقًا لمواصفات UAE PINT وقواعد تبادل بيبول ومتطلبات الامتثال الخاصة بالهيئة الاتحادية للضرائب لضمان قابلية تشغيل سلسة."
},

"Choose Accqrate Cloud or deploy on your own infrastructure both fully compliant with UAE e-invoicing, DCTCE workflow rules, and Peppol interoperability standards.": {
  ar: "اختر النسخة السحابية من أكيوريت أو قم بالنشر على البنية التحتية الخاصة بك—وكلاهما متوافق بالكامل مع الفوترة الإلكترونية الإماراتية وقواعد سير عمل DCTCE ومعايير التشغيل البيني لبيبول."
},

"Go live in days with guaranteed UAE PINT onboarding, Peppol Access Point connectivity, and FTA-aligned structured invoice generation.": {
  ar: "انطلق خلال أيام مع تهيئة مضمونة لـUAE PINT واتصال بنقطة وصول بيبول وإنشاء فواتير مهيكلة متوافقة مع الهيئة الاتحادية للضرائب."
},

"Packaged Solution": {
  ar: "حل جاهز"
},

"Accqrate delivers pre-built integrations for SAP, Oracle, Microsoft Dynamics, Sage, Infor, Odoo, custom ERPs/POS, and more accelerating UAE e-invoicing readiness.": {
  ar: "توفر أكيوريت عمليات تكامل جاهزة مع SAP وOracle وMicrosoft Dynamics وSage وInfor وOdoo وأنظمة ERP/POS المخصصة، مما يسرّع جاهزية الفوترة الإلكترونية الإماراتية."
},

"Process high-volume structured invoices with enterprise-grade performance across UAE’s Peppol network and DCTCE validation flows.": {
  ar: "معالجة الفواتير المهيكلة ذات الحجم الكبير بأداء على مستوى المؤسسات عبر شبكة بيبول الإماراتية وتدفقات التحقق DCTCE."
},

"From onboarding to continuous compliance, Accqrate provides full UAE e-invoicing implementation support, including Access Point setup, VAT mapping, and DCTCE workflow alignment.": {
  ar: "من التهيئة إلى الامتثال المستمر، تقدم أكيوريت دعم تنفيذ شامل للفوترة الإلكترونية الإماراتية، بما في ذلك إعداد نقاط الوصول ومواءمة ضريبة القيمة المضافة وتوافق سير عمل DCTCE."
},

/* ===================== Common ===================== */

"E-Invoicing Integration Flow": {
  ar: "تسلسل تكامل الفوترة الإلكترونية"
},

"Generate invoices and complete in your ERP/POS": {
  ar: "إنشاء الفواتير وإتمامها في نظام ERP/POS الخاص بك"
},

"Efficiently generate and finalize invoices directly within your ERP/POS system for streamlined financial management.": {
  ar: "إنشاء الفواتير وإتمامها بكفاءة مباشرة داخل نظام ERP/POS لإدارة مالية أكثر سلاسة."
},

"Our Connectors in your ERP will take care of the rest": {
  ar: "موصلاتنا داخل نظام ERP ستتولى الباقي"
},

"Our connectors, seamlessly integrated into your ERP, will handle all subsequent processes effortlessly.": {
  ar: "موصلاتنا المتكاملة بسلاسة داخل نظام ERP ستدير جميع العمليات اللاحقة دون أي جهد."
},

"Our E-invoicing solution transforms and transmits the data": {
  ar: "حل الفوترة الإلكترونية لدينا يقوم بتحويل البيانات وإرسالها"
},

"Our connector interfaces with our API, converting and adapting data for seamless integration.": {
  ar: "يرتبط الموصل بواجهة API الخاصة بنا، محولًا البيانات وموائمًا إياها لدمج سلس."
},

"Approved invoices are given back to your ERP/POS": {
  ar: "إعادة الفواتير الموافق عليها إلى نظام ERP/POS"
},

"Clearances are processed instantly, ensuring swift compliance and operational efficiency.": {
  ar: "تتم معالجة الموافقات فورًا، مما يضمن امتثالًا سريعًا وكفاءة تشغيلية."
},

"ERP/POS receives back QR code, XML and PDF/A3. Data archived for 10 years.": {
  ar: "يتلقى نظام ERP/POS رمز QR وملفات XML وPDF/A3، ويتم أرشفة البيانات لمدة 10 سنوات."
},

"Unlimited archiving of responses, PDFs, and QR Codes ensures permanent storage and retrieval for compliance and reference purposes.": {
  ar: "يضمن الأرشفة غير المحدودة للردود وملفات PDF وأكواد QR التخزين الدائم وإمكانية الرجوع إليها لأغراض الامتثال."
},

"Print the PDF with QR code. Send PDF A3": {
  ar: "طباعة ملف PDF مع رمز QR. إرسال PDF بحجم A3"
},

"Generate and print the PDF with the QR code, then dispatch the document in A3 size for comprehensive and accessible presentation.": {
  ar: "إنشاء وطباعة ملف PDF المزود برمز QR، ثم إرسال المستند بحجم A3 لتقديم شامل وسهل الوصول."
},

/* ===================== UAE Specific ===================== */

"Integrating your existing application through various formats. Schedule your integration with ISTD.": {
  ar: "دمج تطبيقك الحالي عبر صيغ متعددة. حدّد موعد التكامل مع ISTD."
},

"Our connectors, seamlessly integrated into your ERP, will handle all subsequent processes efficiently.": {
  ar: "موصلاتنا المتكاملة داخل نظام ERP ستتعامل بكفاءة مع جميع العمليات اللاحقة."
},

"ERP/POS receives back QR code, XML, and PDF/A3. Data archived for 10 years.": {
  ar: "يتلقى نظام ERP/POS رمز QR وملفات XML وPDF/A3، ويتم أرشفة البيانات لمدة 10 سنوات."
},

"Unlimited storage of invoices, PDFs, XMLs, and QR codes ensures permanent storage and retrieval for compliance and reference purposes.": {
  ar: "يضمن التخزين غير المحدود للفواتير وملفات PDF وXML وأكواد QR الاحتفاظ الدائم وإمكانية الرجوع إليها لأغراض الامتثال."
},

"Generate and print the invoice PDF with the QR code. Send or dispatch the document as A3 for accurate archiving and accessible presentation.": {
  ar: "إنشاء وطباعة فاتورة PDF مزودة برمز QR، وإرسال المستند بحجم A3 لأرشفة دقيقة وعرض يسهل الوصول إليه."
},

"The following steps provide an overview of UAE’s e-Invoicing model (Decentralized Continuous Transaction Control and Exchange - DCTCE):": {
  ar: "توضح الخطوات التالية نظرة عامة على نموذج الفوترة الإلكترونية في الإمارات (التحكم اللامركزي المستمر في المعاملات وتبادلها – DCTCE):"
},

"Invoice Submission (Corner 1 → Corner 2)": {
  ar: "تقديم الفاتورة (الزاوية 1 → الزاوية 2)"
},

"The supplier generates an invoice in their ERP/POS and submits it to their UAE Accredited Service Provider (Corner 2) in an agreed format.": {
  ar: "يقوم المورّد بإنشاء الفاتورة في نظام ERP/POS ويرسلها إلى مزود الخدمة المعتمد في الإمارات (الزاوية 2) وفق الصيغة المتفق عليها."
},

"Validation & UAE PINT Conversion (Corner 2)": {
  ar: "التحقق والتحويل إلى معيار UAE PINT (الزاوية 2)"
},

"The ASP validates the invoice and converts it into the UAE standard XML (UAE PINT) if a different format was submitted.": {
  ar: "يقوم مزود الخدمة بالتحقق من الفاتورة وتحويلها إلى صيغة XML الإماراتية القياسية (UAE PINT) إذا كانت مقدمة بصيغة مختلفة."
},

"Transmission to Buyer ASP (Corner 2 → Corner 3)": {
  ar: "نقل الفاتورة إلى مزود خدمة المشتري (الزاوية 2 → الزاوية 3)"
},

"The validated invoice is transmitted to the buyer’s Accredited Service Provider (Corner 3) through the Peppol network.": {
  ar: "يتم إرسال الفاتورة المُتحقق منها إلى مزود خدمة المشتري المعتمد (الزاوية 3) عبر شبكة بيبول."
},

"Parallel Tax Reporting to FTA (Corner 2 → Corner 5)": {
  ar: "التقرير الضريبي الموازي إلى الهيئة الاتحادية للضرائب (الزاوية 2 → الزاوية 5)"
},

"At the same time, Corner 2 sends the Tax Data Document (TDD) to the FTA’s Central Data Platform (Corner 5).": {
  ar: "بالتزامن، يقوم مزود الخدمة في الزاوية 2 بإرسال مستند البيانات الضريبية (TDD) إلى منصة البيانات المركزية للهيئة الاتحادية للضرائب (الزاوية 5)."
},

"Validation Acknowledgment (Corner 3 → Corner 2)": {
  ar: "إشعار التحقق (الزاوية 3 → الزاوية 2)"
},

"The buyer’s ASP validates the invoice and sends a Message Level Status (MLS) back to Corner 2 confirming validation success or failure.": {
  ar: "يقوم مزود خدمة المشتري بالتحقق من الفاتورة ويرسل حالة مستوى الرسالة (MLS) إلى الزاوية 2 لتأكيد نجاح التحقق أو فشله."
},

"Delivery to Buyer (Corner 3 → Corner 4)": {
  ar: "تسليم الفاتورة إلى المشتري (الزاوية 3 → الزاوية 4)"
},

"Upon successful validation, Corner 3 delivers the invoice to the buyer’s business system in the format agreed with their ASP.": {
  ar: "بعد نجاح التحقق، يقوم مزود الخدمة في الزاوية 3 بتسليم الفاتورة إلى نظام أعمال المشتري بالصيغـة المتفق عليها."
},

"Buyer ASP Reporting to FTA (Corner 3 → Corner 5)": {
  ar: "تقرير مزود خدمة المشتري إلى الهيئة الاتحادية للضرائب (الزاوية 3 → الزاوية 5)"
},

"Corner 3 also reports the TDD to Corner 5. If validation fails, Corner 3 sends a negative MLS to both Corner 2 and Corner 5, and no TDD is submitted.": {
  ar: "يقوم مزود الخدمة في الزاوية 3 أيضًا بإرسال مستند البيانات الضريبية (TDD) إلى الزاوية 5. وفي حال فشل التحقق، يرسل مزود الخدمة MLS سلبية إلى كل من الزاوية 2 والزاوية 5، ولا يتم إرسال TDD."
},

"FTA Status to Supplier ASP (Corner 5 → Corner 2)": {
  ar: "حالة الهيئة الاتحادية للضرائب إلى مزود خدمة المورّد (الزاوية 5 → الزاوية 2)"
},

"The FTA (Corner 5) sends an MLS to Corner 2 after processing the TDD successfully.": {
  ar: "ترسل الهيئة الاتحادية للضرائب (الزاوية 5) حالة MLS إلى الزاوية 2 بعد معالجة TDD بنجاح."
},

"FTA Status to Buyer ASP (Corner 5 → Corner 3)": {
  ar: "حالة الهيئة الاتحادية للضرائب إلى مزود خدمة المشتري (الزاوية 5 → الزاوية 3)"
},

"Corner 5 sends another MLS to Corner 3 confirming successful TDD processing.": {
  ar: "ترسل الزاوية 5 حالة MLS أخرى إلى الزاوية 3 لتأكيد نجاح معالجة TDD."
},

"Supplier ASP Updates Supplier (Corner 2 → Corner 1)": {
  ar: "مزود خدمة المورّد يحدّث المورّد (الزاوية 2 → الزاوية 1)"
},

"Corner 2 forwards the MLS updates from Corner 3 and Corner 5 to the supplier.": {
  ar: "يقوم مزود الخدمة في الزاوية 2 بتمرير تحديثات MLS من الزاوية 3 والزاوية 5 إلى المورّد."
},

"Buyer ASP Updates Buyer (Corner 3 → Corner 4)": {
  ar: "مزود خدمة المشتري يحدّث المشتري (الزاوية 3 → الزاوية 4)"
},

"Corner 3 forwards Corner 5’s reporting MLS to the buyer for full transparency and audit tracking.": {
  ar: "يقوم مزود الخدمة في الزاوية 3 بتمرير MLS الصادرة من الزاوية 5 إلى المشتري لضمان الشفافية الكاملة وتتبع التدقيق."
},
/* ===================== Common ===================== */

"Free Proof of Concept for Peppol / UAE PINT Integration": {
  ar: "نسخة تجريبية مجانية لإثبات المفهوم لتكامل بيبول / UAE PINT"
},

"Explore Accqrate’s UAE E-Invoicing Integration with a Free, Zero-Risk Proof of Concept.": {
  ar: "استكشف تكامل الفوترة الإلكترونية الإماراتية من أكيوريت من خلال نسخة تجريبية مجانية خالية من المخاطر."
},

"Zero–Risk Trial": {
  ar: "تجربة خالية من المخاطر"
},

"Ease of Integration": {
  ar: "سهولة التكامل"
},

"Expert Guidance & Training": {
  ar: "توجيه وتدريب خبراء"
},

"Onboarding Assistance": {
  ar: "مساعدة في إعداد الانضمام"
},

"Full Ownership & Responsibility": {
  ar: "ملكية ومسؤولية كاملة"
},

"No Upfront Contracts": {
  ar: "لا توجد عقود مسبقة"
},

"ERP Expertise": {
  ar: "خبرة في أنظمة ERP"
},

"Compliance Assurance": {
  ar: "ضمان الامتثال"
},

"Fast Integration": {
  ar: "تكامل سريع"
},

/* ===================== UAE Specific ===================== */

"Test seamless integration between your ERP/POS and the UAE Peppol test environment with no commitment. Validate UAE PINT outputs and DCTCE workflows before you decide.": {
  ar: "اختبر التكامل السلس بين نظام ERP/POS الخاص بك وبيئة بيبول التجريبية في الإمارات دون أي التزام. تحقق من مخرجات UAE PINT وتدفقات عمل DCTCE قبل اتخاذ القرار."
},

"See how quickly your systems connect to Peppol and generate UAE PINT-compliant, EN 16931-aligned invoices ready for 5-corner exchange.": {
  ar: "اكتشف سرعة اتصال أنظمتك ببيبول وقدرتها على إنشاء فواتير متوافقة مع UAE PINT وEN 16931 وجاهزة للتبادل عبر نموذج الخمس زوايا."
},

"Your internal teams or implementation partners receive full technical guidance, UAE PINT training, and hands-on support throughout the POC.": {
  ar: "تتلقى فرقك الداخلية أو شركاء التنفيذ التوجيه الفني الكامل، وتدريب UAE PINT، والدعم العملي طوال فترة إثبات المفهوم."
},

"We assist with company onboarding, Peppol participant setup, UAE PINT validation, and readiness for DCTCE reporting.": {
  ar: "نساعد في إعداد الشركة، وتهيئة المشاركة في بيبول، والتحقق من UAE PINT، والاستعداد لتقارير DCTCE."
},

"Accqrate takes end-to-end responsibility for compliance, validation, MLS handling, audit readiness, and technical accuracy.": {
  ar: "تتحمل أكيوريت المسؤولية الكاملة عن الامتثال والتحقق والتعامل مع MLS والاستعداد للتدقيق والدقة التقنية."
},

"Start with trust—no contracts, no advance payments. NDA included for complete confidentiality.": {
  ar: "ابدأ بثقة—لا عقود ولا دفعات مقدمة. يتضمن ذلك اتفاقية عدم الإفصاح لضمان السرية التامة."
},

"Our specialists bring deep integration experience across SAP, Oracle, Microsoft Dynamics, Infor, Odoo, Baan, Sage, and custom ERP/POS environments.": {
  ar: "يتمتع خبراؤنا بخبرة تكامل عميقة عبر أنظمة SAP وOracle وMicrosoft Dynamics وInfor وOdoo وBaan وSage وبيئات ERP/POS المخصّصة."
},

"We ensure your organization meets full FTA e-invoicing requirements, including UAE PINT, Peppol interoperability, VAT rules, and DCTCE transaction reporting.": {
  ar: "نضمن أن مؤسستك تستوفي جميع متطلبات الفوترة الإلكترونية للهيئة الاتحادية للضرائب، بما في ذلك UAE PINT والتشغيل البيني لبيبول وقواعد ضريبة القيمة المضافة وتقارير معاملات DCTCE."
},

"Go live in 5 working days, accelerating your readiness for upcoming mandatory UAE B2B e-invoicing.": {
  ar: "انطلق خلال 5 أيام عمل، مما يسرّع جاهزيتك لمتطلبات الفوترة الإلكترونية الإلزامية للمعاملات B2B في الإمارات."
},

"Integrate Your Existing": {
  ar: "دمج نظامك الحالي"
},

"Seamless": {
  ar: "سلس"
},

"Compliant": {
  ar: "متوافق"
},

"Secure": {
  ar: "آمن"
},

"Integrate Your Existing ERPs, POS & Applications With FTA (UAE PINT)": {
  ar: "دمج أنظمة ERP وPOS والتطبيقات الحالية لديك مع الهيئة الاتحادية للضرائب (UAE PINT)"
},

"Our solutions seamlessly integrate with any": {
  ar: "حلولنا تتكامل بسلاسة مع أي"
},

"ERP/POS system": {
  ar: "نظام ERP/POS"
},

"you use.": {
  ar: "تستخدمه."
},

"Our integrators are equipped to collaborate with a wide range of solutions, including Global ERP systems, Local and Custom ERP, In-House ERP, both Online and Offline POS systems, Custom Applications, Accounting Software, and even Excel & SQL-Based Solutions, ensuring versatile and comprehensive compatibility": {
  ar: "موصلاتنا مجهزة للعمل مع مجموعة واسعة من الحلول، بما في ذلك أنظمة ERP العالمية، وERP المحلي والمخصص، وERP الداخلي، وأنظمة POS عبر الإنترنت أو دون اتصال، والتطبيقات المخصصة، وبرامج المحاسبة، وحتى الحلول القائمة على Excel وSQL، مما يضمن توافقًا شاملاً ومرنًا."
},

"Integration": {
  ar: "التكامل"
},

"Solutions": {
  ar: "الحلول"
},

"Process": {
  ar: "العملية"
},

"For B2B transactions, the process is straightforward": {
  ar: "بالنسبة لمعاملات B2B، فإن العملية بسيطة"
},

"Accqrate?": {
  ar: "أكيوريت؟"
},

"Dashboard": {
  ar: "لوحة التحكم"
},

"Invoice Example": {
  ar: "مثال على الفاتورة"
},

"Peppol / UAE PINT Integration": {
  ar: "تكامل بيبول / UAE PINT"
},

"Free proof of concept for": {
  ar: "نسخة تجريبية مجانية لـ"
},

"Tailored, innovative solutions enhancing efficiency and accuracy for your business.": {
  ar: "حلول مبتكرة ومخصّصة تعزز الكفاءة والدقة في أعمالك."
},

"Talk to our expert": {
  ar: "تحدث إلى خبيرنا"
},

"Do You Want To Know More?": {
  ar: "هل ترغب في معرفة المزيد؟"
},

"Kick start your free proof of concept": {
  ar: "ابدأ نسخة إثبات المفهوم المجانية"
},

"Get Started": {
  ar: "ابدأ الآن"
}
};
// Minimal runtime language state and API to match other language modules
export const currentLang = { lang: 'en' as 'en' | 'ar' };

export const setLanguage = (l: 'en' | 'ar' | string) => {
    currentLang.lang = (l as any) || 'en';
};

export const t = (text: string): string => {
    if (currentLang.lang === 'en') return text;
    const translation = (blogTranslations as any)[text];
    return translation && translation.ar && translation.ar.trim() !== '' ? translation.ar : text;
};
export default function T({ children }: TProps): ReactNode {
    const { selectedLanguage } = useCountry();
    const translateText = (text: string): string => {
        // Early return for English
        if (selectedLanguage.code === 'en') {
            return text;
        }
        
        // For Arabic, try to find translation
        if (selectedLanguage.code === 'ar') {
            const translation = blogTranslations[text];
            // Check if translation exists and is not empty
            if (translation && translation.ar && translation.ar.trim() !== "") {
                return translation.ar;
            }
        }
        
        // Fallback to original text for other languages or missing translations
        return text;
    };

    // If children is a string, translate it
    if (typeof children === 'string') {
        return translateText(children);
    }

    return children;
}
