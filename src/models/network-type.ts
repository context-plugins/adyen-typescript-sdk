import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Network type for Terminal API notification webhooks. Possible values:
 * * **public**
 * * **local**
 *
 * Default Value: **public**.
 */
export const NetworkType = {
  Local: "local",
  Public: "public",
} as const;
export type NetworkType = (typeof NetworkType)[keyof typeof NetworkType] | (string & {});

export const networkTypeSchema: EnumSchema<NetworkType> = s.enumOf<NetworkType>(NetworkType);
