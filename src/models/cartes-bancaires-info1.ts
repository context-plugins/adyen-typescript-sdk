import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

/** Details to provide if `type` is **cartebancaire**. */
export type CartesBancairesInfo1 = {
  /** Cartes Bancaires SIRET. Format: 14 digits. */
  siret: string;
  /**
   * Information regarding the transaction description. > You cannot configure the transaction
   * description in the test environment.
   */
  transactionDescription?: TransactionDescriptionInfo1;
};

export const cartesBancairesInfo1Schema: Schema<CartesBancairesInfo1> = s.object<CartesBancairesInfo1>({
  siret: s.string(),
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
