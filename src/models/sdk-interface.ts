import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SdkInterface = {
  Native: "native",
  Html: "html",
  Both: "both",
} as const;
export type SdkInterface = (typeof SdkInterface)[keyof typeof SdkInterface] | (string & {});

export const sdkInterfaceSchema: EnumSchema<SdkInterface> = s.enumOf<SdkInterface>(SdkInterface);
