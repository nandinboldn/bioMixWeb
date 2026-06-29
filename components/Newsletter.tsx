"use client";

import { useState, useEffect } from "react";
import { useLang, t } from "@/lib/lang";

type Article = {
  id: number;
  date: { mn: string; en: string };
  tag: { mn: string; en: string };
  title: { mn: string; en: string };
  excerpt: { mn: string; en: string };
  body: { mn: string; en: string };
};

const articles: Article[] = [
  {
    id: 1,
    date: { mn: "2026 оны 3-р сар", en: "March 2026" },
    tag: { mn: "Нөхөн сэргээлт", en: "Restoration" },
    title: {
      mn: "Говийн цөлд ногоон байгууламж — эхний жилийн үр дүн",
      en: "Greening the Gobi Desert — First Year Results",
    },
    excerpt: {
      mn: "МУИС болон Тэрбум Мод ТББ-тай хамтран хийсэн туршилтын эхний жилийн үр дүн: хөрсний чанар 40%-иар сайжирч, ургамлын тоо 3 дахин нэмэгдлээ.",
      en: "First-year results from our joint experiment with NUM and Terbum Mod NGO: soil quality improved by 40% and plant count tripled.",
    },
    body: {
      mn: `МУИС-ийн Газарзүйн тэнхим болон Тэрбум Мод Үндэсний Хөдөлгөөнтэй байгуулсан санамж бичгийн хүрээнд 2025 оны хавраас эхлэн Говийн бүс нутагт хөрс сайжруулах туршилт явуулж байна.

Туршилтын талбай нь Өмнөговь аймгийн Даланзадгад сумын зүүн урд хэсэгт байрлах 5 га талбай юм. Энэ нутаг нь ган гачиг, элсэн шуурганаас болж бүрэн ургамалгүй болсон байсан.

Эхний жилийн үр дүнгээс үзэхэд:

— Хөрсний pH утга 4.8-аас 6.9 болж сайжирсан
— Органик бодисын агууламж 0.3%-аас 1.8% болж өссөн  
— Ургасан ургамлын төрөл зүйл 2-оос 14 болж нэмэгдсэн
— Хөрсний чийглэлт 3 дахин нэмэгдсэн

BIOMIX-ийн Тусгай хөрс болон Говийн нөхцөлд зориулсан тусгай найрлагатай бордоог ашигласан нь энэхүү үр дүнд хүрэх боломж олгосон юм. Хоёр дахь жилийн туршилт 2026 оны 4-р сараас эхлэх бөгөөд туршилтын талбайг 15 га болгон өргөтгөх төлөвлөгөөтэй байна.

Энэхүү туршилт нь Монголын говийн нөхөн сэргээлтэд органик хөрс хэр чухал үүрэг гүйцэтгэдгийг тодорхой харуулсан гэж МУИС-ийн судлаач Д-р Г. Цэнд дүгнэлт хийлээ.`,
      en: `Within the framework of our MOU with the NUM Department of Geography and the Terbum Mod National Movement, we have been conducting soil improvement experiments in the Gobi region since spring 2025.

The trial area is located 5 hectares southeast of Dalanzadgad in Ömnögovi Aimag — land that had been completely stripped of vegetation by drought and sandstorms.

First-year results show:

— Soil pH improved from 4.8 to 6.9
— Organic matter content rose from 0.3% to 1.8%
— Plant species count increased from 2 to 14
— Soil moisture tripled

Using BIOMIX Special Soil and our custom Gobi-formula fertilizer made these results possible. The second-year trial begins in April 2026, with plans to expand the test area to 15 hectares.

This experiment clearly demonstrates the critical role that organic compost plays in Mongolian Gobi restoration, according to NUM researcher Dr. G. Tsend.`,
    },
  },
  {
    id: 2,
    date: { mn: "2026 оны 2-р сар", en: "February 2026" },
    tag: { mn: "Хотын экологи", en: "Urban Ecology" },
    title: {
      mn: "Улаанбаатарын органик хаягдлыг бордоо болгох шинэ систем",
      en: "New System to Turn Ulaanbaatar's Organic Waste into Fertilizer",
    },
    excerpt: {
      mn: "Нийслэлийн 3 дүүргийн органик хаягдлыг цуглуулж, BIOMIX үйлдвэрт боловсруулан хотын ногоон байгууламжид буцааж ашиглах цогц систем амжилттай хэрэгжиж байна.",
      en: "A complete system collecting organic waste from 3 city districts, processing it at the BIOMIX factory, and returning it to urban green spaces is now successfully operating.",
    },
    body: {
      mn: `Улаанбаатар хотын Сүхбаатар, Баянзүрх, Чингэлтэй дүүргүүдэд органик хаягдал тусдаа цуглуулах, боловсруулах, дахин ашиглах цогц системийг 2025 оны 10-р сараас туршиж эхэлсэн.

Системийн үйл ажиллагаа:

1. Цуглуулалт — Гэр хорооллын айл өрхүүд органик хаягдлаа тусдаа саванд хийж, долоо хоног бүр цуглуулдаг
2. Тээвэрлэлт — BIOMIX-ийн тусгай машинаар үйлдвэрт хүргэдэг
3. Боловсруулалт — 12 долоо хоногийн термофиль компостынг үйл явцаар боловсруулдаг
4. Буцаалт — Боловсруулсан бордоог хотын цэцэрлэгт хүрээлэн, талбайд ашигладаг

Одоогийн байдлаар долоо хоног бүр 8 тонн органик хаягдлыг боловсруулж байна. Энэ нь жилд 400 тонн хог хаягдлыг дахин боловсруулж, 200 тонн чанартай бордоо үйлдвэрлэхтэй тэнцэж байна.

Нийслэлийн Байгаль Орчны Газартай хамтарч ажиллаж байгаа бөгөөд 2026 онд системийг бусад дүүргүүдэд өргөтгөх төлөвлөгөөтэй байна.`,
      en: `Since October 2025, we have been piloting a comprehensive organic waste collection, processing, and reuse system in Ulaanbaatar's Sukhbaatar, Bayanzurkh, and Chingeltei districts.

How the system works:

1. Collection — Households in ger districts place organic waste in separate containers, collected weekly
2. Transport — BIOMIX vehicles deliver it to our factory
3. Processing — A 12-week thermophilic composting process transforms the waste
4. Return — Processed fertilizer is applied to city parks and public spaces

Currently processing 8 tons of organic waste weekly — equivalent to recycling 400 tons of waste per year and producing 200 tons of quality fertilizer.

We are working in partnership with the Capital City Environment Department, with plans to expand the system to additional districts in 2026.`,
    },
  },
  {
    id: 3,
    date: { mn: "2026 оны 1-р сар", en: "January 2026" },
    tag: { mn: "Үйлдвэрлэл", en: "Production" },
    title: {
      mn: "Жилд 2 сая литр — BIOMIX үйлдвэрийн ойлт хүч",
      en: "2 Million Liters Per Year — BIOMIX Factory at Full Capacity",
    },
    excerpt: {
      mn: "2025 онд манай үйлдвэр жилийн хамгийн өндөр бүтээмждээ хүрч, нийт 2.1 сая литр органик хөрс үйлдвэрлэн 21 аймагт хүргэлт хийлээ.",
      en: "In 2025, our factory reached its highest annual output, producing 2.1 million liters of organic soil and delivering to all 21 aimags.",
    },
    body: {
      mn: `2025 он BIOMIX-ийн хувьд түүхэн дэх хамгийн амжилттай жил болсон. Нийт 2.1 сая литр органик хөрс, бордоо үйлдвэрлэж, Монгол улсын 21 аймгийн 500 гаруй харилцагчид хүргэлт хийлээ.

Гол үзүүлэлтүүд:

— Нийт үйлдвэрлэл: 2,100,000 литр (өмнөх оноос 23% өссөн)
— BIOMIX 20L: 45,000 уут
— BIOMIX 5L: 180,000 уут  
— BIOMIX 3L: 120,000 уут
— Задгай хөрс: 800 тонн
— Хамрагдсан аймаг: 21/21
— Шинэ харилцагч: 148

Үйлдвэрийн хүч чадлыг нэмэгдүүлэх зорилгоор 2026 онд шинэ компостын тасаг барих ажил эхлэх бөгөөд энэ нь жилийн хүчин чадлыг 3 сая литр болгон нэмэгдүүлэх боломж олгоно.

Манай бүтээгдэхүүн нь ISO 9001:2015 болон ISO 14001:2015 олон улсын стандартын шаардлага хангасан болохыг баталгаажуулж, гэрчилгээгээ сунгалаа.`,
      en: `2025 was the most successful year in BIOMIX's history. We produced a total of 2.1 million liters of organic soil and fertilizer, delivering to over 500 clients across all 21 aimags of Mongolia.

Key metrics:

— Total production: 2,100,000 liters (up 23% from the previous year)
— BIOMIX 20L: 45,000 bags
— BIOMIX 5L: 180,000 bags
— BIOMIX 3L: 120,000 bags
— Bulk soil: 800 tons
— Aimags covered: 21/21
— New clients: 148

To increase factory capacity, construction of a new composting hall will begin in 2026, enabling annual capacity to reach 3 million liters.

We have renewed our certification confirming our products meet ISO 9001:2015 and ISO 14001:2015 international standards.`,
    },
  },
  {
    id: 4,
    date: { mn: "2025 оны 11-р сар", en: "November 2025" },
    tag: { mn: "Түншлэл", en: "Partnership" },
    title: {
      mn: "Rio Tinto болон Оюу Толгой — нөхөн сэргээлтийн гэрээ",
      en: "Rio Tinto & Oyu Tolgoi — Restoration Partnership Agreement",
    },
    excerpt: {
      mn: "Дэлхийн томоохон уул уурхайн компани Rio Tinto-ийн Оюу Толгой төсөлтэй хамтран уурхайн нөлөөлөлд өртсөн нутгийг нөхөн сэргээх гэрээ байгууллаа.",
      en: "We signed an agreement with Rio Tinto's Oyu Tolgoi project to restore land affected by mining operations.",
    },
    body: {
      mn: `2025 оны 11-р сарын 15-нд BIOMIX болон Rio Tinto-ийн Оюу Толгой төслийн хооронд уурхайн нөлөөлөлд өртсөн газар нутгийг нөхөн сэргээх гэрээнд гарын үсэг зурлаа.

Гэрээний үндсэн заалтууд:

Оюу Толгойн үйл ажиллагааны бүсэд 500 га газар нутгийг 5 жилийн хугацаанд нөхөн сэргээх ажлыг BIOMIX хариуцна. Жил бүр 100 га газарт BIOMIX-ийн Тусгай найрлагатай хөрс болон бордоо хэрэглэж, ургамлын нөмрөгийг аажмаар сэргээнэ.

Энэхүү гэрээ нь BIOMIX-ийн хувьд корпорацийн хэмжээний хамгийн том гэрээ бөгөөд манай компанийн нийгмийн болон байгаль орчны хариуцлагыг улам бататгаж байна.

Оюу Толгойн байгаль орчны менежерийн хэлснээр: "BIOMIX-ийн бүтээгдэхүүн нь говийн хатуу нөхцөлд ургамлын нөхөн сэргээлтийг хэрхэн хурдасгаж болохыг харуулж байна. Энэ нь манай байгаль орчны хөтөлбөрийн чухал хэсэг болж байна."

Гэрээний хэрэгжилтийн эхний шатны үр дүнг 2026 оны эхээр нийтэд мэдээлэх болно.`,
      en: `On November 15, 2025, BIOMIX and the Oyu Tolgoi project of Rio Tinto signed an agreement to restore land affected by mining operations.

Key agreement terms:

BIOMIX will be responsible for restoring 500 hectares of land in the Oyu Tolgoi operating zone over 5 years. Each year, BIOMIX Special formula soil and fertilizer will be applied to 100 hectares, gradually restoring vegetation cover.

This is the largest corporate agreement in BIOMIX's history, further strengthening our company's social and environmental responsibility commitments.

The Oyu Tolgoi Environmental Manager stated: "BIOMIX products are demonstrating how plant restoration in harsh Gobi conditions can be accelerated. This is becoming a key part of our environmental program."

First-phase results will be publicly announced in early 2026.`,
    },
  },
  {
    id: 5,
    date: { mn: "2025 оны 9-р сар", en: "September 2025" },
    tag: { mn: "Шагнал", en: "Award" },
    title: {
      mn: "UNCCD COP17 — Монголын шилдэг ногоон бизнесийн шагнал",
      en: "UNCCD COP17 — Mongolia's Best Green Business Award",
    },
    excerpt: {
      mn: "НҮБ-ийн Цөлжилттэй тэмцэх конвенцийн 17 дахь талуудын бага хурлаар BIOMIX Монголын шилдэг ногоон бизнесийн шагнал хүртлээ.",
      en: "At the 17th Conference of the Parties to the UN Convention to Combat Desertification, BIOMIX received Mongolia's Best Green Business Award.",
    },
    body: {
      mn: `2025 оны 9-р сарын 20-нд Улаанбаатар хотод болсон НҮБ-ийн Цөлжилттэй тэмцэх конвенцийн (UNCCD) 17 дахь талуудын бага хурал (COP17)-ын үеэр BIOMIX "Монголын шилдэг ногоон бизнес" шагналыг хүртлээ.

Шагналыг Монгол Улсын Байгаль Орчин, Аялал Жуулчлалын яамны сайдын гараар гардан авсан бөгөөд олон улсын 120 гаруй улсын төлөөлөгчдийн өмнө танилцуулга хийлээ.

Шагналыг хүртсэн шалтгаанууд:
— 10 гаруй жилийн турш органик хаягдлыг дахин боловсруулсан
— Говийн нөхөн сэргээлтэд оруулсан хувь нэмэр
— 21 аймгийг хамарсан хүргэлтийн сүлжээ
— Нийслэлийн хог хаягдлын менежментэд оруулсан хувь нэмэр

Энэхүү шагнал нь BIOMIX-ийн нийт хамт олны хөдөлмөрийн үр дүн бөгөөд манай байгаль орчинд оруулсан хувь нэмрийн олон улсын хүлээн зөвшөөрөлт юм.

COP17 бага хурал нь цөлжилт, газрын доройтолтой тэмцэх дэлхийн хамгийн том арга хэмжээ бөгөөд энэ удаа Монгол Улс дэд ерөнхийлөгчийн улс болж оролцлоо.`,
      en: `On September 20, 2025, at the 17th Conference of the Parties (COP17) to the UN Convention to Combat Desertification (UNCCD) held in Ulaanbaatar, BIOMIX received the "Mongolia's Best Green Business" award.

The award was presented by Mongolia's Minister of Environment and Tourism before representatives from over 120 countries.

Reasons for receiving the award:
— Over 10 years of organic waste recycling
— Contributions to Gobi restoration
— Delivery network covering all 21 aimags
— Contribution to capital city waste management

This award is the result of the entire BIOMIX team's hard work and represents international recognition of our environmental contributions.

COP17 is the world's largest event addressing desertification and land degradation, with Mongolia serving as a vice-president country this time.`,
    },
  },
  {
    id: 6,
    date: { mn: "2025 оны 6-р сар", en: "June 2025" },
    tag: { mn: "Судалгаа", en: "Research" },
    title: {
      mn: "Хөрсний микробиомын судалгаа — BIOMIX бордооны нөлөө",
      en: "Soil Microbiome Research — The Impact of BIOMIX Fertilizer",
    },
    excerpt: {
      mn: "МУИС-ийн Биологийн тэнхимтэй хамтран хийсэн судалгаагаар BIOMIX бордоо хэрэглэсэн хөрсний микробын олон янз байдал 340%-иар нэмэгдсэн нь тогтоогдлоо.",
      en: "Research conducted with the NUM Biology Department found that microbial diversity in soil treated with BIOMIX fertilizer increased by 340%.",
    },
    body: {
      mn: `МУИС-ийн Биологийн тэнхимтэй хамтран 2024–2025 онуудад хийсэн судалгааны дүнг 2025 оны 6-р сард нийтэлсэн. Судалгааны үр дүн нь BIOMIX бордооны хөрсний биологийн үйл ажиллагаанд үзүүлэх нөлөөг баримтжуулсан.

Судалгааны арга зүй:
3 өөр газрын хөрсний дээжийг авч, BIOMIX бордоо хэрэглэсэн болон хэрэглээгүй хэсгүүдийг харьцуулан судалсан. ДНХ-ийн дэвшилтэт шинжилгээний аргыг ашигласан.

Гол үр дүн:
— Бактерийн олон янз байдал: 340% нэмэгдсэн
— Фунги (мөөг)-ийн олон янз байдал: 180% нэмэгдсэн
— Азот бэхжүүлэгч бактери: 5 дахин нэмэгдсэн
— Фосфор уусгагч бактери: 3.2 дахин нэмэгдсэн
— Ургамлын ургалтыг дэмжих хормон үүсгэгч бактери: 4.1 дахин нэмэгдсэн

Эдгээр үр дүн нь BIOMIX бордоо зөвхөн шим тэжээлийг нэмэгдүүлдэг төдийгүй, хөрсний биологийн экосистемийг цогцоор нь сэргээдгийг харуулж байна.

Судалгааны нийтлэл "Монголын Байгалийн Шинжлэх Ухаан" сэтгүүлийн 2025 оны дугаарт хэвлэгдсэн.`,
      en: `Research conducted jointly with the NUM Biology Department in 2024–2025 was published in June 2025. The findings document the effects of BIOMIX fertilizer on soil biological activity.

Research methodology:
Soil samples were taken from 3 different locations, and sections treated with BIOMIX fertilizer were compared to untreated sections using advanced DNA analysis techniques.

Key results:
— Bacterial diversity: increased by 340%
— Fungal diversity: increased by 180%
— Nitrogen-fixing bacteria: increased 5-fold
— Phosphate-solubilizing bacteria: increased 3.2-fold
— Growth hormone-producing bacteria: increased 4.1-fold

These results demonstrate that BIOMIX fertilizer not only increases nutrient content but also holistically restores the biological ecosystem of the soil.

The research article was published in the 2025 issue of the "Mongolian Journal of Natural Science."`,
    },
  },
];

