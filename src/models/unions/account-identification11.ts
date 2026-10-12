import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  auLocalAccountIdentificationSchema,
  type AuLocalAccountIdentification,
} from "../au-local-account-identification.js";
import {
  brLocalAccountIdentificationSchema,
  type BrLocalAccountIdentification,
} from "../br-local-account-identification.js";
import {
  caLocalAccountIdentificationSchema,
  type CaLocalAccountIdentification,
} from "../ca-local-account-identification.js";
import {
  czLocalAccountIdentificationSchema,
  type CzLocalAccountIdentification,
} from "../cz-local-account-identification.js";
import {
  dkLocalAccountIdentificationSchema,
  type DkLocalAccountIdentification,
} from "../dk-local-account-identification.js";
import {
  hkLocalAccountIdentificationSchema,
  type HkLocalAccountIdentification,
} from "../hk-local-account-identification.js";
import {
  huLocalAccountIdentificationSchema,
  type HuLocalAccountIdentification,
} from "../hu-local-account-identification.js";
import {
  ibanAccountIdentificationSchema,
  type IbanAccountIdentification,
} from "../iban-account-identification.js";
import {
  noLocalAccountIdentificationSchema,
  type NoLocalAccountIdentification,
} from "../no-local-account-identification.js";
import {
  numberAndBicAccountIdentificationSchema,
  type NumberAndBicAccountIdentification,
} from "../number-and-bic-account-identification.js";
import {
  nzLocalAccountIdentificationSchema,
  type NzLocalAccountIdentification,
} from "../nz-local-account-identification.js";
import {
  plLocalAccountIdentificationSchema,
  type PlLocalAccountIdentification,
} from "../pl-local-account-identification.js";
import {
  seLocalAccountIdentificationSchema,
  type SeLocalAccountIdentification,
} from "../se-local-account-identification.js";
import {
  sgLocalAccountIdentificationSchema,
  type SgLocalAccountIdentification,
} from "../sg-local-account-identification.js";
import {
  ukLocalAccountIdentificationSchema,
  type UkLocalAccountIdentification,
} from "../uk-local-account-identification.js";
import {
  usLocalAccountIdentificationSchema,
  type UsLocalAccountIdentification,
} from "../us-local-account-identification.js";

/** Bank account identification. */
export type AccountIdentification11 =
  | (IbanAccountIdentification & { type: "iban" })
  | (NumberAndBicAccountIdentification & { type: "numberAndBic" })
  | (AuLocalAccountIdentification & { type: "auLocal" })
  | (CzLocalAccountIdentification & { type: "czLocal" })
  | (NoLocalAccountIdentification & { type: "noLocal" })
  | (PlLocalAccountIdentification & { type: "plLocal" })
  | (HuLocalAccountIdentification & { type: "huLocal" })
  | (SeLocalAccountIdentification & { type: "seLocal" })
  | (SgLocalAccountIdentification & { type: "sgLocal" })
  | (UkLocalAccountIdentification & { type: "ukLocal" })
  | (UsLocalAccountIdentification & { type: "usLocal" })
  | (BrLocalAccountIdentification & { type: "brLocal" })
  | (DkLocalAccountIdentification & { type: "dkLocal" })
  | (CaLocalAccountIdentification & { type: "caLocal" })
  | (NzLocalAccountIdentification & { type: "nzLocal" })
  | (HkLocalAccountIdentification & { type: "hkLocal" });

export const accountIdentification11Schema: Schema<AccountIdentification11> =
  s.discriminatedUnion<AccountIdentification11>("type", {
    iban: ibanAccountIdentificationSchema,
    numberAndBic: numberAndBicAccountIdentificationSchema,
    auLocal: auLocalAccountIdentificationSchema,
    czLocal: czLocalAccountIdentificationSchema,
    noLocal: noLocalAccountIdentificationSchema,
    plLocal: plLocalAccountIdentificationSchema,
    huLocal: huLocalAccountIdentificationSchema,
    seLocal: seLocalAccountIdentificationSchema,
    sgLocal: sgLocalAccountIdentificationSchema,
    ukLocal: ukLocalAccountIdentificationSchema,
    usLocal: usLocalAccountIdentificationSchema,
    brLocal: brLocalAccountIdentificationSchema,
    dkLocal: dkLocalAccountIdentificationSchema,
    caLocal: caLocalAccountIdentificationSchema,
    nzLocal: nzLocalAccountIdentificationSchema,
    hkLocal: hkLocalAccountIdentificationSchema,
  });
