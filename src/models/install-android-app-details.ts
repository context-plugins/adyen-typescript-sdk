import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type32Schema, type Type32 } from "./type32.js";

export type InstallAndroidAppDetails = {
  appId?: string;
  type?: Type32;
};

export const installAndroidAppDetailsSchema: Schema<InstallAndroidAppDetails> =
  s.object<InstallAndroidAppDetails>({
    appId: s.optional(s.string()),
    type: s.optional(s.lazy(() => type32Schema)),
  });
