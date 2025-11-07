import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsActivitiesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_activities_sections';
  info: {
    displayName: 'ActivitiesSection';
  };
  attributes: {};
}

export interface SectionsCardSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_card_sections';
  info: {
    displayName: 'CardSection';
  };
  attributes: {};
}

export interface SectionsCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_cta_sections';
  info: {
    displayName: 'CTASection';
  };
  attributes: {
    card: Schema.Attribute.Component<'shared.card', false>;
    image: Schema.Attribute.Component<'shared.media', false>;
    link: Schema.Attribute.String;
  };
}

export interface SectionsGallerySection extends Struct.ComponentSchema {
  collectionName: 'components_sections_gallery_sections';
  info: {
    displayName: 'GallerySection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Component<'shared.media', false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSegmentsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_segments_sections';
  info: {
    displayName: 'SegmentsSection';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSliderSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_slider_sections';
  info: {
    displayName: 'SliderSection';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTeachingSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_teaching_sections';
  info: {
    displayName: 'TeachingSection';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonial_sections';
  info: {
    displayName: 'TestimonialSection';
  };
  attributes: {};
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
    icon: 'bold';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
    icon: 'crown';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    desktop: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mobile: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    tablet: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.activities-section': SectionsActivitiesSection;
      'sections.card-section': SectionsCardSection;
      'sections.cta-section': SectionsCtaSection;
      'sections.gallery-section': SectionsGallerySection;
      'sections.hero-section': SectionsHeroSection;
      'sections.segments-section': SectionsSegmentsSection;
      'sections.slider-section': SectionsSliderSection;
      'sections.teaching-section': SectionsTeachingSection;
      'sections.testimonial-section': SectionsTestimonialSection;
      'shared.button': SharedButton;
      'shared.card': SharedCard;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
