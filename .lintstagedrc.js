const path = require('path');

const buildEslintCommand = filenames => {
  return [
    `next lint --fix --max-warnings=0 `,
    `yarn test related ${filenames.map(f =>
      path.relative(process.cwd(), f)
    )}  --passWithNoTests`,
    ``
  ];
};

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand]
};
