import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accelResponseInfo1Schema, type AccelResponseInfo1 } from "./accel-response-info1.js";
import { affirmResponseInfo1Schema, type AffirmResponseInfo1 } from "./affirm-response-info1.js";
import {
  afterpayTouchResponseInfo1Schema,
  type AfterpayTouchResponseInfo1,
} from "./afterpay-touch-response-info1.js";
import { alipayPlusResponseInfo1Schema, type AlipayPlusResponseInfo1 } from "./alipay-plus-response-info1.js";
import { amexResponseInfo1Schema, type AmexResponseInfo1 } from "./amex-response-info1.js";
import { applePayResponseInfo1Schema, type ApplePayResponseInfo1 } from "./apple-pay-response-info1.js";
import { associatedPaymentMethodSchema, type AssociatedPaymentMethod } from "./associated-payment-method.js";
import { bcmcResponseInfo1Schema, type BcmcResponseInfo1 } from "./bcmc-response-info1.js";
import { carnetResponseInfo1Schema, type CarnetResponseInfo1 } from "./carnet-response-info1.js";
import {
  cartesBancairesResponseInfo1Schema,
  type CartesBancairesResponseInfo1,
} from "./cartes-bancaires-response-info1.js";
import { clearpayResponseInfo1Schema, type ClearpayResponseInfo1 } from "./clearpay-response-info1.js";
import { cupResponseInfo1Schema, type CupResponseInfo1 } from "./cup-response-info1.js";
import { dinersResponseInfo1Schema, type DinersResponseInfo1 } from "./diners-response-info1.js";
import { discoverResponseInfo1Schema, type DiscoverResponseInfo1 } from "./discover-response-info1.js";
import {
  eftDirectDebitCaResponseInfo1Schema,
  type EftDirectDebitCaResponseInfo1,
} from "./eft-direct-debit-ca-response-info1.js";
import {
  eftPosAustraliaResponseInfo1Schema,
  type EftPosAustraliaResponseInfo1,
} from "./eft-pos-australia-response-info1.js";
import { girocardResponseInfo1Schema, type GirocardResponseInfo1 } from "./girocard-response-info1.js";
import { givexResponseInfo1Schema, type GivexResponseInfo1 } from "./givex-response-info1.js";
import { googlePayResponseInfo1Schema, type GooglePayResponseInfo1 } from "./google-pay-response-info1.js";
import { idealResponseInfo1Schema, type IdealResponseInfo1 } from "./ideal-response-info1.js";
import {
  interacCardResponseInfo1Schema,
  type InteracCardResponseInfo1,
} from "./interac-card-response-info1.js";
import { jcbResponseInfo1Schema, type JcbResponseInfo1 } from "./jcb-response-info1.js";
import { klarnaResponseInfo1Schema, type KlarnaResponseInfo1 } from "./klarna-response-info1.js";
import { maestroResponseInfo1Schema, type MaestroResponseInfo1 } from "./maestro-response-info1.js";
import { maestroUsaResponseInfo1Schema, type MaestroUsaResponseInfo1 } from "./maestro-usa-response-info1.js";
import { mcResponseInfo1Schema, type McResponseInfo1 } from "./mc-response-info1.js";
import {
  mealVoucherFrResponseInfo1Schema,
  type MealVoucherFrResponseInfo1,
} from "./meal-voucher-fr-response-info1.js";
import { nyceResponseInfo1Schema, type NyceResponseInfo1 } from "./nyce-response-info1.js";
import {
  payByBankPlaidResponseInfo1Schema,
  type PayByBankPlaidResponseInfo1,
} from "./pay-by-bank-plaid-response-info1.js";
import { payMeResponseInfo1Schema, type PayMeResponseInfo1 } from "./pay-me-response-info1.js";
import { payPalResponseInfo1Schema, type PayPalResponseInfo1 } from "./pay-pal-response-info1.js";
import { payToResponseInfo1Schema, type PayToResponseInfo1 } from "./pay-to-response-info1.js";
import { pulseResponseInfo2Schema, type PulseResponseInfo2 } from "./pulse-response-info2.js";
import {
  sepaDirectDebitResponseInfo2Schema,
  type SepaDirectDebitResponseInfo2,
} from "./sepa-direct-debit-response-info2.js";
import { sodexoResponseInfo2Schema, type SodexoResponseInfo2 } from "./sodexo-response-info2.js";
import { sofortResponseInfo2Schema, type SofortResponseInfo2 } from "./sofort-response-info2.js";
import { starResponseInfo2Schema, type StarResponseInfo2 } from "./star-response-info2.js";
import { svsResponseInfo2Schema, type SvsResponseInfo2 } from "./svs-response-info2.js";
import { swishResponseInfo2Schema, type SwishResponseInfo2 } from "./swish-response-info2.js";
import { ticketResponseInfo2Schema, type TicketResponseInfo2 } from "./ticket-response-info2.js";
import { twintResponseInfo2Schema, type TwintResponseInfo2 } from "./twint-response-info2.js";
import { valuelinkResponseInfo2Schema, type ValuelinkResponseInfo2 } from "./valuelink-response-info2.js";
import { verificationStatusSchema, type VerificationStatus } from "./verification-status.js";
import { vippsResponseInfo2Schema, type VippsResponseInfo2 } from "./vipps-response-info2.js";
import { visaResponseInfo2Schema, type VisaResponseInfo2 } from "./visa-response-info2.js";
import {
  weChatPayPosResponseInfo2Schema,
  type WeChatPayPosResponseInfo2,
} from "./we-chat-pay-pos-response-info2.js";
import { weChatPayResponseInfo2Schema, type WeChatPayResponseInfo2 } from "./we-chat-pay-response-info2.js";

