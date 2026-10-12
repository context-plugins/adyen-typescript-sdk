import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ModifyRequest = {
  /** This field contains additional data, which may be required for a particular payout request. */
  additionalData?: Record<string, string>;
  /** The merchant account identifier, with which you want to process the transaction. */
  merchantAccount: string;
  /** The PSP reference received in the `/submitThirdParty` response. */
  originalReference: string;
};

export const modifyRequestSchema: Schema<ModifyRequest> = s.object<ModifyRequest>({
  additionalData: s.optional(s.record(s.string(), s.string())),
  merchantAccount: s.string(),
  originalReference: s.string(),
});
