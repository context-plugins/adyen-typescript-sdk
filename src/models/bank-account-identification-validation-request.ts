import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountIdentification11Schema,
  type AccountIdentification11,
} from "./unions/account-identification11.js";

export type BankAccountIdentificationValidationRequest = {
  accountIdentification: AccountIdentification11;
};

export const bankAccountIdentificationValidationRequestSchema: Schema<BankAccountIdentificationValidationRequest> =
  s.object<BankAccountIdentificationValidationRequest>({
    accountIdentification: accountIdentification11Schema,
  });
