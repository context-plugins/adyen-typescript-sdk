import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { airline1Schema, type Airline1 } from "./airline1.js";
import { carRental1Schema, type CarRental1 } from "./car-rental1.js";
import { healthcare2Schema, type Healthcare2 } from "./healthcare2.js";
import { levelTwoThree2Schema, type LevelTwoThree2 } from "./level-two-three2.js";
import { lodging2Schema, type Lodging2 } from "./lodging2.js";
import { temporaryServices2Schema, type TemporaryServices2 } from "./temporary-services2.js";

export type EnhancedSchemeData = {
  /**
   * [Airline enhanced scheme
   * data](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/airline/) that may be
   * required for processing the transaction and/or for interchange savings.
   */
  airline?: Airline1;
  /**
   * [Car rental enhanced scheme
   * data](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/car-rental/) that may
   * be required for processing the transaction and/or for interchange savings.
   */
  carRental?: CarRental1;
  /**
   * Healthcare auto-substantiation amounts for FSA/HSA card transactions. The amounts are used to
   * qualify for reduced interchange rates on healthcare-eligible cards.
   */
  healthcare?: Healthcare2;
  /**
   * [Level 2 and Level 3 enhanced scheme
   * data](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/l2-l3/) that may be
   * required for processing the transaction and/or for interchange savings.
   */
  levelTwoThree?: LevelTwoThree2;
  /**
   * [Lodging enhanced scheme
   * data](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/lodging/) that may be
   * required for processing the transaction and/or for interchange savings.
   */
  lodging?: Lodging2;
  /**
   * [Temporary services enhanced scheme
   * data](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/temporary-services/)
   * that may be required for processing the transaction and/or for interchange savings.
   */
  temporaryServices?: TemporaryServices2;
};

export const enhancedSchemeDataSchema: Schema<EnhancedSchemeData> = s.object<EnhancedSchemeData>({
  airline: s.optional(s.lazy(() => airline1Schema)),
  carRental: s.optional(s.lazy(() => carRental1Schema)),
  healthcare: s.optional(s.lazy(() => healthcare2Schema)),
  levelTwoThree: s.optional(s.lazy(() => levelTwoThree2Schema)),
  lodging: s.optional(s.lazy(() => lodging2Schema)),
  temporaryServices: s.optional(s.lazy(() => temporaryServices2Schema)),
});
