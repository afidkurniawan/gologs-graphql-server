import { Arg, FieldResolver, ID, Query, Resolver, Root } from "type-graphql";
import { Service } from "typedi";

import Company from "../models/Company";
import CompanyType from "../models/CompanyType";
import CustomerApi from "../customerApi";

@Service()
@Resolver(Company)
export default class CompanyResolver {
  constructor(private customerApi: CustomerApi) {}

  @Query(() => [Company])
  async companies(): Promise<Company[]> {
    return this.customerApi.getCompanies();
  }

  @Query(() => Company)
  async company(
    @Arg("id", () => ID)id: number
  ): Promise<Company> {
    return this.customerApi.getCompany(id);
  }

  @FieldResolver()
  async companyType(@Root() company: Company): Promise<CompanyType> {
    return this.customerApi.getCompanyType(company.companyTypeId);
  }

  @FieldResolver()
  async brokerCompany(@Root() company: Company): Promise<Company | null> {
    if (
      company.brokerCompanyId === null ||
      typeof company.brokerCompanyId === "undefined"
    )
      return null;
    return this.customerApi.getCompany(company.brokerCompanyId);
  }
}
