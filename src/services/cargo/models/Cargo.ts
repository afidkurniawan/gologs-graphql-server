import { Field, ID, ObjectType } from "type-graphql";

import GContainer from "./GContainer";

@ObjectType()
export default class Cargo {
  @Field(() => ID)
  blNumber: string;

  @Field({ nullable: true })
  billOfLanding?: string;

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

  @Field(() => GContainer, { nullable: true })
  gContainer?: GContainer;
}
