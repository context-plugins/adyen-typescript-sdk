import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StoreFiltrationMode = {
  Exclusive: "exclusive",
  Inclusive: "inclusive",
  SkipFilter: "skipFilter",
} as const;
export type StoreFiltrationMode =
  | (typeof StoreFiltrationMode)[keyof typeof StoreFiltrationMode]
  | (string & {});

export const storeFiltrationModeSchema: EnumSchema<StoreFiltrationMode> =
  s.enumOf<StoreFiltrationMode>(StoreFiltrationMode);
