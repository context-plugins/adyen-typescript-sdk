import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { achDirectDebitSchema, type AchDirectDebit } from "../ach-direct-debit.js";
import { affirmSchema, type Affirm } from "../affirm.js";
import { afterpaySchema, type Afterpay } from "../afterpay.js";
import { almaSchema, type Alma } from "../alma.js";
import { amazonPaySchema, type AmazonPay } from "../amazon-pay.js";
import { ancvSchema, type Ancv } from "../ancv.js";
import { androidPaySchema, type AndroidPay } from "../android-pay.js";
import { applePayDetailsSchema, type ApplePayDetails } from "../apple-pay-details.js";
import { auPaySchema, type AuPay } from "../au-pay.js";
import { bacsDirectDebitSchema, type BacsDirectDebit } from "../bacs-direct-debit.js";
import { billDeskSchema, type BillDesk } from "../bill-desk.js";
import { blikSchema, type Blik } from "../blik.js";
import { cardDetailsSchema, type CardDetails } from "../card-details.js";
import { cellulantSchema, type Cellulant } from "../cellulant.js";
import { dBaraiSchema, type DBarai } from "../dbarai.js";
import {
  detailsOfTokensThatAreNotStoredWithAdyenSchema,
  type DetailsOfTokensThatAreNotStoredWithAdyen,
} from "../details-of-tokens-that-are-not-stored-with-adyen.js";
import { directDebitAuSchema, type DirectDebitAu } from "../direct-debit-au.js";
import { dokuSchema, type Doku } from "../doku.js";
import { dragonpaySchema, type Dragonpay } from "../dragonpay.js";
import { eBankingFinlandSchema, type EBankingFinland } from "../ebanking-finland.js";
import { eftDirectDebitSchema, type EftDirectDebit } from "../eft-direct-debit.js";
import { fastlaneSchema, type Fastlane } from "../fastlane.js";
import { googlePayDetailsSchema, type GooglePayDetails } from "../google-pay-details.js";
import { idealDetailsSchema, type IdealDetails } from "../ideal-details.js";
import { klarnaNetworkSchema, type KlarnaNetwork } from "../klarna-network.js";
import { klarnaSchema, type Klarna } from "../klarna.js";
import { masterpassSchema, type Masterpass } from "../masterpass.js";
import { mbWaySchema, type MbWay } from "../mb-way.js";
import { mobilePaySchema, type MobilePay } from "../mobile-pay.js";
import { molPaySchema, type MolPay } from "../mol-pay.js";
import { openInvoiceSchema, type OpenInvoice } from "../open-invoice.js";
import {
  payByBankAisDirectDebitSchema,
  type PayByBankAisDirectDebit,
} from "../pay-by-bank-ais-direct-debit.js";
import { payByBankSchema, type PayByBank } from "../pay-by-bank.js";
import { payPalSchema, type PayPal } from "../pay-pal.js";
import { payPaySchema, type PayPay } from "../pay-pay.js";
import { payToSchema, type PayTo } from "../pay-to.js";
import { payUSchema, type PayU } from "../pay-u.js";
import { payWithGoogleDetailsSchema, type PayWithGoogleDetails } from "../pay-with-google-details.js";
import { paymentDetailsSchema, type PaymentDetails } from "../payment-details.js";
import { pseLatamSchema, type PseLatam } from "../pse-latam.js";
import { rakutenPaySchema, type RakutenPay } from "../rakuten-pay.js";
import { ratepaySchema, type Ratepay } from "../ratepay.js";
import { rivertySchema, type Riverty } from "../riverty.js";
import { samsungPaySchema, type SamsungPay } from "../samsung-pay.js";
import { sepaDirectDebitSchema, type SepaDirectDebit } from "../sepa-direct-debit.js";
import { storedPaymentMethodSchema, type StoredPaymentMethod } from "../stored-payment-method.js";
import { storedPaymentMethod2Schema, type StoredPaymentMethod2 } from "../stored-payment-method2.js";
import { storedPaymentMethod4Schema, type StoredPaymentMethod4 } from "../stored-payment-method4.js";
import { storedPaymentMethod5Schema, type StoredPaymentMethod5 } from "../stored-payment-method5.js";
import { storedPaymentMethod6Schema, type StoredPaymentMethod6 } from "../stored-payment-method6.js";
import { twintSchema, type Twint } from "../twint.js";
import { upiCollectSchema, type UpiCollect } from "../upi-collect.js";
import { upiIntentSchema, type UpiIntent } from "../upi-intent.js";
import { upiQrSchema, type UpiQr } from "../upi-qr.js";
import { vippsSchema, type Vipps } from "../vipps.js";
import { visaCheckoutSchema, type VisaCheckout } from "../visa-checkout.js";
import { voucherSchema, type Voucher } from "../voucher.js";
import { weChatPayMiniProgramSchema, type WeChatPayMiniProgram } from "../we-chat-pay-mini-program.js";
import { weChatPaySchema, type WeChatPay } from "../we-chat-pay.js";
import { zipSchema, type Zip } from "../zip.js";

