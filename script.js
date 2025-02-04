const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('open');
});

const translations = {
  en: {
    // English for index.html
    heroTitle: "Empowering businesses",
    heroText:
      "At Green Street Holdings, we partner with small businesses through strategic acquisitions and investments, equipping them with the capital, expertise, and resources to achieve transformative growth. Our mission is to cultivate enduring value and drive impactful, collaborative and long lasting success.",

    // Growth Section
    growthTitle: "We help you grow",
    growthText:
      "We're dedicated to partnering with exceptional businesses to accelerate their growth. We offer a range of investment strategies tailored to your specific needs.",
    growthButton: "Our Services",

    // Services Section
    servicesTitle: "Services", // For <h2>
    servicesHeading: "Services", // For <h1>
    acquisitionTitle: "Acquisitions",
    acquisitionText:
      "We acquire businesses outright, providing the resources and expertise to unlock their full potential.",
    partialOwnershipTitle: "Partial Ownership",
    partialOwnershipText:
      "We invest in promising businesses, taking a significant ownership stake and working closely with management to drive growth.",
    minorityInvestmentsTitle: "Minority Investments",
    minorityInvestmentsText:
      "We provide capital and strategic support to high-growth companies, enabling them to scale and innovate.",
    capitalTitle: "Capital",
    capitalText:
      "We provide access to capital and financial resources to fuel your growth.",
    advisoryTitle: "Advisory Services",
    advisoryText:
      "We offer expert advice to help you identify growth opportunities and develop customize strategies.",
    servicesButton: "About Us",

    // Difference Section
    differenceTitle: "Let's build a brighter future together.",
    differenceText:
      "Ready to take your business to the next level? Contact us today to explore how Green Street Holdings can help you achieve your goals.",
    differenceButton: "Contact Us",

    // Footer
    footerText: "2024 Green Street Holdings. All Rights Reserved.",
    footerEmail: "info@greenstreet-holding.com",

    // English for about.html
    aboutTitle: "About Us",
    aboutSubheading:
      "Driven by a passion for entrepreneurship, Green Street Holdings invests in exceptional businesses. Meet our founders.",
    luchoName: "Lucho Escobedo",
    luchoRole: "Founder & Managing Partner",
    luchoDescription:
      "Lucho is an entrepreneur and strategic leader with over 15 years of experience at the intersection of technology, management consulting, and business innovation. At McKinsey & Company, Lucho honed his skills in solving complex challenges for global organizations, setting the foundation for a career dedicated to transformative leadership. He is the co-founder of several successful ventures, including a data and analytics consulting firm that serves clients across Latin America and the Caribbean, and a consumer goods company renowned for creating premium brands that prioritize authenticity, reputation, and excellence. Additionally, Lucho's new ventures include a company that supports entrepreneurs by providing end-to-end services, from business inception to tax and human capital management, and a hospitality business that delivers immersive nature-based retreats. Through Green Street Holding, Lucho channels his passion for growth and innovation to cultivate exceptional business outcomes and meaningful collaborations.",
    carolName: "Carol Burga",
    carolRole: "Founder & General Partner",
    carolDescription:
      "Carol Burga is Co-founder and General Partner at Green Street Holdings, where she leads impact investment initiatives and channels her expertise to create sustainable and transformative opportunities. As a published author and advocate for responsible investment, Carol plays a pivotal role in shaping the firm’s vision and fostering partnerships that drive meaningful change. With over 15 years of experience empowering Indigenous and local communities in forest nations, Carol has built a reputation as a trusted expert in the Amazon and forestry communities across Southeast Asia and Africa. She holds a Master’s degree in Forestry and Indigenous Peoples, combining scientific knowledge with practical solutions to drive sustainable development and environmental stewardship. Currently, Carol facilitates stakeholder engagement for jurisdictional REDD+ programs worldwide through her role at Emergent, promoting inclusive partnerships for impactful climate solutions.",
    contactButton: "Contact Us",
  },
  es: {
    // Spanish for index.html
    heroTitle: "Empoderando negocios",
    heroText:
      "En Green Street Holdings, nos asociamos con pequeñas empresas a través de adquisiciones e inversiones estratégicas, proporcionándoles el capital, la experiencia y los recursos necesarios para lograr un crecimiento transformador. Nuestra misión es crear valor que impulse un éxito sostenible en el tiempo.",

    // Growth Section
    growthTitle: "Te ayudamos a crecer",
    growthText:
      "Nos dedicamos a asociarnos con empresas excepcionales para acelerar su crecimiento. Ofrecemos una variedad de estrategias de inversión adaptadas a sus necesidades específicas.",
    growthButton: "Nuestros Servicios",

    // Services Section
    servicesTitle: "Servicios", // For <h2>
    servicesHeading: "Servicios", // For <h1>
    acquisitionTitle: "Adquisiciones",
    acquisitionText:
      "Adquirimos empresas directamente, proporcionando los recursos y la experiencia para desarrollar todo su potencial.",
    partialOwnershipTitle: "Propiedad Parcial",
    partialOwnershipText:
      "Invertimos en empresas con gran potencial, tomando una participación relevante y colaborando estrechamente con sus equipos directivos para crear valor e impulsar su crecimiento.",
    minorityInvestmentsTitle: "Inversiones Minoritarias",
    minorityInvestmentsText:
      "Proporcionamos capital y apoyo estratégico a empresas de alto crecimiento, permitiéndoles escalar e innovar.",
    capitalTitle: "Capital",
    capitalText:
      "Proporcionamos acceso a capital y recursos financieros para impulsar su crecimiento.",
    advisoryTitle: "Asesoría",
    advisoryText:
      "Ofrecemos asesoramiento experto para ayudarle a identificar oportunidades de crecimiento y desarrollar estrategias personalizadas.",
    servicesButton: "Sobre Nosotros",

    // Difference Section
    differenceTitle: "Construyamos un futuro más brillante juntos.",
    differenceText:
      "¿Listo para llevar su negocio al siguiente nivel? Contáctenos hoy para explorar cómo Green Street Holdings puede ayudarte a alcanzar sus objetivos.",
    differenceButton: "Contáctenos",

    // Footer
    footerText: "2024 Green Street Holdings. Todos los derechos reservados.",
    footerEmail: "info@greenstreet-holding.com",

    // Spanish for about.html
    aboutTitle: "Sobre Nosotros",
    aboutSubheading:
      "Impulsados por la pasión por el emprendimiento, Green Street Holdings invierte en negocios excepcionales. Conozca a nuestros fundadores.",
    luchoName: "Lucho Escobedo",
    luchoRole: "Fundador y Socio Gerente",
    luchoDescription:
      "Lucho es un empresario y líder estratégico con más de 15 años de experiencia en tecnología, consultoría e innovación empresarial. En McKinsey & Company, Lucho perfeccionó sus habilidades para resolver desafíos complejos para organizaciones globales, sentando las bases para una carrera dedicada al liderazgo transformador. Es cofundador de varias empresas exitosas, incluyendo una firma de consultoría de estrategia de datos que atiende a clientes en América Latina y el Caribe, y una empresa de bienes de consumo reconocida por crear marcas premium que priorizan la autenticidad, la reputación y la excelencia. Además, los nuevos emprendimientos de Lucho incluyen una empresa que apoya a emprendedores brindando servicios integrales, desde la creación de negocios hasta la gestión fiscal y de capital humano, y un negocio de hospitalidad que ofrece retiros inmersivos basados en la naturaleza. A través de Green Street Holding, Lucho canaliza su pasión por el crecimiento y la innovación para cultivar resultados empresariales excepcionales y colaboraciones significativas.",
    carolName: "Carol Burga",
    carolRole: "Fundadora y Socia General",
    carolDescription:
      "Carol Burga es cofundadora y socia general de Green Street Holdings, donde lidera iniciativas de inversión de impacto y canaliza su experiencia para crear oportunidades sostenibles y transformadoras. Como autora publicada y defensora de la inversión responsable, Carol juega un papel fundamental en la configuración de la visión de la firma y en el fomento de asociaciones que impulsan cambios significativos. Con más de 15 años de experiencia empoderando a comunidades indígenas y locales en naciones forestales, Carol se ha ganado una reputación como una experta de confianza en la Amazonía y en comunidades forestales en el sudeste asiático y África. Posee una maestría en Naciones Forestales y Pueblos Indígenas, combinando conocimientos científicos con soluciones prácticas para impulsar el desarrollo sostenible y la gestión ambiental. Actualmente, Carol facilita la participación de las partes interesadas en programas jurisdiccionales de REDD+ en todo el mundo a través de su rol en Emergent, promoviendo asociaciones inclusivas para soluciones climáticas impactantes.",
    contactButton: "Contáctenos",
  },
};

