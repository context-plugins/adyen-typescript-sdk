import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { serviceLevel1Schema, type ServiceLevel1 } from "./service-level1.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type DinersInfo1 = {
  midNumber?: string;
  reuseMidNumber: boolean;
  serviceLevel?: ServiceLevel1;
  transactionDescription?: TransactionDescriptionInfo1;
};

export const dinersInfo1Schema: Schema<DinersInfo1> = s.object<DinersInfo1>({
  midNumber: s.optional(s.string()),
  reuseMidNumber: s.boolean(),
  serviceLevel: s.optional(s.lazy(() => serviceLevel1Schema)),
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
