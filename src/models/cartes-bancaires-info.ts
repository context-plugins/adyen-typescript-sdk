import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type CartesBancairesInfo = {
  /** Cartes Bancaires SIRET. Format: 14 digits. */
  siret: string;
  /**
   * Information regarding the transaction description. > You cannot configure the transaction
   * description in the test environment.
   */
  transactionDescription?: TransactionDescriptionInfo1;
};

export const cartesBancairesInfoSchema: Schema<CartesBancairesInfo> = s.object<CartesBancairesInfo>({
  siret: s.string(),
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
