import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AppIdentifierInfo = {
  androidPackageId?: string;
  iosScheme?: string;
};

export const appIdentifierInfoSchema: Schema<AppIdentifierInfo> = s.object<AppIdentifierInfo>({
  androidPackageId: s.optional(s.string()),
  iosScheme: s.optional(s.string()),
});
