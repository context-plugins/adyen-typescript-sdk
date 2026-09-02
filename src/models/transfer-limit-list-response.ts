import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferLimitSchema, type TransferLimit } from "./transfer-limit.js";

export type TransferLimitListResponse = {
  transferLimits: TransferLimit[];
};

export const transferLimitListResponseSchema: Schema<TransferLimitListResponse> =
  s.object<TransferLimitListResponse>({
    transferLimits: s.array(s.lazy(() => transferLimitSchema)),
  });
