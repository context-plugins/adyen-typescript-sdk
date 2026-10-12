import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MealVoucherFrInfo = {
  /** Meal Voucher conecsId. Format: digits only */
  conecsId: string;
  /** Meal Voucher siret. Format: 14 digits. */
  siret: string;
  /**
   * The list of additional payment methods. Allowed values: **mealVoucher_FR_endenred**,
   * **mealVoucher_FR_groupeup**, **mealVoucher_FR_natixis**, **mealVoucher_FR_sodexo**.
   */
  subTypes: string[];
};

export const mealVoucherFrInfoSchema: Schema<MealVoucherFrInfo> = s.object<MealVoucherFrInfo>({
  conecsId: s.string(),
  siret: s.string(),
  subTypes: s.array(s.string()),
});
