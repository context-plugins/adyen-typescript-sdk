import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BankAccountIdentificationType = {
  AuLocal: "auLocal",
  BrLocal: "brLocal",
  CaLocal: "caLocal",
  CzLocal: "czLocal",
  DkLocal: "dkLocal",
  HkLocal: "hkLocal",
  HuLocal: "huLocal",
  Iban: "iban",
  InLocal: "inLocal",
  JpLocal: "jpLocal",
  Legacy: "legacy",
  MxLocal: "mxLocal",
  MyLocal: "myLocal",
  NoLocal: "noLocal",
  NumberAndBic: "numberAndBic",
  NzLocal: "nzLocal",
  PlLocal: "plLocal",
  SeLocal: "seLocal",
  SgLocal: "sgLocal",
  UkLocal: "ukLocal",
  UsLocal: "usLocal",
} as const;
export type BankAccountIdentificationType =
  | (typeof BankAccountIdentificationType)[keyof typeof BankAccountIdentificationType]
  | (string & {});

export const bankAccountIdentificationTypeSchema: EnumSchema<BankAccountIdentificationType> =
  s.enumOf<BankAccountIdentificationType>(BankAccountIdentificationType);
