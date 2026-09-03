import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accelInfo1Schema, type AccelInfo1 } from "./accel-info1.js";
import { affirmInfo1Schema, type AffirmInfo1 } from "./affirm-info1.js";
import { afterpayTouchInfo1Schema, type AfterpayTouchInfo1 } from "./afterpay-touch-info1.js";
import { alipayPlusInfo1Schema, type AlipayPlusInfo1 } from "./alipay-plus-info1.js";
import { amexInfo1Schema, type AmexInfo1 } from "./amex-info1.js";
import { applePayInfo1Schema, type ApplePayInfo1 } from "./apple-pay-info1.js";
import { bcmcInfo1Schema, type BcmcInfo1 } from "./bcmc-info1.js";
import { carnetInfo1Schema, type CarnetInfo1 } from "./carnet-info1.js";
import { cartesBancairesInfo1Schema, type CartesBancairesInfo1 } from "./cartes-bancaires-info1.js";
import { clearpayInfo1Schema, type ClearpayInfo1 } from "./clearpay-info1.js";
import { dinersInfo1Schema, type DinersInfo1 } from "./diners-info1.js";
import { genericPmWithTdiInfo1Schema, type GenericPmWithTdiInfo1 } from "./generic-pm-with-tdi-info1.js";
import { genericPmWithTdiInfo10Schema, type GenericPmWithTdiInfo10 } from "./generic-pm-with-tdi-info10.js";
import { genericPmWithTdiInfo11Schema, type GenericPmWithTdiInfo11 } from "./generic-pm-with-tdi-info11.js";
import { genericPmWithTdiInfo2Schema, type GenericPmWithTdiInfo2 } from "./generic-pm-with-tdi-info2.js";
import { genericPmWithTdiInfo3Schema, type GenericPmWithTdiInfo3 } from "./generic-pm-with-tdi-info3.js";
import { genericPmWithTdiInfo4Schema, type GenericPmWithTdiInfo4 } from "./generic-pm-with-tdi-info4.js";
import { genericPmWithTdiInfo5Schema, type GenericPmWithTdiInfo5 } from "./generic-pm-with-tdi-info5.js";
import { genericPmWithTdiInfo6Schema, type GenericPmWithTdiInfo6 } from "./generic-pm-with-tdi-info6.js";
import { genericPmWithTdiInfo7Schema, type GenericPmWithTdiInfo7 } from "./generic-pm-with-tdi-info7.js";
import { genericPmWithTdiInfo8Schema, type GenericPmWithTdiInfo8 } from "./generic-pm-with-tdi-info8.js";
import { genericPmWithTdiInfo9Schema, type GenericPmWithTdiInfo9 } from "./generic-pm-with-tdi-info9.js";
import { givexInfo1Schema, type GivexInfo1 } from "./givex-info1.js";
import { googlePayInfo1Schema, type GooglePayInfo1 } from "./google-pay-info1.js";
import { jcbInfo1Schema, type JcbInfo1 } from "./jcb-info1.js";
import { klarnaInfo1Schema, type KlarnaInfo1 } from "./klarna-info1.js";
import { mealVoucherFrInfo1Schema, type MealVoucherFrInfo1 } from "./meal-voucher-fr-info1.js";
import { nyceInfo1Schema, type NyceInfo1 } from "./nyce-info1.js";
import { payByBankPlaidInfo1Schema, type PayByBankPlaidInfo1 } from "./pay-by-bank-plaid-info1.js";
import { payMeInfo1Schema, type PayMeInfo1 } from "./pay-me-info1.js";
import { payPalInfo1Schema, type PayPalInfo1 } from "./pay-pal-info1.js";
import { payToInfo1Schema, type PayToInfo1 } from "./pay-to-info1.js";
import { pulseInfo2Schema, type PulseInfo2 } from "./pulse-info2.js";
import { sepaDirectDebitInfo2Schema, type SepaDirectDebitInfo2 } from "./sepa-direct-debit-info2.js";
import { shopperInteraction1Schema, type ShopperInteraction1 } from "./shopper-interaction1.js";
import { sodexoInfo2Schema, type SodexoInfo2 } from "./sodexo-info2.js";
import { sofortInfo2Schema, type SofortInfo2 } from "./sofort-info2.js";
import { starInfo2Schema, type StarInfo2 } from "./star-info2.js";
import { svsInfo2Schema, type SvsInfo2 } from "./svs-info2.js";
import { swishInfo2Schema, type SwishInfo2 } from "./swish-info2.js";
import { ticketInfo2Schema, type TicketInfo2 } from "./ticket-info2.js";
import { twintInfo2Schema, type TwintInfo2 } from "./twint-info2.js";
import { type59Schema, type Type59 } from "./type59.js";
import { valuelinkInfo2Schema, type ValuelinkInfo2 } from "./valuelink-info2.js";
import { vippsInfo2Schema, type VippsInfo2 } from "./vipps-info2.js";
import { weChatPayInfo2Schema, type WeChatPayInfo2 } from "./we-chat-pay-info2.js";
import { weChatPayPosInfo2Schema, type WeChatPayPosInfo2 } from "./we-chat-pay-pos-info2.js";

