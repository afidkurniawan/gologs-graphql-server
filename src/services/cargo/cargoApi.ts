/* eslint-disable no-plusplus */
/* eslint-disable radix */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { RESTDataSource } from "apollo-datasource-rest";

import { Service } from "typedi";

import Cargo from "./models/Shipment";
import config from "./config";

@Service()
export default class CargoApi extends RESTDataSource {
  constructor() {
    super();
    super.baseURL = config.services.cargo.apiUrl;
  }

  async getCargo(blNumber: string, blDate: string): Promise<Cargo> {
    const req = await super.post("graphql", {
      query: `query{extBcContainers(blNumber:"${blNumber}", blDate:"${blDate}"){container_size pelabuhan_bongkar bl_no seriContainer pelabuhan_akhir noSeal pelabuhan_transit nama_shipper nama_sarana_pengangkut pelabuhan_asal pelabuhan_berikut pelabuhan_muat bl_date notify_penerima no_voyage container_no jenisMuat container_type consignee_pemilik}}`
    });
    const raw: any = req.data.extBcContainers;
    const transformed: any = {};
    if (raw) {
      transformed.blNumber = raw[0].bl_no;
      transformed.billOfLading = raw[0].jenisMuat;
      transformed.blDate = raw[0].bl_date;
      transformed.consigneeName = raw[0].consignee_pemilik;
      transformed.shipName = raw[0].nama_sarana_pengangkut;
      transformed.shipperName = raw[0].nama_shipper;
      transformed.voyageNumber = raw[0].no_voyage;
      const containers: any = [];
      req.data.extBcContainers.forEach((item: any) => {
        const container: any = {};
        container.containerNumber = item.container_no;
        container.containerOrder = parseInt(item.seriContainer);
        container.movementType = item.container_type;
        container.sealNumber = item.noSeal;
        container.size = parseInt(item.container_size);
        containers.push(container);
      });
      transformed.containers = containers;
    }
    return transformed;
  }
}
