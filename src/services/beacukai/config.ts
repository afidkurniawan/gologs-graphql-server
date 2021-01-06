import { config } from "dotenv";

config();
const port = process.env.PORT;
const beacukaiPort = process.env.BEACUKAI_PORT;

export default {
  app: {
    name: process.env.npm_package_name,
    isDevelopment: process.env.NODE_ENV === "development",
    port: (port as unknown) as number
  },

  services: {
    beacukai:{
        name: "beacukai",
        apiUrl: process.env.BEACUKAI_API_URL,
        port: (beacukaiPort as unknown) as number,
      }
  }
};
