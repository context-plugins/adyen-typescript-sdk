import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  ultimateParentCompanyBusinessDetails2Schema,
  type UltimateParentCompanyBusinessDetails2,
} from "./ultimate-parent-company-business-details2.js";
import { viasAddress1Schema, type ViasAddress1 } from "./vias-address1.js";

export type UltimateParentCompany = {
  address?: ViasAddress1;
  businessDetails?: UltimateParentCompanyBusinessDetails2;
  ultimateParentCompanyCode?: string;
};

export const ultimateParentCompanySchema: Schema<UltimateParentCompany> = s.object<UltimateParentCompany>({
  address: s.optional(s.lazy(() => viasAddress1Schema)),
  businessDetails: s.optional(s.lazy(() => ultimateParentCompanyBusinessDetails2Schema)),
  ultimateParentCompanyCode: s.optional(s.string()),
});
