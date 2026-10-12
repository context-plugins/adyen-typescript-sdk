import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RegisterScaResponse = {
  /** The unique identifier of the SCA device you are registering. */
  id?: string;
  /**
   * The unique identifier of the payment instrument for which you are registering the SCA device.
   */
  paymentInstrumentId?: string;
  /**
   * A string that you must pass to the authentication SDK to continue with the registration
   * process.
   */
  sdkInput?: string;
  /** Specifies if the registration was initiated successfully. */
  success?: boolean;
};

export const registerScaResponseSchema: Schema<RegisterScaResponse> = s.object<RegisterScaResponse>({
  id: s.optional(s.string()),
  paymentInstrumentId: s.optional(s.string()),
  sdkInput: s.optional(s.string()),
  success: s.optional(s.boolean()),
});
