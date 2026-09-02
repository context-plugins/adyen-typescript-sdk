import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type SepaDirectDebitUpdateInfo1 = {
  transactionDescription?: TransactionDescriptionInfo1;
};

export const sepaDirectDebitUpdateInfo1Schema: Schema<SepaDirectDebitUpdateInfo1> =
  s.object<SepaDirectDebitUpdateInfo1>({
    transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
  });
