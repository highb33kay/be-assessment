import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Bookstore API API Documentation",
      version: "1.0.0",
      description: "API for Bookstore API API End Point Documentation",
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1",
        description: "Local server",
      },
      {
        url: "https://be-assessment.onrender.com/api/v1",
        description: "Live server",
      },
    ],
    license: {
      name: "Apache 2.0",
      url: "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    // security: [
    //   {
    //     bearerAuth: [],
    //   },
    // ],
  },
  apis: ["./src/routes/api/v1/*.route.ts"],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
