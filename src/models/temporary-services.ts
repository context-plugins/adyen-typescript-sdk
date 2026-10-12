import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TemporaryServices = {
  /**
   * The name or ID of the person working in a temporary capacity.
   * * Format: ASCII
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   * * **additionalData key:** `enhancedSchemeData.employeeName`
   */
  employeeName?: string;
  /**
   * The billing period end date.
   * * Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): yyyy-MM-dd
   * * **additionalData key:** `enhancedSchemeData.tempWeekEnding`
   */
  endDate?: string;
  /**
   * The hourly rate for the temporary services, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * For example, 2000 means USD 20.00.
   * * Encoding: Numeric
   * * Max value: 10000000000
   * * **additionalData key:** `enhancedSchemeData.regularHoursRate`
   */
  hourRate?: number;
  /**
   * The number of hours worked during the billing period.
   * * Format: Numeric
   * * **additionalData key:** `enhancedSchemeData.regularHoursWorked`
   */
  hoursWorked?: number;
  /**
   * The job description of the person working in a temporary capacity.
   * * Format: ASCII
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   * * **additionalData key:** `enhancedSchemeData.jobDescription`
   */
  jobDescription?: string;
  /**
   * The name of the person requesting the temporary services.
   * * Format: ASCII
   * * Must not start with a space or be all spaces.
   * * Must not be all zeros.
   * * **additionalData key:** `enhancedSchemeData.requestName`
   */
  serviceRequestor?: string;
  /**
   * The billing period start date.
   * * Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): yyyy-MM-dd
   * * **additionalData key:** `enhancedSchemeData.tempStartDate`
   */
  startDate?: string;
};

export const temporaryServicesSchema: Schema<TemporaryServices> = s.object<TemporaryServices>({
  employeeName: s.optional(s.string()),
  endDate: s.optional(s.dateOnly()),
  hourRate: s.optional(s.int()),
  hoursWorked: s.optional(s.int()),
  jobDescription: s.optional(s.string()),
  serviceRequestor: s.optional(s.string()),
  startDate: s.optional(s.dateOnly()),
});
