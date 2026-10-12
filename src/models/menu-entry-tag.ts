import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Characteristics related to the selection of a menu entry. Possible values:
 * * **Selectable**
 * * **NonSelectable**
 * * **SubMenu**
 * * **NonSelectableSubMenu**
 */
export const MenuEntryTag = {
  Selectable: "Selectable",
  NonSelectable: "NonSelectable",
  SubMenu: "SubMenu",
  NonSelectableSubMenu: "NonSelectableSubMenu",
} as const;
export type MenuEntryTag = (typeof MenuEntryTag)[keyof typeof MenuEntryTag] | (string & {});

export const menuEntryTagSchema: EnumSchema<MenuEntryTag> = s.enumOf<MenuEntryTag>(MenuEntryTag);
