import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status62 = {
  Authorised: "Authorised",
  Declined: "Declined",
} as const;
export type Status62 = (typeof Status62)[keyof typeof Status62] | (string & {});

export const status62Schema: EnumSchema<Status62> = s.enumOf<Status62>(Status62);
