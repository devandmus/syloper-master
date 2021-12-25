module.exports = {
  core: {
    builder: 'webpack5',
  },
  features: {
    postcss: false,
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}