import { IfShipment } from "../interfaces/IfShipment";
import Shipment from "../services/cargo/models/Shipment";
import Container from "../services/cargo/models/Container";
import Beacukai from "../services/external/beacukai/models/Container";

export default class AdBeacukaiToShipment implements IfShipment {
  beacukai: Beacukai[];

  shipment: Shipment = <Shipment>{};

  constructor(beacukai: Beacukai[]) {
    this.beacukai = beacukai;
  }

  async transformToShipment(): Promise<Shipment> {
    this.shipment.blNumber = this.beacukai[0].bl_no;
    this.shipment.billOfLading = this.beacukai[0].jenisMuat;
    this.shipment.blDate = new Date(this.beacukai[0].bl_date);
    this.shipment.billOfLading = this.beacukai[0].jenisMuat;
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
      container.movementType = item.container_type;
      container.sealNumber = item.noSeal;
      container.size = +item.container_size;
      containers.push(container);
    });
    this.shipment.containers = containers;
    return this.shipment;
  }
}
