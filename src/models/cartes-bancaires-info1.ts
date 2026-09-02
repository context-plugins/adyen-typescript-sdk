import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type CartesBancairesInfo1 = {
  siret: string;
  transactionDescription?: TransactionDescriptionInfo1;
};

export const cartesBancairesInfo1Schema: Schema<CartesBancairesInfo1> = s.object<CartesBancairesInfo1>({
  siret: s.string(),
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
