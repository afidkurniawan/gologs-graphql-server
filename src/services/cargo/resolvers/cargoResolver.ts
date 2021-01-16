import { Arg, ID, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import CargoApi from "../cargoApi";
import Shipment from "../models/Shipment";

@Service()
@Resolver(Shipment)
export default class CargoResolver {
  constructor(private cargoApi: CargoApi) {}

  @Query(() => Shipment)
  async cargo(
    @Arg("blNumber", () => ID) blNumber: string,
    @Arg("blDate") blDate: string
  ): Promise<Shipment> {
    return this.cargoApi.getCargo(blNumber, blDate);
  }
}
