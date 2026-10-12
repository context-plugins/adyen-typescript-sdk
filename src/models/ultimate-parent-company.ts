import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  ultimateParentCompanyBusinessDetails2Schema,
  type UltimateParentCompanyBusinessDetails2,
} from "./ultimate-parent-company-business-details2.js";
import { viasAddress1Schema, type ViasAddress1 } from "./vias-address1.js";

export type UltimateParentCompany = {
  /** Address of the ultimate parent company. */
  address?: ViasAddress1;
  /** Details about the ultimate parent company's business. */
  businessDetails?: UltimateParentCompanyBusinessDetails2;
  /**
   * Adyen-generated unique alphanumeric identifier (UUID) for the entry, returned in the response
   * when you create an ultimate parent company. Required when updating an existing entry in an
   * `/updateAccountHolder` request.
   */
  ultimateParentCompanyCode?: string;
};

export const ultimateParentCompanySchema: Schema<UltimateParentCompany> = s.object<UltimateParentCompany>({
  address: s.optional(s.lazy(() => viasAddress1Schema)),
  businessDetails: s.optional(s.lazy(() => ultimateParentCompanyBusinessDetails2Schema)),
  ultimateParentCompanyCode: s.optional(s.string()),
});
