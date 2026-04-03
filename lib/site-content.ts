import type { SiteLocale } from '@/lib/language-context';

export type SiteCopy = {
  nav: { work: string; archive: string; process: string; mothers: string; circle: string; contact: string; cta: string };
  hero: { h1: string; h1Strong: string; lead: string; btn1: string; btn2: string; scroll: string };
  focus: { eyebrow: string; title1: string; title2: string; lead: string; note: string };
  ext: {
    eyebrow: string; title: string; intro: string;
    items: Array<{ name: string; subtitle: string; desc: string }>;
  };
  tiers: {
    eyebrow: string; title: string; note: string;
    items: Array<{ mat: string; desc: string; tag: string }>;
  };
  process: {
    intro: string; title1: string; title2: string; tagline: string;
    steps: Array<{ name: string; detail: string; note?: string }>;
  };
  archiveQuote: string;
  archive: {
    eyebrow: string; title1: string; title2: string; link: string;
    items: Array<{ tier: string; name: string; story: string }>;
  };
  circle: {
    eyebrow: string; title1: string; title2: string; body: string;
    stat1Label: string; stat1Body: string;
    stat2Num1: string; stat2Num2: string; stat2Label: string; stat2Body: string;
  };
  consult: {
    eyebrow: string; title1: string; title2: string; body: string; points: string[];
    formTitle: string;
    labels: { fn: string; ln: string; email: string; phone: string; orderFor: string; tier: string; vision: string; visionPlaceholder: string; pref: string };
    forOptions: string[]; tierOptions: string[];
    prefLabels: { video: string; phone: string; email: string };
    submit: string; note: string;
  };
  contact: {
    eyebrow: string; title: string;
    email: { name: string; body: string };
    instagram: { body: string };
    whatsapp: { body: string; link: string };
  };
  footer: { links: string[]; tagline: string };
};

