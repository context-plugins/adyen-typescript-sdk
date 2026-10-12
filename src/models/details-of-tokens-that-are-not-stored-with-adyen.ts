import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DetailsOfTokensThatAreNotStoredWithAdyen = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /**
   * The card expiry month. Only collect raw card data if you are [fully PCI
   * compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).
   */
  expiryMonth?: string;
  /**
   * The card expiry year. Only collect raw card data if you are [fully PCI
   * compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).
   */
  expiryYear?: string;
  /** The name of the card holder. */
  holderName?: string;
  /**
   * The card number. Only collect raw card data if you are [fully PCI
   * compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).
   */
  number?: string;
  /** Identifier used to fetch the token from the external service */
  storedPaymentMethodId: string;
  /**
   * The external service from which to fetch the token. Supported only for specific companies.
   * Contact Adyen if you want to use this feature.
   *
   * @default "hilton"
   */
  subtype?: "hilton";
  /** The type of token. Allowed value: **externalToken**. @default "externalToken" */
  type?: "externalToken";
};

export const detailsOfTokensThatAreNotStoredWithAdyenSchema: Schema<DetailsOfTokensThatAreNotStoredWithAdyen> =
  s.object<DetailsOfTokensThatAreNotStoredWithAdyen>({
    checkoutAttemptId: s.optional(s.string()),
    expiryMonth: s.optional(s.string()),
    expiryYear: s.optional(s.string()),
    holderName: s.optional(s.string()),
    number: s.optional(s.string()),
    storedPaymentMethodId: s.string(),
    subtype: s.defaulted(s.literal("hilton"), "hilton"),
    type: s.defaulted(s.literal("externalToken"), "externalToken"),
  });