function setLanguage(lang) {
  console.log(`Setting language to: ${lang}`);

  // Hero Section (index.html)
  const heroTitle = document.querySelector(".hero-content h1");
  const heroText = document.querySelector(".hero-content p");
  if (heroTitle) heroTitle.innerText = translations[lang].heroTitle;
  if (heroText) heroText.innerText = translations[lang].heroText;

  // Growth Section (index.html)
  const growthTitle = document.querySelector(".growth-title");
  const growthText = document.querySelector(".growth-description");
  const growthButton = document.querySelector(".growth-btn a");
  if (growthTitle) growthTitle.innerText = translations[lang].growthTitle;
  if (growthText) growthText.innerText = translations[lang].growthText;
  if (growthButton) growthButton.innerText = translations[lang].growthButton;

  // Services Section (index.html)
  const servicesTitle = document.querySelector(".services-title");
  const servicesHeading = document.querySelector(".service-head h1");
  if (servicesTitle) servicesTitle.innerText = translations[lang].servicesTitle;
  if (servicesHeading) servicesHeading.innerText = translations[lang].servicesHeading;

  // Service Items (index.html)
  const serviceTitles = document.querySelectorAll(".service-item h3");
  const serviceDescriptions = document.querySelectorAll(".service-item p");
  if (serviceTitles.length > 0) {
    serviceTitles[0].innerText = translations[lang].acquisitionTitle;
    serviceTitles[1].innerText = translations[lang].partialOwnershipTitle;
    serviceTitles[2].innerText = translations[lang].minorityInvestmentsTitle;
    serviceTitles[3].innerText = translations[lang].capitalTitle;
    serviceTitles[4].innerText = translations[lang].advisoryTitle;
  }
  if (serviceDescriptions.length > 0) {
    serviceDescriptions[0].innerText = translations[lang].acquisitionText;
    serviceDescriptions[1].innerText = translations[lang].partialOwnershipText;
    serviceDescriptions[2].innerText = translations[lang].minorityInvestmentsText;
    serviceDescriptions[3].innerText = translations[lang].capitalText;
    serviceDescriptions[4].innerText = translations[lang].advisoryText;
  }

  // Difference Section (index.html)
  const differenceTitle = document.querySelector(".difference-content h2");
  const differenceText = document.querySelector(".difference-content p");
  const differenceButton = document.querySelector(".about-btn a");
  if (differenceTitle) differenceTitle.innerText = translations[lang].differenceTitle;
  if (differenceText) differenceText.innerText = translations[lang].differenceText;
  if (differenceButton) differenceButton.innerText = translations[lang].differenceButton;

  // Footer (index.html)
  const footerText = document.querySelector(".footer-top ul li");
  const footerEmail = document.querySelector(".footer-bottom a");
  if (footerText) footerText.innerText = translations[lang].footerText;
  if (footerEmail) footerEmail.innerText = translations[lang].footerEmail;

  // About Section (about.html)
  const aboutTitle = document.querySelector(".about-section .service-head h1"); // More specific
  const aboutSubheading = document.querySelector(".about-section .service-head p");
  if (aboutTitle) aboutTitle.innerText = translations[lang].aboutTitle;
  if (aboutSubheading) aboutSubheading.innerText = translations[lang].aboutSubheading;

  // Lucho Escobedo Section (about.html)
  const luchoName = document.querySelectorAll(".about-title")[0];
  const luchoRole = document.querySelectorAll(".about-title2")[0];
  const luchoDescription = document.querySelectorAll(".about-text")[0];
  if (luchoName) luchoName.innerText = translations[lang].luchoName;
  if (luchoRole) luchoRole.innerText = translations[lang].luchoRole;
  if (luchoDescription) luchoDescription.innerText = translations[lang].luchoDescription;

  // Carol Burga Section (about.html)
  const carolName = document.querySelectorAll(".about-title")[1];
  const carolRole = document.querySelectorAll(".about-title2")[1];
  const carolDescription = document.querySelectorAll(".about-text")[1];
  if (carolName) carolName.innerText = translations[lang].carolName;
  if (carolRole) carolRole.innerText = translations[lang].carolRole;
  if (carolDescription) carolDescription.innerText = translations[lang].carolDescription;

  // Button (about.html)
  const contactButton = document.querySelector(".services-button a");
  if (contactButton) contactButton.innerText = translations[lang].contactButton;
}

// Set Default Language
setLanguage("en");

// Add Event Listener to Language Switcher
const languageSwitcher = document.getElementById("language-switcher");
if (languageSwitcher) {
  languageSwitcher.addEventListener("change", function (e) {
    setLanguage(e.target.value);
  });
}