/** The type and required details of a payment method to use. */
export type PaymentMethod11 =
  | (ApplePayDetails & { type: "applepay" })
  | (SamsungPay & { type: "samsungpay" })
  | (AndroidPay & { type: "androidpay" })
  | (VisaCheckout & { type: "visacheckout" })
  | (PayWithGoogleDetails & { type: "paywithgoogle" })
  | (AmazonPay & { type: "amazonpay" })
  | (Masterpass & { type: "masterpass" })
  | (GooglePayDetails & { type: "googlepay" })
  | (Fastlane & { type: "fastlane" })
  | (PaymentDetails & { type: "alipay" })
  | (StoredPaymentMethod6 & { type: "alipay_plus" })
  | (StoredPaymentMethod6 & { type: "alipay_plus_alipay_cn" })
  | (StoredPaymentMethod6 & { type: "alipay_plus_alipay_hk" })
  | (StoredPaymentMethod6 & { type: "alipay_plus_dana" })
  | (StoredPaymentMethod6 & { type: "alipay_plus_gcash" })
  | (StoredPaymentMethod6 & { type: "alipay_plus_kakaopay" })
  | (StoredPaymentMethod6 & { type: "alipay_plus_kplus" })
  | (StoredPaymentMethod6 & { type: "alipay_plus_naverpay" })
  | (StoredPaymentMethod6 & { type: "alipay_plus_rabbitlinepay" })
  | (StoredPaymentMethod6 & { type: "alipay_plus_tosspay" })
  | (StoredPaymentMethod6 & { type: "alipay_plus_touchngo" })
  | (StoredPaymentMethod6 & { type: "alipay_plus_truemoney" })
  | (CardDetails & { type: "bcmc" })
  | (StoredPaymentMethod6 & { type: "bcmc_mobile" })
  | (StoredPaymentMethod6 & { type: "bcmc_mobile_QR" })
  | (StoredPaymentMethod6 & { type: "bcmc_mobile_app" })
  | (CardDetails & { type: "scheme" })
  | (CardDetails & { type: "networkToken" })
  | (CardDetails & { type: "altId" })
  | (DetailsOfTokensThatAreNotStoredWithAdyen & { type: "externalToken" })
  | (PaymentDetails & { type: "multibanco" })
  | (AchDirectDebit & { type: "ach" })
  | (AchDirectDebit & { type: "ach_plaid" })
  | (EftDirectDebit & { type: "eft_directdebit_CA" })
  | (PaymentDetails & { type: "bankTransfer" })
  | (PaymentDetails & { type: "bankTransfer_IBAN" })
  | (Klarna & { type: "klarna" })
  | (Klarna & { type: "klarnapayments" })
  | (Klarna & { type: "klarnapayments_account" })
  | (Klarna & { type: "klarnapayments_b2b" })
  | (Klarna & { type: "klarna_paynow" })
  | (Klarna & { type: "klarna_account" })
  | (Klarna & { type: "klarna_b2b" })
  | (KlarnaNetwork & { type: "klarna_network" })
  | (PaymentDetails & { type: "paynow" })
  | (Afterpay & { type: "afterpay_default" })
  | (Afterpay & { type: "afterpaytouch" })
  | (Afterpay & { type: "afterpaytouch_pos" })
  | (Afterpay & { type: "clearpay" })
  | (Afterpay & { type: "afterpay_b2b" })
  | (Zip & { type: "zip" })
  | (Zip & { type: "zip_pos" })
  | (Ratepay & { type: "ratepay" })
  | (Ratepay & { type: "ratepay_directdebit" })
  | (Affirm & { type: "affirm" })
  | (PaymentDetails & { type: "affirm_pos" })
  | (Riverty & { type: "riverty_account" })
  | (IdealDetails & { type: "ideal" })
  | (PaymentDetails & { type: "iris" })
  | (PaymentDetails & { type: "wero" })
  | (PayPal & { type: "paypal" })
  | (PayPay & { type: "paypay" })
  | (RakutenPay & { type: "rakutenpay" })
  | (AuPay & { type: "aupay" })
  | (DBarai & { type: "dbarai" })
  | (PaymentDetails & { type: "trustly" })
  | (PaymentDetails & { type: "trustlyvector" })
  | (PaymentDetails & { type: "oney" })
  | (PaymentDetails & { type: "facilypay" })
  | (PaymentDetails & { type: "facilypay_3x" })
  | (PaymentDetails & { type: "facilypay_4x" })
  | (PaymentDetails & { type: "facilypay_6x" })
  | (PaymentDetails & { type: "facilypay_10x" })
  | (PaymentDetails & { type: "facilypay_12x" })
  | (SepaDirectDebit & { type: "sepadirectdebit" })
  | (SepaDirectDebit & { type: "sepadirectdebit_amazonpay" })
  | (StoredPaymentMethod6 & { type: "momo_wallet" })
  | (StoredPaymentMethod6 & { type: "momo_wallet_app" })
  | (Doku & { type: "doku" })
  | (Doku & { type: "doku_wallet" })
  | (Doku & { type: "doku_ovo" })
  | (Doku & { type: "doku_permata_lite_atm" })
  | (Doku & { type: "doku_permata_atm" })
  | (Doku & { type: "doku_alfamart" })
  | (Doku & { type: "doku_indomaret" })
  | (Doku & { type: "doku_sinarmas_va" })
  | (Doku & { type: "doku_bca_va" })
  | (Doku & { type: "doku_mandiri_va" })
  | (Doku & { type: "doku_cimb_va" })
  | (Doku & { type: "doku_danamon_va" })
  | (Doku & { type: "doku_bri_va" })
  | (Doku & { type: "doku_bni_va" })
  | (Doku & { type: "doku_bni" })
  | (Vipps & { type: "vipps" })
  | (MobilePay & { type: "mobilepay" })
  | (Cellulant & { type: "cellulant" })
  | (PaymentDetails & { type: "unionpay" })
  | (PaymentDetails & { type: "kcp_banktransfer" })
  | (PaymentDetails & { type: "kcp_payco" })
  | (PaymentDetails & { type: "kcp_creditcard" })
  | (WeChatPay & { type: "wechatpay" })
  | (WeChatPay & { type: "wechatpay_pos" })
  | (PaymentDetails & { type: "wechatpaySDK" })
  | (PaymentDetails & { type: "wechatpayQR" })
  | (PaymentDetails & { type: "wechatpayWeb" })
  | (WeChatPayMiniProgram & { type: "wechatpayMiniProgram" })
  | (MolPay & { type: "molpay_ebanking_fpx_MY" })
  | (MolPay & { type: "molpay_ebanking_TH" })
  | (MolPay & { type: "molpay_krungsribank" })
  | (MolPay & { type: "molpay_krungthaibank" })
  | (MolPay & { type: "molpay_siamcommercialbank" })
  | (MolPay & { type: "molpay_bangkokbank" })
  | (MolPay & { type: "molpay_kbank" })
  | (PaymentDetails & { type: "molpay_boost" })
  | (BillDesk & { type: "billdesk_online" })
  | (BillDesk & { type: "billdesk_wallet" })
  | (PaymentDetails & { type: "wallet_IN" })
  | (PaymentDetails & { type: "payu_IN_cashcard" })
  | (PaymentDetails & { type: "payu_IN_nb" })
  | (PayU & { type: "payu_IN_upi" })
  | (PseLatam & { type: "pse_payulatam" })
  | (UpiCollect & { type: "upi_collect" })
  | (UpiIntent & { type: "upi_intent" })
  | (UpiQr & { type: "upi_qr" })
  | (PaymentDetails & { type: "paytm" })
  | (PaymentDetails & { type: "molpay_ebanking_VN" })
  | (StoredPaymentMethod2 & { type: "onlineBanking_PL" })
  | (StoredPaymentMethod2 & { type: "eps" })
  | (PayByBank & { type: "paybybank" })
  | (PayByBankAisDirectDebit & { type: "paybybank_AIS_DD" })
  | (StoredPaymentMethod2 & { type: "onlineBanking_SK" })
  | (StoredPaymentMethod2 & { type: "onlineBanking_CZ" })
  | (OpenInvoice & { type: "openinvoice" })
  | (OpenInvoice & { type: "afterpay_directdebit" })
  | (OpenInvoice & { type: "atome_pos" })
  | (Doku & { type: "doku_paymentmethods" })
  | (Doku & { type: "doku_atm_mandiri_va" })
  | (Doku & { type: "doku_briepay" })
  | (Doku & { type: "doku_mandiri_multipayment_lite" })
  | (Doku & { type: "doku_card" })
  | (Doku & { type: "doku_atm_mandiri_va_lite" })
  | (Doku & { type: "doku_bca_klikpay" })
  | (Doku & { type: "doku_mandiri_multipayment" })
  | (Doku & { type: "doku_mandiri_clickpay" })
  | (EBankingFinland & { type: "ebanking_FI" })
  | (PaymentDetails & { type: "molpay_ebanking_MY" })
  | (PaymentDetails & { type: "molpay_ebanking_direct_MY" })
  | (PaymentDetails & { type: "swish" })
  | (Twint & { type: "twint" })
  | (StoredPaymentMethod4 & { type: "pix" })
  | (StoredPaymentMethod5 & { type: "paybybank_pix" })
  | (PaymentDetails & { type: "bizum" })
  | (PaymentDetails & { type: "walley" })
  | (PaymentDetails & { type: "walley_b2b" })
  | (Alma & { type: "alma" })
  | (Ancv & { type: "ancv" })
  | (PaymentDetails & { type: "paypo" })
  | (PaymentDetails & { type: "scalapay" })
  | (PaymentDetails & { type: "scalapay_3x" })
  | (PaymentDetails & { type: "scalapay_4x" })
  | (Riverty & { type: "riverty" })
  | (Riverty & { type: "riverty_installments" })
  | (Riverty & { type: "sepadirectdebit_riverty" })
  | (PayTo & { type: "payto" })
  | (DirectDebitAu & { type: "directdebit_AU" })
  | (PaymentDetails & { type: "molpay_fpx" })
  | (PaymentDetails & { type: "payme" })
  | (PaymentDetails & { type: "payme_pos" })
  | (Voucher & { type: "econtext_seven_eleven" })
  | (Voucher & { type: "econtext_online" })
  | (Voucher & { type: "econtext" })
  | (Voucher & { type: "econtext_stores" })
  | (Voucher & { type: "econtext_atm" })
  | (PaymentDetails & { type: "konbini" })
  | (Dragonpay & { type: "dragonpay_ebanking" })
  | (Dragonpay & { type: "dragonpay_otc_banking" })
  | (Dragonpay & { type: "dragonpay_otc_non_banking" })
  | (Dragonpay & { type: "dragonpay_otc_philippines" })
  | (PaymentDetails & { type: "directEbanking" })
  | (BacsDirectDebit & { type: "directdebit_GB" })
  | (PaymentDetails & { type: "boletobancario" })
  | (CardDetails & { type: "giftcard" })
  | (StoredPaymentMethod6 & { type: "paymaya_wallet" })
  | (StoredPaymentMethod6 & { type: "grabpay_SG" })
  | (StoredPaymentMethod6 & { type: "grabpay_MY" })
  | (StoredPaymentMethod6 & { type: "grabpay_TH" })
  | (StoredPaymentMethod6 & { type: "grabpay_ID" })
  | (StoredPaymentMethod6 & { type: "grabpay_VN" })
  | (StoredPaymentMethod6 & { type: "grabpay_PH" })
  | (StoredPaymentMethod6 & { type: "oxxo" })
  | (Blik & { type: "blik" })
  | (StoredPaymentMethod6 & { type: "gcash" })
  | (StoredPaymentMethod6 & { type: "dana" })
  | (StoredPaymentMethod6 & { type: "kakaopay" })
  | (StoredPaymentMethod6 & { type: "truemoney" })
  | (MbWay & { type: "mbway" })
  | (CardDetails & { type: "alliancedata" })
  | (StoredPaymentMethod6 & { type: "paysafecard" })
  | (PaymentDetails & { type: "cashticket" })
  | (PaymentDetails & { type: "ikano" })
  | (PaymentDetails & { type: "karenmillen" })
  | (PaymentDetails & { type: "oasis" })
  | (PaymentDetails & { type: "warehouse" })
  | (PaymentDetails & { type: "primeiropay_boleto" })
  | (PaymentDetails & { type: "mada" })
  | (PaymentDetails & { type: "benefit" })
  | (PaymentDetails & { type: "knet" })
  | (PaymentDetails & { type: "omannet" })
  | (StoredPaymentMethod6 & { type: "gopay_wallet" })
  | (PaymentDetails & { type: "kcp_naverpay" })
  | (StoredPaymentMethod2 & { type: "onlinebanking_IN" })
  | (PaymentDetails & { type: "fawry" })
  | (PaymentDetails & { type: "atome" })
  | (PaymentDetails & { type: "naps" })
  | (PaymentDetails & { type: "nordea" })
  | (PaymentDetails & { type: "boletobancario_bradesco" })
  | (PaymentDetails & { type: "boletobancario_itau" })
  | (PaymentDetails & { type: "boletobancario_santander" })
  | (PaymentDetails & { type: "boletobancario_bancodobrasil" })
  | (PaymentDetails & { type: "boletobancario_hsbc" })
  | (PaymentDetails & { type: "molpay_maybank2u" })
  | (PaymentDetails & { type: "molpay_cimb" })
  | (PaymentDetails & { type: "molpay_rhb" })
  | (PaymentDetails & { type: "molpay_amb" })
  | (PaymentDetails & { type: "molpay_hlb" })
  | (PaymentDetails & { type: "molpay_affin_epg" })
  | (PaymentDetails & { type: "molpay_bankislam" })
  | (PaymentDetails & { type: "molpay_publicbank" })
  | (PaymentDetails & { type: "fpx_agrobank" })
  | (PaymentDetails & { type: "touchngo" })
  | (PaymentDetails & { type: "maybank2u_mae" })
  | (PaymentDetails & { type: "duitnow" })
  | (PaymentDetails & { type: "promptpay" })
  | (PaymentDetails & { type: "twint_pos" })
  | (PaymentDetails & { type: "alipay_hk" })
  | (PaymentDetails & { type: "alipay_hk_web" })
  | (PaymentDetails & { type: "alipay_hk_wap" })
  | (PaymentDetails & { type: "alipay_wap" })
  | (PaymentDetails & { type: "balanceplatform" })
  | (StoredPaymentMethod & { type: "cashapp" })
  | (CardDetails & { type: "card" });

