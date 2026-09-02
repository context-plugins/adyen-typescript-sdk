import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount21 = {
  currency: string;
  value: number;
};

export const amount21Schema: Schema<Amount21> = s.object<Amount21>({
  currency: s.string(),
  value: s.number(),
});
