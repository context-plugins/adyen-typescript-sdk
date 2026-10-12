import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displayOutput2Schema, type DisplayOutput2 } from "./display-output2.js";
import { inputData2Schema, type InputData2 } from "./input-data2.js";

/** Content of the Input Request message. */
export type InputRequest2 = {
  /** Information to display and the way to process the display. */
  displayOutput?: DisplayOutput2;
  /**
   * Information related to an Input request. It conveys the target input logical device, the type
   * of input command, and possible minimum and maximum length of the input. In addition, if the
   * requestor might require to receive an Event Notification if a card is inserted in a card
   * reader, with the `NotifyCardInputFlag`.
   */
  inputData: InputData2;
};

export const inputRequest2Schema: Schema<InputRequest2> = s.object<InputRequest2>({
  displayOutput: s.optional(s.lazy(() => displayOutput2Schema)),
  inputData: inputData2Schema,
  _keysMap: {
    displayOutput: "DisplayOutput",
    inputData: "InputData",
  },
});
