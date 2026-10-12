import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UploadAndroidAppResponse = {
  /** The unique identifier of the uploaded Android app. */
  id?: string;
};

export const uploadAndroidAppResponseSchema: Schema<UploadAndroidAppResponse> =
  s.object<UploadAndroidAppResponse>({
    id: s.optional(s.string()),
  });
