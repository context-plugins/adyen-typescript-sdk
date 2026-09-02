import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accelUpdateInfo1Schema, type AccelUpdateInfo1 } from "./accel-update-info1.js";
import { affirmUpdateInfo1Schema, type AffirmUpdateInfo1 } from "./affirm-update-info1.js";
import { bcmcUpdateInfo1Schema, type BcmcUpdateInfo1 } from "./bcmc-update-info1.js";
import {
  cartesBancairesUpdateInfo1Schema,
  type CartesBancairesUpdateInfo1,
} from "./cartes-bancaires-update-info1.js";
import { cashAppUpdateInfo1Schema, type CashAppUpdateInfo1 } from "./cash-app-update-info1.js";
import {
  genericPmWithTdiUpdateInfo1Schema,
  type GenericPmWithTdiUpdateInfo1,
} from "./generic-pm-with-tdi-update-info1.js";
import {
  genericPmWithTdiUpdateInfo10Schema,
  type GenericPmWithTdiUpdateInfo10,
} from "./generic-pm-with-tdi-update-info10.js";
import {
  genericPmWithTdiUpdateInfo11Schema,
  type GenericPmWithTdiUpdateInfo11,
} from "./generic-pm-with-tdi-update-info11.js";
import {
  genericPmWithTdiUpdateInfo12Schema,
  type GenericPmWithTdiUpdateInfo12,
} from "./generic-pm-with-tdi-update-info12.js";
import {
  genericPmWithTdiUpdateInfo13Schema,
  type GenericPmWithTdiUpdateInfo13,
} from "./generic-pm-with-tdi-update-info13.js";
import {
  genericPmWithTdiUpdateInfo14Schema,
  type GenericPmWithTdiUpdateInfo14,
} from "./generic-pm-with-tdi-update-info14.js";
import {
  genericPmWithTdiUpdateInfo2Schema,
  type GenericPmWithTdiUpdateInfo2,
} from "./generic-pm-with-tdi-update-info2.js";
import {
  genericPmWithTdiUpdateInfo3Schema,
  type GenericPmWithTdiUpdateInfo3,
} from "./generic-pm-with-tdi-update-info3.js";
import {
  genericPmWithTdiUpdateInfo4Schema,
  type GenericPmWithTdiUpdateInfo4,
} from "./generic-pm-with-tdi-update-info4.js";
import {
  genericPmWithTdiUpdateInfo5Schema,
  type GenericPmWithTdiUpdateInfo5,
} from "./generic-pm-with-tdi-update-info5.js";
import {
  genericPmWithTdiUpdateInfo6Schema,
  type GenericPmWithTdiUpdateInfo6,
} from "./generic-pm-with-tdi-update-info6.js";
import {
  genericPmWithTdiUpdateInfo7Schema,
  type GenericPmWithTdiUpdateInfo7,
} from "./generic-pm-with-tdi-update-info7.js";
import {
  genericPmWithTdiUpdateInfo8Schema,
  type GenericPmWithTdiUpdateInfo8,
} from "./generic-pm-with-tdi-update-info8.js";
import {
  genericPmWithTdiUpdateInfo9Schema,
  type GenericPmWithTdiUpdateInfo9,
} from "./generic-pm-with-tdi-update-info9.js";
import { nyceUpdateInfo1Schema, type NyceUpdateInfo1 } from "./nyce-update-info1.js";
import {
  payByBankPlaidUpdateInfo1Schema,
  type PayByBankPlaidUpdateInfo1,
} from "./pay-by-bank-plaid-update-info1.js";
import { pulseUpdateInfo1Schema, type PulseUpdateInfo1 } from "./pulse-update-info1.js";
import {
  sepaDirectDebitUpdateInfo1Schema,
  type SepaDirectDebitUpdateInfo1,
} from "./sepa-direct-debit-update-info1.js";
import { starUpdateInfo1Schema, type StarUpdateInfo1 } from "./star-update-info1.js";

