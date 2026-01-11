import type { Schema, Struct } from '@strapi/strapi';

export interface SharedHeroSlide extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_slides';
  info: {
    displayName: 'Hero Slide';
    icon: 'image';
  };
  attributes: {
    body: Schema.Attribute.Text;
    ctaLabel: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
  };
}

export interface SharedInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_info_cards';
  info: {
    displayName: 'Info Card';
    icon: 'information';
  };
  attributes: {
    body: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedNavLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_links';
  info: {
    displayName: 'Nav Link';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    newTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.hero-slide': SharedHeroSlide;
      'shared.info-card': SharedInfoCard;
      'shared.nav-link': SharedNavLink;
    }
  }
}
