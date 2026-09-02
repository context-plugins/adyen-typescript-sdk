import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MealVoucherFrResponseInfo1 = {
  conecsId?: string;
  siret?: string;
  subTypes?: string[];
};

export const mealVoucherFrResponseInfo1Schema: Schema<MealVoucherFrResponseInfo1> =
  s.object<MealVoucherFrResponseInfo1>({
    conecsId: s.optional(s.string()),
    siret: s.optional(s.string()),
    subTypes: s.optional(s.array(s.string())),
  });
