import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type71, type71Schema } from "./type71.js";

export type UninstallAndroidAppDetails = {
  /** The unique identifier of the app to be uninstalled. */
  appId?: string;
  /** Type of terminal action: Uninstall an Android app. @default Type71.UninstallAndroidApp */
  type?: Type71;
};

export const uninstallAndroidAppDetailsSchema: Schema<UninstallAndroidAppDetails> =
  s.object<UninstallAndroidAppDetails>({
    appId: s.optional(s.string()),
    type: s.defaulted(type71Schema, Type71.UninstallAndroidApp),
  });
