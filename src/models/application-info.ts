import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonField1Schema, type CommonField1 } from "./common-field1.js";
import { commonField2Schema, type CommonField2 } from "./common-field2.js";
import { commonField4Schema, type CommonField4 } from "./common-field4.js";
import { externalPlatformSchema, type ExternalPlatform } from "./external-platform.js";
import { merchantDeviceSchema, type MerchantDevice } from "./merchant-device.js";
import {
  shopperInteractionDeviceSchema,
  type ShopperInteractionDevice,
} from "./shopper-interaction-device.js";

export type ApplicationInfo = {
  adyenLibrary?: CommonField4;
  adyenPaymentSource?: CommonField1;
  externalPlatform?: ExternalPlatform;
  merchantApplication?: CommonField2;
  merchantDevice?: MerchantDevice;
  shopperInteractionDevice?: ShopperInteractionDevice;
};

export const applicationInfoSchema: Schema<ApplicationInfo> = s.object<ApplicationInfo>({
  adyenLibrary: s.optional(s.lazy(() => commonField4Schema)),
  adyenPaymentSource: s.optional(s.lazy(() => commonField1Schema)),
  externalPlatform: s.optional(s.lazy(() => externalPlatformSchema)),
  merchantApplication: s.optional(s.lazy(() => commonField2Schema)),
  merchantDevice: s.optional(s.lazy(() => merchantDeviceSchema)),
  shopperInteractionDevice: s.optional(s.lazy(() => shopperInteractionDeviceSchema)),
});
