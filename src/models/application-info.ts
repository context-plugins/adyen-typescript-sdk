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

/**
 * Information about your application. For more details, see [Building Adyen
 * solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).
 */
export type ApplicationInfo = {
  /**
   * Adyen-developed software, such as libraries and plugins, used to interact with the Adyen API.
   * For example, Magento plugin, Java API library, etc.
   */
  adyenLibrary?: CommonField4;
  /**
   * Adyen-developed software to get payment details. For example, Checkout SDK, Secured Fields SDK,
   * etc.
   */
  adyenPaymentSource?: CommonField1;
  /**
   * Third-party developed platform used to initiate payment requests. For example, Magento, Zuora,
   * etc.
   */
  externalPlatform?: ExternalPlatform;
  /**
   * Merchant developed software, such as cashier application, used to interact with the Adyen API.
   */
  merchantApplication?: CommonField2;
  /** Merchant device information. */
  merchantDevice?: MerchantDevice;
  /**
   * Shopper interaction device, such as terminal, mobile device or web browser, to initiate payment
   * requests.
   */
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
