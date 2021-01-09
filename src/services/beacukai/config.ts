import { config } from "dotenv";

config();
const port = process.env.PORT;
const beacukaiUrl = process.env.BEACUKAI_API_URL;
const beacukaiPort = process.env.BEACUKAI_PORT;
const beacukaiPathPerfix = process.env.BEACUKAI_PATH_PERFIX;

export default {
  app: {
    name: process.env.npm_package_name,
    isDevelopment: process.env.NODE_ENV === "development",
    port: (port as unknown) as number
  },

  services: {
    beacukai: {
      name: "beacukai",
      apiUrl: beacukaiUrl,
      pathPerfix: beacukaiPathPerfix,
      port: (beacukaiPort as unknown) as number
    }
  }
};
