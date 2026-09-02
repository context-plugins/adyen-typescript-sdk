import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClearpayInfo = {
  supportUrl: string;
};

export const clearpayInfoSchema: Schema<ClearpayInfo> = s.object<ClearpayInfo>({
  supportUrl: s.string(),
});
