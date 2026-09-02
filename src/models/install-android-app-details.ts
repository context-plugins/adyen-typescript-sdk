import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type310Schema, type Type310 } from "./type310.js";

export type InstallAndroidAppDetails = {
  appId?: string;
  type?: Type310;
};

export const installAndroidAppDetailsSchema: Schema<InstallAndroidAppDetails> =
  s.object<InstallAndroidAppDetails>({
    appId: s.optional(s.string()),
    type: s.optional(s.lazy(() => type310Schema)),
  });
