import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { viasName2Schema, type ViasName2 } from "./vias-name2.js";
import { viasPersonalData2Schema, type ViasPersonalData2 } from "./vias-personal-data2.js";

export type IndividualDetails3 = {
  name?: ViasName2;
  personalData?: ViasPersonalData2;
};

export const individualDetails3Schema: Schema<IndividualDetails3> = s.object<IndividualDetails3>({
  name: s.optional(s.lazy(() => viasName2Schema)),
  personalData: s.optional(s.lazy(() => viasPersonalData2Schema)),
});
