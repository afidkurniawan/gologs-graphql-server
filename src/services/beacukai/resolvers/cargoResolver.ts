import { Arg, ID, Query, Resolver, Root } from "type-graphql";
import { Service } from "typedi";
import BeacukaiApi from "../beacukaiApi";

import Cargo from "../models/Cargo";

@Service()
@Resolver(Cargo)
export default class CargoResolver {
  constructor(private beacukaiApi: BeacukaiApi) {}

  @Query(() => Cargo)
  async cargo(
    @Arg("blNumber", () => ID) blNumber: string,
    @Arg("blDate") blDate: string
  ): Promise<Cargo> {
    return this.beacukaiApi.getCargo(blNumber, blDate);
  }
}
