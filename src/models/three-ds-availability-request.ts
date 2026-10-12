import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ThreeDsAvailabilityRequest = {
  /**
   * This field contains additional data, which may be required for a particular request.
   *
   * The `additionalData` object consists of entries, each of which includes the key and value.
   */
  additionalData?: Record<string, string>;
  /** List of brands. */
  brands?: string[];
  /** Card number or BIN. */
  cardNumber?: string;
  /** The merchant account identifier. */
  merchantAccount: string;
  /** A recurring detail reference corresponding to a card. */
  recurringDetailReference?: string;
  /** The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID). */
  shopperReference?: string;
};

export const threeDsAvailabilityRequestSchema: Schema<ThreeDsAvailabilityRequest> =
  s.object<ThreeDsAvailabilityRequest>({
    additionalData: s.optional(s.record(s.string(), s.string())),
    brands: s.optional(s.array(s.string())),
    cardNumber: s.optional(s.string()),
    merchantAccount: s.string(),
    recurringDetailReference: s.optional(s.string()),
    shopperReference: s.optional(s.string()),
  });
