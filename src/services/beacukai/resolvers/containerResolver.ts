import { Arg, ID, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import BeacukaiApi from "../beacukaiApi";

import Container from "../models/Container";

@Service()
@Resolver(Container)
export default class ContainerResolver {
  constructor(private beacukaiApi: BeacukaiApi) {}

  @Query(() => [Container])
  async container(
    @Arg("blNumber", () => ID) blNumber: string,
    @Arg("blDate") blDate: string
  ): Promise<Container[]> {
    return this.beacukaiApi.getContainer(blNumber, blDate);
  }
}
