import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displayOutputSchema, type DisplayOutput } from "./display-output.js";

export type DisplayRequest = {
  displayOutput: DisplayOutput[];
};

export const displayRequestSchema: Schema<DisplayRequest> = s.object<DisplayRequest>({
  displayOutput: s.array(s.lazy(() => displayOutputSchema)),
  _keysMap: {
    displayOutput: "DisplayOutput",
  },
});
