import { Arg, ID, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import CargoApi from "../cargoApi";
import Cargo from "../models/Shipment";

@Service()
@Resolver(Cargo)
export default class CargoResolver {
  constructor(private cargoApi: CargoApi) {}

  @Query(() => Cargo)
  async cargo(
    @Arg("blNumber", () => ID) blNumber: string,
    @Arg("blDate") blDate: string
  ): Promise<Cargo> {
    return this.cargoApi.getCargo(blNumber, blDate);
  }
}
