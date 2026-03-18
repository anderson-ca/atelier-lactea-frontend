export type HomeLocale = 'en' | 'az' | 'ru';

export type HomeCopy = {
  languageLabel: string;
  nav: {
    collections: string;
    process: string;
  };
  hero: {
    headline: string;
    subtext: string;
    primaryCta: string;
    secondaryCta: string;
  };
  concept: {
    title: string;
    body: string[];
  };
  process: {
    title: string;
    intro: string;
    steps: Array<{
      title: string;
      text: string;
    }>;
  };
  archive: {
    title: string;
    text: string[];
  };
  collections: {
    title: string;
    items: Array<{
      name: string;
      description: string;
      materials: string;
    }>;
    cta: string;
  };
};

export const homeCopy: Record<HomeLocale, HomeCopy> = {
  en: {
    languageLabel: 'Language',
    nav: {
      collections: 'Explore Collections',
      process: 'How It Works'
    },
    hero: {
      headline: 'Preserving the First Bond',
      subtext:
        'Atelier Lactea transforms a mother\'s first nourishment into a lasting heirloom.',
      primaryCta: 'Explore Collections',
      secondaryCta: 'How It Works'
    },
    concept: {
      title: 'A Moment That Cannot Be Repeated',
      body: [
        'The earliest months of motherhood are filled with devotion that often passes quietly and quickly. Atelier Lactea was created by a mother to preserve that fleeting chapter and transform it into something lasting.',
        'Each piece is crafted from preserved breastmilk and designed to be worn, treasured, and eventually passed on.'
      ]
    },
    process: {
      title: 'Begin Your Heirloom',
      intro:
        'Every piece created by Atelier Lactea begins with a conversation. We guide you through selecting the design that best preserves your story.',
      steps: [
        {
          title: 'Begin With a Consultation',
          text: 'Submit your interest form and schedule a complimentary design consultation.'
        },
        {
          title: 'Design Your Piece',
          text: 'Together we select the setting, stone shape, and details that best preserve your story.'
        },
        {
          title: 'Send Your Milk',
          text: 'A small amount of milk is safely preserved and transformed into a lasting stone.'
        },
        {
          title: 'Your Heirloom Is Created',
          text: 'Your piece is assembled by hand and registered in the Mother\'s Archive.'
        }
      ]
    },
    archive: {
      title: 'The Mother\'s Archive',
      text: [
        'Atelier Lactea was created to preserve a moment that disappears almost as soon as it arrives.',
        'Each piece begins with a mother\'s first offering: nourishment, patience, and quiet devotion. Through careful preservation and handcraft, that fleeting chapter becomes a lasting heirloom.',
        'Together these pieces form what we call The Mother\'s Archive, a living collection of memories carried by the families who entrusted us with them.'
      ]
    },
    collections: {
      title: 'Explore Our Collections',
      items: [
        {
          name: 'Signature Pieces',
          description: 'Timeless jewelry designed to carry your memory every day.',
          materials: 'Stainless steel setting with preserved milk stone.'
        },
        {
          name: 'Heirloom Creations',
          description: 'Elevated pieces crafted to endure across generations.',
          materials: 'Gold-covered or gold-filled settings.'
        },
        {
          name: 'Bespoke Commissions',
          description: 'A private atelier experience for entirely custom heirlooms.',
          materials: 'Solid gold or platinum.'
        }
      ],
      cta: 'Schedule Your Design Consultation'
    }
  },
  az: {
    languageLabel: 'Dil',
    nav: {
      collections: 'Kolleksiyalara Baxin',
      process: 'Proses'
    },
    hero: {
      headline: 'Ilk Bagin Xatiresini Qoruyuruq',
      subtext:
        'Atelier Lactea ananin ilk qidasini nesilden-nesile kecen ziynet yadigarina cevirir.',
      primaryCta: 'Kolleksiyalara Baxin',
      secondaryCta: 'Proses'
    },
    concept: {
      title: 'Tekrari Olmayan Bir An',
      body: [
        'Analigin ilk aylari dinc bir sehvet ve baglilikla dolu olur, amma bu dovr tez kecib gedir. Atelier Lactea bir ana terefinden bu qisa, qiymetli sehifeni qorumaq ucun yaradilib.',
        'Her bir ziynet eshyasi qorunmus ana sudunden hazirlanir, gunluk dasinmasi, ezizlenmesi ve sonradan ailede devr olunmasi ucun dizayn edilir.'
      ]
    },
    process: {
      title: 'Oz Yadigariniza Baslayin',
      intro:
        'Atelier Lactea-da her sifaris once sohbetle baslayir. Hekayenizi en gozel sekilde yasadacaq dizayni birge secirik.',
      steps: [
        {
          title: 'Mushavire ile Baslayin',
          text: 'Muraciet formasini doldurun ve odenissiz dizayn mushaviresi ucun vaxt secin.'
        },
        {
          title: 'Ziynet Eshyanizi Formalaşdirin',
          text: 'Birlikde karkasi, das formasini ve hekayenize uygun ince detallari muzakire edirik.'
        },
        {
          title: 'Sud Numunesini Gondarin',
          text: 'Kicik miqdarda numune tehlukesiz sekilde qorunur ve davamli dasa cevrilir.'
        },
        {
          title: 'Yadigariniz Hazirlanir',
          text: 'Ziynet eshyasi elde yigilir ve Mother\'s Archive qeydiyyatina daxil edilir.'
        }
      ]
    },
    archive: {
      title: 'The Mother\'s Archive',
      text: [
        'Atelier Lactea demek olar ki, goze carpmadan yox olan bir dovru qorumaga hesr olunub.',
        'Her bir eser ananin ilk hediyyesinden dogulur: qida, sebr ve sessiz mehebbet. Diqqetli qoruma ve ustaliqla bu qisa fesil uzunomurlu yadigara cevrilir.',
        'Bu eserlerin hamisina birlikde The Mother\'s Archive deyirik - bize etibar eden ailelerin yasatdigi xatirelerden ibaret canli mecmue.'
      ]
    },
    collections: {
      title: 'Kolleksiyalarimiz',
      items: [
        {
          name: 'Signature',
          description: 'Her gun sizinle olacaq xatire ucun zamansiz ziynet eshyalari.',
          materials: 'Paslanmayan polad karkas ve qorunmus sud dasi.'
        },
        {
          name: 'Eleve',
          description: 'Nesiller boyu qalacaq daha yuksek seviyyeli isler.',
          materials: 'Qizil ortuklu ve ya qizil doldurulmus karkaslar.'
        },
        {
          name: 'Bespoke',
          description: 'Tam ferdi yadigar ucun qapali atelier prosesi.',
          materials: 'Tam qizil ve ya platin.'
        }
      ],
      cta: 'Dizayn Mushaviresini Teyin Edin'
    }
  },
  ru: {
    languageLabel: 'Yazyk',
    nav: {
      collections: 'Kollekcii',
      process: 'Kak eto rabotaet'
    },
    hero: {
      headline: 'Sohranya pervuyu svyaz',
      subtext:
        'Atelier Lactea prevrashchaet pervoe materinskoe pitatelnoe darovanie v naslednuyu dragocennost.',
      primaryCta: 'Kollekcii',
      secondaryCta: 'Kak eto rabotaet'
    },
    concept: {
      title: 'Moment, kotoryy nelzya povtorit',
      body: [
        'Pervye mesyacy materinstva napolneny predannostyu i tishinoy, no prohodyat slishkom bystro. Atelier Lactea osnovan materyu, chtoby sohranit etot mgnovennyy period i pridat emu dlitelnuyu formu.',
        'Kazdoe ukrashenie sozdautsya iz konservirovannogo grudnogo moloka, chtoby ego mozhno bylo nosit, berech i peredavat dalshe v semye.'
      ]
    },
    process: {
      title: 'Nachnite svoyu relikviyu',
      intro:
        'Kazdaya rabota Atelier Lactea nachinaetsya s razgovora. My soprovozhdaem vas pri vybore dizayna, kotoryy luchshe vsego sohranit vashu istoriyu.',
      steps: [
        {
          title: 'Konsultaciya',
          text: 'Ostavte zayavku i vyberite vremya besplatnoy dizayn-konsultacii.'
        },
        {
          title: 'Proektirovanie izdeliya',
          text: 'Vmeste my opredelyaem opravu, formu kamnya i detali, blizkie vashey istorii.'
        },
        {
          title: 'Otpravka obrazca moloka',
          text: 'Nebolshoe kolichestvo nadezhno konserviruetsya i prevrashchaetsya v dolgovechnyy kamen.'
        },
        {
          title: 'Sozdanie relikvii',
          text: 'Izdeliye sobiraetsya vruchnuyu i registriruetsya v Mother\'s Archive.'
        }
      ]
    },
    archive: {
      title: 'The Mother\'s Archive',
      text: [
        'Atelier Lactea sozdans dlya sohraneniya momenta, kotoryy ischezaet pochti tak zhe bystro, kak poyavlyaetsya.',
        'Kazdoe izdeliye rozhdaetsya iz pervogo materinskogo dara: pitatelnost, terpenie i tihaya predannost. Cherez berezhnuyu konservaciyu i ruchnuyu rabotu etot korotkiy etap stanovitsya naslednoy relikviey.',
        'Vmeste eti raboty obrazuyut to, chto my nazyvaem The Mother\'s Archive, zhivuyu kollekciyu pamyati semey, kotorye doverilis nam.'
      ]
    },
    collections: {
      title: 'Nashi kollekcii',
      items: [
        {
          name: 'Signature',
          description: 'Vnevremennye izdeliya, chtoby nosit pamyat kazhdyy den.',
          materials: 'Oprava iz nerzhaveyushchey stali i konservirovannyy molochnyy kamen.'
        },
        {
          name: 'Eleve',
          description: 'Bolee vysokiy uroven rabot, rasschitannyy na pokoleniya.',
          materials: 'Pozolochennye ili gold-filled opravy.'
        },
        {
          name: 'Bespoke',
          description: 'Chastnyy atelier-format dlya polnostyu individualnyh relikviy.',
          materials: 'Solid gold ili platina.'
        }
      ],
      cta: 'Naznachit dizayn-konsultaciyu'
    }
  }
};
