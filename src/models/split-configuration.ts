import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { splitConfigurationRuleSchema, type SplitConfigurationRule } from "./split-configuration-rule.js";

export type SplitConfiguration = {
  description: string;
  rules: SplitConfigurationRule[];
  splitConfigurationId?: string;
};

export const splitConfigurationSchema: Schema<SplitConfiguration> = s.object<SplitConfiguration>({
  description: s.string(),
  rules: s.array(s.lazy(() => splitConfigurationRuleSchema)),
  splitConfigurationId: s.optional(s.string()),
});
