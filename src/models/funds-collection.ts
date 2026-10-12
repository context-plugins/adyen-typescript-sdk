import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bankAccountIdentification1Schema,
  type BankAccountIdentification1,
} from "./bank-account-identification1.js";
import { fundsCollectionType2Schema, type FundsCollectionType2 } from "./funds-collection-type2.js";

export type FundsCollection = {
  /**
   * Contains the identification information of the account to which you can transfer funds related
   * to repayments.
   */
  accountIdentification?: BankAccountIdentification1;
  /**
   * The type of funds collection.
   *
   * Possible values: **UnscheduledRepayment**, **Revocation**.
   */
  fundsCollectionType?: FundsCollectionType2;
};

export const fundsCollectionSchema: Schema<FundsCollection> = s.object<FundsCollection>({
  accountIdentification: s.optional(s.lazy(() => bankAccountIdentification1Schema)),
  fundsCollectionType: s.optional(s.lazy(() => fundsCollectionType2Schema)),
});
