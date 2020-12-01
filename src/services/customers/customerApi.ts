import { RESTDataSource } from "apollo-datasource-rest";
import { Service } from "typedi";

import Company from "./models/Company";
import CompanyType from "./models/CompanyType";
import config from "./config";

@Service()
export default class CustomerApi extends RESTDataSource {
  constructor() {
    super();
    super.baseURL = config.services.customers.apiUrl;
  }

  async getCompanies(): Promise<Company[]> {
    return super.get("Companies");
  }

  async getCompany(id: number): Promise<Company> {
    return super.get(`Companies/${id}`);
  }

  async getCompanyTypes(): Promise<CompanyType[]> {
    return super.get("CompanyTypes");
  }

  async getCompanyType(id: number): Promise<CompanyType> {
    return super.get(`CompanyTypes/${id}`);
  }

  async updateCompanyType(id: number, typeName: string): Promise<CompanyType> {
    return super.patch(
      `CompanyTypes/${id}`,
      `[{"path": "/typeName", "op": "replace", "value": "${typeName}"}]`,
      {
        headers: {
          "content-type": "application/json"
        }
      }
    );
  }
}
