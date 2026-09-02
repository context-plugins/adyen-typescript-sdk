import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type PulseUpdateInfo1 = {
  transactionDescription?: TransactionDescriptionInfo1;
};

export const pulseUpdateInfo1Schema: Schema<PulseUpdateInfo1> = s.object<PulseUpdateInfo1>({
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
