import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type CarnetInfo = {
  addMccAcronym?: boolean;
  transactionDescription?: TransactionDescriptionInfo1;
};

export const carnetInfoSchema: Schema<CarnetInfo> = s.object<CarnetInfo>({
  addMccAcronym: s.optional(s.boolean()),
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
