import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";
import { Service } from "typedi";

import CompanyType from "../models/CompanyType";
import CustomerApi from "../customerApi";

@Service()
@Resolver(CompanyType)
export default class CompanyTypeResolver {
  constructor(private customerApi: CustomerApi) {}

  @Query(() => [CompanyType])
  async companyTypes(): Promise<CompanyType[]> {
    return this.customerApi.getCompanyTypes();
  }

  @Query(() => CompanyType)
  async companyType(
    @Arg("id", () => ID) id: number
  ): Promise<CompanyType> {
    return this.customerApi.getCompanyType(id);
  }

  @Mutation(() => CompanyType)
  async updateCompanyType(
    @Arg("id", () => ID) id: number,
    @Arg("typeName") typeName: string
  ): Promise<CompanyType> {
    return this.customerApi.updateCompanyType(id, typeName);
  }
}
