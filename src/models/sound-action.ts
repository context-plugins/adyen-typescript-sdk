import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SoundAction = {
  StartSound: "StartSound",
  StopSound: "StopSound",
  SetDefaultVolume: "SetDefaultVolume",
} as const;
export type SoundAction = (typeof SoundAction)[keyof typeof SoundAction] | (string & {});

export const soundActionSchema: EnumSchema<SoundAction> = s.enumOf<SoundAction>(SoundAction);
