// Types for ViennaFlow React Page

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  img?: string;
};

export type FeatureDescription = {
  heading: string;
  text: string;
  img?: string; // Optional image property
}

export type Language = 'en' | 'de';

export type ImprintItem = {
  label: string;
  value: string; // Can contain simple text or HTML like <a> tags
  isHtml?: boolean; // Optional flag if value is known to be HTML
};

export type ImprintPageTranslations = {
  backButton: string;
  heading: string;
  items: ImprintItem[] | undefined;
  projectNote?: string;
}

export interface AboutPageTranslations {
  heading: string;
  intro: string;
  contributions?: {
    [key: string]: string; // e.g., projectLeadFullStack: 'Project Lead & Full-Stack Development'
  };
  universities?: {
    [key: string]: string; // e.g., uasTechnikumWien: 'UAS Technikum Wien'
  };
  // Potentially add teamMemberRoleHeader or similar if needed for table/list headers
}

export type PrivacyPageSection = {
  title?: string; // Optional title for sections
  content: string; // Allows HTML
};

export type PrivacyPageTranslations = {
  backButton: string;
  heading: string;
  sections: PrivacyPageSection[];
};

export type Translations = {
  [lang in Language]: {
    heading: string;
    paragraph: string;
    nav?: {
      about?: string;
    };
    button: string;
    feature: {
      block: {
        text1: string;
        text2: string;
        text3: string;
      };
      descriptions: FeatureDescription[];
    };
    featureSlider: {
      text1: string;
      text2: string;
      text3: string;
    };
    newsletter: {
      heading: string;
      subheading: string;
      placeholder: string;
      button: string;
      validationError?: string;
      successMessage?: string;
      errorMessage?: string;
      networkError?: string;
      submittingButton?: string;
    };
    footer: {
      columns: { heading: string; items: string[] }[];
      copyright: string;
      imprintLink?: string;
      privacyLink?: string;
    };
    imprintPage?: ImprintPageTranslations;
    privacyPage?: PrivacyPageTranslations;
    aboutPage?: AboutPageTranslations;
  };
};
