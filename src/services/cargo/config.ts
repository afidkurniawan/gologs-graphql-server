import { config } from "dotenv";

config();
const port = process.env.PORT;
const cargoPort = process.env.CARGO_PORT;
const beacukaiContainerPath = process.env.BEACUKAI_CONTAINER_PATH;

export default {
  app: {
    name: process.env.npm_package_name,
    isDevelopment: process.env.NODE_ENV === "development",
    port: (port as unknown) as number
  },

  services: {
    cargo: {
      name: "cargo",
      apiUrl: process.env.CARGO_API_URL,
      containerPath: beacukaiContainerPath,
      port: (cargoPort as unknown) as number
    }
  }
};
