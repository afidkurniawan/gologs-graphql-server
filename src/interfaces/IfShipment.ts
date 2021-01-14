import Shipment from "../services/cargo/models/Shipment";

export interface IfShipment {
  transformToShipment(): Promise<Shipment>;
}
