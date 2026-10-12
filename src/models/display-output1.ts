import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { device11Schema, type Device11 } from "./device11.js";
import { infoQualify1Schema, type InfoQualify1 } from "./info-qualify1.js";
import { menuEntrySchema, type MenuEntry } from "./menu-entry.js";
import { outputContent1Schema, type OutputContent1 } from "./output-content1.js";

/**
 * Information to display and the way to process the display. To display an abort message to the
 * Customer.
 */
export type DisplayOutput1 = {
  /** Indicates if the message response is required. @default true */
  responseRequiredFlag?: boolean;
  /** Number of seconds the message has to be displayed. @default 0 */
  minimumDisplayTime?: number;
  /**
   * Logical device located on a Sale Terminal or a POI Terminal, in terms of class of information
   * to output (display, print, or store), or input (keyboard) for the Cashier or the Customer.
   * Possible values:
   * * **CashierDisplay**
   * * **CashierInput**
   * * **CustomerDisplay**
   * * **CustomerInput**
   */
  device: Device11;
  /**
   * Qualification of the information to sent to an output logical device, to display or print to
   * the Cashier or the Customer. Allows the manager of the device, Sale or POI Terminal, to send
   * the information to a particular physical device or to present the information accordingly.
   * Possible values:
   * * **CustomerAssistance**
   * * **Display**
   * * **Document**
   * * **Error**
   * * **Input**
   * * **POIReplication**
   * * **Receipt**
   * * **Sound**
   * * **Status**
   * * **Voucher**
   */
  infoQualify: InfoQualify1;
  /** Content to display or print. */
  outputContent: OutputContent1;
  /**
   * An entry of the menu to present to the Cashier. It conveys the message text and parameters of
   * the menu entry. This output data could be only provided for an input command, in order to
   * choose an entryof the menu.
   */
  menuEntry?: MenuEntry[];
  /**
   * Vendor-specific signature of the text message to display or print. If protection has to be
   * provided to the vendor on the text to display or print.
   */
  outputSignature?: string;
};

export const displayOutput1Schema: Schema<DisplayOutput1> = s.object<DisplayOutput1>({
  responseRequiredFlag: s.defaulted(s.boolean(), true),
  minimumDisplayTime: s.defaulted(s.int(), 0),
  device: device11Schema,
  infoQualify: infoQualify1Schema,
  outputContent: outputContent1Schema,
  menuEntry: s.optional(s.array(s.lazy(() => menuEntrySchema))),
  outputSignature: s.optional(s.string()),
  _keysMap: {
    responseRequiredFlag: "ResponseRequiredFlag",
    minimumDisplayTime: "MinimumDisplayTime",
    device: "Device",
    infoQualify: "InfoQualify",
    outputContent: "OutputContent",
    menuEntry: "MenuEntry",
    outputSignature: "OutputSignature",
  },
});