export type PaymentMethodSetupInfo = {
  accel?: AccelInfo1;
  affirm?: AffirmInfo1;
  afterpayTouch?: AfterpayTouchInfo1;
  alipayPlus?: AlipayPlusInfo1;
  amex?: AmexInfo1;
  applePay?: ApplePayInfo1;
  bcmc?: BcmcInfo1;
  businessLineId?: string;
  carnet?: CarnetInfo1;
  cartesBancaires?: CartesBancairesInfo1;
  clearpay?: ClearpayInfo1;
  countries?: string[];
  cup?: GenericPmWithTdiInfo1;
  currencies?: string[];
  customRoutingFlags?: string[];
  diners?: DinersInfo1;
  discover?: GenericPmWithTdiInfo2;
  eftDirectdebitCa?: GenericPmWithTdiInfo3;
  eftposAustralia?: GenericPmWithTdiInfo4;
  girocard?: GenericPmWithTdiInfo5;
  givex?: GivexInfo1;
  googlePay?: GooglePayInfo1;
  ideal?: GenericPmWithTdiInfo6;
  interacCard?: GenericPmWithTdiInfo7;
  jcb?: JcbInfo1;
  klarna?: KlarnaInfo1;
  maestro?: GenericPmWithTdiInfo8;
  maestroUsa?: GenericPmWithTdiInfo9;
  mc?: GenericPmWithTdiInfo10;
  mealVoucherFr?: MealVoucherFrInfo1;
  nyce?: NyceInfo1;
  paybybankPlaid?: PayByBankPlaidInfo1;
  payme?: PayMeInfo1;
  paypal?: PayPalInfo1;
  payto?: PayToInfo1;
  pulse?: PulseInfo2;
  reference?: string;
  sepadirectdebit?: SepaDirectDebitInfo2;
  shopperInteraction?: ShopperInteraction1;
  sodexo?: SodexoInfo2;
  sofort?: SofortInfo2;
  star?: StarInfo2;
  storeIds?: string[];
  svs?: SvsInfo2;
  swish?: SwishInfo2;
  ticket?: TicketInfo2;
  twint?: TwintInfo2;
  type: Type59;
  valuelink?: ValuelinkInfo2;
  vipps?: VippsInfo2;
  visa?: GenericPmWithTdiInfo11;
  wechatpay?: WeChatPayInfo2;
  wechatpayPos?: WeChatPayPosInfo2;
};

