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
  /** Details to provide if `type` is **accel**. */
  accel?: AccelUpdateInfo1;
  /** Details to provide if `type` is **affirm**. */
  affirm?: AffirmUpdateInfo1;
  /** Details to provide if `type` is **bcmc** (Bancontact). */
  bcmc?: BcmcUpdateInfo1;
  /** Details to provide if `type` is **carnet**. */
  carnet?: GenericPmWithTdiUpdateInfo1;
  /** Details to provide if `type` is **cartebancaire**. */
  cartesBancaires?: CartesBancairesUpdateInfo1;
  /** Details to provide if `type` is **cashapp**. */
  cashapp?: CashAppUpdateInfo1;
  /**
   * The list of countries where a payment method is available. By default, all countries supported
   * by the payment method.
   */
  countries?: string[];
  /** Details to provide if `type` is **cup** (China Union Pay). */
  cup?: GenericPmWithTdiUpdateInfo2;
  /**
   * The list of currencies that a payment method supports. By default, all currencies supported by
   * the payment method.
   */
  currencies?: string[];
  /** Custom routing flags for acquirer routing. */
  customRoutingFlags?: string[];
  /**
   * Details to provide if `type` is **diners**. For merchants operating in Japan, Diners payments
   * are processed through the JCB network. This means that you must include [JCB-specific
   * fields](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/paymentMethodSettings/(paymentMethodId)#request-jcb)
   * in this object.
   */
  diners?: GenericPmWithTdiUpdateInfo3;
  /**
   * Details to provide if `type` is **discover**. For merchants operating in Japan, request
   * [Diners](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/paymentMethodSettings/(paymentMethodId)#request-diners)
   * payment method instead. Discover is automatically requested, together with Diners.
   */
  discover?: GenericPmWithTdiUpdateInfo4;
  /** Details to provide if `type` is **eft_directdebit_CA** (EFT PAD). */
  eftDirectdebitCa?: GenericPmWithTdiUpdateInfo5;
  /** Details to provide if `type` is **eftpos_australia**. */
  eftposAustralia?: GenericPmWithTdiUpdateInfo6;
  /** Indicates whether the payment method is enabled (**true**) or disabled (**false**). */
  enabled?: boolean;
  /** Details to provide if `type` is **girocard**. */
  girocard?: GenericPmWithTdiUpdateInfo7;
  /** Details to provide if `type` is **ideal**. */
  ideal?: GenericPmWithTdiUpdateInfo8;
  /** Details to provide if `type` is **interac_card**. */
  interacCard?: GenericPmWithTdiUpdateInfo9;
  /**
   * Details to provide if `type` is **jcb**. For merchants operating in Japan, `midNumber`,
   * `reuseMidNumber`, and `serviceLevel` fields are required. For merchants operating outside of
   * Japan, these fields are not required.
   */
  jcb?: GenericPmWithTdiUpdateInfo10;
  /**
   * Details to provide if `type` is **maestro**. In the US, `maestro` is not supported; use
   * `maestro_usa` instead.
   */
  maestro?: GenericPmWithTdiUpdateInfo11;
  /**
   * Details to provide if `type` is **maestro_usa**. Only for Maestro USA, otherwise use `maestro`.
   */
  maestroUsa?: GenericPmWithTdiUpdateInfo12;
  /** Details to provide if `type` is **mc**. */
  mc?: GenericPmWithTdiUpdateInfo13;
  /** Details to provide if `type` is **nyce**. */
  nyce?: NyceUpdateInfo1;
  /** Details to provide if `type` is **paybybank_plaid**. */
  paybybankPlaid?: PayByBankPlaidUpdateInfo1;
  /** Details to provide if `type` is **pulse**. */
  pulse?: PulseUpdateInfo1;
  /** Details to provide if `type` is **sepadirectdebit**. */
  sepadirectdebit?: SepaDirectDebitUpdateInfo1;
  /** Details to provide if `type` is **star**. */
  star?: StarUpdateInfo1;
  /** The store for this payment method */
  storeId?: string;
  /**
   * The list of stores for this payment method
   *
   * @deprecated
   */
  storeIds?: string[];
  /** Details to provide if `type` is **visa**. */
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
