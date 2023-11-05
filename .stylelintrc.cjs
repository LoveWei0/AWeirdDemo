module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  overrides: [
    {
      files: ['**/*.(scss|css|react|html)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|react)'],
      customSyntax: 'postcss-html',
    },
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.ts',
    '**/*.tsx',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
  ],
  rules: {
    'no-descending-specificity': null,
    'no-empty-source': null,
    'selector-class-pattern': null,
    'property-no-unknown': null,
    'value-no-vendor-prefix': null,
    'property-no-vendor-prefix': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep'],
      },
    ],
  },
}