export const paymentMethodSetupInfoSchema: Schema<PaymentMethodSetupInfo> = s.object<PaymentMethodSetupInfo>({
  accel: s.optional(s.lazy(() => accelInfo1Schema)),
  affirm: s.optional(s.lazy(() => affirmInfo1Schema)),
  afterpayTouch: s.optional(s.lazy(() => afterpayTouchInfo1Schema)),
  alipayPlus: s.optional(s.lazy(() => alipayPlusInfo1Schema)),
  amex: s.optional(s.lazy(() => amexInfo1Schema)),
  applePay: s.optional(s.lazy(() => applePayInfo1Schema)),
  bcmc: s.optional(s.lazy(() => bcmcInfo1Schema)),
  businessLineId: s.optional(s.string()),
  carnet: s.optional(s.lazy(() => carnetInfo1Schema)),
  cartesBancaires: s.optional(s.lazy(() => cartesBancairesInfo1Schema)),
  clearpay: s.optional(s.lazy(() => clearpayInfo1Schema)),
  countries: s.optional(s.array(s.string())),
  cup: s.optional(s.lazy(() => genericPmWithTdiInfo1Schema)),
  currencies: s.optional(s.array(s.string())),
  customRoutingFlags: s.optional(s.array(s.string())),
  diners: s.optional(s.lazy(() => dinersInfo1Schema)),
  discover: s.optional(s.lazy(() => genericPmWithTdiInfo2Schema)),
  eftDirectdebitCa: s.optional(s.lazy(() => genericPmWithTdiInfo3Schema)),
  eftposAustralia: s.optional(s.lazy(() => genericPmWithTdiInfo4Schema)),
  girocard: s.optional(s.lazy(() => genericPmWithTdiInfo5Schema)),
  givex: s.optional(s.lazy(() => givexInfo1Schema)),
  googlePay: s.optional(s.lazy(() => googlePayInfo1Schema)),
  ideal: s.optional(s.lazy(() => genericPmWithTdiInfo6Schema)),
  interacCard: s.optional(s.lazy(() => genericPmWithTdiInfo7Schema)),
  jcb: s.optional(s.lazy(() => jcbInfo1Schema)),
  klarna: s.optional(s.lazy(() => klarnaInfo1Schema)),
  maestro: s.optional(s.lazy(() => genericPmWithTdiInfo8Schema)),
  maestroUsa: s.optional(s.lazy(() => genericPmWithTdiInfo9Schema)),
  mc: s.optional(s.lazy(() => genericPmWithTdiInfo10Schema)),
  mealVoucherFr: s.optional(s.lazy(() => mealVoucherFrInfo1Schema)),
  nyce: s.optional(s.lazy(() => nyceInfo1Schema)),
  paybybankPlaid: s.optional(s.lazy(() => payByBankPlaidInfo1Schema)),
  payme: s.optional(s.lazy(() => payMeInfo1Schema)),
  paypal: s.optional(s.lazy(() => payPalInfo1Schema)),
  payto: s.optional(s.lazy(() => payToInfo1Schema)),
  pulse: s.optional(s.lazy(() => pulseInfo2Schema)),
  reference: s.optional(s.string()),
  sepadirectdebit: s.optional(s.lazy(() => sepaDirectDebitInfo2Schema)),
  shopperInteraction: s.optional(s.lazy(() => shopperInteraction1Schema)),
  sodexo: s.optional(s.lazy(() => sodexoInfo2Schema)),
  sofort: s.optional(s.lazy(() => sofortInfo2Schema)),
  star: s.optional(s.lazy(() => starInfo2Schema)),
  storeIds: s.optional(s.array(s.string())),
  svs: s.optional(s.lazy(() => svsInfo2Schema)),
  swish: s.optional(s.lazy(() => swishInfo2Schema)),
  ticket: s.optional(s.lazy(() => ticketInfo2Schema)),
  twint: s.optional(s.lazy(() => twintInfo2Schema)),
  type: type59Schema,
  valuelink: s.optional(s.lazy(() => valuelinkInfo2Schema)),
  vipps: s.optional(s.lazy(() => vippsInfo2Schema)),
  visa: s.optional(s.lazy(() => genericPmWithTdiInfo11Schema)),
  wechatpay: s.optional(s.lazy(() => weChatPayInfo2Schema)),
  wechatpayPos: s.optional(s.lazy(() => weChatPayPosInfo2Schema)),
  _keysMap: {
    eftDirectdebitCa: "eft_directdebit_CA",
    eftposAustralia: "eftpos_australia",
    interacCard: "interac_card",
    maestroUsa: "maestro_usa",
    mealVoucherFr: "mealVoucher_FR",
    paybybankPlaid: "paybybank_plaid",
    wechatpayPos: "wechatpay_pos",
  },
});
