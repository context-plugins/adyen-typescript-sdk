import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { formFactorSchema, type FormFactor } from "./form-factor.js";

export type BankAccountModel1 = {
  formFactor?: FormFactor | null;
};

export const bankAccountModel1Schema: Schema<BankAccountModel1> = s.object<BankAccountModel1>({
  formFactor: s.optionalNullable(s.lazy(() => formFactorSchema)),
});
