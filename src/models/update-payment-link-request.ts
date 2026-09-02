import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status11Schema, type Status11 } from "./status11.js";

export type UpdatePaymentLinkRequest = {
  status: Status11;
};

export const updatePaymentLinkRequestSchema: Schema<UpdatePaymentLinkRequest> =
  s.object<UpdatePaymentLinkRequest>({
    status: status11Schema,
  });
