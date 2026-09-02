import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Agency = {
  invoiceNumber?: string;
  planName?: string;
};

export const agencySchema: Schema<Agency> = s.object<Agency>({
  invoiceNumber: s.optional(s.string()),
  planName: s.optional(s.string()),
});
