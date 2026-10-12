import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displayOutputSchema, type DisplayOutput } from "./display-output.js";

/** Content of the Display Request message. */
export type DisplayRequest2 = {
  /**
   * Information to display and the way to process the display. Complete display content for output
   * devices. At most one DisplayOutput per Device/ InfoQualify pair.
   */
  displayOutput: DisplayOutput[];
};

export const displayRequest2Schema: Schema<DisplayRequest2> = s.object<DisplayRequest2>({
  displayOutput: s.array(s.lazy(() => displayOutputSchema)),
  _keysMap: {
    displayOutput: "DisplayOutput",
  },
});
