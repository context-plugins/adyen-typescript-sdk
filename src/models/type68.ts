import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type68 = {
  AlipayPlus: "alipay_plus",
  AlipayPlusAlipayCn: "alipay_plus_alipay_cn",
  AlipayPlusAlipayHk: "alipay_plus_alipay_hk",
  AlipayPlusDana: "alipay_plus_dana",
  AlipayPlusGcash: "alipay_plus_gcash",
  AlipayPlusKakaopay: "alipay_plus_kakaopay",
  AlipayPlusKplus: "alipay_plus_kplus",
  AlipayPlusNaverpay: "alipay_plus_naverpay",
  AlipayPlusRabbitlinepay: "alipay_plus_rabbitlinepay",
  AlipayPlusTosspay: "alipay_plus_tosspay",
  AlipayPlusTouchngo: "alipay_plus_touchngo",
  AlipayPlusTruemoney: "alipay_plus_truemoney",
  BcmcMobile: "bcmc_mobile",
  BcmcMobileQr: "bcmc_mobile_QR",
  BcmcMobileApp: "bcmc_mobile_app",
  MomoWallet: "momo_wallet",
  MomoWalletApp: "momo_wallet_app",
  PaymayaWallet: "paymaya_wallet",
  GrabpaySg: "grabpay_SG",
  GrabpayMy: "grabpay_MY",
  GrabpayTh: "grabpay_TH",
  GrabpayId: "grabpay_ID",
  GrabpayVn: "grabpay_VN",
  GrabpayPh: "grabpay_PH",
  Oxxo: "oxxo",
  Gcash: "gcash",
  Dana: "dana",
  Kakaopay: "kakaopay",
  Truemoney: "truemoney",
  Paysafecard: "paysafecard",
  GopayWallet: "gopay_wallet",
} as const;
export type Type68 = (typeof Type68)[keyof typeof Type68] | (string & {});

export const type68Schema: EnumSchema<Type68> = s.enumOf<Type68>(Type68);
