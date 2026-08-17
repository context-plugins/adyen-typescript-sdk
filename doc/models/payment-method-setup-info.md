
# Payment Method Setup Info

## Structure

`PaymentMethodSetupInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accel` | [`AccelInfo1 \| undefined`](../../doc/models/accel-info-1.md) | Optional | Details to provide if `type` is **accel**. |
| `affirm` | [`AffirmInfo1 \| undefined`](../../doc/models/affirm-info-1.md) | Optional | Details to provide if `type` is **affirm**. |
| `afterpayTouch` | [`AfterpayTouchInfo1 \| undefined`](../../doc/models/afterpay-touch-info-1.md) | Optional | Details to provide if `type` is **afterpaytouch**. |
| `alipayPlus` | [`AlipayPlusInfo1 \| undefined`](../../doc/models/alipay-plus-info-1.md) | Optional | Details to provide if `type` is **alipay_plus**. |
| `amex` | [`AmexInfo1 \| undefined`](../../doc/models/amex-info-1.md) | Optional | Details to provide if `type` is **amex**.<br>For merchants operating in Australia, New Zealand & Canada, JCB and American Express are automatically requested together. |
| `applePay` | [`ApplePayInfo1 \| undefined`](../../doc/models/apple-pay-info-1.md) | Optional | Details to provide if `type` is **applepay**. |
| `bcmc` | [`BcmcInfo1 \| undefined`](../../doc/models/bcmc-info-1.md) | Optional | Details to provide if `type` is **bcmc** (Bancontact). |
| `businessLineId` | `string \| undefined` | Optional | The unique identifier of the business line. Required if you are a [platform model](https://docs.adyen.com/platforms). |
| `carnet` | [`CarnetInfo1 \| undefined`](../../doc/models/carnet-info-1.md) | Optional | Details to provide if `type` is **carnet**. |
| `cartesBancaires` | [`CartesBancairesInfo1 \| undefined`](../../doc/models/cartes-bancaires-info-1.md) | Optional | Details to provide if `type` is **cartebancaire**. |
| `clearpay` | [`ClearpayInfo1 \| undefined`](../../doc/models/clearpay-info-1.md) | Optional | Details to provide if `type` is **clearpay**. |
| `countries` | `string[] \| undefined` | Optional | The list of countries where a payment method is available. By default, all countries supported by the payment method. |
| `cup` | [`GenericPmWithTdiInfo1 \| undefined`](../../doc/models/generic-pm-with-tdi-info-1.md) | Optional | Details to provide if `type` is **cup** (China Union Pay). |
| `currencies` | `string[] \| undefined` | Optional | The list of currencies that a payment method supports. By default, all currencies supported by the payment method. |
| `customRoutingFlags` | `string[] \| undefined` | Optional | The list of custom routing flags to route payment to the intended acquirer. |
| `diners` | [`DinersInfo1 \| undefined`](../../doc/models/diners-info-1.md) | Optional | Details to provide if `type` is **diners**.<br>For merchants operating in Japan, Diners payments are processed through the JCB network. This means that you must include [JCB-specific fields](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/paymentMethodSettings/(paymentMethodId)#request-jcb) in this object. |
| `discover` | [`GenericPmWithTdiInfo2 \| undefined`](../../doc/models/generic-pm-with-tdi-info-2.md) | Optional | Details to provide if `type` is **discover**.<br>For merchants operating in Japan, request [Diners](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/paymentMethodSettings/(paymentMethodId)#request-diners) payment method instead. Discover is automatically requested, together with Diners. |
| `eftDirectdebitCA` | [`GenericPmWithTdiInfo3 \| undefined`](../../doc/models/generic-pm-with-tdi-info-3.md) | Optional | Details to provide if `type` is **eft_directdebit_CA** (EFT PAD). |
| `eftposAustralia` | [`GenericPmWithTdiInfo4 \| undefined`](../../doc/models/generic-pm-with-tdi-info-4.md) | Optional | Details to provide if `type` is **eftpos_australia**. |
| `girocard` | [`GenericPmWithTdiInfo5 \| undefined`](../../doc/models/generic-pm-with-tdi-info-5.md) | Optional | Details to provide if `type` is **girocard**. |
| `givex` | [`GivexInfo1 \| undefined`](../../doc/models/givex-info-1.md) | Optional | Details to provide if `type` is **givex**. |
| `googlePay` | [`GooglePayInfo1 \| undefined`](../../doc/models/google-pay-info-1.md) | Optional | Details to provide if `type` is **googlepay**. |
| `ideal` | [`GenericPmWithTdiInfo6 \| undefined`](../../doc/models/generic-pm-with-tdi-info-6.md) | Optional | Details to provide if `type` is **ideal**. |
| `interacCard` | [`GenericPmWithTdiInfo7 \| undefined`](../../doc/models/generic-pm-with-tdi-info-7.md) | Optional | Details to provide if `type` is **interac_card**. |
| `jcb` | [`JCBInfo1 \| undefined`](../../doc/models/jcb-info-1.md) | Optional | Details to provide if `type` is **jcb**.<br>For merchants operating in Japan, `midNumber`, `reuseMidNumber`, and `serviceLevel` fields are required.<br>For merchants operating outside of Japan, these fields are not required.<br>For merchants operating in Australia, New Zealand & Canada, JCB and American Express are automatically requested together. |
| `klarna` | [`KlarnaInfo1 \| undefined`](../../doc/models/klarna-info-1.md) | Optional | Details to provide if `type` is **klarna** or its variant.<br><br>You can use the following payment method `type` values for Klarna:<br><br>* **klarna**: Klarna Pay Later<br>* **klarna_account**: Klarna Pay over time<br>* **klarna_paynow**: Klarna Pay now<br>* **klarna_b2b**: [Billie via Klarna](https://docs.adyen.com/payment-methods/klarna/billie) |
| `maestro` | [`GenericPmWithTdiInfo8 \| undefined`](../../doc/models/generic-pm-with-tdi-info-8.md) | Optional | Details to provide if `type` is **maestro**.<br>In the US, `maestro` is not supported; use `maestro_usa` instead. |
| `maestroUsa` | [`GenericPmWithTdiInfo9 \| undefined`](../../doc/models/generic-pm-with-tdi-info-9.md) | Optional | Details to provide if `type` is **maestro_usa**.<br>Only for Maestro USA, otherwise use `maestro`. |
| `mc` | [`GenericPmWithTdiInfo10 \| undefined`](../../doc/models/generic-pm-with-tdi-info-10.md) | Optional | Details to provide if `type` is **mc**. |
| `mealVoucherFR` | [`MealVoucherFRInfo1 \| undefined`](../../doc/models/meal-voucher-fr-info-1.md) | Optional | Details to provide if `type` is **mealVoucher_FR**. |
| `nyce` | [`NyceInfo1 \| undefined`](../../doc/models/nyce-info-1.md) | Optional | Details to provide if `type` is **nyce**. |
| `paybybankPlaid` | [`PayByBankPlaidInfo1 \| undefined`](../../doc/models/pay-by-bank-plaid-info-1.md) | Optional | Details to provide if `type` is **paybybank_plaid**. |
| `payme` | [`PayMeInfo1 \| undefined`](../../doc/models/pay-me-info-1.md) | Optional | Details to provide if `type` is **payme**. |
| `paypal` | [`PayPalInfo1 \| undefined`](../../doc/models/pay-pal-info-1.md) | Optional | Details to provide if `type` is **paypal**. |
| `payto` | [`PayToInfo1 \| undefined`](../../doc/models/pay-to-info-1.md) | Optional | Details to provide if `type` is **payto**. |
| `pulse` | [`PulseInfo2 \| undefined`](../../doc/models/pulse-info-2.md) | Optional | Details to provide if `type` is **pulse**. |
| `reference` | `string \| undefined` | Optional | Your reference for the payment method. Supported characters a-z, A-Z, 0-9.<br><br>**Constraints**: *Maximum Length*: `150` |
| `sepadirectdebit` | [`SepaDirectDebitInfo2 \| undefined`](../../doc/models/sepa-direct-debit-info-2.md) | Optional | Details to provide if `type` is **sepadirectdebit**. |
| `shopperInteraction` | [`ShopperInteraction1Enum \| undefined`](../../doc/models/shopper-interaction-1-enum.md) | Optional | The sales channel. Required if:<br><br>- The merchant account does not have a sales channel.<br>- `type` is **alipay**.<br><br>When you provide this field, it overrides the default sales channel set on the merchant account.<br><br>Possible values: **eCommerce**, **pos**, **contAuth**, and **moto**. |
| `sodexo` | [`SodexoInfo2 \| undefined`](../../doc/models/sodexo-info-2.md) | Optional | Details to provide if `type` is **sodexo**. |
| `sofort` | [`SofortInfo2 \| undefined`](../../doc/models/sofort-info-2.md) | Optional | Sofort details. |
| `star` | [`StarInfo2 \| undefined`](../../doc/models/star-info-2.md) | Optional | Details to provide if `type` is **star**. |
| `storeIds` | `string[] \| undefined` | Optional | The unique identifier of the store for which to configure the payment method, if any. |
| `svs` | [`SvsInfo2 \| undefined`](../../doc/models/svs-info-2.md) | Optional | Details to provide if `type` is **svs**. |
| `swish` | [`SwishInfo2 \| undefined`](../../doc/models/swish-info-2.md) | Optional | Details to provide if `type` is **swish**.<br><br>- This field is required only if you have a contract with Swish. Swish handles settlement directly with you (not through Adyen).<br>- If not specified then it's assumed that you are using Adyen's contract with Swish.You don't have a direct relationship with Swish. |
| `ticket` | [`TicketInfo2 \| undefined`](../../doc/models/ticket-info-2.md) | Optional | Details to provide if `type` is **ticket** (Edenred Brazil). |
| `twint` | [`TwintInfo2 \| undefined`](../../doc/models/twint-info-2.md) | Optional | Details to provide if `type` is **twint**. |
| `type` | [`Type59Enum`](../../doc/models/type-59-enum.md) | Required | Payment method [variant](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api). |
| `valuelink` | [`ValuelinkInfo2 \| undefined`](../../doc/models/valuelink-info-2.md) | Optional | Details to provide if `type` is **valuelink**. |
| `vipps` | [`VippsInfo2 \| undefined`](../../doc/models/vipps-info-2.md) | Optional | Details to provide if `type` is **vipps**. |
| `visa` | [`GenericPmWithTdiInfo11 \| undefined`](../../doc/models/generic-pm-with-tdi-info-11.md) | Optional | Details to provide if `type` is **visa**. |
| `wechatpay` | [`WeChatPayInfo2 \| undefined`](../../doc/models/we-chat-pay-info-2.md) | Optional | Details to provide if `type` is **wechatpay**. |
| `wechatpayPos` | [`WeChatPayPosInfo2 \| undefined`](../../doc/models/we-chat-pay-pos-info-2.md) | Optional | Details to provide if `type` is **wechatpay_pos**. |

## Example

```ts
import {
  PaymentMethodSetupInfo,
  ProcessingTypeEnum,
  ServiceLevelEnum,
  Type59Enum,
  Type8Enum,
} from 'adyen';

const paymentMethodSetupInfo: PaymentMethodSetupInfo = {
  type: Type59Enum.Abrapetite,
  accel: {
    processingType: ProcessingTypeEnum.Billpay,
    transactionDescription: {
      doingBusinessAsName: 'doingBusinessAsName0',
      type: Type8Enum.Fixed,
    },
  },
  affirm: {
    supportEmail: 'supportEmail2',
    pricePlan: 'pricePlan8',
  },
  afterpayTouch: {
    supportUrl: 'supportUrl4',
    supportEmail: 'supportEmail8',
  },
  alipayPlus: {
    settlementCurrencyCode: 'settlementCurrencyCode0',
  },
  amex: {
    serviceLevel: ServiceLevelEnum.GatewayContract,
    midNumber: 'midNumber4',
    reuseMidNumber: false,
  },
};
```

