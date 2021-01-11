import { RESTDataSource } from "apollo-datasource-rest";
import { Service } from "typedi";

import Container from "./models/Bc_Container";
import config from "./config";

@Service()
export default class BeacukaiApi extends RESTDataSource {
  constructor() {
    super();
    super.baseURL = config.services.beacukai.apiUrl;
  }

  async getContainers(blNumber: string, blDate: string): Promise<Container[]> {
    const result = await super.get(
      `${config.services.beacukai.containerPath}/${blNumber}/${blDate}`);
    const key = Object.keys(result)[0];
    return result[key];
  }
}
