import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { localShopperStatementSchema, type LocalShopperStatement } from "./local-shopper-statement.js";

export type LocalizedInformation2 = {
  localShopperStatement: LocalShopperStatement[];
};

export const localizedInformation2Schema: Schema<LocalizedInformation2> = s.object<LocalizedInformation2>({
  localShopperStatement: s.array(s.lazy(() => localShopperStatementSchema)),
});
