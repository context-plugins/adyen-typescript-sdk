import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalDataTemporaryServices = {
  enhancedSchemeDataCustomerReference?: string;
  enhancedSchemeDataEmployeeName?: string;
  enhancedSchemeDataJobDescription?: string;
  enhancedSchemeDataRegularHoursRate?: string;
  enhancedSchemeDataRegularHoursWorked?: string;
  enhancedSchemeDataRequestName?: string;
  enhancedSchemeDataTempStartDate?: string;
  enhancedSchemeDataTempWeekEnding?: string;
  enhancedSchemeDataTotalTaxAmount?: string;
};

export const additionalDataTemporaryServicesSchema: Schema<AdditionalDataTemporaryServices> =
  s.object<AdditionalDataTemporaryServices>({
    enhancedSchemeDataCustomerReference: s.optional(s.string()),
    enhancedSchemeDataEmployeeName: s.optional(s.string()),
    enhancedSchemeDataJobDescription: s.optional(s.string()),
    enhancedSchemeDataRegularHoursRate: s.optional(s.string()),
    enhancedSchemeDataRegularHoursWorked: s.optional(s.string()),
    enhancedSchemeDataRequestName: s.optional(s.string()),
    enhancedSchemeDataTempStartDate: s.optional(s.string()),
    enhancedSchemeDataTempWeekEnding: s.optional(s.string()),
    enhancedSchemeDataTotalTaxAmount: s.optional(s.string()),
    _keysMap: {
      enhancedSchemeDataCustomerReference: "enhancedSchemeData.customerReference",
      enhancedSchemeDataEmployeeName: "enhancedSchemeData.employeeName",
      enhancedSchemeDataJobDescription: "enhancedSchemeData.jobDescription",
      enhancedSchemeDataRegularHoursRate: "enhancedSchemeData.regularHoursRate",
      enhancedSchemeDataRegularHoursWorked: "enhancedSchemeData.regularHoursWorked",
      enhancedSchemeDataRequestName: "enhancedSchemeData.requestName",
      enhancedSchemeDataTempStartDate: "enhancedSchemeData.tempStartDate",
      enhancedSchemeDataTempWeekEnding: "enhancedSchemeData.tempWeekEnding",
      enhancedSchemeDataTotalTaxAmount: "enhancedSchemeData.totalTaxAmount",
    },
  });
