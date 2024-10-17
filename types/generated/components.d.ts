import type { Struct, Schema } from '@strapi/strapi';

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Schema.Attribute.String;
    body: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface ComponentTags extends Struct.ComponentSchema {
  collectionName: 'components_component_tags';
  info: {
    displayName: 'Tags';
    description: '';
  };
  attributes: {
    price: Schema.Attribute.Integer;
    pax: Schema.Attribute.Integer;
    prepTime: Schema.Attribute.Integer;
    cookTime: Schema.Attribute.Integer;
    cuisineType: Schema.Attribute.String;
    difficulty: Schema.Attribute.String;
  };
}

export interface ComponentRecipestep extends Struct.ComponentSchema {
  collectionName: 'components_component_recipesteps';
  info: {
    displayName: 'recipestep';
    description: '';
  };
  attributes: {
    number: Schema.Attribute.Integer;
    steps: Schema.Attribute.Text;
  };
}

export interface ComponentRecipeDetail extends Struct.ComponentSchema {
  collectionName: 'components_component_recipe_details';
  info: {
    displayName: 'recipeDetail';
    icon: 'restaurant';
    description: '';
  };
  attributes: {
    number: Schema.Attribute.Integer;
    steps: Schema.Attribute.RichText;
  };
}

export interface ComponentIngredients extends Struct.ComponentSchema {
  collectionName: 'components_component_ingredients';
  info: {
    displayName: 'Ingredient';
    description: '';
  };
  attributes: {
    name: Schema.Attribute.String;
    imageUrl: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isRequired: Schema.Attribute.Boolean;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'component.tags': ComponentTags;
      'component.recipestep': ComponentRecipestep;
      'component.recipe-detail': ComponentRecipeDetail;
      'component.ingredients': ComponentIngredients;
    }
  }
}
