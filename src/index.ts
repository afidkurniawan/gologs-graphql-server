import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { ApolloGateway, GatewayConfig } from "@apollo/gateway";

import customersService from "./services/customers";
import beacukaiService from "./services/external/beacukai";

import config from "./config";

async function main() {
  const gatewayOptions: GatewayConfig = {
    debug: config.app.isDevelopment,
    serviceList: [
      {
        name: "customers",
        url: await customersService(config.services.customers.port)
      },
      {
        name: "beacukai",
        url: await beacukaiService(config.services.beacukai.port)
      }
    ]
  };

  const { schema, executor } = await new ApolloGateway(gatewayOptions).load();
  const server = new ApolloServer({
    schema,
    executor,
    tracing: config.app.isDevelopment,
    playground: config.app.isDevelopment
  });

  server.listen({ port: config.app.port }).then(({ url }) => {
    console.log(`🚀  ${config.app.name} ready at ${url}`);
  });
}

main().catch(error => {
  console.log(error, "error");
});
