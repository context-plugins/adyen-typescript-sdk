import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { geolocation1Schema, type Geolocation1 } from "./geolocation1.js";
import { sensitiveMobileData1Schema, type SensitiveMobileData1 } from "./sensitive-mobile-data1.js";

export type MobileData = {
  mobileCountryCode?: number;
  mobileNetworkCode?: number;
  maskedMsisdn?: number;
  geolocation?: Geolocation1;
  protectedMobileData?: string;
  sensitiveMobileData?: SensitiveMobileData1;
};

export const mobileDataSchema: Schema<MobileData> = s.object<MobileData>({
  mobileCountryCode: s.optional(s.number()),
  mobileNetworkCode: s.optional(s.number()),
  maskedMsisdn: s.optional(s.number()),
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
