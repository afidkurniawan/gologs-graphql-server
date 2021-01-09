/* eslint-disable camelcase */
/* naming convention disable, caused by external service */

import { ApolloServer } from "apollo-server";
import { Container } from "typedi";

import buildFederatedSchema from "../../helpers/buildFederatedSchema";
import Bc_Container from "./models/Bc_Container";
import ContainerResolver from "./resolvers/containerResolver";

import BeacukaiApi from "./beacukai";

import config from "./config";

export default async function listen(port: number): Promise<string> {
  const schema = await buildFederatedSchema({
    resolvers: [ContainerResolver],
    orphanedTypes: [Bc_Container],
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
