import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Healthcare = {
  /**
   * The dental amount, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * For example, 2000 means USD 20.00.
   * * Encoding: Numeric
   * * Max value: 10000000000
   */
  dentalValue?: number;
  /**
   * The other medical amount not covered by the specific categories, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * For example, 2000 means USD 20.00.
   * * Encoding: Numeric
   * * Max value: 10000000000
   */
  otherMedicalValue?: number;
  /**
   * The prescription/Rx amount, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * For example, 2000 means USD 20.00.
   * * Encoding: Numeric
   * * Max value: 10000000000
   */
  prescriptionValue?: number;
  /**
   * The total healthcare amount, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * For example, 2000 means USD 20.00.
   * * Encoding: Numeric
   * * Max value: 10000000000
   */
  totalHealthcareValue: number;
  /**
   * The vision/optical prescription amount, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   * * For example, 2000 means USD 20.00.
   * * Encoding: Numeric
   * * Max value: 10000000000
   */
  visionPrescriptionValue?: number;
};

export const healthcareSchema: Schema<Healthcare> = s.object<Healthcare>({
  dentalValue: s.optional(s.int()),
  otherMedicalValue: s.optional(s.int()),
  prescriptionValue: s.optional(s.int()),
  totalHealthcareValue: s.int(),
  visionPrescriptionValue: s.optional(s.int()),
});
