import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { airline1Schema, type Airline1 } from "./airline1.js";
import { carRental1Schema, type CarRental1 } from "./car-rental1.js";
import { healthcare2Schema, type Healthcare2 } from "./healthcare2.js";
import { levelTwoThree2Schema, type LevelTwoThree2 } from "./level-two-three2.js";
import { lodging2Schema, type Lodging2 } from "./lodging2.js";
import { temporaryServices2Schema, type TemporaryServices2 } from "./temporary-services2.js";

export type EnhancedSchemeData1 = {
  airline?: Airline1;
  carRental?: CarRental1;
  healthcare?: Healthcare2;
  levelTwoThree?: LevelTwoThree2;
  lodging?: Lodging2;
  temporaryServices?: TemporaryServices2;
};

export const enhancedSchemeData1Schema: Schema<EnhancedSchemeData1> = s.object<EnhancedSchemeData1>({
  airline: s.optional(s.lazy(() => airline1Schema)),
  carRental: s.optional(s.lazy(() => carRental1Schema)),
  healthcare: s.optional(s.lazy(() => healthcare2Schema)),
  levelTwoThree: s.optional(s.lazy(() => levelTwoThree2Schema)),
  lodging: s.optional(s.lazy(() => lodging2Schema)),
  temporaryServices: s.optional(s.lazy(() => temporaryServices2Schema)),
});
