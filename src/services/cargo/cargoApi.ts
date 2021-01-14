import { RESTDataSource } from "apollo-datasource-rest";
import { Service } from "typedi";
import AdBeacukaiToShipment from "../../adapters/AdBeacukaiToShipment";

import Shipment from "./models/Shipment";
import config from "./config";

@Service()
export default class CargoApi extends RESTDataSource {
  constructor() {
    super();
    super.baseURL = config.services.cargo.apiUrl;
  }

  async getCargo(blNumber: string, blDate: string): Promise<Shipment> {
    const req = await super.post("graphql", {
      query: `query{extBcContainers(blNumber:"${blNumber}", blDate:"${blDate}"){container_size pelabuhan_bongkar bl_no seriContainer pelabuhan_akhir noSeal pelabuhan_transit nama_shipper nama_sarana_pengangkut pelabuhan_asal pelabuhan_berikut pelabuhan_muat bl_date notify_penerima no_voyage container_no jenisMuat container_type consignee_pemilik}}`
    });
    const adBeacukaiToShipment = new AdBeacukaiToShipment(
      req.data.extBcContainers
    );
    return adBeacukaiToShipment.transformToShipment();
  }
}
