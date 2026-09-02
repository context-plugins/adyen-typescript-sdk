import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type CartesBancairesUpdateInfo1 = {
  transactionDescription?: TransactionDescriptionInfo1;
};

export const cartesBancairesUpdateInfo1Schema: Schema<CartesBancairesUpdateInfo1> =
  s.object<CartesBancairesUpdateInfo1>({
    transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
  });
