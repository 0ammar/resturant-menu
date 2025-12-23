export const headerData = {
  branding: {
    logoSrc: "/logo.png",
    logoAlt: "Restaurant Menu",
    logoAltAr: "menu",
    logoWidth: 100,
    logoHeight: 100,
  },
  social: {
    links: [
      { 
        name: "Facebook", 
        nameAr: "فيسبوك", 
        url: "https://facebook.com",
      },
      { 
        name: "Instagram", 
        nameAr: "انستغرام", 
        url: "https://instagram.com",
      },
      { 
        name: "WhatsApp", 
        nameAr: "واتساب", 
        url: "https://wa.me/962799999999",
      },
    ],
  },
  contact: {
    phoneHref: "tel:+962799999999",
  },
} as const;