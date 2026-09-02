import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  auLocalAccountIdentification1Schema,
  type AuLocalAccountIdentification1,
} from "../au-local-account-identification1.js";
import {
  brLocalAccountIdentification1Schema,
  type BrLocalAccountIdentification1,
} from "../br-local-account-identification1.js";
import {
  caLocalAccountIdentification1Schema,
  type CaLocalAccountIdentification1,
} from "../ca-local-account-identification1.js";
import {
  czLocalAccountIdentification1Schema,
  type CzLocalAccountIdentification1,
} from "../cz-local-account-identification1.js";
import {
  dkLocalAccountIdentification1Schema,
  type DkLocalAccountIdentification1,
} from "../dk-local-account-identification1.js";
import {
  hkLocalAccountIdentification1Schema,
  type HkLocalAccountIdentification1,
} from "../hk-local-account-identification1.js";
import {
  huLocalAccountIdentification1Schema,
  type HuLocalAccountIdentification1,
} from "../hu-local-account-identification1.js";
import {
  ibanAccountIdentification1Schema,
  type IbanAccountIdentification1,
} from "../iban-account-identification1.js";
import {
  noLocalAccountIdentification1Schema,
  type NoLocalAccountIdentification1,
} from "../no-local-account-identification1.js";
import {
  numberAndBicAccountIdentification2Schema,
  type NumberAndBicAccountIdentification2,
} from "../number-and-bic-account-identification2.js";
import {
  nzLocalAccountIdentification1Schema,
  type NzLocalAccountIdentification1,
} from "../nz-local-account-identification1.js";
import {
  plLocalAccountIdentification1Schema,
  type PlLocalAccountIdentification1,
} from "../pl-local-account-identification1.js";
import {
  seLocalAccountIdentification1Schema,
  type SeLocalAccountIdentification1,
} from "../se-local-account-identification1.js";
import {
  sgLocalAccountIdentification1Schema,
  type SgLocalAccountIdentification1,
} from "../sg-local-account-identification1.js";
import {
  ukLocalAccountIdentification1Schema,
  type UkLocalAccountIdentification1,
} from "../uk-local-account-identification1.js";
import {
  usLocalAccountIdentification1Schema,
  type UsLocalAccountIdentification1,
} from "../us-local-account-identification1.js";

export type BankAccountIdentification =
  | (AuLocalAccountIdentification1 & { type: "auLocal" })
  | (BrLocalAccountIdentification1 & { type: "brLocal" })
  | (CaLocalAccountIdentification1 & { type: "caLocal" })
  | (CzLocalAccountIdentification1 & { type: "czLocal" })
  | (DkLocalAccountIdentification1 & { type: "dkLocal" })
  | (HkLocalAccountIdentification1 & { type: "hkLocal" })
  | (HuLocalAccountIdentification1 & { type: "huLocal" })
  | (IbanAccountIdentification1 & { type: "iban" })
  | (NoLocalAccountIdentification1 & { type: "noLocal" })
  | (NzLocalAccountIdentification1 & { type: "nzLocal" })
  | (NumberAndBicAccountIdentification2 & { type: "numberAndBic" })
  | (PlLocalAccountIdentification1 & { type: "plLocal" })
  | (SeLocalAccountIdentification1 & { type: "seLocal" })
  | (SgLocalAccountIdentification1 & { type: "sgLocal" })
  | (UkLocalAccountIdentification1 & { type: "ukLocal" })
  | (UsLocalAccountIdentification1 & { type: "usLocal" });

export const bankAccountIdentificationSchema: Schema<BankAccountIdentification> =
  s.discriminatedUnion<BankAccountIdentification>("type", {
    auLocal: auLocalAccountIdentification1Schema,
    brLocal: brLocalAccountIdentification1Schema,
    caLocal: caLocalAccountIdentification1Schema,
    czLocal: czLocalAccountIdentification1Schema,
    dkLocal: dkLocalAccountIdentification1Schema,
    hkLocal: hkLocalAccountIdentification1Schema,
    huLocal: huLocalAccountIdentification1Schema,
    iban: ibanAccountIdentification1Schema,
    noLocal: noLocalAccountIdentification1Schema,
    nzLocal: nzLocalAccountIdentification1Schema,
    numberAndBic: numberAndBicAccountIdentification2Schema,
    plLocal: plLocalAccountIdentification1Schema,
    seLocal: seLocalAccountIdentification1Schema,
    sgLocal: sgLocalAccountIdentification1Schema,
    ukLocal: ukLocalAccountIdentification1Schema,
    usLocal: usLocalAccountIdentification1Schema,
  });
