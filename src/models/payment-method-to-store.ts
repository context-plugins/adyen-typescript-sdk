import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentMethodToStore = {
  /** Secondary brand of the card. For example: **plastix**, **hmclub**. */
  brand?: string;
  /**
   * The card verification code. Only collect raw card data if you are [fully PCI
   * compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).
   */
  cvc?: string;
  /** The encrypted card. */
  encryptedCard?: string;
  /** The encrypted card number. */
  encryptedCardNumber?: string;
  /** The encrypted card expiry month. */
  encryptedExpiryMonth?: string;
  /** The encrypted card expiry year. */
  encryptedExpiryYear?: string;
  /** The encrypted card verification code. */
  encryptedSecurityCode?: string;
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
  /** Set to **scheme**. */
  type?: string;
};

export const paymentMethodToStoreSchema: Schema<PaymentMethodToStore> = s.object<PaymentMethodToStore>({
  brand: s.optional(s.string()),
  cvc: s.optional(s.string()),
  encryptedCard: s.optional(s.string()),
  encryptedCardNumber: s.optional(s.string()),
  encryptedExpiryMonth: s.optional(s.string()),
  encryptedExpiryYear: s.optional(s.string()),
  encryptedSecurityCode: s.optional(s.string()),
  expiryMonth: s.optional(s.string()),
  expiryYear: s.optional(s.string()),
  holderName: s.optional(s.string()),
  number: s.optional(s.string()),
  type: s.optional(s.string()),
});
