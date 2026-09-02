import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShopperInteractionDevice = {
  locale?: string;
  os?: string;
  osVersion?: string;
};

export const shopperInteractionDeviceSchema: Schema<ShopperInteractionDevice> =
  s.object<ShopperInteractionDevice>({
    locale: s.optional(s.string()),
    os: s.optional(s.string()),
    osVersion: s.optional(s.string()),
  });
