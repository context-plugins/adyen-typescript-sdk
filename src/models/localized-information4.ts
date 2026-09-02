import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { localShopperStatementSchema, type LocalShopperStatement } from "./local-shopper-statement.js";

export type LocalizedInformation4 = {
  localShopperStatement: LocalShopperStatement[];
};

export const localizedInformation4Schema: Schema<LocalizedInformation4> = s.object<LocalizedInformation4>({
  localShopperStatement: s.array(s.lazy(() => localShopperStatementSchema)),
});
