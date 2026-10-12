import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { menuEntryTag1Schema, type MenuEntryTag1 } from "./menu-entry-tag1.js";
import { outputFormat2Schema, type OutputFormat2 } from "./output-format2.js";
import { outputTextSchema, type OutputText } from "./output-text.js";
import { predefinedContentSchema, type PredefinedContent } from "./predefined-content.js";

/**
 * An entry of the menu to present to the Cashier. It conveys message text and parameters of the
 * menu entry. This output data could be only provided for an input command, in order to choose an
 * entry of the menu.
 */
export type MenuEntry = {
  /**
   * Characteristics related to the selection of a menu entry. Possible values:
   * * **NonSelectable**
   * * **NonSelectableSubMenu**
   * * **Selectable**
   * * **SubMenu**
   */
  menuEntryTag?: MenuEntryTag1;
  /**
   * Selection of a menu entry to be displayed. In Input request message, it allows selection of one
   * or several menu entries before any user action.
   *
   * @default false
   */
  defaultSelectedFlag?: boolean;
  /**
   * Possible values:
   * * **BarCode**
   * * **MessageRef**
   * * **Text**
   * * **XHTML**
   */
  outputFormat: OutputFormat2;
  /**
   * Reference of a predefined message to display or print. It conveys information related to the
   * predefined message.
   */
  predefinedContent?: PredefinedContent;
  /**
   * Content of text message to display or print. It conveys Information related to the content of
   * the text message and its format. All the data elements related to the format of the text to
   * display or print are parameters valid for the whole Text content.
   */
  outputText?: OutputText[];
  /** XHTML document body containing the message to display or print. */
  outputXhtml?: string;
};

export const menuEntrySchema: Schema<MenuEntry> = s.object<MenuEntry>({
  menuEntryTag: s.optional(s.lazy(() => menuEntryTag1Schema)),
  defaultSelectedFlag: s.defaulted(s.boolean(), false),
  outputFormat: outputFormat2Schema,
  predefinedContent: s.optional(s.lazy(() => predefinedContentSchema)),
  outputText: s.optional(s.array(s.lazy(() => outputTextSchema))),
  outputXhtml: s.optional(s.string()),
  _keysMap: {
    menuEntryTag: "MenuEntryTag",
    defaultSelectedFlag: "DefaultSelectedFlag",
    outputFormat: "OutputFormat",
    predefinedContent: "PredefinedContent",
    outputText: "OutputText",
    outputXhtml: "OutputXHTML",
  },
});
