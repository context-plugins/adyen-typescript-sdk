import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReprocessAndroidAppResponse = {
  /** The result of the reprocess. */
  message?: string;
};

export const reprocessAndroidAppResponseSchema: Schema<ReprocessAndroidAppResponse> =
  s.object<ReprocessAndroidAppResponse>({
    message: s.optional(s.string()),
    _keysMap: {
      message: "Message",
    },
  });
