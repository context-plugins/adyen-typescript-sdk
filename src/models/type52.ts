import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type52 = {
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
export type Type52 = (typeof Type52)[keyof typeof Type52] | (string & {});

export const type52Schema: EnumSchema<Type52> = s.enumOf<Type52>(Type52);
