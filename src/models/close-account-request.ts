import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CloseAccountRequest = {
  accountCode: string;
};

export const closeAccountRequestSchema: Schema<CloseAccountRequest> = s.object<CloseAccountRequest>({
  accountCode: s.string(),
});