export const siteContent: Record<SiteLocale, SiteCopy> = {
  az: {
    nav: {
      work: 'Missiyamız', archive: 'Kolleksiya', process: 'Necə İşləyir',
      mothers: 'Anaların Arxivi', circle: 'Anaların Dairəsi', contact: 'Əlaqə',
      cta: 'Konsultasiya'
    },
    hero: {
      h1: 'Bu dövr keçib gedir.',
      h1Strong: 'Xatirəsi isə sizinlə qalır.',
      lead: 'Analığın ilk ayları təkrar olunmur. Atelier Lactéa bu ən dəyərli dövrü ana südündən hazırlanmış zərif zinət əşyasında qoruyaraq onu hər gün yaxınınızda daşıya biləcəyiniz, çox şəxsi və əbədi bir yadigara çevirir.',
      btn1: 'Konsultasiyaya Başla', btn2: 'Anaların Arxivini Gör', scroll: 'Aşağı'
    },
    focus: {
      eyebrow: 'Nə edirik',
      title1: 'Ana südü,', title2: 'əbədi qorunur',
      lead: 'Atelier Lactéa ana südünü incə əl işçiliyi ilə əbədi bir zinət əşyasına çevirir. Hər parça analığın ən həssas dövrünü — o təkrar olunmaz yaxınlığı, o ilk ayları — gələcəyə daşımaq üçün yaradılır. Bu, sadəcə bəzək deyil. Nəsildən-nəslə ötürülən, hər dəfə taxılanda o dövrü yenidən hiss etdirən bir yadigardır.',
      note: 'Ana südü vermisinizsə, bu sizin üçündür. Verməmisinizsə, bu yenə də sizin üçündür. Körpə saçı, doğum daşı və ya hər ikisi — analığın ilk izi, seçdiyiniz formada qorunur.'
    },
    ext: {
      eyebrow: 'Əlavə materiallar', title: 'Analığın hər dövrü üçün',
      intro: 'Ana südü etdiyimiz işin özəyidir. Lakin bu təcrübə hər kəs üçün özünəməxsusdur və bu xüsusi anı əbədiləşdirmək üçün eyni dərinliyə sahib Əlavə seçimlər təklif edirik.',
      items: [
        { name: 'Körpə Saçı', subtitle: 'Körpənizin o ilk əvəzolunmaz teli', desc: 'O ilk tel — incə, xüsusi və körpənizin dünyaya gəlişinin ən erkən fiziki izi. Seçdiyiniz parçaya həkk olunaraq həmişəlik sizinlə qalır.' },
        { name: 'Doğum Daşı', subtitle: 'Tək və ya ana südü ilə birlikdə', desc: 'Uşağınızın doğulduğu ayın daşı. Ana südü ilə birlikdə və ya ayrıca, həm o günü, həm də o sevgini əbədiləşdirir.' },
        { name: 'Qarışıq', subtitle: 'İki və ya daha çox material', desc: 'Ana südü və körpə saçı. Ana südü və doğum daşı. Hər üçü birlikdə. Hər element eyni məhəbbətin fərqli bir qatını daşıyır.' }
      ]
    },
    tiers: {
      eyebrow: 'Kolleksiya', title: 'Hər ana üçün bir yadigar',
      note: 'Üç ifadə, bir məqsəd. Bu dövrü qorumaq hər ananın haqqıdır. Hər biri fərdi konsultasiya və eyni sənətkarlıq həssaslığı ilə başlayır.',
      items: [
        { mat: 'Paslanmayan Metal', desc: 'Analığın ilk dövrünün ən xüsusi xatirəsi — ana südünüz, əl ilə hazırlanmış zərif bir zinət əşyasına çevrilir. Hazır formalar arasından seçdiyiniz pendant, yalnız sizin hekayənizi daşıyır.', tag: 'İndi və həmişə' },
        { mat: 'Qızıl Örtüklü', desc: 'Essentia-nın bütün zərifliyi, qızılın istiliyi ilə. Ana südünüz, parıltılı və isti bir parçada əbədiləşir. Hazır formalar arasından seçilir və xatirələrdə qalır.', tag: 'Qiymətli bir hədiyyə' },
        { mat: 'Fərdi · Əl İşi', desc: 'Maison tamamilə başqadır, sizin üçün sıfırdan yaradılan bir əsər. Xüsusi konsultasiyalarda sizinlə birlikdə hər detala qərar verilir, hamısı ən dəyərli metallar ilə yalnız sizin hekayənizə uyğun hazırlanır. Heç bir başqa Maison əsəri eyni olmayacaq.', tag: 'Yalnız sizin üçün' }
      ]
    },
    process: {
      intro: 'Heç nə tələsdirilmir. Hər ana hər addımda diqqət və qayğı ilə müşayiət olunur.',
      title1: 'İlk söhbətdən', title2: 'əbədi geyinilənə',
      tagline: 'Hər sifariş fərdi konsultasiya ilə başlayır, sonrası isə tamamilə sizin ətrafınızda qurulmuş, düşünülmüş bir prosesdir.',
      steps: [
        { name: 'Konsultasiya', detail: 'WhatsApp, video və ya telefon vasitəsilə sizinlə əlaqə saxlayır, hekayənizi və vizyonunuzu öyrənir, sizi ən uyğun ifadəyə və formaya yönləndiririk.' },
        { name: 'Dizayn və Depozit', detail: 'Hazır olduğunuzda depozit sifarişinizi təsdiqləyir. Birlikdə dizaynı dəqiqləşdiririk. Essentia və Aurea üçün mövcud formalardan seçirsiniz, Maison üçün isə tamamilə orijinal bir əsər yaradırıq. Depozit yekun məbləğə daxil edilir. Sifariş ləğv edildiyi təqdirdə depozit geri qaytarılmır.' },
        { name: 'Materialın Toplanması', detail: 'Dizayn təsdiqləndikdən və depozit ödəndikdən sonra sizə ABŞ-dan gətirilmiş steril tibbi süd saxlama konteynerləri təqdim edilir, pulsuz olaraq. Hazır olduğunuzda südü tarix və ad qeyd edərək geri göndərirsiniz. Qalan hər şey bizdədir.', note: 'Steril tibbi konteyner pulsuz təqdim edilir' },
        { name: 'Əl İşi', detail: 'Parçanız seçdiyiniz metalla əllə hazırlanır. Hazırlanma müddəti sifarişin mürəkkəbliyinə görə dəyişir — sizi hər mərhələdə məlumatlandırır və dəqiq hazırlanma cədvəli ilə təmin edirik.' },
        { name: 'Təhvil', detail: 'Parçanız Atelier Lactéa qablaşdırmasında çatdırılır. Bu gün açılacaq, nəsillər boyu daşınacaq.' }
      ]
    },
    archiveQuote: 'Bir zamanlar övladınızı bəsləyən sevgi, indi sizinlə qalır.',
    archive: {
      eyebrow: 'Anaların Arxivi', title1: 'Yaradılan parçalar,', title2: 'daşınan hekayələr', link: 'Tam arxivi gör →',
      items: [
        { tier: 'Aurea · Qızıl Örtüklü', name: 'Leyla üçün', story: 'On bir ay ana südü verdim. Bitdikdə əlimdə qalan bir şey olsun istədim.' },
        { tier: 'Maison · Fərdi', name: 'Aynur üçün', story: 'Qızımın birinci ad günündə ərim hədiyyə etdi. Açanda ağlayacağımı gözləmirdim.' },
        { tier: 'Essentia · Paslanmayan Metal', name: 'Nigar üçün', story: 'Ana südü verə bilmədim. Onun saçından bir tel istifadə etdik. Mənası heç də az deyil.' }
      ]
    },
    circle: {
      eyebrow: 'Anaların Dairəsi',
      title1: 'Yaratdığınız hər sifariş', title2: 'başqa bir anaya kömək edir',
      body: 'Hər Atelier Lactéa alışının 10 faizi birbaşa ehtiyacı olan analara gedir. Qida, gündəlik ehtiyaclar və çətin vəziyyətdə olan analar üçün. Hər ay, tam şəffaflıqla.',
      stat1Label: 'Hər alışdan, hər ay', stat1Body: 'Ehtiyacı olan analara birbaşa çatır. İstisna yoxdur.',
      stat2Num1: 'Aylıq', stat2Num2: 'hesabat', stat2Label: 'Tam şəffaflıq', stat2Body: 'Hər töhfənin hara getdiyini hər ay açıq şəkildə paylaşırıq.'
    },
    consult: {
      eyebrow: 'Buradan başlayın', title1: 'Sifarişiniz bir', title2: 'söhbətlə başlayır',
      body: 'Özünüz və təsəvvür etdiyiniz parça haqqında bizə məlumat verin. 48 saat ərzində fərdi konsultasiyanızı planlamaq üçün sizinlə əlaqə saxlayacağıq.',
      points: [
        'Pulsuz — ilk konsultasiya üçün heç bir ödəniş tələb olunmur',
        'Məxfi — hekayəniz yalnız bizdə qalır',
        'Azərbaycan, ingilis və rus dillərində mövcuddur',
        'Sifarişiniz təsdiqləndikdən sonra steril tibbi süd saxlama konteynerlərinizi ünvanınıza pulsuz çatdırırıq'
      ],
      formTitle: 'Konsultasiya planla',
      labels: {
        fn: 'Ad', ln: 'Soyad', email: 'E-poçt', phone: 'Telefon / WhatsApp',
        orderFor: 'Kimin üçün sifariş edirsiniz',
        tier: 'Nə ilə maraqlanırsınız?',
        vision: 'Fikirləriniz',
        visionPlaceholder: 'Hansı parça sizi maraqlandırır? Hər hansı sualınız var mı? Hər şeyi bizimlə paylaşın.',
        pref: 'Necə əlaqə saxlamağımızı istəyirsiniz'
      },
      forOptions: ['Özüm üçün, mən anam', 'Bir ana üçün hədiyyə olaraq'],
      tierOptions: ['Essentia · Paslanmayan Metal', 'Aurea · Qızıl Örtüklü', 'Maison · Fərdi', 'Hələ əmin deyiləm'],
      prefLabels: { video: 'Video Zəng', phone: 'Telefon', email: 'E-poçt' },
      submit: 'Sorğumu Göndər', note: '48 saat ərzində, seçdiyiniz dildə cavab veririk.'
    },
    contact: {
      eyebrow: 'Əlaqə saxlayın', title: 'Suallar və müraciətlər',
      email: { name: 'E-poçt', body: 'Ümumi suallar, qayğı göstərişləri və sifariş yenilikləri üçün.' },
      instagram: { body: 'Anaların Arxivini izləyin. Hazırlanmaqda olan parçalar, tamamlanmış yadigarlar və arxalarındakı hekayələr.' },
      whatsapp: { body: 'Sürətli suallar üçün, Azərbaycan, ingilis və ya rus dilində. İş saatlarında eyni gün cavab veririk.', link: 'WhatsApp-ı Aç' }
    },
    footer: {
      links: ['Missiyamız', 'Kolleksiya', 'Anaların Arxivi', 'Anaların Dairəsi', 'Məxfilik'],
      tagline: 'Yaratdığınız hər sifariş başqa bir anaya kömək edir'
    }
  },

  en: {
    nav: {
      work: 'Our Mission', archive: 'Collection', process: 'How It Works',
      mothers: "Mother's Archive", circle: "The Mother's Circle", contact: 'Contact',
      cta: 'Begin Consultation'
    },
    hero: {
      h1: 'The earliest bond,',
      h1Strong: 'preserved forever',
      lead: "The first months of motherhood do not come twice. Atelier Lactéa preserves this most precious time in a delicate jewel made from breastmilk — a deeply personal heirloom you can carry close, every single day.",
      btn1: 'Begin Your Consultation', btn2: "View the Mother's Archive", scroll: 'Scroll'
    },
    focus: {
      eyebrow: 'Our Mission',
      title1: 'Breastmilk,', title2: 'made permanent',
      lead: "Atelier Lactéa transforms breastmilk into a handcrafted jewel, preserved for a lifetime. Every piece is created to honour the most tender chapter of motherhood in something delicate, personal, and unforgettable. This is not simply jewellery. It is the most intimate and precious period of a mother's life, carried forward and passed between generations.",
      note: "Did you breastfeed? This is for you. Did you not? You are still welcome here. With baby hair, birthstone, or a blend, every mother can preserve the earliest chapter of her child's life."
    },
    ext: {
      eyebrow: 'Additional materials', title: 'For every chapter of motherhood',
      intro: 'Breastmilk is the heart of what we do. For mothers who did not breastfeed, or no longer have milk, we offer alternatives that carry the same depth of meaning.',
      items: [
        { name: 'Baby Hair', subtitle: 'Every child leaves a trace', desc: 'The first lock, set into your chosen piece. Irreplaceable and impossibly delicate, it is the earliest physical trace of your child.' },
        { name: 'Birthstone', subtitle: 'The light of that day, kept today', desc: 'The stone of the month your child arrived. Set alongside preserved breastmilk or on its own, marking both the day and the devotion.' },
        { name: 'Blended', subtitle: 'Several memories, one piece', desc: 'Breastmilk and baby hair. Breastmilk and birthstone. All three together. Every element a different layer of the same love.' }
      ]
    },
    tiers: {
      eyebrow: 'The Collection', title: 'A heirloom for every mother',
      note: 'Three tiers, one purpose. Every mother deserves to preserve this moment, regardless of budget. Each begins with a private consultation and the same devotion to craft.',
      items: [
        { mat: 'Stainless Steel', desc: 'Created to preserve a moment that remains long after it has passed. Enduring, delicate, and held close to the heart.', tag: 'For now and always' },
        { mat: 'Gold Plated', desc: 'Luminous and warm, with a softness that reflects the sentiment held within. A meaningful piece, often chosen to be given and remembered.', tag: 'A cherished gift' },
        { mat: 'Bespoke · Handcrafted', desc: 'A one-of-a-kind creation shaped around your story, your memories, and the details that matter most. No two Maison pieces are ever the same.', tag: 'Uniquely yours' }
      ]
    },
    process: {
      intro: 'Nothing is rushed. Every mother is guided through each step with care.',
      title1: 'From a wish', title2: 'to a heirloom',
      tagline: 'Every heirloom begins with a private consultation. What follows is a considered, unhurried process built entirely around you.',
      steps: [
        { name: 'Consultation', detail: 'A private conversation by WhatsApp, video, or phone, in your language. We learn your story and your vision, and guide you to the right tier and form.' },
        { name: 'Design and Deposit', detail: 'When you are ready, a deposit confirms your order. Together we refine the design. For Essentia and Aurea you choose from our existing forms. For Maison, we create an entirely original piece together.' },
        { name: 'Your Materials', detail: 'Once the design is confirmed, we send a sterile collection kit to your door, complimentary. Use your own pump, transfer into our bag, and send it back. We handle everything from that point forward.', note: 'Sterile collection kit delivered to your door, complimentary' },
        { name: 'Handcraft', detail: 'Your piece is made by hand in your chosen metal. Maison clients work directly alongside our partner jeweller at every stage of creation.' },
        { name: 'Your Heirloom', detail: 'Delivered in Atelier Lactéa packaging with a certificate of preservation. A gift to open today, and to pass forward through generations.' }
      ]
    },
    archiveQuote: 'The love that once nourished your child now stays with you.',
    archive: {
      eyebrow: "The Mother's Archive", title1: 'Pieces made,', title2: 'stories carried', link: 'View the full archive →',
      items: [
        { tier: 'Aurea · Gold Plated', name: 'For Leyla', story: 'I breastfed for eleven months. I wanted something to hold onto when it was over.' },
        { tier: 'Maison · Bespoke', name: 'For Aynur', story: "Gifted by my husband on our daughter's first birthday. I did not expect to cry when I opened it." },
        { tier: 'Essentia · Stainless Steel', name: 'For Nigar', story: 'I could not breastfeed. We used a lock of his hair instead. It means just as much to me.' }
      ]
    },
    circle: {
      eyebrow: "The Mother's Circle",
      title1: 'Every heirloom you create', title2: 'helps another mother',
      body: '10% of every Atelier Lactéa purchase goes directly to mothers in need. Food, diapers, and safe refuge for women and children in vulnerable situations, including those in abusive households. Every month, transparently reported.',
      stat1Label: 'Of every purchase, every month', stat1Body: 'Goes to mothers facing food insecurity, housing instability, and domestic abuse. No exceptions.',
      stat2Num1: 'Monthly', stat2Num2: 'report', stat2Label: 'Full transparency', stat2Body: 'We publish a monthly report so every client knows exactly where their contribution went.'
    },
    consult: {
      eyebrow: 'Begin here', title1: 'Your heirloom begins', title2: 'with a conversation',
      body: 'Tell us about yourself and what you are imagining. We will reach out within 48 hours to arrange your private consultation.',
      points: [
        'Complimentary, no charge for the consultation itself',
        'Confidential, your story stays with us',
        'Available in Azerbaijani, English, and Russian',
        'Collection bag sent free of charge after deposit'
      ],
      formTitle: 'Schedule a consultation',
      labels: {
        fn: 'First name', ln: 'Last name', email: 'Email', phone: 'Phone / WhatsApp',
        orderFor: 'I am ordering for',
        tier: 'What interests you?',
        vision: 'Your thoughts',
        visionPlaceholder: 'Which piece interests you? Any questions? Share anything with us.',
        pref: 'How would you like us to reach you'
      },
      forOptions: ['Myself, I am the mother', 'As a gift for a mother'],
      tierOptions: ['Essentia · Stainless Steel', 'Aurea · Gold Plated', 'Maison · Bespoke', 'Not sure yet'],
      prefLabels: { video: 'Video Call', phone: 'Phone', email: 'Email' },
      submit: 'Send My Request', note: 'We reply within 48 hours, in your preferred language.'
    },
    contact: {
      eyebrow: 'Get in touch', title: 'Questions and enquiries',
      email: { name: 'Email', body: 'For general questions, care instructions, and order updates.' },
      instagram: { body: "Follow the Mother's Archive. Pieces in progress, finished heirlooms, and the stories behind them." },
      whatsapp: { body: 'Quick questions in Azerbaijani, English, or Russian. We respond the same day during working hours.', link: 'Open WhatsApp' }
    },
    footer: {
      links: ['Our Mission', 'Collection', "Mother's Archive", "The Mother's Circle", 'Privacy'],
      tagline: 'Every heirloom created helps another mother'
    }
  },

  ru: {
    nav: {
      work: 'Наша миссия', archive: 'Коллекция', process: 'Как это работает',
      mothers: 'Архив Матери', circle: 'Круг Матерей', contact: 'Контакт',
      cta: 'Начать консультацию'
    },
    hero: {
      h1: 'Это время уходит.',
      h1Strong: 'Память остаётся с вами.',
      lead: 'Первые месяцы материнства не повторяются. Atelier Lactéa сохраняет этот самый ценный период в изысканном украшении из грудного молока — глубоко личной реликвии, которую вы можете носить рядом с собой каждый день.',
      btn1: 'Начать консультацию', btn2: 'Смотреть Архив Матери', scroll: 'Вниз'
    },
    focus: {
      eyebrow: 'Наша миссия',
      title1: 'Грудное молоко,', title2: 'сохранённое навсегда',
      lead: 'Atelier Lactéa превращает грудное молоко в украшение ручной работы, созданное на всю жизнь. Каждое изделие рождается, чтобы запечатлеть самую нежную главу материнства в чём-то хрупком, личном и незабываемом. Это не просто украшение. Это самый трепетный и ценный период жизни матери, бережно переданный будущим поколениям.',
      note: 'Кормили грудью? Это для вас. Не кормили? Вы тоже здесь желанны. С прядью волос малыша, камнем рождения или их сочетанием — каждая мать может сохранить самую раннюю главу жизни своего ребёнка.'
    },
    ext: {
      eyebrow: 'Дополнительные материалы', title: 'Для каждой главы материнства',
      intro: 'Грудное молоко — это сердце того, что мы делаем. Но для мам, которые не кормили грудью или больше не сохранили молоко, мы предлагаем альтернативы с той же глубиной смысла.',
      items: [
        { name: 'Волосы малыша', subtitle: 'Каждый ребёнок оставляет свой след', desc: 'Первая прядь, вплавленная в выбранное вами украшение. Незаменимая и невероятно нежная — самый ранний физический след вашего ребёнка.' },
        { name: 'Камень рождения', subtitle: 'Свет того дня, сохранённый сегодня', desc: 'Камень месяца, в котором родился ваш ребёнок. Вместе с сохранённым молоком или отдельно — он увековечивает и тот день, и ту любовь.' },
        { name: 'Сочетание', subtitle: 'Несколько воспоминаний в одном изделии', desc: 'Молоко и волосы малыша. Молоко и камень рождения. Все три вместе. Каждый элемент — отдельный слой одной и той же любви.' }
      ]
    },
    tiers: {
      eyebrow: 'Коллекция', title: 'Реликвия для каждой матери',
      note: 'Три уровня, одна цель. Каждая мать заслуживает сохранить этот момент, независимо от бюджета. Каждый начинается с личной консультации и одинаковой преданности мастерству.',
      items: [
        { mat: 'Нержавеющая сталь', desc: 'Создана, чтобы сохранить момент, который остаётся в сердце ещё долго после того, как он миновал. Прочная, нежная, хранимая близко к сердцу.', tag: 'Сейчас и всегда' },
        { mat: 'Позолоченное', desc: 'Тёплое сияние, в котором отражается нежность сокрытого внутри. Значимое украшение, которое часто выбирают как подарок, чтобы оно осталось в памяти.', tag: 'Бесценный подарок' },
        { mat: 'На заказ · Ручная работа', desc: 'Уникальное произведение, созданное вокруг вашей истории, воспоминаний и деталей, которые важны именно вам. Двух одинаковых изделий Maison не существует.', tag: 'Только ваше' }
      ]
    },
    process: {
      intro: 'Здесь ничего не торопят. Каждую маму бережно сопровождают на каждом шагу.',
      title1: 'От мечты', title2: 'к реликвии',
      tagline: 'Каждая реликвия начинается с личной консультации. Всё, что следует дальше — это вдумчивый, неторопливый процесс, выстроенный целиком вокруг вас.',
      steps: [
        { name: 'Консультация', detail: 'Личная беседа через WhatsApp, видео или по телефону, на вашем языке. Мы узнаём вашу историю и ваши пожелания, и помогаем выбрать подходящий уровень и форму.' },
        { name: 'Дизайн и депозит', detail: 'Когда вы будете готовы, депозит подтверждает ваш заказ. Вместе мы уточняем дизайн. Для Essentia и Aurea вы выбираете из наших готовых форм. Для Maison мы создаём полностью оригинальное изделие вместе с вами.' },
        { name: 'Сбор материала', detail: 'После подтверждения дизайна мы отправляем вам стерильный пакет для сбора, бесплатно, прямо к вашей двери. Сцедите молоко своим молокоотсосом, перелейте в наш пакет и отправьте обратно. Всё остальное мы берём на себя.', note: 'Стерильный набор для сбора доставляется бесплатно' },
        { name: 'Ручная работа', detail: 'Ваше изделие изготавливается вручную из выбранного металла. Клиенты Maison работают непосредственно с нашим ювелиром-партнёром на каждом этапе создания.' },
        { name: 'Ваша реликвия', detail: 'Доставляется в упаковке Atelier Lactéa с сертификатом сохранения. Подарок, который нужно открыть сегодня и передать через поколения.' }
      ]
    },
    archiveQuote: 'Любовь, которой вы когда-то питали своего ребёнка, теперь остаётся с вами.',
    archive: {
      eyebrow: 'Архив Матери', title1: 'Созданные изделия,', title2: 'хранимые истории', link: 'Смотреть полный архив →',
      items: [
        { tier: 'Aurea · Позолоченное', name: 'Для Лейлы', story: 'Я кормила грудью одиннадцать месяцев. Хотела иметь что-то, за что можно держаться, когда это закончится.' },
        { tier: 'Maison · На заказ', name: 'Для Айнур', story: 'Подарок мужа на первый день рождения нашей дочери. Не ожидала, что заплачу, открывая его.' },
        { tier: 'Essentia · Нержавеющая сталь', name: 'Для Нигяр', story: 'Я не могла кормить грудью. Мы использовали прядь его волос. Для меня это значит не меньше.' }
      ]
    },
    circle: {
      eyebrow: 'Круг Матерей',
      title1: 'Каждая созданная вами реликвия', title2: 'помогает другой матери',
      body: '10% от каждой покупки Atelier Lactéa идут напрямую нуждающимся матерям. Еда, подгузники и безопасное укрытие для женщин и детей в уязвимом положении, в том числе переживающих домашнее насилие. Каждый месяц, с полным отчётом.',
      stat1Label: 'От каждой покупки, каждый месяц', stat1Body: 'Идут матерям, столкнувшимся с нехваткой питания, нестабильностью жилья и домашним насилием. Без исключений.',
      stat2Num1: 'Ежемесячный', stat2Num2: 'отчёт', stat2Label: 'Полная прозрачность', stat2Body: 'Мы публикуем ежемесячный отчёт, чтобы каждый клиент знал, куда именно пошёл его вклад.'
    },
    consult: {
      eyebrow: 'Начните здесь', title1: 'Ваша реликвия начинается', title2: 'с разговора',
      body: 'Расскажите нам о себе и о том, что вы представляете. Мы свяжемся с вами в течение 48 часов, чтобы организовать вашу личную консультацию.',
      points: [
        'Бесплатно, за саму консультацию плата не взимается',
        'Конфиденциально, ваша история остаётся с нами',
        'Доступно на азербайджанском, английском и русском',
        'Пакет для сбора отправляется бесплатно после депозита'
      ],
      formTitle: 'Записаться на консультацию',
      labels: {
        fn: 'Имя', ln: 'Фамилия', email: 'Электронная почта', phone: 'Телефон / WhatsApp',
        orderFor: 'Я заказываю для',
        tier: 'Что вас интересует?',
        vision: 'Ваши мысли',
        visionPlaceholder: 'Какое украшение вас интересует? Есть вопросы? Поделитесь с нами всем.',
        pref: 'Как вы хотите, чтобы мы с вами связались'
      },
      forOptions: ['Себя, я мать', 'В подарок матери'],
      tierOptions: ['Essentia · Нержавеющая сталь', 'Aurea · Позолоченное', 'Maison · На заказ', 'Пока не знаю'],
      prefLabels: { video: 'Видеозвонок', phone: 'Телефон', email: 'Эл. почта' },
      submit: 'Отправить запрос', note: 'Отвечаем в течение 48 часов на вашем языке.'
    },
    contact: {
      eyebrow: 'Связаться', title: 'Вопросы и обращения',
      email: { name: 'Электронная почта', body: 'Для общих вопросов, инструкций по уходу и обновлений заказа.' },
      instagram: { body: 'Следите за Архивом Матери. Изделия в процессе работы, готовые реликвии и истории за ними.' },
      whatsapp: { body: 'Быстрые вопросы на азербайджанском, английском или русском. Отвечаем в тот же день в рабочее время.', link: 'Открыть WhatsApp' }
    },
    footer: {
      links: ['Наша миссия', 'Коллекция', 'Архив Матери', 'Круг Матерей', 'Конфиденциальность'],
      tagline: 'Каждая созданная реликвия помогает другой матери'
    }
  }
};