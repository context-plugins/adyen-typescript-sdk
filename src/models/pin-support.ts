import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** PIN Support. For ecommerce, PIN is required. */
export const PinSupport = {
  Pin: "PIN",
  NoPin: "NO PIN",
} as const;
export type PinSupport = (typeof PinSupport)[keyof typeof PinSupport] | (string & {});

export const pinSupportSchema: EnumSchema<PinSupport> = s.enumOf<PinSupport>(PinSupport);
