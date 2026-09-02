import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { androidAppErrorSchema, type AndroidAppError } from "./android-app-error.js";
import { status6Schema, type Status6 } from "./status6.js";

export type AndroidApp = {
  description?: string;
  errorCode?: string;
  errors?: AndroidAppError[];
  id: string;
  label?: string;
  packageName?: string;
  status: Status6;
  versionCode?: number;
  versionName?: string;
};

export const androidAppSchema: Schema<AndroidApp> = s.object<AndroidApp>({
  description: s.optional(s.string()),
  errorCode: s.optional(s.string()),
  errors: s.optional(s.array(s.lazy(() => androidAppErrorSchema))),
  id: s.string(),
  label: s.optional(s.string()),
  packageName: s.optional(s.string()),
  status: status6Schema,
  versionCode: s.optional(s.number()),
  versionName: s.optional(s.string()),
});
