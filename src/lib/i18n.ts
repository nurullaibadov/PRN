import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        about: "About",
        skills: "Skills",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact"
      },
      hero: {
        greeting: "Hi, I'm",
        role: "Middle Software Developer",
        downloadResume: "Download Resume",
        contactMe: "Contact Me"
      },
      about: {
        title: "About Me"
      },
      skills: {
        title: "My Skills"
      },
      experience: {
        title: "Work Experience"
      },
      projects: {
        title: "Featured Projects"
      },
      contact: {
        title: "Get In Touch"
      }
    }
  },
  az: {
    translation: {
      nav: {
        about: "Haqqımda",
        skills: "Bacarıqlar",
        experience: "Təcrübə",
        projects: "Layihələr",
        contact: "Əlaqə"
      },
      hero: {
        greeting: "Salam, mən",
        role: "Proqram Təminatı Tərtibatçısı",
        downloadResume: "CV-ni Yüklə",
        contactMe: "Mənimlə Əlaqə"
      },
      about: {
        title: "Haqqımda"
      },
      skills: {
        title: "Bacarıqlarım"
      },
      experience: {
        title: "İş Təcrübəsi"
      },
      projects: {
        title: "Seçilmiş Layihələr"
      },
      contact: {
        title: "Əlaqə Saxlayın"
      }
    }
  },
  ru: {
    translation: {
      nav: {
        about: "Обо мне",
        skills: "Навыки",
        experience: "Опыт",
        projects: "Проекты",
        contact: "Контакт"
      },
      hero: {
        greeting: "Привет, я",
        role: "Middle Разработчик ПО",
        downloadResume: "Скачать резюме",
        contactMe: "Связаться"
      },
      about: {
        title: "Обо мне"
      },
      skills: {
        title: "Мои навыки"
      },
      experience: {
        title: "Опыт работы"
      },
      projects: {
        title: "Избранные проекты"
      },
      contact: {
        title: "Свяжитесь со мной"
      }
    }
  },
  tr: {
    translation: {
      nav: {
        about: "Hakkımda",
        skills: "Yetenekler",
        experience: "Deneyim",
        projects: "Projeler",
        contact: "İletişim"
      },
      hero: {
        greeting: "Merhaba, ben",
        role: "Yazılım Geliştirici",
        downloadResume: "CV İndir",
        contactMe: "Bana Ulaşın"
      },
      about: {
        title: "Hakkımda"
      },
      skills: {
        title: "Yeteneklerim"
      },
      experience: {
        title: "İş Deneyimi"
      },
      projects: {
        title: "Öne Çıkan Projeler"
      },
      contact: {
        title: "İletişime Geçin"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
