import { Stories } from '@storybook/addon-docs/blocks';
import { addParameters } from '@storybook/react';
import { create } from '@storybook/theming';

// Change title of stories
Stories.defaultProps = {
  title: 'Examples'
};

// Themeing should be in manager.js but addon-docs isn't compatible yet
addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Overlay'
    })
  }
});
