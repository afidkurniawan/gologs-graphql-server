/* eslint-disable camelcase */
/* naming convention disable, caused by external service */
import { Arg, ID, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import BeacukaiApi from "../beacukai";
import Bc_Container from "../models/Bc_Container";

@Service()
@Resolver(Bc_Container)
export default class ContainerResolver {
  constructor(private beacukaiApi: BeacukaiApi) {}

  @Query(() => [Bc_Container])
  // eslint-disable-next-line @typescript-eslint/naming-convention
  async bc_containers(
    @Arg("blNumber", () => ID) blNumber: string,
    @Arg("blDate") blDate: string
  ): Promise<Bc_Container[]> {
    return this.beacukaiApi.getContainers(blNumber, blDate);
  }
}
