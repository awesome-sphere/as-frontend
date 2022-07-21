module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    host: "0.0.0.0",
    port: 5555,
    https: false,
    proxy: {
      "/seating": {
        target: "http://127.0.0.1:9004",
      },
      "/booking": {
        target: "http://127.0.0.1:9009",
      },
      "/movie": {
        target: "http://127.0.0.1:9002",
      },
      "/authen": {
        target: "http://127.0.0.1:9001",
      },
      "/payment": {
        target: "http://127.0.0.1:9003",
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
