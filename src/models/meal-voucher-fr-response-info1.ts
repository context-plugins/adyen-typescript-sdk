import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** **mealVoucher_FR** details */
export type MealVoucherFrResponseInfo1 = {
  /** Meal Voucher conecsId. */
  conecsId?: string;
  /** Meal Voucher siret. */
  siret?: string;
  /** The list of additional payment methods. */
  subTypes?: string[];
};

export const mealVoucherFrResponseInfo1Schema: Schema<MealVoucherFrResponseInfo1> =
  s.object<MealVoucherFrResponseInfo1>({
    conecsId: s.optional(s.string()),
    siret: s.optional(s.string()),
    subTypes: s.optional(s.array(s.string())),
  });
