import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MealVoucherFrInfo = {
  conecsId: string;
  siret: string;
  subTypes: string[];
};

export const mealVoucherFrInfoSchema: Schema<MealVoucherFrInfo> = s.object<MealVoucherFrInfo>({
  conecsId: s.string(),
  siret: s.string(),
  subTypes: s.array(s.string()),
});
