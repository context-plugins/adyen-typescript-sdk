import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type GenericPmWithTdiUpdateInfo12 = {
  transactionDescription?: TransactionDescriptionInfo1;
};

export const genericPmWithTdiUpdateInfo12Schema: Schema<GenericPmWithTdiUpdateInfo12> =
  s.object<GenericPmWithTdiUpdateInfo12>({
    transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
  });
