import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionResponseInfo1Schema,
  type TransactionDescriptionResponseInfo1,
} from "./transaction-description-response-info1.js";

/** **cartesbancaire** details */
export type CartesBancairesResponseInfo1 = {
  /** Cartes Bancaires SIRET. Format: 14 digits. */
  siret?: string;
  /** Information regarding the transaction description. */
  transactionDescription?: TransactionDescriptionResponseInfo1;
};

export const cartesBancairesResponseInfo1Schema: Schema<CartesBancairesResponseInfo1> =
  s.object<CartesBancairesResponseInfo1>({
    siret: s.optional(s.string()),
    transactionDescription: s.optional(s.lazy(() => transactionDescriptionResponseInfo1Schema)),
  });
