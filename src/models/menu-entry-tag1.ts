import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MenuEntryTag1 = {
  Selectable: "Selectable",
  NonSelectable: "NonSelectable",
  SubMenu: "SubMenu",
  NonSelectableSubMenu: "NonSelectableSubMenu",
} as const;
export type MenuEntryTag1 = (typeof MenuEntryTag1)[keyof typeof MenuEntryTag1] | (string & {});

export const menuEntryTag1Schema: EnumSchema<MenuEntryTag1> = s.enumOf<MenuEntryTag1>(MenuEntryTag1);
