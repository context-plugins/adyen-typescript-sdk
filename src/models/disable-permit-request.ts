import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DisablePermitRequest = {
  /** The merchant account identifier, with which you want to process the transaction. */
  merchantAccount: string;
  /** The permit token to disable. */
  token: string;
};

export const disablePermitRequestSchema: Schema<DisablePermitRequest> = s.object<DisablePermitRequest>({
  merchantAccount: s.string(),
  token: s.string(),
});
