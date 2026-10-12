import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type32, type32Schema } from "./type32.js";

export type InstallAndroidAppDetails = {
  /** The unique identifier of the app to be installed. */
  appId?: string;
  /** Type of terminal action: Install an Android app. @default Type32.InstallAndroidApp */
  type?: Type32;
};

export const installAndroidAppDetailsSchema: Schema<InstallAndroidAppDetails> =
  s.object<InstallAndroidAppDetails>({
    appId: s.optional(s.string()),
    type: s.defaulted(type32Schema, Type32.InstallAndroidApp),
  });
