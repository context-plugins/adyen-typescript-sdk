import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { serviceLevel2Schema, type ServiceLevel2 } from "./service-level2.js";
import {
  transactionDescriptionInfo1Schema,
  type TransactionDescriptionInfo1,
} from "./transaction-description-info1.js";

export type JcbInfo = {
  midNumber?: string;
  reuseMidNumber?: boolean;
  serviceLevel?: ServiceLevel2;
  transactionDescription?: TransactionDescriptionInfo1;
};

export const jcbInfoSchema: Schema<JcbInfo> = s.object<JcbInfo>({
  midNumber: s.optional(s.string()),
  reuseMidNumber: s.optional(s.boolean()),
  serviceLevel: s.optional(s.lazy(() => serviceLevel2Schema)),
  transactionDescription: s.optional(s.lazy(() => transactionDescriptionInfo1Schema)),
});
