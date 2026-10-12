import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Healthcare auto-substantiation amounts for FSA/HSA card transactions. The amounts are used to
 * qualify for reduced interchange rates on healthcare-eligible cards.
 */
export type Healthcare2 = {
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

export const healthcare2Schema: Schema<Healthcare2> = s.object<Healthcare2>({
  dentalValue: s.optional(s.int()),
  otherMedicalValue: s.optional(s.int()),
  prescriptionValue: s.optional(s.int()),
  totalHealthcareValue: s.int(),
  visionPrescriptionValue: s.optional(s.int()),
});
