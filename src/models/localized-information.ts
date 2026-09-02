import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { localShopperStatementSchema, type LocalShopperStatement } from "./local-shopper-statement.js";

export type LocalizedInformation = {
  localShopperStatement: LocalShopperStatement[];
};

export const localizedInformationSchema: Schema<LocalizedInformation> = s.object<LocalizedInformation>({
  localShopperStatement: s.array(s.lazy(() => localShopperStatementSchema)),
});
