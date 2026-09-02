import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApplePaySessionResponse = {
  data: string;
};

export const applePaySessionResponseSchema: Schema<ApplePaySessionResponse> =
  s.object<ApplePaySessionResponse>({
    data: s.string(),
  });
