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
  /** Details to provide if `type` is **accel**. */
  accel?: AccelInfo1;
  /** Details to provide if `type` is **affirm**. */
  affirm?: AffirmInfo1;
  /** Details to provide if `type` is **afterpaytouch**. */
  afterpayTouch?: AfterpayTouchInfo1;
  /** Details to provide if `type` is **alipay_plus**. */
  alipayPlus?: AlipayPlusInfo1;
  /**
   * Details to provide if `type` is **amex**. For merchants operating in Australia, New Zealand &
   * Canada, JCB and American Express are automatically requested together.
   */
  amex?: AmexInfo1;
  /** Details to provide if `type` is **applepay**. */
  applePay?: ApplePayInfo1;
  /** Details to provide if `type` is **bcmc** (Bancontact). */
  bcmc?: BcmcInfo1;
  /**
   * The unique identifier of the business line. Required if you are a [platform
   * model](https://docs.adyen.com/platforms).
   */
  businessLineId?: string;
  /** Details to provide if `type` is **carnet**. */
  carnet?: CarnetInfo1;
  /** Details to provide if `type` is **cartebancaire**. */
  cartesBancaires?: CartesBancairesInfo1;
  /** Details to provide if `type` is **clearpay**. */
  clearpay?: ClearpayInfo1;
  /**
   * The list of countries where a payment method is available. By default, all countries supported
   * by the payment method.
   */
  countries?: string[];
  /** Details to provide if `type` is **cup** (China Union Pay). */
  cup?: GenericPmWithTdiInfo1;
  /**
   * The list of currencies that a payment method supports. By default, all currencies supported by
   * the payment method.
   */
  currencies?: string[];
  /** The list of custom routing flags to route payment to the intended acquirer. */
  customRoutingFlags?: string[];
  /**
   * Details to provide if `type` is **diners**. For merchants operating in Japan, Diners payments
   * are processed through the JCB network. This means that you must include [JCB-specific
   * fields](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/paymentMethodSettings/(paymentMethodId)#request-jcb)
   * in this object.
   */
  diners?: DinersInfo1;
  /**
   * Details to provide if `type` is **discover**. For merchants operating in Japan, request
   * [Diners](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/paymentMethodSettings/(paymentMethodId)#request-diners)
   * payment method instead. Discover is automatically requested, together with Diners.
   */
  discover?: GenericPmWithTdiInfo2;
  /** Details to provide if `type` is **eft_directdebit_CA** (EFT PAD). */
  eftDirectdebitCa?: GenericPmWithTdiInfo3;
  /** Details to provide if `type` is **eftpos_australia**. */
  eftposAustralia?: GenericPmWithTdiInfo4;
  /** Details to provide if `type` is **girocard**. */
  girocard?: GenericPmWithTdiInfo5;
  /** Details to provide if `type` is **givex**. */
  givex?: GivexInfo1;
  /** Details to provide if `type` is **googlepay**. */
  googlePay?: GooglePayInfo1;
  /** Details to provide if `type` is **ideal**. */
  ideal?: GenericPmWithTdiInfo6;
  /** Details to provide if `type` is **interac_card**. */
  interacCard?: GenericPmWithTdiInfo7;
  /**
   * Details to provide if `type` is **jcb**. For merchants operating in Japan, `midNumber`,
   * `reuseMidNumber`, and `serviceLevel` fields are required. For merchants operating outside of
   * Japan, these fields are not required. For merchants operating in Australia, New Zealand &
   * Canada, JCB and American Express are automatically requested together.
   */
  jcb?: JcbInfo1;
  /**
   * Details to provide if `type` is **klarna** or its variant.
   *
   * You can use the following payment method `type` values for Klarna:
   * * **klarna**: Klarna Pay Later
   * * **klarna_account**: Klarna Pay over time
   * * **klarna_paynow**: Klarna Pay now
   * * **klarna_b2b**: [Billie via Klarna](https://docs.adyen.com/payment-methods/klarna/billie)
   */
  klarna?: KlarnaInfo1;
  /**
   * Details to provide if `type` is **maestro**. In the US, `maestro` is not supported; use
   * `maestro_usa` instead.
   */
  maestro?: GenericPmWithTdiInfo8;
  /**
   * Details to provide if `type` is **maestro_usa**. Only for Maestro USA, otherwise use `maestro`.
   */
  maestroUsa?: GenericPmWithTdiInfo9;
  /** Details to provide if `type` is **mc**. */
  mc?: GenericPmWithTdiInfo10;
  /** Details to provide if `type` is **mealVoucher_FR**. */
  mealVoucherFr?: MealVoucherFrInfo1;
  /** Details to provide if `type` is **nyce**. */
  nyce?: NyceInfo1;
  /** Details to provide if `type` is **paybybank_plaid**. */
  paybybankPlaid?: PayByBankPlaidInfo1;
  /** Details to provide if `type` is **payme**. */
  payme?: PayMeInfo1;
  /** Details to provide if `type` is **paypal**. */
  paypal?: PayPalInfo1;
  /** Details to provide if `type` is **payto**. */
  payto?: PayToInfo1;
  /** Details to provide if `type` is **pulse**. */
  pulse?: PulseInfo2;
  /** Your reference for the payment method. Supported characters a-z, A-Z, 0-9. */
  reference?: string;
  /** Details to provide if `type` is **sepadirectdebit**. */
  sepadirectdebit?: SepaDirectDebitInfo2;
  /**
   * The sales channel. Required if:
   * - The merchant account does not have a sales channel.
   * - `type` is **alipay**.
   *
   * When you provide this field, it overrides the default sales channel set on the merchant
   * account.
   *
   * Possible values: **eCommerce**, **pos**, **contAuth**, and **moto**.
   */
  shopperInteraction?: ShopperInteraction1;
  /** Details to provide if `type` is **sodexo**. */
  sodexo?: SodexoInfo2;
  /** Sofort details. */
  sofort?: SofortInfo2;
  /** Details to provide if `type` is **star**. */
  star?: StarInfo2;
  /** The unique identifier of the store for which to configure the payment method, if any. */
  storeIds?: string[];
  /** Details to provide if `type` is **svs**. */
  svs?: SvsInfo2;
  /**
   * Details to provide if `type` is **swish**.
   *  - This field is required only if you have a contract with Swish. Swish handles settlement
   *    directly with you (not through Adyen).
   *  - If not specified then it's assumed that you are using Adyen's contract with Swish.You don't
   *    have a direct relationship with Swish.
   */
  swish?: SwishInfo2;
  /** Details to provide if `type` is **ticket** (Edenred Brazil). */
  ticket?: TicketInfo2;
  /** Details to provide if `type` is **twint**. */
  twint?: TwintInfo2;
  /**
   * Payment method
   * [variant](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api).
   */
  type: Type59;
  /** Details to provide if `type` is **valuelink**. */
  valuelink?: ValuelinkInfo2;
  /** Details to provide if `type` is **vipps**. */
  vipps?: VippsInfo2;
  /** Details to provide if `type` is **visa**. */
  visa?: GenericPmWithTdiInfo11;
  /** Details to provide if `type` is **wechatpay**. */
  wechatpay?: WeChatPayInfo2;
  /** Details to provide if `type` is **wechatpay_pos**. */
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
