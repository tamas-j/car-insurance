import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [
      "components/charts/**",
      "components/shimmering-text.tsx",
      ".next/**",
      "node_modules/**",
    ],
  },
  ...nextVitals,
  ...nextTs,
];

export default eslintConfig;
