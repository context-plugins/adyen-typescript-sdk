import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponseAdditionalDataBillingAddress = {
  /** The billing address city passed in the payment request. */
  billingAddressCity?: string;
  /**
   * The billing address country passed in the payment request.
   *
   * Example: NL
   */
  billingAddressCountry?: string;
  /** The billing address house number or name passed in the payment request. */
  billingAddressHouseNumberOrName?: string;
  /**
   * The billing address postal code passed in the payment request.
   *
   * Example: 1011 DJ
   */
  billingAddressPostalCode?: string;
  /**
   * The billing address state or province passed in the payment request.
   *
   * Example: NH
   */
  billingAddressStateOrProvince?: string;
  /** The billing address street passed in the payment request. */
  billingAddressStreet?: string;
};

export const responseAdditionalDataBillingAddressSchema: Schema<ResponseAdditionalDataBillingAddress> =
  s.object<ResponseAdditionalDataBillingAddress>({
    billingAddressCity: s.optional(s.string()),
    billingAddressCountry: s.optional(s.string()),
    billingAddressHouseNumberOrName: s.optional(s.string()),
    billingAddressPostalCode: s.optional(s.string()),
    billingAddressStateOrProvince: s.optional(s.string()),
    billingAddressStreet: s.optional(s.string()),
    _keysMap: {
      billingAddressCity: "billingAddress.city",
      billingAddressCountry: "billingAddress.country",
      billingAddressHouseNumberOrName: "billingAddress.houseNumberOrName",
      billingAddressPostalCode: "billingAddress.postalCode",
      billingAddressStateOrProvince: "billingAddress.stateOrProvince",
      billingAddressStreet: "billingAddress.street",
    },
  });
