import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { splitConfigurationSchema, type SplitConfiguration } from "./split-configuration.js";

export type SplitConfigurationList = {
  /** List of split configurations applied to the stores under the merchant account. */
  data?: SplitConfiguration[];
};

export const splitConfigurationListSchema: Schema<SplitConfigurationList> = s.object<SplitConfigurationList>({
  data: s.optional(s.array(s.lazy(() => splitConfigurationSchema))),
});
