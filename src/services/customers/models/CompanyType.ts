import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export default class CompanyType {
  @Field(() => ID)
  id: number;

  @Field()
  typeName: string;
}
