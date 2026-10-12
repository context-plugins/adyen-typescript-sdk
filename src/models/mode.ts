import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the type of front end integration. Possible values:
 * * **embedded** (default): Drop-in or Components integration
 * * **hosted**: Hosted Checkout integration
 */
export const Mode = {
  Embedded: "embedded",
  Hosted: "hosted",
} as const;
export type Mode = (typeof Mode)[keyof typeof Mode] | (string & {});

export const modeSchema: EnumSchema<Mode> = s.enumOf<Mode>(Mode);
