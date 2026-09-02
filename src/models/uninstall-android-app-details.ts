import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type78Schema, type Type78 } from "./type78.js";

export type UninstallAndroidAppDetails = {
  appId?: string;
  type?: Type78;
};

export const uninstallAndroidAppDetailsSchema: Schema<UninstallAndroidAppDetails> =
  s.object<UninstallAndroidAppDetails>({
    appId: s.optional(s.string()),
    type: s.optional(s.lazy(() => type78Schema)),
  });
