import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status62Schema, type Status62 } from "./status62.js";

export type ReturnTransferResponse = {
  /** The unique identifier of the return. */
  id?: string;
  /** Your internal reference for the return. */
  reference?: string;
  /**
   * The resulting status of the return.
   *
   * Possible values: **Authorised**, **Declined**.
   */
  status?: Status62;
  /** The unique identifier of the original transfer. */
  transferId?: string;
};

export const returnTransferResponseSchema: Schema<ReturnTransferResponse> = s.object<ReturnTransferResponse>({
  id: s.optional(s.string()),
  reference: s.optional(s.string()),
  status: s.optional(s.lazy(() => status62Schema)),
  transferId: s.optional(s.string()),
});
