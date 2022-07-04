module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    host: "0.0.0.0",
    port: 5555,
    https: false,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:9000",
      },
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
};
