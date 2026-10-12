import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { geolocation1Schema, type Geolocation1 } from "./geolocation1.js";
import { sensitiveMobileData1Schema, type SensitiveMobileData1 } from "./sensitive-mobile-data1.js";

/**
 * Information related to the mobile for the payment transaction. If PaymentInstrumentType is
 * Mobile.
 */
export type MobileData1 = {
  /** Identifies the country of a mobile phone operator. If data available. */
  mobileCountryCode?: number;
  /** Identifies the mobile phone operator inside a country. If data available. */
  mobileNetworkCode?: number;
  /** Masked Mobile Subscriber Integrated Service Digital Network. If data available. */
  maskedMsisdn?: number;
  /** Geographic location specified by geographic or UTM coordinates. If data available. */
  geolocation?: Geolocation1;
  /** Sensitive information related to the mobile phone, protected by CMS. SensitiveMobileData. */
  protectedMobileData?: string;
  /** Sensitive information related to the mobile phone. If unprotected mobile data. */
  sensitiveMobileData?: SensitiveMobileData1;
};

export const mobileData1Schema: Schema<MobileData1> = s.object<MobileData1>({
  mobileCountryCode: s.optional(s.int()),
  mobileNetworkCode: s.optional(s.int()),
  maskedMsisdn: s.optional(s.int()),
  geolocation: s.optional(s.lazy(() => geolocation1Schema)),
  protectedMobileData: s.optional(s.string()),
  sensitiveMobileData: s.optional(s.lazy(() => sensitiveMobileData1Schema)),
  _keysMap: {
    mobileCountryCode: "MobileCountryCode",
    mobileNetworkCode: "MobileNetworkCode",
    maskedMsisdn: "MaskedMSISDN",
    geolocation: "Geolocation",
    protectedMobileData: "ProtectedMobileData",
    sensitiveMobileData: "SensitiveMobileData",
  },
});
