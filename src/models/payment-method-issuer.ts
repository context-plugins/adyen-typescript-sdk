import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentMethodIssuer = {
  /**
   * A boolean value indicating whether this issuer is unavailable. Can be `true` whenever the
   * issuer is offline.
   *
   * @default false
   */
  disabled?: boolean;
  /** The unique identifier of this issuer, to submit in requests to /payments. */
  id: string;
  /** A localized name of the issuer. */
  name: string;
};

export const paymentMethodIssuerSchema: Schema<PaymentMethodIssuer> = s.object<PaymentMethodIssuer>({
  disabled: s.defaulted(s.boolean(), false),
  id: s.string(),
  name: s.string(),
});
