module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
};
const withImages = require("next-images");

module.exports = withImages({
  images: {
    disableStaticImages: true,
  },
});
