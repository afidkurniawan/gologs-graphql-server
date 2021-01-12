import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export default class Container {
  @Field(() => ID)
  containerNumber: string;

  @Field({ nullable: true })
  containerOrder?: number;

  @Field({ nullable: true })
  movementType?: string;

  @Field({ nullable: true })
  sealNumber?: string;

  @Field({ nullable: true })
  size?: number;
}
