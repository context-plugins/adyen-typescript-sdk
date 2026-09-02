import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

export type ReturnTransferRequest = {
  amount: Amount17;
  reference?: string;
};

export const returnTransferRequestSchema: Schema<ReturnTransferRequest> = s.object<ReturnTransferRequest>({
  amount: amount17Schema,
  reference: s.optional(s.string()),
});
