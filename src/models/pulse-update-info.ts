import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type PulseUpdateInfo = {
  /**
   * Information regarding the transaction description. > You cannot configure the transaction
   * description in the test environment.
   */
  transactionDescription?: TransactionDescriptionInfo1;
};

export const pulseUpdateInfoSchema: Schema<PulseUpdateInfo> = s.object<PulseUpdateInfo>({
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
