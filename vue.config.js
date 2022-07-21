module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    host: "0.0.0.0",
    port: 5555,
    https: false,
    proxy: {
      "/seating": {
        target: "http://as-seating-svc:9004",
      },
      "/booking": {
        target: "http://as-booking-svc:9009",
      },
      "/movie": {
        target: "http://as-general-svc:9002",
      },
      "/authen": {
        target: "http://as-authentication-svc:9001",
      },
      "/payment": {
        target: "http://as-payment-svc:9003",
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
