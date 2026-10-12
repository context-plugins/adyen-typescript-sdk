import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { FormFactor, formFactorSchema } from "./form-factor.js";

/** Contains the business account details. */
export type BankAccountModel1 = {
  /**
   * Business accounts with a `formFactor` value of **physical** are business accounts issued under
   * the central bank of that country. The default value is **physical** for NL, US, and UK business
   * accounts.
   *
   * Adyen creates a local IBAN for business accounts when the `formFactor` value is set to
   * **virtual**. The local IBANs that are supported are for DE and FR, which reference a physical
   * NL account, with funds being routed through the central bank of NL.
   *
   * @default FormFactor.Physical
   */
  formFactor?: FormFactor | null;
};

export const bankAccountModel1Schema: Schema<BankAccountModel1> = s.object<BankAccountModel1>({
  formFactor: s.defaulted(s.nullable(s.lazy(() => formFactorSchema)), FormFactor.Physical),
});
