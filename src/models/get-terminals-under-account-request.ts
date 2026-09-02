import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetTerminalsUnderAccountRequest = {
  companyAccount: string;
  merchantAccount?: string;
  store?: string;
};

export const getTerminalsUnderAccountRequestSchema: Schema<GetTerminalsUnderAccountRequest> =
  s.object<GetTerminalsUnderAccountRequest>({
    companyAccount: s.string(),
    merchantAccount: s.optional(s.string()),
    store: s.optional(s.string()),
  });
