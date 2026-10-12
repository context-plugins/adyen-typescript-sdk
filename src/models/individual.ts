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

export type Individual = {
  /** The individual's birth information. */
  birthData?: BirthData1;
  /** The email address of the legal entity. */
  email?: string;
  /** Information about the individual's identification document. */
  identificationData?: IdentificationData1;
  /** The individual's name. */
  name: Name23;
  /** The individual's nationality. */
  nationality?: string;
  /** The phone number of the legal entity. */
  phone?: PhoneNumber2;
  /** The residential address of the individual. */
  residentialAddress: Address13;
  /** Support information for the legal entity. Required if you have a platform setup. */
  support?: Support1;
  /** The tax information of the individual. */
  taxInformation?: TaxInformation[];
  /** The website and app URL of the legal entity. */
  webData?: WebData1;
};

export const individualSchema: Schema<Individual> = s.object<Individual>({
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
