import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type SepaDirectDebitUpdateInfo = {
  transactionDescription?: TransactionDescriptionInfo1;
};

export const sepaDirectDebitUpdateInfoSchema: Schema<SepaDirectDebitUpdateInfo> =
  s.object<SepaDirectDebitUpdateInfo>({
    transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
  });
