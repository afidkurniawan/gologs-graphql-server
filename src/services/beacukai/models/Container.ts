import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class Container{
    @Field()
    size: string;
}