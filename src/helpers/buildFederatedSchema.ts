import { GraphQLSchema, specifiedDirectives } from "graphql";
import federationDirectives from "@apollo/federation/dist/directives";
import gql from "graphql-tag";
import {
  printSchema,
  buildFederatedSchema as buildApolloFederatedSchema
} from "@apollo/federation";
import { addResolversToSchema, GraphQLResolverMap } from "apollo-graphql";
import {
  buildSchema,
  BuildSchemaOptions,
  createResolversMap
} from "type-graphql";

export default async function buildFederatedSchema(
  options: Omit<BuildSchemaOptions, "skipCheck">,
  referenceResolvers?: GraphQLResolverMap
): Promise<GraphQLSchema> {
  const schema = await buildSchema({
    ...options,
    directives: [
      ...specifiedDirectives,
      ...federationDirectives,
      ...(options.directives || [])
    ],
    skipCheck: true
  });

  const federatedSchema = buildApolloFederatedSchema({
    typeDefs: gql(printSchema(schema)),
    resolvers: createResolversMap(schema) as GraphQLResolverMap
  });

  if (referenceResolvers) {
    addResolversToSchema(federatedSchema, referenceResolvers);
  }
  return federatedSchema;
}
