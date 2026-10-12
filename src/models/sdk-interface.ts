import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Supported SDK interface types. Allowed values:
 * * native
 * * html
 * * both
 */
export const SdkInterface = {
  Native: "native",
  Html: "html",
  Both: "both",
} as const;
export type SdkInterface = (typeof SdkInterface)[keyof typeof SdkInterface] | (string & {});

export const sdkInterfaceSchema: EnumSchema<SdkInterface> = s.enumOf<SdkInterface>(SdkInterface);
