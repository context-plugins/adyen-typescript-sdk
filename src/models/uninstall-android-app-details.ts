import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type71Schema, type Type71 } from "./type71.js";

export type UninstallAndroidAppDetails = {
  appId?: string;
  type?: Type71;
};

export const uninstallAndroidAppDetailsSchema: Schema<UninstallAndroidAppDetails> =
  s.object<UninstallAndroidAppDetails>({
    appId: s.optional(s.string()),
    type: s.optional(s.lazy(() => type71Schema)),
  });
