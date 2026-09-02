import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type12Schema, type Type12 } from "./type12.js";

export type BillDesk = {
  checkoutAttemptId?: string;
  issuer: string;
  sdkData?: string;
  type: Type12;
};

export const billDeskSchema: Schema<BillDesk> = s.object<BillDesk>({
  checkoutAttemptId: s.optional(s.string()),
  issuer: s.string(),
  sdkData: s.optional(s.string()),
  type: type12Schema,
});
