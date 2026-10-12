import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

/** Details to provide if `type` is **carnet**. */
export type CarnetInfo1 = {
  /**
   * Indicates whether to add the MCC acronym to the merchant name for Prosa acquirer in Mexico.
   * When set to **true**, the MCC acronym is automatically appended to the merchant name. Default:
   * **false**.
   */
  addMccAcronym?: boolean;
  /**
   * Information regarding the transaction description. > You cannot configure the transaction
   * description in the test environment.
   */
  transactionDescription?: TransactionDescriptionInfo1;
};

export const carnetInfo1Schema: Schema<CarnetInfo1> = s.object<CarnetInfo1>({
  addMccAcronym: s.optional(s.boolean()),
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
