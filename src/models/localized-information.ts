import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { localShopperStatementSchema, type LocalShopperStatement } from "./local-shopper-statement.js";

export type LocalizedInformation = {
  /**
   * An array of local shopper statements. Card schemes use this in the bank statement.
   *
   * For Japan local shopper statements in both ja-Hani and ja-Kana are required.
   */
  localShopperStatement: LocalShopperStatement[];
};

export const localizedInformationSchema: Schema<LocalizedInformation> = s.object<LocalizedInformation>({
  localShopperStatement: s.array(s.lazy(() => localShopperStatementSchema)),
});
