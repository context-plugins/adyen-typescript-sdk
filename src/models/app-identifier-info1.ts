import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AppIdentifierInfo1 = {
  androidPackageId?: string;
  iosScheme?: string;
};

export const appIdentifierInfo1Schema: Schema<AppIdentifierInfo1> = s.object<AppIdentifierInfo1>({
  androidPackageId: s.optional(s.string()),
  iosScheme: s.optional(s.string()),
});
