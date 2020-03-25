import commonjs from "rollup-plugin-commonjs"; // Convert CommonJS modules to ES6
import babel from "rollup-plugin-babel";

export default {
  input: "src/index.js", // Path relative to package.json
  output: {
    file: "bundle.js",
    name: "VueDatoCms",
    globals: {
      "@znck/prop-types": "PropTypes",
    },
  },
  external: ["@znck/prop-types"],
  plugins: [
    babel({
      exclude: "node_modules/**",
      runtimeHelpers: true,
    }),
    commonjs(),
  ],
};
