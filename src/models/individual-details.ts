import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { viasName2Schema, type ViasName2 } from "./vias-name2.js";
import { viasPersonalData2Schema, type ViasPersonalData2 } from "./vias-personal-data2.js";

export type IndividualDetails = {
  /**
   * The name of the individual. >Make sure your account holder registers using the name shown on
   * their Photo ID. Maximum length: 80 characters Cannot contain numbers. /n Cannot be empty.
   */
  name?: ViasName2;
  /** Personal information of the individual. */
  personalData?: ViasPersonalData2;
};

export const individualDetailsSchema: Schema<IndividualDetails> = s.object<IndividualDetails>({
  name: s.optional(s.lazy(() => viasName2Schema)),
  personalData: s.optional(s.lazy(() => viasPersonalData2Schema)),
});
