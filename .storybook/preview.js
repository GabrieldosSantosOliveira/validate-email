import { themes } from '@storybook/theming';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { GlobalStyles } from '../src/styles/global';

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  docs: {
    theme: themes.dark
  }
};
export const decorators = [
  Story => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
];
