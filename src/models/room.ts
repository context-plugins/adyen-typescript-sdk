import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Room = {
  numberOfNights?: number;
  rate?: number;
};

export const roomSchema: Schema<Room> = s.object<Room>({
  numberOfNights: s.optional(s.number()),
  rate: s.optional(s.number()),
});
