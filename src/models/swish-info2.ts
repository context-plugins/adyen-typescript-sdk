import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SwishInfo2 = {
  swishNumber: string;
};

export const swishInfo2Schema: Schema<SwishInfo2> = s.object<SwishInfo2>({
  swishNumber: s.string(),
});
