import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { androidAppSchema, type AndroidApp } from "./android-app.js";

export type AndroidAppsResponse = {
  /** Apps uploaded for Android payment terminals. */
  data?: AndroidApp[];
};

export const androidAppsResponseSchema: Schema<AndroidAppsResponse> = s.object<AndroidAppsResponse>({
  data: s.optional(s.array(s.lazy(() => androidAppSchema))),
});
