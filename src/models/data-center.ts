import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DataCenter = {
  livePrefix?: string;
  name?: string;
};

export const dataCenterSchema: Schema<DataCenter> = s.object<DataCenter>({
  livePrefix: s.optional(s.string()),
  name: s.optional(s.string()),
});
