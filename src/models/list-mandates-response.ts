import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { link2Schema, type Link2 } from "./link2.js";
import { mandate1Schema, type Mandate1 } from "./mandate1.js";

export type ListMandatesResponse = {
  link: Link2;
  mandates: Mandate1[];
};

export const listMandatesResponseSchema: Schema<ListMandatesResponse> = s.object<ListMandatesResponse>({
  link: link2Schema,
  mandates: s.array(s.lazy(() => mandate1Schema)),
});
