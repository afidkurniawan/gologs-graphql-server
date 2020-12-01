import { Field, ID, ObjectType } from "type-graphql";

import CompanyType from "./CompanyType";

@ObjectType()
export default class Company {
  @Field(() => ID)
  id: number;

  @Field()
  companyName: string;

  @Field()
  npwp: string;

  @Field({ nullable: true })
  nib?: string;

  @Field({ nullable: true })
  nik?: string;

  @Field({ nullable: true })
  npppjk?: string;

  @Field(() => ID)
  companyTypeId: number;

  @Field(() => ID, { nullable: true })
  brokerCompanyId?: number;

  @Field(() => CompanyType)
  companyType: CompanyType;

  @Field(() => Company, { nullable: true })
  brokerCompany?: Company;
}
