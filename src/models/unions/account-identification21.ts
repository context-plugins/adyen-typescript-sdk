import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  auLocalAccountIdentificationSchema,
  type AuLocalAccountIdentification,
} from "../au-local-account-identification.js";
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

export type AccountIdentification21 =
  | AuLocalAccountIdentification
  | CaLocalAccountIdentification
  | CzLocalAccountIdentification
  | DkLocalAccountIdentification
  | HkLocalAccountIdentification
  | HuLocalAccountIdentification
  | IbanAccountIdentification
  | NoLocalAccountIdentification
  | NzLocalAccountIdentification
  | NumberAndBicAccountIdentification
  | PlLocalAccountIdentification
  | SeLocalAccountIdentification
  | SgLocalAccountIdentification
  | UkLocalAccountIdentification
  | UsLocalAccountIdentification;

export const accountIdentification21Schema: Schema<AccountIdentification21> = s.of<AccountIdentification21>(
  s.union([
    s.lazy(() => auLocalAccountIdentificationSchema),
    s.lazy(() => caLocalAccountIdentificationSchema),
    s.lazy(() => czLocalAccountIdentificationSchema),
    s.lazy(() => dkLocalAccountIdentificationSchema),
    s.lazy(() => hkLocalAccountIdentificationSchema),
    s.lazy(() => huLocalAccountIdentificationSchema),
    s.lazy(() => ibanAccountIdentificationSchema),
    s.lazy(() => noLocalAccountIdentificationSchema),
    s.lazy(() => nzLocalAccountIdentificationSchema),
    s.lazy(() => numberAndBicAccountIdentificationSchema),
    s.lazy(() => plLocalAccountIdentificationSchema),
    s.lazy(() => seLocalAccountIdentificationSchema),
    s.lazy(() => sgLocalAccountIdentificationSchema),
    s.lazy(() => ukLocalAccountIdentificationSchema),
    s.lazy(() => usLocalAccountIdentificationSchema),
  ]),
);
