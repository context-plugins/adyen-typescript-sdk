import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address13Schema, type Address13 } from "./address13.js";
import { birthData1Schema, type BirthData1 } from "./birth-data1.js";
import { identificationData1Schema, type IdentificationData1 } from "./identification-data1.js";
import { name23Schema, type Name23 } from "./name23.js";
import { phoneNumber2Schema, type PhoneNumber2 } from "./phone-number2.js";
import { support1Schema, type Support1 } from "./support1.js";
import { taxInformationSchema, type TaxInformation } from "./tax-information.js";
import { webData1Schema, type WebData1 } from "./web-data1.js";

export type Individual1 = {
  birthData?: BirthData1;
  email?: string;
  identificationData?: IdentificationData1;
  name: Name23;
  nationality?: string;
  phone?: PhoneNumber2;
  residentialAddress: Address13;
  support?: Support1;
  taxInformation?: TaxInformation[];
  webData?: WebData1;
};

export const individual1Schema: Schema<Individual1> = s.object<Individual1>({
  birthData: s.optional(s.lazy(() => birthData1Schema)),
  email: s.optional(s.string()),
  identificationData: s.optional(s.lazy(() => identificationData1Schema)),
  name: name23Schema,
  nationality: s.optional(s.string()),
  phone: s.optional(s.lazy(() => phoneNumber2Schema)),
  residentialAddress: address13Schema,
  support: s.optional(s.lazy(() => support1Schema)),
  taxInformation: s.optional(s.array(s.lazy(() => taxInformationSchema))),
  webData: s.optional(s.lazy(() => webData1Schema)),
});
