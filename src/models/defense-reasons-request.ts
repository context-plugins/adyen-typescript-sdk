import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DefenseReasonsRequest = {
  /** The PSP reference assigned to the dispute. */
  disputePspReference: string;
  /** The merchant account identifier, for which you want to process the dispute transaction. */
  merchantAccountCode: string;
};

export const defenseReasonsRequestSchema: Schema<DefenseReasonsRequest> = s.object<DefenseReasonsRequest>({
  disputePspReference: s.string(),
  merchantAccountCode: s.string(),
});
