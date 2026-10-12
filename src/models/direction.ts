import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The direction of the transfer.
 *
 * Possible values: **incoming**, **outgoing**.
 */
export const Direction = {
  Incoming: "incoming",
  Outgoing: "outgoing",
} as const;
export type Direction = (typeof Direction)[keyof typeof Direction] | (string & {});

export const directionSchema: EnumSchema<Direction> = s.enumOf<Direction>(Direction);
