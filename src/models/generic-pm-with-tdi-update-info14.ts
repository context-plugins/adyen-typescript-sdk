import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type GenericPmWithTdiUpdateInfo14 = {
  transactionDescription?: TransactionDescriptionInfo1;
};

export const genericPmWithTdiUpdateInfo14Schema: Schema<GenericPmWithTdiUpdateInfo14> =
  s.object<GenericPmWithTdiUpdateInfo14>({
    transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
  });