export type ManagementPaymentMethod = {
  /** **accel** details */
  accel?: AccelResponseInfo1;
  /** *affirm** details */
  affirm?: AffirmResponseInfo1;
  /** **afterpaytouch** details */
  afterpayTouch?: AfterpayTouchResponseInfo1;
  /** **alipay_plus** details */
  alipayPlus?: AlipayPlusResponseInfo1;
  /**
   * Indicates whether receiving payments is allowed. This value is set to **true** by Adyen after
   * screening your merchant account.
   */
  allowed?: boolean;
  /** **amex** details */
  amex?: AmexResponseInfo1;
  /** **applepay** details */
  applePay?: ApplePayResponseInfo1;
  /** Payment methods that were also updated as part of an associated transition. */
  associatedPaymentMethods?: AssociatedPaymentMethod[];
  /** **bcmc** (Bancontact) details */
  bcmc?: BcmcResponseInfo1;
  /**
   * The unique identifier of the business line. Required if you are a [platform
   * model](https://docs.adyen.com/platforms).
   */
  businessLineId?: string;
  /** **carnet** details */
  carnet?: CarnetResponseInfo1;
  /** **cartesbancaire** details */
  cartesBancaires?: CartesBancairesResponseInfo1;
  /** **clearpay** details */
  clearpay?: ClearpayResponseInfo1;
  /**
   * The list of countries where a payment method is available. By default, all countries supported
   * by the payment method.
   */
  countries?: string[];
  /** **cup** (China Union Pay) details */
  cup?: CupResponseInfo1;
  /**
   * The list of currencies that a payment method supports. By default, all currencies supported by
   * the payment method.
   */
  currencies?: string[];
  /** The list of custom routing flags to route payment to the intended acquirer. */
  customRoutingFlags?: string[];
  /** **diners** details */
  diners?: DinersResponseInfo1;
  /** **discover**. details */
  discover?: DiscoverResponseInfo1;
  /** **eft_directdebit_CA** (EFT PAD) details */
  eftDirectdebitCa?: EftDirectDebitCaResponseInfo1;
  /** **eftpos_australia** details */
  eftposAustralia?: EftPosAustraliaResponseInfo1;
  /** Indicates whether the payment method is enabled (**true**) or disabled (**false**). */
  enabled?: boolean;
  /** **girocard** details */
  girocard?: GirocardResponseInfo1;
  /** **givex** details */
  givex?: GivexResponseInfo1;
  /** **googlepay** details */
  googlePay?: GooglePayResponseInfo1;
  /** The identifier of the resource. */
  id: string;
  /** **ideal** details */
  ideal?: IdealResponseInfo1;
  /** **interac_card** details */
  interacCard?: InteracCardResponseInfo1;
  /** **jcb** details */
  jcb?: JcbResponseInfo1;
  /** **klarna** or its variant details */
  klarna?: KlarnaResponseInfo1;
  /** **maestro** details */
  maestro?: MaestroResponseInfo1;
  /** Details to provide if `type` is **maestro_usa** details */
  maestroUsa?: MaestroUsaResponseInfo1;
  /** **mc** details */
  mc?: McResponseInfo1;
  /** **mealVoucher_FR** details */
  mealVoucherFr?: MealVoucherFrResponseInfo1;
  /** **nyce** details */
  nyce?: NyceResponseInfo1;
  /** **paybybank_plaid** details */
  paybybankPlaid?: PayByBankPlaidResponseInfo1;
  /** **payme** details */
  payme?: PayMeResponseInfo1;
  /** **paypal** details */
  paypal?: PayPalResponseInfo1;
  /** **payto** details */
  payto?: PayToResponseInfo1;
  /** **pulse** details */
  pulse?: PulseResponseInfo2;
  /** Your reference for the payment method. Supported characters a-z, A-Z, 0-9. */
  reference?: string;
  /** **sepadirectdebit** details */
  sepadirectdebit?: SepaDirectDebitResponseInfo2;
  /** The sales channel. */
  shopperInteraction?: string;
  /** **sodexo** details */
  sodexo?: SodexoResponseInfo2;
  /** Sofort details. */
  sofort?: SofortResponseInfo2;
  /** **star** details */
  star?: StarResponseInfo2;
  /** The unique identifier of the store for which to configure the payment method, if any. */
  storeIds?: string[];
  /** **svs** details */
  svs?: SvsResponseInfo2;
  /** **swish** or its variant details */
  swish?: SwishResponseInfo2;
  /** **ticket** (Edenred Brazil) details */
  ticket?: TicketResponseInfo2;
  /** **twint** details */
  twint?: TwintResponseInfo2;
  /**
   * Payment method
   * [variant](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api).
   */
  type?: string;
  /** **valuelink** details */
  valuelink?: ValuelinkResponseInfo2;
  /**
   * Payment method status. Possible values:
   * * **valid**
   * * **pending**
   * * **invalid**
   * * **rejected**
   */
  verificationStatus?: VerificationStatus;
  /** **vipps** details */
  vipps?: VippsResponseInfo2;
  /** **visa** details */
  visa?: VisaResponseInfo2;
  /** **wechatpay** details */
  wechatpay?: WeChatPayResponseInfo2;
  /** **wechatpay_pos** details */
  wechatpayPos?: WeChatPayPosResponseInfo2;
};

