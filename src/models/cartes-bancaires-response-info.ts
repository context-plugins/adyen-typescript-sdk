import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionResponseInfo1Schema,
  type TransactionDescriptionResponseInfo1,
} from "./transaction-description-response-info1.js";

export type CartesBancairesResponseInfo = {
  siret?: string;
  transactionDescription?: TransactionDescriptionResponseInfo1;
};

export const cartesBancairesResponseInfoSchema: Schema<CartesBancairesResponseInfo> =
  s.object<CartesBancairesResponseInfo>({
    siret: s.optional(s.string()),
    transactionDescription: s.optional(s.lazy(() => transactionDescriptionResponseInfo1Schema)),
  });
