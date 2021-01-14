import { Field, ID, ObjectType } from "type-graphql";

import Container from "./Container";

@ObjectType()
export default class Shipment {
  @Field(() => ID)
  blNumber: string;

  @Field({ nullable: true })
  billOfLading?: string;

  @Field({ nullable: true })
  blDate?: Date;

  @Field({ nullable: true })
  consigneeName?: string;

  @Field({ nullable: true })
  letterOfIndemnity?: string;

  @Field({ nullable: true })
  shipName?: string;

  @Field({ nullable: true })
  shipperName?: string;

  @Field({ nullable: true })
  voyageNumber?: string;

  @Field(() => [Container])
  containers: [Container];
}
