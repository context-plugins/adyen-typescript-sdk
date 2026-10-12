import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categorySchema, type Category } from "./category.js";

export type Notification = {
  /** The type of event notification sent when you select the notification button. */
  category?: Category;
  /**
   * The text shown in the prompt which opens when you select the notification button. For example,
   * the description of the input box for pay-at-table.
   */
  details?: string;
  /**
   * Enables sending event notifications either by pressing the Confirm key on terminals with a
   * keypad or by tapping the event notification button on the terminal screen.
   */
  enabled?: boolean;
  /**
   * Shows or hides the event notification button on the screen of terminal models that have a
   * keypad.
   */
  showButton?: boolean;
  /** The name of the notification button on the terminal screen. */
  title?: string;
};

export const notificationSchema: Schema<Notification> = s.object<Notification>({
  category: s.optional(s.lazy(() => categorySchema)),
  details: s.optional(s.string()),
  enabled: s.optional(s.boolean()),
  showButton: s.optional(s.boolean()),
  title: s.optional(s.string()),
});
