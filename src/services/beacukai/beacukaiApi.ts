import { RESTDataSource } from "apollo-datasource-rest";
import { Service } from "typedi";

import Cargo from "./models/Cargo";
import config from "./config";

@Service()
export default class BeacukaiApi extends RESTDataSource {
  constructor() {
    super();
    super.baseURL = config.services.beacukai.apiUrl;
  }

  async getCargo(blNumber: string, blDate: string): Promise<Cargo> {
    return super.get(`kontainerbc20All/${blNumber}/${blDate}`);
  }
}
