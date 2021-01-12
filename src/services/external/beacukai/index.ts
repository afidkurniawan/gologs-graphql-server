import { ApolloServer } from "apollo-server";
import { Container } from "typedi";

import buildFederatedSchema from "../../../helpers/buildFederatedSchema";
import BcContainer from "./models/Container";
import ContainerResolver from "./resolvers/containerResolver";

import BeacukaiApi from "./beacukaiApi";

import config from "./config";

export default async function listen(port: number): Promise<string> {
  const schema = await buildFederatedSchema({
    resolvers: [ContainerResolver],
    orphanedTypes: [BcContainer],
    container: Container
  });

  const server = new ApolloServer({
    schema,
    dataSources: () => ({
      beacukaiApi: Container.get(BeacukaiApi)
    }),
    tracing: config.app.isDevelopment,
    playground: config.app.isDevelopment
  });

  const { url } = await server.listen({ port });
  console.log(`${config.services.beacukai.name} service ready at ${url}`);

  return url;
}
