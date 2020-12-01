import { ApolloServer } from "apollo-server";
import { Container } from "typedi";

import buildFederatedSchema from "../../helpers/buildFederatedSchema";
import Company from "./models/Company";
import CompanyType from "./models/CompanyType";
import CompanyResolver from "./resolvers/companyResolver";
import CompanyTypeResolver from "./resolvers/companyTypeResolver";
import CustomerApi from "./customerApi";

import config from "./config";

export default async function listen(port: number): Promise<string> {
  const schema = await buildFederatedSchema({
    resolvers: [CompanyResolver, CompanyTypeResolver],
    orphanedTypes: [Company, CompanyType],
    container: Container
  });

  const server = new ApolloServer({
    schema,
    dataSources: () => ({
      customerApi: Container.get(CustomerApi)
    }),
    tracing: config.app.isDevelopment,
    playground: config.app.isDevelopment
  });

  const { url } = await server.listen({ port });
  console.log(`${config.services.customers.name} service ready at ${url}`);

  return url;
}
