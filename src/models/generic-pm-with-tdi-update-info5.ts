import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type GenericPmWithTdiUpdateInfo5 = {
  transactionDescription?: TransactionDescriptionInfo1;
};

export const genericPmWithTdiUpdateInfo5Schema: Schema<GenericPmWithTdiUpdateInfo5> =
  s.object<GenericPmWithTdiUpdateInfo5>({
    transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
  });
