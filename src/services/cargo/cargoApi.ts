import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

import { Service } from "typedi";

import Cargo from "./models/Cargo";
import config from "./config";

@Service()
export default class CargoApi extends RESTDataSource {
  constructor() {
    super();
    super.baseURL = config.services.cargo.apiUrl;
  }

  async getCargo(blNumber: string, blDate: string): Promise<Cargo> {
    const resp = await super.get(
      `${config.services.cargo.containerPath}/${blNumber}/${blDate}`
    );
    return resp;
  }
}
