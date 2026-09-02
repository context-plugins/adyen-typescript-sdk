import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StoreFiltrationMode2 = {
  Exclusive: "exclusive",
  Inclusive: "inclusive",
  SkipFilter: "skipFilter",
} as const;
export type StoreFiltrationMode2 =
  | (typeof StoreFiltrationMode2)[keyof typeof StoreFiltrationMode2]
  | (string & {});

export const storeFiltrationMode2Schema: EnumSchema<StoreFiltrationMode2> =
  s.enumOf<StoreFiltrationMode2>(StoreFiltrationMode2);
