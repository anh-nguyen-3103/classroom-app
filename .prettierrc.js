module.exports = {
  arrowParens: 'avoid', // omit parens when possible (x => x)
  bracketSameLine: true, // put > of JSX closing tag on same line
  bracketSpacing: true, // add spacing inside object literals { foo: bar }
  singleQuote: true, // use single quotes
  trailingComma: 'all', // add trailing commas wherever possible
  semi: true, // always add semicolons
  printWidth: 100, // wrap lines after 100 chars (good for RN/TS)
  tabWidth: 2, // use 2 spaces per tab
  useTabs: false, // don’t use tabs
  endOfLine: 'auto', // maintain current EOL
  jsxSingleQuote: false, // keep double quotes in JSX attributes
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      options: {
        parser: 'typescript',
      },
    },
  ],
};
