const withImages = require("next-images");
module.exports = withImages({
  inlineImageLimit: 100,
  webpack(config, options) {
    return config;
  },
});

// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ["@svgr/webpack"],
//     });

//     return config;
//   },
// };
