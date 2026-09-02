import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { formFactorSchema, type FormFactor } from "./form-factor.js";

export type BankAccountModel = {
  formFactor?: FormFactor | null;
};

export const bankAccountModelSchema: Schema<BankAccountModel> = s.object<BankAccountModel>({
  formFactor: s.optionalNullable(s.lazy(() => formFactorSchema)),
});
