import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type CarnetInfo1 = {
  addMccAcronym?: boolean;
  transactionDescription?: TransactionDescriptionInfo1;
};

export const carnetInfo1Schema: Schema<CarnetInfo1> = s.object<CarnetInfo1>({
  addMccAcronym: s.optional(s.boolean()),
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
