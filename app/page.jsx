'use client';
import {useState} from 'react';
import {Gauge,PenSquare,Globe2,FileText,CreditCard,ContactRound,LockKeyhole,ArrowRight,X} from 'lucide-react';
const services=[
 {title:'رفع سقف العمليات اليومية',desc:'استعراض خيارات الحدود اليومية للعمليات.',icon:Gauge},
 {title:'تحديث بياناتك',desc:'معلومات وإرشادات تحديث الملف الشخصي.',icon:PenSquare},
 {title:'خدمات العملات الأجنبية',desc:'معلومات حول خدمات العملات الأجنبية.',icon:Globe2},
 {title:'كشف الحساب',desc:'إرشادات طلب كشف حساب مفصل.',icon:FileText},
 {title:'بطاقة افتراضية',desc:'التعرف على استخدام البطاقات الافتراضية.',icon:CreditCard},
 {title:'أنواع الحسابات',desc:'مقارنة خصائص أنواع الحسابات.',icon:ContactRound},
 {title:'إدارة أسئلة الأمان',desc:'إرشادات عامة لحماية حسابك.',icon:LockKeyhole},
];
export default function Home(){const [selected,setSelected]=useState(null);return <>
<header className="header"><div className="headerInner"><div className="identity"><div className="identityMark">د</div><div><div className="identityName">بوابة الخدمات الرقمية</div><div className="identityEn">Digital Services Demo</div></div></div><span className="headerTag">خدمات رقمية</span></div></header>
<main><div className="hero"><div className="demoNotice">نسخة تجريبية مستقلة — ليست موقعًا رسميًا لأي بنك</div><h1>مرحبًا بكم في بوابة الخدمات الرقمية</h1><p>الرجاء الاختيار من الخدمات التعريفية المقدمة أدناه</p></div>
<section className="cards" aria-label="قائمة الخدمات">{services.map((service,index)=><button className="service" key={service.title} type="button" onClick={()=>setSelected(index)}><service.icon className="serviceIcon" size={31} strokeWidth={2.7}/><div className="serviceText"><h2>{service.title}</h2><p>{service.desc}</p></div></button>)}</section>
<section className="contact"><p>للتواصل معنا، يرجى استخدام الرقم التالي</p><a href="tel:+23585550935" dir="ltr">+235 85550935</a></section>
<footer>واجهة عرض تجريبية — لا تجمع كلمات مرور أو بيانات بنكية أو رموز تحقق</footer></main>
{selected!==null && <div className="overlay" onClick={()=>setSelected(null)}><div className="modal" role="dialog" aria-modal="true" aria-label={services[selected].title} onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setSelected(null)} aria-label="إغلاق"><X size={21}/></button><h2>{services[selected].title}</h2><p>{services[selected].desc}</p><p className="disclaimer">هذه بطاقة تعريفية ضمن نموذج تجريبي. لا توجد خدمة مصرفية فعلية أو نموذج لإدخال بيانات العملاء.</p><button className="back" onClick={()=>setSelected(null)}><ArrowRight size={18}/> العودة للخدمات</button></div></div>}
</>}
