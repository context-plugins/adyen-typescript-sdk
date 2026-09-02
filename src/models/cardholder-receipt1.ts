import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CardholderReceipt1 = {
  headerForAuthorizedReceipt?: string;
};

export const cardholderReceipt1Schema: Schema<CardholderReceipt1> = s.object<CardholderReceipt1>({
  headerForAuthorizedReceipt: s.optional(s.string()),
});
