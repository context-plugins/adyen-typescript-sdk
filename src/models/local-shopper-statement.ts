import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LocalShopperStatement = {
  script: string;
  value: string;
};

export const localShopperStatementSchema: Schema<LocalShopperStatement> = s.object<LocalShopperStatement>({
  script: s.string(),
  value: s.string(),
});
