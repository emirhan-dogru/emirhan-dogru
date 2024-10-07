import React from "react";
import { Github, Instagram, Twitter } from "@/components/icons";



const myAge = () => {
  const today = new Date();
  const birthDate = new Date("2002-09-24");
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const aboutTexts = {
  tr: myAge() + " yaşında. Full Stack Geliştirici.",
  en: myAge() + " years old. Full Stack Developer.",
};


export const about = [
  {
    tr: {
      "id": 1,
      "title": "Mobil Uygulama & Full-Stack Geliştirici",
      "description": "Merhaba! Ben Emirhan DOĞRU, profesyonel bir web tasarımcısı ve mobil uygulama geliştiricisiyim. Çeşitli sektörlerden müşterilere özgün ve etkileyici web çözümleri sunma yeteneğine sahip bir freelancer olarak çalışıyorum. Her projede, müşterilerimin ihtiyaçlarına özel tasarlanmış modern ve kullanıcı dostu web siteleri oluşturmak için tutku ve özenle çalışıyorum. Freelance olarak çalıştığım süre boyunca kazandığım deneyimler arasında şunlar bulunmaktadır:",
      "footerDescription": "Ayrıca, mobil uygulama geliştirme konusunda da deneyimliyim ve müşterilerime işlerinde tam hizmet sunmaktayım. Eğer siz de mobil uygulama veya web sitesi ihtiyacınız varsa, profesyonel hizmet ve yaratıcı çözümlerle projenizi hayata geçirmek için benimle iletişime geçebilirsiniz.",
      "subcontent": [
        {
          "id": 1,
          "subtitle": "Çeşitli Sektörlerle Çalışma Deneyimi:",
          "subdescription": "Eğlence, sağlık, e-ticaret, eğitim ve daha fazlası gibi farklı sektörlerden müşterilerle çalışarak, geniş bir yelpazede web projeleri geliştirdim."
        },
        {
          "id": 2,
          "subtitle": "Proje Yönetimi ve İletişim Becerileri:",
          "subdescription": "Müşterilerle etkili iletişim kurma, gereksinimleri anlama ve proje sürecini yönetme yeteneklerimi geliştirdim."
        },
        {
          "id": 3,
          "subtitle": "Yaratıcı Çözümler Üretme:",
          "subdescription": "Müşterilerimin ihtiyaçlarına uygun özgün tasarımlar ve özelleştirilmiş web çözümleri sunarak, markalarının dijital varlıklarını güçlendirmelerine yardımcı oldum."
        }
      ]
    },
    en: {
      "id": 1,
      "title": "Mobile Application & Full-Stack Developer",
      "description": "Hello! I'm Emirhan DOĞRU, a professional web designer and mobile application developer. I work as a freelancer, providing unique and impressive web solutions to clients from various sectors. In every project, I work with passion and precision to create modern and user-friendly websites tailored to my clients' needs. During my time working as a freelancer, I gained experience in the following areas:",
      "footerDescription": "I also have experience in mobile application development and provide full-service to my clients in their projects. If you need a mobile application or website, you can contact me to bring your project to life with professional service and creative solutions.",
      "subcontent": [
        {
          "id": 1,
          "subtitle": "Experience Working with Various Industries:",
          "subdescription": "I have developed web projects in a wide range of sectors, including entertainment, health, e-commerce, education, and more, by working with clients from different industries."
        },
        {
          "id": 2,
          "subtitle": "Project Management and Communication Skills:",
          "subdescription": "I have developed skills in effective communication with clients, understanding requirements, and managing project processes."
        },
        {
          "id": 3,
          "subtitle": "Generating Creative Solutions:",
          "subdescription": "By providing original designs and customized web solutions tailored to the needs of my clients, I have helped strengthen their brands' digital presence."
        }
      ]
    }
  }
]

export const educations = [
  {
    id: 1,
    title: {
      tr : "Yazılım Uzmanlığı Sertifika Programı",
      en : "Software Expertise Certification Program"
    },
    years: "2021 - 2022",
    location: "İSTANBUL",
  },
  {
    id: 2,
    title: {
      tr : "Web Tasarımı & PHP Sertifika Programı",
      en : "Web Design & PHP Certification Program"
    },
    years: "2021 - 2022",
    location: "İSTANBUL ",
  },
];

export const social = [
  {
    id: 1,
    text: "Github",
    icon: <Github />,
    href: "https://github.com/emirhan-dogru",
  },

  {
    id: 2,
    text: "Twitter",
    icon: <Twitter />,
    href: "https://twitter.com/eemirhandogru",
  },

  {
    id: 3,
    text: "Instagram",
    icon: <Instagram />,
    href: "https://www.instagram.com/eemirhandogru/",
  },
];
