import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssociationInitiateRequest = {
  /**
   * The list of unique identifiers of the resources that you are associating with the SCA device.
   *
   * Maximum: 5 strings.
   */
  ids: string[];
  /**
   * The type of resource that you are associating with the SCA device.
   *
   * Possible value: **PaymentInstrument**
   *
   * @default "PaymentInstrument"
   */
  type?: "PaymentInstrument";
};

export const associationInitiateRequestSchema: Schema<AssociationInitiateRequest> =
  s.object<AssociationInitiateRequest>({
    ids: s.array(s.string()),
    type: s.defaulted(s.literal("PaymentInstrument"), "PaymentInstrument"),
  });
