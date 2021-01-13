import { Field, ID, ObjectType } from "type-graphql";

import Container from "./Container";

@ObjectType()
export default class Cargo {
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
  shipName: string;

  @Field({ nullable: true })
  shipperName?: number;

  @Field({ nullable: true })
  voyageNumber: string;

  @Field(() => [Container], { nullable: true })
  containers?: [Container];
}
