import { Field, ID, ObjectType } from "type-graphql";
import Container from "./Container";

@ObjectType()
export default class Cargo {
  @Field(() => ID, { nullable: true })
  blNumber?: string;

  @Field({ nullable: true })
  portOfDischarge?: string;

  @Field({ nullable: true })
  portOfLoading?: string;

  @Field({ nullable: true })
  shippingDate?: string;

  @Field({ nullable: true })
  vesselName?: string;

  @Field({ nullable: true })
  voyageNumber?: string;

  @Field(() => [Container], { nullable: true })
  contaier?: [Container];
}
