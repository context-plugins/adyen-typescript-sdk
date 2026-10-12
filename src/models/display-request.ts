import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displayOutputSchema, type DisplayOutput } from "./display-output.js";

/**
 * It conveys the data to display and the way to process the display. It contains the complete
 * content to display. It might contain an operation (the DisplayOutput element) per Display Device
 * type. Content of the Display Request message.
 */
export type DisplayRequest = {
  /**
   * Information to display and the way to process the display. Complete display content for output
   * devices. At most one DisplayOutput per Device/ InfoQualify pair.
   */
  displayOutput: DisplayOutput[];
};

export const displayRequestSchema: Schema<DisplayRequest> = s.object<DisplayRequest>({
  displayOutput: s.array(s.lazy(() => displayOutputSchema)),
  _keysMap: {
    displayOutput: "DisplayOutput",
  },
});
