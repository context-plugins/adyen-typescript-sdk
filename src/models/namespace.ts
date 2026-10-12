import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The namespace that corresponds to the reason code.
 *
 * Possible values:
 * * **ukFpsRejectionCode**
 * * **ukFpsReturnReasonCode**
 * * **usAchReturnReasonCode**
 * * **iso8583ResponseCode**
 */
export const Namespace = {
  Iso8583ResponseCode: "iso8583ResponseCode",
  UkFpsRejectionCode: "ukFpsRejectionCode",
  UkFpsReturnReasonCode: "ukFpsReturnReasonCode",
  UsAchReturnReasonCode: "usAchReturnReasonCode",
} as const;
export type Namespace = (typeof Namespace)[keyof typeof Namespace] | (string & {});

export const namespaceSchema: EnumSchema<Namespace> = s.enumOf<Namespace>(Namespace);
