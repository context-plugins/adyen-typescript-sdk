import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { link2Schema, type Link2 } from "./link2.js";
import { mandate1Schema, type Mandate1 } from "./mandate1.js";

export type ListMandatesResponse = {
  /** Contains links to the next and previous page whenever applicable. */
  link: Link2;
  /** Contains a list of the mandates. */
  mandates: Mandate1[];
};

export const listMandatesResponseSchema: Schema<ListMandatesResponse> = s.object<ListMandatesResponse>({
  link: link2Schema,
  mandates: s.array(s.lazy(() => mandate1Schema)),
});
