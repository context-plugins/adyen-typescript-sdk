import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displayOutputSchema, type DisplayOutput } from "./display-output.js";

export type DisplayRequest2 = {
  displayOutput: DisplayOutput[];
};

export const displayRequest2Schema: Schema<DisplayRequest2> = s.object<DisplayRequest2>({
  displayOutput: s.array(s.lazy(() => displayOutputSchema)),
  _keysMap: {
    displayOutput: "DisplayOutput",
  },
});