type ModalProps = {
  article: Article;
  lang: "mn" | "en";
  onClose: () => void;
};

function Modal({ article, lang, onClose }: ModalProps) {
  const [visible, setVisible] = useState(false);

  // Mount болмогц animate-in эхлүүлнэ
  useEffect(() => {
    const tid = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(tid);
  }, []);

  // Хаахын өмнө animate-out дуусгана
  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      onClick={handleClose}
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink/85 backdrop-blur-md" />

      {/* Modal box — scale + fade + slide */}
      <div
        className="relative z-10 bg-charcoal border border-white/[0.08] max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible
            ? "translateY(0) scale(1)"
            : "translateY(20px) scale(0.97)",
          transition:
            "opacity 0.35s cubic-bezier(0.16,1,0.3,1), transform 0.35s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-7 md:p-9 border-b border-white/[0.06] flex-shrink-0">
          <div className="pr-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-sage border border-sage/30 px-2 py-1">
                {t(article.tag, lang)}
              </span>
              <span className="font-mono text-[9px] tracking-[0.15em] text-cream/75">
                {t(article.date, lang)}
              </span>
            </div>
            <h2 className="font-display font-light text-[clamp(22px,3vw,30px)] leading-[1.15] text-cream tracking-[-0.01em]">
              {t(article.title, lang)}
            </h2>
          </div>
          {/* Close button */}
          <button
            onClick={handleClose}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-white/10 text-cream/80 hover:text-cream hover:border-white/30 transition-all duration-200 font-mono text-[14px]"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 p-7 md:p-9">
          {t(article.body, lang)
            .split("\n\n")
            .map((para, i) => (
              <p
                key={i}
                className="font-sans text-[15px] leading-[1.9] text-cream/90 mb-5 last:mb-0 whitespace-pre-line"
              >
                {para}
              </p>
            ))}
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 border-t border-white/[0.06] px-7 md:px-9 py-4 flex items-center justify-between">
          <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-cream/75">
            BIOMIX — {t(article.date, lang)}
          </div>
          <button
            onClick={handleClose}
            className="font-mono text-[9px] tracking-[0.18em] uppercase text-cream/80 hover:text-cream transition-colors flex items-center gap-2 group"
          >
            {lang === "mn" ? "Хаах" : "Close"}
            <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Newsletter() {
  const { lang } = useLang();
  const [active, setActive] = useState<Article | null>(null);

  return (
    <>
      <section
        id="newsletter"
        className="py-24 md:py-36 px-8 md:px-12 lg:px-16 border-t border-white/[0.06] relative"
      >
        {/* Subtle top glow */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sage/30 to-transparent" />

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="font-mono text-[13px] tracking-[0.16em] uppercase text-sage flex items-center gap-4 mb-6">
                <span className="w-10 h-px bg-sage/40" />
                {lang === "mn" ? "05 — Мэдээ мэдээлэл" : "05 — Field Notes"}
              </div>
              <h2 className="font-display font-light text-[clamp(42px,5vw,72px)] leading-[0.95] text-cream tracking-[-0.01em]">
                {lang === "mn" ? (
                  <>
                    ТАЛБАРЫН
                    <br />
                    <em className="italic text-gold">ТЭМДЭГЛЭЛ.</em>
                  </>
                ) : (
                  <>
                    FIELD
                    <br />
                    <em className="italic text-gold">NOTES.</em>
                  </>
                )}
              </h2>
            </div>
            <p className="font-sans text-[12px] text-cream/80 italic max-w-xs leading-relaxed">
              {lang === "mn"
                ? "Нийтлэл дээр дарж дэлгэрэнгүй уншина уу."
                : "Click on any article to read in full."}
            </p>
          </div>

          {/* Articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
            {articles.map((article, i) => (
              <button
                key={article.id}
                onClick={() => setActive(article)}
                className="bg-ink text-left group relative overflow-hidden hover:bg-charcoal transition-colors duration-300 focus:outline-none"
                data-hover
              >
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sage/0 to-transparent group-hover:via-sage/50 transition-all duration-500" />

                <div className="p-7 md:p-8">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-mono text-[8px] tracking-[0.18em] uppercase text-sage border border-sage/25 px-2 py-1">
                      {t(article.tag, lang)}
                    </span>
                    <span className="font-mono text-[8px] tracking-[0.12em] text-cream/75">
                      {t(article.date, lang)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-light text-[22px] md:text-[26px] leading-[1.2] text-cream mb-4 tracking-[-0.01em] group-hover:text-gold transition-colors duration-300">
                    {t(article.title, lang)}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-sans text-[14px] leading-[1.75] text-cream/85 mb-6">
                    {t(article.excerpt, lang)}
                  </p>

                  {/* Read more */}
                  <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.2em] uppercase text-cream/70 group-hover:text-sage transition-colors duration-300">
                    {lang === "mn" ? "Дэлгэрэнгүй" : "Read more"}
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>

                {/* Article number watermark */}
                <div className="absolute bottom-4 right-6 font-display text-[72px] text-white/[0.02] leading-none select-none pointer-events-none group-hover:text-white/[0.04] transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {active && (
        <Modal
          article={active}
          lang={lang}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}
