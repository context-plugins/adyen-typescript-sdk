import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount24 = {
  currency: string;
  value: number;
};

export const amount24Schema: Schema<Amount24> = s.object<Amount24>({
  currency: s.string(),
  value: s.number(),
});
