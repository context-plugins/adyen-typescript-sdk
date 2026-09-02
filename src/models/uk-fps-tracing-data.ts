import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type272Schema, type Type272 } from "./type272.js";

export type UkFpsTracingData = {
  fpid: string;
  type: Type272;
};

export const ukFpsTracingDataSchema: Schema<UkFpsTracingData> = s.object<UkFpsTracingData>({
  fpid: s.string(),
  type: type272Schema,
});
