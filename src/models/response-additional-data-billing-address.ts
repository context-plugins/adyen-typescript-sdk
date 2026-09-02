import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponseAdditionalDataBillingAddress = {
  billingAddressCity?: string;
  billingAddressCountry?: string;
  billingAddressHouseNumberOrName?: string;
  billingAddressPostalCode?: string;
  billingAddressStateOrProvince?: string;
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
