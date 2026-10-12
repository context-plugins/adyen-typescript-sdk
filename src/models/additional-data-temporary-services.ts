import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalDataTemporaryServices = {
  /**
   * The customer code, if supplied by a customer.
   * * Encoding: ASCII
   * * maxLength: 25
   */
  enhancedSchemeDataCustomerReference?: string;
  /**
   * The name or ID of the person working in a temporary capacity.
   * * maxLength: 40.
   * * Must not be all spaces. *Must not be all zeros.
   */
  enhancedSchemeDataEmployeeName?: string;
  /**
   * The job description of the person working in a temporary capacity.
   * * maxLength: 40
   * * Must not be all spaces. *Must not be all zeros.
   */
  enhancedSchemeDataJobDescription?: string;
  /**
   * The amount paid for regular hours worked, [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * maxLength: 7
   * * Must not be empty
   * * Can be all zeros
   */
  enhancedSchemeDataRegularHoursRate?: string;
  /**
   * The hours worked.
   * * maxLength: 7
   * * Must not be empty
   * * Can be all zeros
   */
  enhancedSchemeDataRegularHoursWorked?: string;
  /**
   * The name of the person requesting temporary services.
   * * maxLength: 40
   * * Must not be all zeros
   * * Must not be all spaces
   */
  enhancedSchemeDataRequestName?: string;
  /**
   * The billing period start date.
   * * Format: ddMMyy
   * * maxLength: 6
   */
  enhancedSchemeDataTempStartDate?: string;
  /**
   * The billing period end date.
   * * Format: ddMMyy
   * * maxLength: 6
   */
  enhancedSchemeDataTempWeekEnding?: string;
  /**
   * The total tax amount, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes). For example, 2000 means
   * USD 20.00
   * * maxLength: 12
   */
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
