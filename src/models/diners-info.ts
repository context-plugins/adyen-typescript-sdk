import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { serviceLevel1Schema, type ServiceLevel1 } from "./service-level1.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type DinersInfo = {
  midNumber?: string;
  reuseMidNumber: boolean;
  serviceLevel?: ServiceLevel1;
  transactionDescription?: TransactionDescriptionInfo1;
};

export const dinersInfoSchema: Schema<DinersInfo> = s.object<DinersInfo>({
  midNumber: s.optional(s.string()),
  reuseMidNumber: s.boolean(),
  serviceLevel: s.optional(s.lazy(() => serviceLevel1Schema)),
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
