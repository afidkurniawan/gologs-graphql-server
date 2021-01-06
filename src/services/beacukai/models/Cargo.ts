import { Field, ID, ObjectType } from "type-graphql";
import Container from "./Container";

@ObjectType()
export default class Cargo {
    @Field(() => ID)
    blNumber: string;

    @Field()
    portOfDischarge: string;
    
    @Field()
    portOfLoading: string;
    
    @Field()
    shippingDate: string;

    @Field()
    vesselName: string;

    @Field()
    voyageNumber: string;

    @Field(() => [Container])
    contaier: [Container];
}