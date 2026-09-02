import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DefenseReasonsRequest = {
  disputePspReference: string;
  merchantAccountCode: string;
};

export const defenseReasonsRequestSchema: Schema<DefenseReasonsRequest> = s.object<DefenseReasonsRequest>({
  disputePspReference: s.string(),
  merchantAccountCode: s.string(),
});
