import { Arg, ID, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import BeacukaiApi from "../beacukaiApi";
import ExtBcContainer from "../models/Container";

@Service()
@Resolver(ExtBcContainer)
export default class ContainerResolver {
  constructor(private beacukaiApi: BeacukaiApi) {}

  @Query(() => [ExtBcContainer])
  async extBcContainers(
    @Arg("blNumber", () => ID) blNumber: string,
    @Arg("blDate") blDate: string
  ): Promise<ExtBcContainer[]> {
    return this.beacukaiApi.getContainers(blNumber, blDate);
  }
}
