import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Shopper interaction device, such as terminal, mobile device or web browser, to initiate payment
 * requests.
 */
export type ShopperInteractionDevice = {
  /** Locale on the shopper interaction device. */
  locale?: string;
  /** Operating system running on the shopper interaction device. */
  os?: string;
  /** Version of the operating system on the shopper interaction device. */
  osVersion?: string;
};

export const shopperInteractionDeviceSchema: Schema<ShopperInteractionDevice> =
  s.object<ShopperInteractionDevice>({
    locale: s.optional(s.string()),
    os: s.optional(s.string()),
    osVersion: s.optional(s.string()),
  });
