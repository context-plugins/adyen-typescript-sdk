import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { referenced1Schema, type Referenced1 } from "./referenced1.js";
import { unreferenced2Schema, type Unreferenced2 } from "./unreferenced2.js";

export type Refunds1 = {
  referenced?: Referenced1;
  unreferenced?: Unreferenced2;
};

export const refunds1Schema: Schema<Refunds1> = s.object<Refunds1>({
  referenced: s.optional(s.lazy(() => referenced1Schema)),
  unreferenced: s.optional(s.lazy(() => unreferenced2Schema)),
});
