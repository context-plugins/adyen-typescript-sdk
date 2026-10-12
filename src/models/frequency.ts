import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The frequency with which a shopper should be charged.
 *
 * Possible values: **adhoc**, **daily**, **weekly**, **biWeekly**, **monthly**, **quarterly**,
 * **halfYearly**, **yearly**., The frequency with which a shopper should be charged.
 *
 * Possible values: **daily**, **weekly**, **biWeekly**, **monthly**, **quarterly**, **halfYearly**,
 * **yearly**.
 */
export const Frequency = {
  Adhoc: "adhoc",
  Daily: "daily",
  Weekly: "weekly",
  BiWeekly: "biWeekly",
  Monthly: "monthly",
  Quarterly: "quarterly",
  HalfYearly: "halfYearly",
  Yearly: "yearly",
} as const;
export type Frequency = (typeof Frequency)[keyof typeof Frequency] | (string & {});

export const frequencySchema: EnumSchema<Frequency> = s.enumOf<Frequency>(Frequency);
