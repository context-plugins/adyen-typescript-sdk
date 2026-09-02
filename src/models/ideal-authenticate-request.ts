import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IdealAuthenticateRequest = {
  accountHolderId: string;
  payload: string;
};

export const idealAuthenticateRequestSchema: Schema<IdealAuthenticateRequest> =
  s.object<IdealAuthenticateRequest>({
    accountHolderId: s.string(),
    payload: s.string(),
  });
