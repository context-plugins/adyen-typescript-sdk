import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DisablePermitRequest = {
  merchantAccount: string;
  token: string;
};

export const disablePermitRequestSchema: Schema<DisablePermitRequest> = s.object<DisablePermitRequest>({
  merchantAccount: s.string(),
  token: s.string(),
});
