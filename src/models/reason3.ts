import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The reason why the web data was not provided. Possible value: **noOnlinePresence**. */
export const Reason3 = {
  NoOnlinePresence: "noOnlinePresence",
  NotCollectedDuringOnboarding: "notCollectedDuringOnboarding",
} as const;
export type Reason3 = (typeof Reason3)[keyof typeof Reason3] | (string & {});

export const reason3Schema: EnumSchema<Reason3> = s.enumOf<Reason3>(Reason3);
