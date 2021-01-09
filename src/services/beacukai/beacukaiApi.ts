import { RESTDataSource } from "apollo-datasource-rest";
import { Service } from "typedi";

import Container from "./models/Container";
import config from "./config";

@Service()
export default class BeacukaiApi extends RESTDataSource {
  constructor() {
    super();
    super.baseURL = config.services.beacukai.apiUrl;
  }

  async getContainer(blNumber: string, blDate: string): Promise<Container[]> {
    const result = await super.get(`
    ${config.services.beacukai.pathPerfix}/${blNumber}/${blDate}`);
    const key = Object.keys(result)[0];
    return result[key];
  }
}
