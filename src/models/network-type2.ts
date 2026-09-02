import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NetworkType2 = {
  Local: "local",
  Public: "public",
} as const;
export type NetworkType2 = (typeof NetworkType2)[keyof typeof NetworkType2] | (string & {});

export const networkType2Schema: EnumSchema<NetworkType2> = s.enumOf<NetworkType2>(NetworkType2);
