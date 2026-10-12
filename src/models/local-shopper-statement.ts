import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LocalShopperStatement = {
  /**
   * The character set of the local shopper statement.
   *
   * Possible values: **ja-Hani**, **ja-Kana**.
   */
  script: string;
  /** The text of the local shopper statement in the specified character set. */
  value: string;
};

export const localShopperStatementSchema: Schema<LocalShopperStatement> = s.object<LocalShopperStatement>({
  script: s.string(),
  value: s.string(),
});
