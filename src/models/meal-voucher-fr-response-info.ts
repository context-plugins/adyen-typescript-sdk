import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MealVoucherFrResponseInfo = {
  /** Meal Voucher conecsId. */
  conecsId?: string;
  /** Meal Voucher siret. */
  siret?: string;
  /** The list of additional payment methods. */
  subTypes?: string[];
};

export const mealVoucherFrResponseInfoSchema: Schema<MealVoucherFrResponseInfo> =
  s.object<MealVoucherFrResponseInfo>({
    conecsId: s.optional(s.string()),
    siret: s.optional(s.string()),
    subTypes: s.optional(s.array(s.string())),
  });
