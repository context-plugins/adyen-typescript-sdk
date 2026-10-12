import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { localShopperStatementSchema, type LocalShopperStatement } from "./local-shopper-statement.js";

/** Localized information about the store. */
export type LocalizedInformation2 = {
  /**
   * An array of local shopper statements. Card schemes use this in the bank statement.
   *
   * For Japan local shopper statements in both ja-Hani and ja-Kana are required.
   */
  localShopperStatement: LocalShopperStatement[];
};

export const localizedInformation2Schema: Schema<LocalizedInformation2> = s.object<LocalizedInformation2>({
  localShopperStatement: s.array(s.lazy(() => localShopperStatementSchema)),
});
