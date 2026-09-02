import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TwintInfo2 = {
  logo: string;
};

export const twintInfo2Schema: Schema<TwintInfo2> = s.object<TwintInfo2>({
  logo: s.string(),
});
