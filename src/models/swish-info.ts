import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SwishInfo = {
  swishNumber: string;
};

export const swishInfoSchema: Schema<SwishInfo> = s.object<SwishInfo>({
  swishNumber: s.string(),
});
