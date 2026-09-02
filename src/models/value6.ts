import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Value6 = {
  Card: "CARD",
  MobilePhone: "MOBILE_PHONE",
  Other: "OTHER",
  Pc: "PC",
  TabletOrEreader: "TABLET_OR_EREADER",
  Unknown: "UNKNOWN",
  WatchOrWristband: "WATCH_OR_WRISTBAND",
  Wearable: "WEARABLE",
} as const;
export type Value6 = (typeof Value6)[keyof typeof Value6] | (string & {});

export const value6Schema: EnumSchema<Value6> = s.enumOf<Value6>(Value6);
