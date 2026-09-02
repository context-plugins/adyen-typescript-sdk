import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Identity2 = {
  fullLegalName: string;
  name: string;
};

export const identity2Schema: Schema<Identity2> = s.object<Identity2>({
  fullLegalName: s.string(),
  name: s.string(),
});