export const paymentMethod11Schema: Schema<PaymentMethod11> = s.discriminatedUnion<PaymentMethod11>("type", {
  applepay: applePayDetailsSchema,
  samsungpay: samsungPaySchema,
  androidpay: androidPaySchema,
  visacheckout: visaCheckoutSchema,
  paywithgoogle: payWithGoogleDetailsSchema,
  amazonpay: amazonPaySchema,
  masterpass: masterpassSchema,
  googlepay: googlePayDetailsSchema,
  fastlane: fastlaneSchema,
  alipay: paymentDetailsSchema,
  alipay_plus: storedPaymentMethod6Schema,
  alipay_plus_alipay_cn: storedPaymentMethod6Schema,
  alipay_plus_alipay_hk: storedPaymentMethod6Schema,
  alipay_plus_dana: storedPaymentMethod6Schema,
  alipay_plus_gcash: storedPaymentMethod6Schema,
  alipay_plus_kakaopay: storedPaymentMethod6Schema,
  alipay_plus_kplus: storedPaymentMethod6Schema,
  alipay_plus_naverpay: storedPaymentMethod6Schema,
  alipay_plus_rabbitlinepay: storedPaymentMethod6Schema,
  alipay_plus_tosspay: storedPaymentMethod6Schema,
  alipay_plus_touchngo: storedPaymentMethod6Schema,
  alipay_plus_truemoney: storedPaymentMethod6Schema,
  bcmc: cardDetailsSchema,
  bcmc_mobile: storedPaymentMethod6Schema,
  bcmc_mobile_QR: storedPaymentMethod6Schema,
  bcmc_mobile_app: storedPaymentMethod6Schema,
  scheme: cardDetailsSchema,
  networkToken: cardDetailsSchema,
  altId: cardDetailsSchema,
  externalToken: detailsOfTokensThatAreNotStoredWithAdyenSchema,
  multibanco: paymentDetailsSchema,
  ach: achDirectDebitSchema,
  ach_plaid: achDirectDebitSchema,
  eft_directdebit_CA: eftDirectDebitSchema,
  bankTransfer: paymentDetailsSchema,
  bankTransfer_IBAN: paymentDetailsSchema,
  klarna: klarnaSchema,
  klarnapayments: klarnaSchema,
  klarnapayments_account: klarnaSchema,
  klarnapayments_b2b: klarnaSchema,
  klarna_paynow: klarnaSchema,
  klarna_account: klarnaSchema,
  klarna_b2b: klarnaSchema,
  klarna_network: klarnaNetworkSchema,
  paynow: paymentDetailsSchema,
  afterpay_default: afterpaySchema,
  afterpaytouch: afterpaySchema,
  afterpaytouch_pos: afterpaySchema,
  clearpay: afterpaySchema,
  afterpay_b2b: afterpaySchema,
  zip: zipSchema,
  zip_pos: zipSchema,
  ratepay: ratepaySchema,
  ratepay_directdebit: ratepaySchema,
  affirm: affirmSchema,
  affirm_pos: paymentDetailsSchema,
  riverty_account: rivertySchema,
  ideal: idealDetailsSchema,
  iris: paymentDetailsSchema,
  wero: paymentDetailsSchema,
  paypal: payPalSchema,
  paypay: payPaySchema,
  rakutenpay: rakutenPaySchema,
  aupay: auPaySchema,
  dbarai: dBaraiSchema,
  trustly: paymentDetailsSchema,
  trustlyvector: paymentDetailsSchema,
  oney: paymentDetailsSchema,
  facilypay: paymentDetailsSchema,
  facilypay_3x: paymentDetailsSchema,
  facilypay_4x: paymentDetailsSchema,
  facilypay_6x: paymentDetailsSchema,
  facilypay_10x: paymentDetailsSchema,
  facilypay_12x: paymentDetailsSchema,
  sepadirectdebit: sepaDirectDebitSchema,
  sepadirectdebit_amazonpay: sepaDirectDebitSchema,
  momo_wallet: storedPaymentMethod6Schema,
  momo_wallet_app: storedPaymentMethod6Schema,
  doku: dokuSchema,
  doku_wallet: dokuSchema,
  doku_ovo: dokuSchema,
  doku_permata_lite_atm: dokuSchema,
  doku_permata_atm: dokuSchema,
  doku_alfamart: dokuSchema,
  doku_indomaret: dokuSchema,
  doku_sinarmas_va: dokuSchema,
  doku_bca_va: dokuSchema,
  doku_mandiri_va: dokuSchema,
  doku_cimb_va: dokuSchema,
  doku_danamon_va: dokuSchema,
  doku_bri_va: dokuSchema,
  doku_bni_va: dokuSchema,
  doku_bni: dokuSchema,
  vipps: vippsSchema,
  mobilepay: mobilePaySchema,
  cellulant: cellulantSchema,
  unionpay: paymentDetailsSchema,
  kcp_banktransfer: paymentDetailsSchema,
  kcp_payco: paymentDetailsSchema,
  kcp_creditcard: paymentDetailsSchema,
  wechatpay: weChatPaySchema,
  wechatpay_pos: weChatPaySchema,
  wechatpaySDK: paymentDetailsSchema,
  wechatpayQR: paymentDetailsSchema,
  wechatpayWeb: paymentDetailsSchema,
  wechatpayMiniProgram: weChatPayMiniProgramSchema,
  molpay_ebanking_fpx_MY: molPaySchema,
  molpay_ebanking_TH: molPaySchema,
  molpay_krungsribank: molPaySchema,
  molpay_krungthaibank: molPaySchema,
  molpay_siamcommercialbank: molPaySchema,
  molpay_bangkokbank: molPaySchema,
  molpay_kbank: molPaySchema,
  molpay_boost: paymentDetailsSchema,
  billdesk_online: billDeskSchema,
  billdesk_wallet: billDeskSchema,
  wallet_IN: paymentDetailsSchema,
  payu_IN_cashcard: paymentDetailsSchema,
  payu_IN_nb: paymentDetailsSchema,
  payu_IN_upi: payUSchema,
  pse_payulatam: pseLatamSchema,
  upi_collect: upiCollectSchema,
  upi_intent: upiIntentSchema,
  upi_qr: upiQrSchema,
  paytm: paymentDetailsSchema,
  molpay_ebanking_VN: paymentDetailsSchema,
  onlineBanking_PL: storedPaymentMethod2Schema,
  eps: storedPaymentMethod2Schema,
  paybybank: payByBankSchema,
  paybybank_AIS_DD: payByBankAisDirectDebitSchema,
  onlineBanking_SK: storedPaymentMethod2Schema,
  onlineBanking_CZ: storedPaymentMethod2Schema,
  openinvoice: openInvoiceSchema,
  afterpay_directdebit: openInvoiceSchema,
  atome_pos: openInvoiceSchema,
  doku_paymentmethods: dokuSchema,
  doku_atm_mandiri_va: dokuSchema,
  doku_briepay: dokuSchema,
  doku_mandiri_multipayment_lite: dokuSchema,
  doku_card: dokuSchema,
  doku_atm_mandiri_va_lite: dokuSchema,
  doku_bca_klikpay: dokuSchema,
  doku_mandiri_multipayment: dokuSchema,
  doku_mandiri_clickpay: dokuSchema,
  ebanking_FI: eBankingFinlandSchema,
  molpay_ebanking_MY: paymentDetailsSchema,
  molpay_ebanking_direct_MY: paymentDetailsSchema,
  swish: paymentDetailsSchema,
  twint: twintSchema,
  pix: storedPaymentMethod4Schema,
  paybybank_pix: storedPaymentMethod5Schema,
  bizum: paymentDetailsSchema,
  walley: paymentDetailsSchema,
  walley_b2b: paymentDetailsSchema,
  alma: almaSchema,
  ancv: ancvSchema,
  paypo: paymentDetailsSchema,
  scalapay: paymentDetailsSchema,
  scalapay_3x: paymentDetailsSchema,
  scalapay_4x: paymentDetailsSchema,
  riverty: rivertySchema,
  riverty_installments: rivertySchema,
  sepadirectdebit_riverty: rivertySchema,
  payto: payToSchema,
  directdebit_AU: directDebitAuSchema,
  molpay_fpx: paymentDetailsSchema,
  payme: paymentDetailsSchema,
  payme_pos: paymentDetailsSchema,
  econtext_seven_eleven: voucherSchema,
  econtext_online: voucherSchema,
  econtext: voucherSchema,
  econtext_stores: voucherSchema,
  econtext_atm: voucherSchema,
  konbini: paymentDetailsSchema,
  dragonpay_ebanking: dragonpaySchema,
  dragonpay_otc_banking: dragonpaySchema,
  dragonpay_otc_non_banking: dragonpaySchema,
  dragonpay_otc_philippines: dragonpaySchema,
  directEbanking: paymentDetailsSchema,
  directdebit_GB: bacsDirectDebitSchema,
  boletobancario: paymentDetailsSchema,
  giftcard: cardDetailsSchema,
  paymaya_wallet: storedPaymentMethod6Schema,
  grabpay_SG: storedPaymentMethod6Schema,
  grabpay_MY: storedPaymentMethod6Schema,
  grabpay_TH: storedPaymentMethod6Schema,
  grabpay_ID: storedPaymentMethod6Schema,
  grabpay_VN: storedPaymentMethod6Schema,
  grabpay_PH: storedPaymentMethod6Schema,
  oxxo: storedPaymentMethod6Schema,
  blik: blikSchema,
  gcash: storedPaymentMethod6Schema,
  dana: storedPaymentMethod6Schema,
  kakaopay: storedPaymentMethod6Schema,
  truemoney: storedPaymentMethod6Schema,
  mbway: mbWaySchema,
  alliancedata: cardDetailsSchema,
  paysafecard: storedPaymentMethod6Schema,
  cashticket: paymentDetailsSchema,
  ikano: paymentDetailsSchema,
  karenmillen: paymentDetailsSchema,
  oasis: paymentDetailsSchema,
  warehouse: paymentDetailsSchema,
  primeiropay_boleto: paymentDetailsSchema,
  mada: paymentDetailsSchema,
  benefit: paymentDetailsSchema,
  knet: paymentDetailsSchema,
  omannet: paymentDetailsSchema,
  gopay_wallet: storedPaymentMethod6Schema,
  kcp_naverpay: paymentDetailsSchema,
  onlinebanking_IN: storedPaymentMethod2Schema,
  fawry: paymentDetailsSchema,
  atome: paymentDetailsSchema,
  naps: paymentDetailsSchema,
  nordea: paymentDetailsSchema,
  boletobancario_bradesco: paymentDetailsSchema,
  boletobancario_itau: paymentDetailsSchema,
  boletobancario_santander: paymentDetailsSchema,
  boletobancario_bancodobrasil: paymentDetailsSchema,
  boletobancario_hsbc: paymentDetailsSchema,
  molpay_maybank2u: paymentDetailsSchema,
  molpay_cimb: paymentDetailsSchema,
  molpay_rhb: paymentDetailsSchema,
  molpay_amb: paymentDetailsSchema,
  molpay_hlb: paymentDetailsSchema,
  molpay_affin_epg: paymentDetailsSchema,
  molpay_bankislam: paymentDetailsSchema,
  molpay_publicbank: paymentDetailsSchema,
  fpx_agrobank: paymentDetailsSchema,
  touchngo: paymentDetailsSchema,
  maybank2u_mae: paymentDetailsSchema,
  duitnow: paymentDetailsSchema,
  promptpay: paymentDetailsSchema,
  twint_pos: paymentDetailsSchema,
  alipay_hk: paymentDetailsSchema,
  alipay_hk_web: paymentDetailsSchema,
  alipay_hk_wap: paymentDetailsSchema,
  alipay_wap: paymentDetailsSchema,
  balanceplatform: paymentDetailsSchema,
  cashapp: storedPaymentMethodSchema,
  card: cardDetailsSchema,
});
