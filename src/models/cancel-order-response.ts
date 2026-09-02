import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resultCode1Schema, type ResultCode1 } from "./result-code1.js";

export type CancelOrderResponse = {
  pspReference: string;
  resultCode: ResultCode1;
};

export const cancelOrderResponseSchema: Schema<CancelOrderResponse> = s.object<CancelOrderResponse>({
  pspReference: s.string(),
  resultCode: resultCode1Schema,
});