export type UpdatePaymentMethodInfo = {
  accel?: AccelUpdateInfo1;
  affirm?: AffirmUpdateInfo1;
  bcmc?: BcmcUpdateInfo1;
  carnet?: GenericPmWithTdiUpdateInfo1;
  cartesBancaires?: CartesBancairesUpdateInfo1;
  cashapp?: CashAppUpdateInfo1;
  countries?: string[];
  cup?: GenericPmWithTdiUpdateInfo2;
  currencies?: string[];
  customRoutingFlags?: string[];
  diners?: GenericPmWithTdiUpdateInfo3;
  discover?: GenericPmWithTdiUpdateInfo4;
  eftDirectdebitCa?: GenericPmWithTdiUpdateInfo5;
  eftposAustralia?: GenericPmWithTdiUpdateInfo6;
  enabled?: boolean;
  girocard?: GenericPmWithTdiUpdateInfo7;
  ideal?: GenericPmWithTdiUpdateInfo8;
  interacCard?: GenericPmWithTdiUpdateInfo9;
  jcb?: GenericPmWithTdiUpdateInfo10;
  maestro?: GenericPmWithTdiUpdateInfo11;
  maestroUsa?: GenericPmWithTdiUpdateInfo12;
  mc?: GenericPmWithTdiUpdateInfo13;
  nyce?: NyceUpdateInfo1;
  paybybankPlaid?: PayByBankPlaidUpdateInfo1;
  pulse?: PulseUpdateInfo1;
  sepadirectdebit?: SepaDirectDebitUpdateInfo1;
  star?: StarUpdateInfo1;
  storeId?: string;
  storeIds?: string[];
  visa?: GenericPmWithTdiUpdateInfo14;
};

export const updatePaymentMethodInfoSchema: Schema<UpdatePaymentMethodInfo> =
  s.object<UpdatePaymentMethodInfo>({
    accel: s.optional(s.lazy(() => accelUpdateInfo1Schema)),
    affirm: s.optional(s.lazy(() => affirmUpdateInfo1Schema)),
    bcmc: s.optional(s.lazy(() => bcmcUpdateInfo1Schema)),
    carnet: s.optional(s.lazy(() => genericPmWithTdiUpdateInfo1Schema)),
    cartesBancaires: s.optional(s.lazy(() => cartesBancairesUpdateInfo1Schema)),
    cashapp: s.optional(s.lazy(() => cashAppUpdateInfo1Schema)),
    countries: s.optional(s.array(s.string())),
    cup: s.optional(s.lazy(() => genericPmWithTdiUpdateInfo2Schema)),
    currencies: s.optional(s.array(s.string())),
    customRoutingFlags: s.optional(s.array(s.string())),
    diners: s.optional(s.lazy(() => genericPmWithTdiUpdateInfo3Schema)),
    discover: s.optional(s.lazy(() => genericPmWithTdiUpdateInfo4Schema)),
    eftDirectdebitCa: s.optional(s.lazy(() => genericPmWithTdiUpdateInfo5Schema)),
    eftposAustralia: s.optional(s.lazy(() => genericPmWithTdiUpdateInfo6Schema)),
    enabled: s.optional(s.boolean()),
    girocard: s.optional(s.lazy(() => genericPmWithTdiUpdateInfo7Schema)),
    ideal: s.optional(s.lazy(() => genericPmWithTdiUpdateInfo8Schema)),
    interacCard: s.optional(s.lazy(() => genericPmWithTdiUpdateInfo9Schema)),
    jcb: s.optional(s.lazy(() => genericPmWithTdiUpdateInfo10Schema)),
    maestro: s.optional(s.lazy(() => genericPmWithTdiUpdateInfo11Schema)),
    maestroUsa: s.optional(s.lazy(() => genericPmWithTdiUpdateInfo12Schema)),
    mc: s.optional(s.lazy(() => genericPmWithTdiUpdateInfo13Schema)),
    nyce: s.optional(s.lazy(() => nyceUpdateInfo1Schema)),
    paybybankPlaid: s.optional(s.lazy(() => payByBankPlaidUpdateInfo1Schema)),
    pulse: s.optional(s.lazy(() => pulseUpdateInfo1Schema)),
    sepadirectdebit: s.optional(s.lazy(() => sepaDirectDebitUpdateInfo1Schema)),
    star: s.optional(s.lazy(() => starUpdateInfo1Schema)),
    storeId: s.optional(s.string()),
    storeIds: s.optional(s.array(s.string())),
    visa: s.optional(s.lazy(() => genericPmWithTdiUpdateInfo14Schema)),
    _keysMap: {
      eftDirectdebitCa: "eft_directdebit_CA",
      eftposAustralia: "eftpos_australia",
      interacCard: "interac_card",
      maestroUsa: "maestro_usa",
      paybybankPlaid: "paybybank_plaid",
    },
  });
