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
  img?: string;
};

export type Language = 'en' | 'de';

export type Translations = {
  [lang in Language]: {
    heading: string;
    paragraph: string;
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
      communityText: string;
    };
    footer: {
      columns: { heading: string; items: string[] }[];
      copyright: string;
    };
  };
};
