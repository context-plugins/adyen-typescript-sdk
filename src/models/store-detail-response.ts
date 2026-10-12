import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StoreDetailResponse = {
  /** This field contains additional data, which may be returned in a particular response. */
  additionalData?: Record<string, string>;
  /** A new reference to uniquely identify this request. */
  pspReference: string;
  /** The token which you can use later on for submitting the payout. */
  recurringDetailReference: string;
  /**
   * The result code of the transaction. `Success` indicates that the details were stored
   * successfully.
   */
  resultCode: string;
};

export const storeDetailResponseSchema: Schema<StoreDetailResponse> = s.object<StoreDetailResponse>({
  additionalData: s.optional(s.record(s.string(), s.string())),
  pspReference: s.string(),
  recurringDetailReference: s.string(),
  resultCode: s.string(),
});
