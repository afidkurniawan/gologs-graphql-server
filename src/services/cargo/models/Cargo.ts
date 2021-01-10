import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export default class Cargo {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  billOfLanding?: Document;

  @Field({ nullable: true })
  blDate?: Date;

  @Field({ nullable: true })
  blNumber?: string;

  @Field({ nullable: true })
  consigneeName?: string;

  @Field({ nullable: true })
  letterOfIndemnity?: Document;

  @Field({ nullable: true })
  shipName: string;

  @Field({ nullable: true })
  shipperName?: number;

  @Field({ nullable: true })
  voyageNumber: string;
}