export const managementPaymentMethodSchema: Schema<ManagementPaymentMethod> =
  s.object<ManagementPaymentMethod>({
    accel: s.optional(s.lazy(() => accelResponseInfo1Schema)),
    affirm: s.optional(s.lazy(() => affirmResponseInfo1Schema)),
    afterpayTouch: s.optional(s.lazy(() => afterpayTouchResponseInfo1Schema)),
    alipayPlus: s.optional(s.lazy(() => alipayPlusResponseInfo1Schema)),
    allowed: s.optional(s.boolean()),
    amex: s.optional(s.lazy(() => amexResponseInfo1Schema)),
    applePay: s.optional(s.lazy(() => applePayResponseInfo1Schema)),
    associatedPaymentMethods: s.optional(s.array(s.lazy(() => associatedPaymentMethodSchema))),
    bcmc: s.optional(s.lazy(() => bcmcResponseInfo1Schema)),
    businessLineId: s.optional(s.string()),
    carnet: s.optional(s.lazy(() => carnetResponseInfo1Schema)),
    cartesBancaires: s.optional(s.lazy(() => cartesBancairesResponseInfo1Schema)),
    clearpay: s.optional(s.lazy(() => clearpayResponseInfo1Schema)),
    countries: s.optional(s.array(s.string())),
    cup: s.optional(s.lazy(() => cupResponseInfo1Schema)),
    currencies: s.optional(s.array(s.string())),
    customRoutingFlags: s.optional(s.array(s.string())),
    diners: s.optional(s.lazy(() => dinersResponseInfo1Schema)),
    discover: s.optional(s.lazy(() => discoverResponseInfo1Schema)),
    eftDirectdebitCa: s.optional(s.lazy(() => eftDirectDebitCaResponseInfo1Schema)),
    eftposAustralia: s.optional(s.lazy(() => eftPosAustraliaResponseInfo1Schema)),
    enabled: s.optional(s.boolean()),
    girocard: s.optional(s.lazy(() => girocardResponseInfo1Schema)),
    givex: s.optional(s.lazy(() => givexResponseInfo1Schema)),
    googlePay: s.optional(s.lazy(() => googlePayResponseInfo1Schema)),
    id: s.string(),
    ideal: s.optional(s.lazy(() => idealResponseInfo1Schema)),
    interacCard: s.optional(s.lazy(() => interacCardResponseInfo1Schema)),
    jcb: s.optional(s.lazy(() => jcbResponseInfo1Schema)),
    klarna: s.optional(s.lazy(() => klarnaResponseInfo1Schema)),
    maestro: s.optional(s.lazy(() => maestroResponseInfo1Schema)),
    maestroUsa: s.optional(s.lazy(() => maestroUsaResponseInfo1Schema)),
    mc: s.optional(s.lazy(() => mcResponseInfo1Schema)),
    mealVoucherFr: s.optional(s.lazy(() => mealVoucherFrResponseInfo1Schema)),
    nyce: s.optional(s.lazy(() => nyceResponseInfo1Schema)),
    paybybankPlaid: s.optional(s.lazy(() => payByBankPlaidResponseInfo1Schema)),
    payme: s.optional(s.lazy(() => payMeResponseInfo1Schema)),
    paypal: s.optional(s.lazy(() => payPalResponseInfo1Schema)),
    payto: s.optional(s.lazy(() => payToResponseInfo1Schema)),
    pulse: s.optional(s.lazy(() => pulseResponseInfo2Schema)),
    reference: s.optional(s.string()),
    sepadirectdebit: s.optional(s.lazy(() => sepaDirectDebitResponseInfo2Schema)),
    shopperInteraction: s.optional(s.string()),
    sodexo: s.optional(s.lazy(() => sodexoResponseInfo2Schema)),
    sofort: s.optional(s.lazy(() => sofortResponseInfo2Schema)),
    star: s.optional(s.lazy(() => starResponseInfo2Schema)),
    storeIds: s.optional(s.array(s.string())),
    svs: s.optional(s.lazy(() => svsResponseInfo2Schema)),
    swish: s.optional(s.lazy(() => swishResponseInfo2Schema)),
    ticket: s.optional(s.lazy(() => ticketResponseInfo2Schema)),
    twint: s.optional(s.lazy(() => twintResponseInfo2Schema)),
    type: s.optional(s.string()),
    valuelink: s.optional(s.lazy(() => valuelinkResponseInfo2Schema)),
    verificationStatus: s.optional(s.lazy(() => verificationStatusSchema)),
    vipps: s.optional(s.lazy(() => vippsResponseInfo2Schema)),
    visa: s.optional(s.lazy(() => visaResponseInfo2Schema)),
    wechatpay: s.optional(s.lazy(() => weChatPayResponseInfo2Schema)),
    wechatpayPos: s.optional(s.lazy(() => weChatPayPosResponseInfo2Schema)),
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
