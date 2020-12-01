import { config } from "dotenv";

config();
const port = process.env.PORT;
const customerPort = process.env.CUSTOMERS_PORT;

export default {
  app: {
    name: process.env.npm_package_name,
    isDevelopment: process.env.NODE_ENV === "development",
    port: (port as unknown) as number
  },

  services: {
    customers: {
      name: "customers",
      apiUrl: process.env.CUSTOMERS_API_URL,
      port: (customerPort as unknown) as number
    }
  }
};
