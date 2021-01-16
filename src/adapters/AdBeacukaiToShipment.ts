import { IfShipment } from "../interfaces/IfShipment";
import Shipment from "../services/cargo/models/Shipment";
import Container from "../services/cargo/models/Container";
import ExtContainer from "../services/external/beacukai/models/Container";

export default class AdBeacukaiToShipment implements IfShipment {
  beacukai: ExtContainer[];

  shipment: Shipment = <Shipment>{};

  constructor(beacukai: ExtContainer[]) {
    this.beacukai = beacukai;
  }

  async transformToShipment(): Promise<Shipment> {
    this.shipment.blNumber = this.beacukai[0].bl_no;
    this.shipment.blDate = new Date(this.beacukai[0].bl_date);
    this.shipment.consigneeName = this.beacukai[0].consignee_pemilik;
    this.shipment.shipName = this.beacukai[0].nama_sarana_pengangkut;
    this.shipment.shipperName = this.beacukai[0].nama_shipper;
    this.shipment.voyageNumber = this.beacukai[0].no_voyage;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const containers: any = [];
    this.beacukai.forEach(item => {
      const container: Container = <Container>{};
      container.containerNumber = item.container_no;
      container.containerOrder = +item.seriContainer;
      container.movementType = item.jenisMuat;
      container.sealNumber = item.noSeal;
      container.size = +item.container_size;
      containers.push(container);
    });
    this.shipment.containers = containers;
    return this.shipment;
  }
}
