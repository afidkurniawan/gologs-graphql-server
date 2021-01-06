import { RESTDataSource } from "apollo-datasource-rest";
import { Service } from "typedi";

import Cargo from './models/Cargo';
import config from "./config";

@Service()
export default class BeacukaiApi extends RESTDataSource {
  constructor() {
    super();
    super.baseURL = config.services.beacukai.apiUrl;
  }

  async getCargo(blNumber: string, blDate:string): Promise<Cargo> {

    let result = await super.get(`kontainerbc20All/${blNumber}/${blDate}`);
    let obj = result[Object.keys[result]]
    let custom = {};

    custom['blNumber'] = obj[0].bl_no;
    custom['portOfDischarge'] = obj[0].pelabuhan_transit;
    custom['portOfLoading'] = obj[0].pelabuhan_muat;
    custom['shippingDate'] = obj[0].bl_date;
    custom['vesselName'] = obj[0].nama_sarana_pengangkut;
    result[Object.keys(result)].forEach(item => {	

      let item = {};
      item['size'] = item.container_size;
      custom['Container'].push(item);
    });

    return obj;
  }
}