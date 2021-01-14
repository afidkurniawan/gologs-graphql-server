import { ApolloServer } from "apollo-server";
import { Container } from "typedi";

import buildFederatedSchema from "../../helpers/buildFederatedSchema";
import Cargo from "./models/Shipment";
import CargoResolver from "./resolvers/cargoResolver";

import CargoApi from "./cargoApi";

import config from "./config";

export default async function listen(port: number): Promise<string> {
  const schema = await buildFederatedSchema({
    resolvers: [CargoResolver],
    orphanedTypes: [Cargo],
    container: Container
  });

  const server = new ApolloServer({
    schema,
    dataSources: () => ({
      cargoApi: Container.get(CargoApi)
    }),
    tracing: config.app.isDevelopment,
    playground: config.app.isDevelopment
  });

  const { url } = await server.listen({ port });
  console.log(`${config.services.cargo.name} service ready at ${url}`);

  return url;
}
