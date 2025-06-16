import { Translations } from './types';

export const translations: Translations = {
  en: {
    heading: "Smart Metro Tracking for Smarter Travel in Vienna.",
    paragraph: "Get live metro updates, arrival times, and route details instantly, ensuring a seamless travel experience.",
    button: "Launch the App",
    nav: {
      about: 'About Us',
    },
    feature: {
      block: {
        text1: "Seamless, Smart, Efficient",
        text2: "Unlock the Power of ViennaFlow",
        text3: "Experience real-time metro insights with ViennaFlow. Navigate the city effortlessly with precise tracking and reliable information at your fingertips."
      },
      descriptions: [
        { heading: "Live Metro Tracking", text: "Stay updated with real-time train locations on an interactive map." },
        { heading: "Find Nearby Stations", text: "Locate the closest metro stations instantly, hassle-free." },
        { heading: "Reliable Arrival Times", text: "Know exactly when your train arrives with precise ETAs." },
        { heading: "Cross-Platform Accessibility", text: "Enjoy seamless access on web and mobile devices." }
      ]
    },
    featureSlider: {
      text1: "Live, Smart, Reliable",
      text2: "A Real-Time Proof of Transit Intelligence",
      text3: "Easily track live metro movements across the city. Get real-time updates, smarter routes, and smoother commutes."
    },
    newsletter: {
      heading: "Get the Latest ViennaFlow Updates",
      subheading: "And be the first to know when our project launches!",
      placeholder: "Enter your Email address",
      button: "Subscribe",
      communityText: "Become part of our ever growing community.",
      validationError: "Please enter a valid email address.",
      successMessage: "A confirmation email has been sent. Please check your inbox to complete your subscription.",
      errorMessage: "Subscription failed. Please try again later.",
      networkError: "A network error occurred. Please check your connection and try again.",
      submittingButton: "Subscribing..."
    },
    footer: {
      columns: [
        { heading: "Privacy&Policy", items: ["Terms of Service", "Customer Support"] }, // "Privacy Policy" removed, will use dedicated key
        { heading: "Contact", items: ["Support center", "Customer Support", "About us"] }
      ],
      copyright: "&copy; {year} ViennaFlow. All Rights Reserved.",
      imprintLink: "Imprint",
      privacyLink: "Privacy Policy"
    },
    imprintPage: {
      backButton: "← Back",
      heading: "Imprint",
      items: [
        { label: "Media Owner and Publisher:", value: "ViennaFlow" },
        { label: "Contact Person:", value: "Peyman Aparviz" },
        { label: "Address:", value: "Höchstädtplatz 6, 1200 Vienna, Austria" },
        { label: "Email:", value: "<a href=\"mailto:info@viennaflow.at\">info@viennaflow.at</a>", isHtml: true },
        { label: "Website:", value: "<a href=\"https://viennaflow.at\">viennaflow.at</a>", isHtml: true },
        { label: "Content Responsibility (according to § 24 Austrian Media Act):", value: "Peyman Aparviz" }
      ],
      projectNote: "This is a non-commercial website created as part of a student project at the <strong>UAS Technikum Wien</strong>, Department of Computer Science."
    },
    aboutPage: {
      heading: 'About Us',
      intro: 'ViennaFlow was an IT project developed by students at UAS Technikum Wien in collaboration with King Mongkut\'s University of Technology North Bangkok (KMUTNB). Meet the team that brought this project to life.',
      contributions: {
        projectLeadFullStack: 'Project Lead & Full-Stack Development',
        databaseDesignTesting: 'Database Design & Testing',
        backendDevelopment: 'Backend Development',
        landingPageLogo: 'Landing Page Development & Logo Design',
        landingPageDev: 'Landing Page Development',
        uiUxDesign: 'UI/UX Design'
      },
      universities: {
        uasTechnikumWien: 'UAS Technikum Wien',
        kmutnb: 'KMUTNB'
      }
    },
    privacyPage: {
      backButton: "← Back",
      heading: "Privacy Policy",
      sections: [
        {
          title: "1. General Information",
          content: "Protecting your personal data is important to us. We process your data exclusively in accordance with legal regulations, including the EU General Data Protection Regulation (GDPR) and the Austrian Data Protection Act (DSG). This policy informs you about the nature, scope, and purpose of personal data processing on this website."
        },
        {
          title: "2. Controller",
          content: "The data controller is:<br /><strong>ViennaFlow</strong><br />Höchstädtplatz 6, 1200 Vienna, Austria<br />Email: <a href=\"mailto:info@viennaflow.at\">info@viennaflow.at</a>"
        },
        {
          title: "3. Hosting (Vercel)",
          content: "Our website is hosted via <strong>Vercel</strong> (vercel.com), a service provided by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. When you visit our website, technical data such as your IP address, browser type, and time of access may be transmitted to Vercel servers. For more information, please refer to <a href=\"https://vercel.com/legal/privacy-policy\" target=\"_blank\" rel=\"noopener noreferrer\">Vercel’s Privacy Policy</a>."
        },
        {
          title: "4. Google Maps",
          content: "We use <strong>Google Maps</strong> to display geographic locations. This service is provided by Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4, Ireland. Using Google Maps may involve the transfer of data (e.g., IP address, location) to Google servers. For details, see <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Google’s Privacy Policy</a>."
        },
        {
          title: "5. Use of Location (GPS)",
          content: "With your permission, we use your device’s geolocation (GPS) to offer location-based services. Your location data is used solely to display relevant content nearby and is not stored or shared. You can deny or revoke this access at any time through your browser or device settings."
        },
        {
          title: "6. User Accounts & Personal Data",
          content: "In the future, we may offer user accounts requiring your name and email address. This data will only be used to provide personalized features such as saving favorites. Your data will not be shared with third parties without your explicit consent."
        },
        {
          title: "7. Data Storage & Security",
          content: "We retain your data only as long as necessary to fulfill the stated purposes or as required by law. We implement appropriate technical and organizational measures to protect your data from unauthorized access or loss."
        },
        {
          title: "8. Your Rights",
          content: "According to the GDPR, you have the right to access, correct, delete, restrict, and transfer your personal data, and to object to certain uses of your data. If you believe that the processing of your data violates data protection laws, you can contact us or file a complaint with the Austrian Data Protection Authority (<a href=\"https://www.dsb.gv.at\" target=\"_blank\" rel=\"noopener noreferrer\">www.dsb.gv.at</a>)."
        }
      ]
    }
  },
  de: {
    heading: "Intelligente U-Bahn-Verfolgung für eine intelligentere Reise in Wien.",
    paragraph: "Erhalten Sie Live-U-Bahn-Updates, Ankunftszeiten und Routendetails sofort für eine nahtlose Reiseerfahrung.",
    button: "App starten",
    nav: {
      about: 'Über uns',
    },
    feature: {
      block: {
        text1: "Nahtlos, Intelligent, Effizient",
        text2: "Entfesseln Sie die Kraft von ViennaFlow",
        text3: "Erleben Sie Echtzeit-Einblicke in die U-Bahn mit ViennaFlow. Navigieren Sie mühelos durch die Stadt mit präzisem Tracking und zuverlässigen Informationen."
      },
      descriptions: [
        { heading: "Live U-Bahn Tracking", text: "Bleiben Sie mit Echtzeit-Zugstandorten auf einer interaktiven Karte auf dem Laufenden." },
        { heading: "Find Nearby Stations", text: "Finden Sie die nächsten U-Bahn-Stationen sofort und problemlos." },
        { heading: "Reliable Arrival Times", text: "Erfahren Sie genau, wann Ihr Zug ankommt, mit präzisen Ankunftszeiten." },
        { heading: "Cross-Platform Accessibility", text: "Genießen Sie nahtlosen Zugriff auf Web- und mobilen Geräten." }
      ]
    },
    featureSlider: {
      text1: "Live, Smart, Reliable",
      text2: "Ein Echtzeit-Nachweis für Transit-Intelligenz",
      text3: "Verfolgen Sie ganz einfach Live-U-Bahn-Bewegungen in der ganzen Stadt. Erhalten Sie Echtzeit-Updates, intelligentere Routen und reibungslosere Pendelfahrten."
    },
    newsletter: {
      heading: "Erhalten Sie die neuesten ViennaFlow-Updates",
      subheading: "Und seien Sie der Erste, der von unserem Projektstart erfährt!",
      placeholder: "Geben Sie Ihre E-Mail-Adresse ein",
      button: "Nachricht senden",
      communityText: "Werden Sie Teil unserer stetig wachsenden Community.",
      validationError: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      successMessage: "Eine Bestätigungs-E-Mail wurde gesendet. Bitte überprüfen Sie Ihren Posteingang, um Ihr Abonnement abzuschließen.",
      errorMessage: "Abonnement fehlgeschlagen. Bitte versuchen Sie es später erneut.",
      networkError: "Ein Netzwerkfehler ist aufgetreten. Bitte überprüfen Sie Ihre Verbindung und versuchen Sie es erneut.",
      submittingButton: "Abonnieren..."
    },
    footer: {
      columns: [
        { heading: "Über uns", items: ["Support Center", "Kundensupport", "Über uns"] },
        { heading: "Feature", items: ["Support Center", "Kundensupport", "Über uns"] },
        { heading: "Kontakte", items: ["Support Center", "Kundensupport", "Über uns"] }
      ],
      copyright: "&copy; {year} ViennaFlow. Alle Rechte vorbehalten.",
      imprintLink: "Impressum",
      privacyLink: "Datenschutz"
    },
    imprintPage: {
      backButton: "← Zurück",
      heading: "Impressum",
      items: [
        { label: "Medieninhaber und Herausgeber:", value: "ViennaFlow" },
        { label: "Kontaktperson:", value: "Peyman Aparviz" },
        { label: "Adresse:", value: "Höchstädtplatz 6, 1200 Wien, Österreich" },
        { label: "E-Mail:", value: "<a href=\"mailto:info@viennaflow.at\">info@viennaflow.at</a>", isHtml: true },
        { label: "Webseite:", value: "<a href=\"https://viennaflow.at\">viennaflow.at</a>", isHtml: true },
        { label: "Inhaltsverantwortung (gemäß § 24 Mediengesetz):", value: "Peyman Aparviz" }
      ],
      projectNote: "Dies ist eine nicht-kommerzielle Webseite, die im Rahmen eines Studentenprojekts an der <strong>FH Technikum Wien</strong>, Fachbereich Informatik, erstellt wurde."
    },
    aboutPage: {
      heading: 'Über Uns',
      intro: 'ViennaFlow war ein IT-Projekt, das von Studierenden der FH Technikum Wien in Zusammenarbeit mit der King Mongkut\'s University of Technology North Bangkok (KMUTNB) entwickelt wurde. Lernen Sie das Team kennen, das dieses Projekt realisiert hat.',
      contributions: {
        projectLeadFullStack: 'Projektleitung & Full-Stack-Entwicklung',
        databaseDesignTesting: 'Datenbankdesign & Testing',
        backendDevelopment: 'Backend-Entwicklung',
        landingPageLogo: 'Landingpage-Entwicklung & Logo-Design',
        landingPageDev: 'Landingpage-Entwicklung',
        uiUxDesign: 'UI/UX-Design'
      },
      universities: {
        uasTechnikumWien: 'FH Technikum Wien',
        kmutnb: 'KMUTNB'
      }
    },
    privacyPage: {
      backButton: "← Zurück",
      heading: "Datenschutzerklärung",
      sections: [
        {
          title: "1. Allgemeine Informationen",
          content: "Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (EU-Datenschutz-Grundverordnung DSGVO, Datenschutzgesetz DSG). Diese Erklärung informiert Sie über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten auf dieser Webseite."
        },
        {
          title: "2. Verantwortlicher",
          content: "Verantwortlicher für die Datenverarbeitung ist:<br /><strong>ViennaFlow</strong><br />Höchstädtplatz 6, 1200 Wien, Österreich<br />E-Mail: <a href=\"mailto:info@viennaflow.at\">info@viennaflow.at</a>"
        },
        {
          title: "3. Hosting (Vercel)",
          content: "Unsere Webseite wird über <strong>Vercel</strong> (vercel.com) gehostet, einen Dienst der Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. Beim Besuch unserer Webseite können technische Daten wie Ihre IP-Adresse, Browsertyp und Zugriffszeit an Server von Vercel übertragen werden. Weitere Informationen finden Sie in der <a href=\"https://vercel.com/legal/privacy-policy\" target=\"_blank\" rel=\"noopener noreferrer\">Datenschutzerklärung von Vercel</a>."
        },
        {
          title: "4. Google Maps",
          content: "Wir verwenden <strong>Google Maps</strong> zur Darstellung geografischer Standorte. Dieser Dienst wird von Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4, Irland, bereitgestellt. Die Nutzung von Google Maps kann die Übertragung von Daten (z.B. IP-Adresse, Standort) an Google-Server beinhalten. Details hierzu finden Sie in der <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener noreferrer\">Datenschutzerklärung von Google</a>."
        },
        {
          title: "5. Nutzung des Standorts (GPS)",
          content: "Mit Ihrer Zustimmung verwenden wir die Geolokalisierung Ihres Geräts (GPS), um standortbezogene Dienste anzubieten. Ihre Standortdaten werden ausschließlich zur Anzeige relevanter Inhalte in Ihrer Nähe verwendet und nicht gespeichert oder weitergegeben. Sie können diesen Zugriff jederzeit über Ihre Browser- oder Geräteeinstellungen verweigern oder widerrufen."
        },
        {
          title: "6. Benutzerkonten & Persönliche Daten",
          content: "Zukünftig bieten wir möglicherweise Benutzerkonten an, für die Ihr Name und Ihre E-Mail-Adresse erforderlich sind. Diese Daten werden nur verwendet, um personalisierte Funktionen wie das Speichern von Favoriten bereitzustellen. Ihre Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben."
        },
        {
          title: "7. Datenspeicherung & Sicherheit",
          content: "Wir speichern Ihre Daten nur so lange, wie es zur Erfüllung der angegebenen Zwecke erforderlich ist oder gesetzlich vorgeschrieben wird. Wir ergreifen geeignete technische und organisatorische Maßnahmen, um Ihre Daten vor unbefugtem Zugriff oder Verlust zu schützen."
        },
        {
          title: "8. Ihre Rechte",
          content: "Gemäß der DSGVO haben Sie das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung und Übertragung Ihrer personenbezogenen Daten sowie auf Widerspruch gegen bestimmte Verwendungen Ihrer Daten. Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen Datenschutzgesetze verstößt, können Sie sich an uns wenden oder eine Beschwerde bei der österreichischen Datenschutzbehörde (<a href=\"https://www.dsb.gv.at\" target=\"_blank\" rel=\"noopener noreferrer\">www.dsb.gv.at</a>) einreichen."
        }
      ]
    }
  }
};
