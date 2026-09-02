import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MealVoucherFrInfo1 = {
  conecsId: string;
  siret: string;
  subTypes: string[];
};

export const mealVoucherFrInfo1Schema: Schema<MealVoucherFrInfo1> = s.object<MealVoucherFrInfo1>({
  conecsId: s.string(),
  siret: s.string(),
  subTypes: s.array(s.string()),
});
