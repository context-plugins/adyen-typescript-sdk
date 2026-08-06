
# Payment Method Setup Info

*This model accepts additional fields of type unknown.*

## Structure

`PaymentMethodSetupInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accel` | [`AccelInfo \| undefined`](../../doc/models/accel-info.md) | Optional | - |
| `affirm` | [`AffirmInfo \| undefined`](../../doc/models/affirm-info.md) | Optional | - |
| `afterpayTouch` | [`AfterpayTouchInfo \| undefined`](../../doc/models/afterpay-touch-info.md) | Optional | - |
| `alipayPlus` | [`AlipayPlusInfo \| undefined`](../../doc/models/alipay-plus-info.md) | Optional | - |
| `amex` | [`AmexInfo \| undefined`](../../doc/models/amex-info.md) | Optional | - |
| `applePay` | [`ApplePayInfo \| undefined`](../../doc/models/apple-pay-info.md) | Optional | - |
| `bcmc` | [`BcmcInfo \| undefined`](../../doc/models/bcmc-info.md) | Optional | - |
| `businessLineId` | `string \| undefined` | Optional | The unique identifier of the business line. Required if you are a [platform model](https://docs.adyen.com/platforms). |
| `carnet` | [`CarnetInfo \| undefined`](../../doc/models/carnet-info.md) | Optional | - |
| `cartesBancaires` | [`CartesBancairesInfo \| undefined`](../../doc/models/cartes-bancaires-info.md) | Optional | - |
| `clearpay` | [`ClearpayInfo \| undefined`](../../doc/models/clearpay-info.md) | Optional | - |
| `countries` | `string[] \| undefined` | Optional | The list of countries where a payment method is available. By default, all countries supported by the payment method. |
| `cup` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `currencies` | `string[] \| undefined` | Optional | The list of currencies that a payment method supports. By default, all currencies supported by the payment method. |
| `customRoutingFlags` | `string[] \| undefined` | Optional | The list of custom routing flags to route payment to the intended acquirer. |
| `diners` | [`DinersInfo \| undefined`](../../doc/models/diners-info.md) | Optional | - |
| `discover` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `eftDirectdebitCa` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `eftposAustralia` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `girocard` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `givex` | [`GivexInfo \| undefined`](../../doc/models/givex-info.md) | Optional | - |
| `googlePay` | [`GooglePayInfo \| undefined`](../../doc/models/google-pay-info.md) | Optional | - |
| `ideal` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `interacCard` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `jcb` | [`JcbInfo \| undefined`](../../doc/models/jcb-info.md) | Optional | - |
| `klarna` | [`KlarnaInfo \| undefined`](../../doc/models/klarna-info.md) | Optional | - |
| `maestro` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `maestroUsa` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `mc` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `mealVoucherFr` | [`MealVoucherFrInfo \| undefined`](../../doc/models/meal-voucher-fr-info.md) | Optional | - |
| `nyce` | [`AccelInfo \| undefined`](../../doc/models/accel-info.md) | Optional | - |
| `paybybankPlaid` | [`PayByBankPlaidInfo \| undefined`](../../doc/models/pay-by-bank-plaid-info.md) | Optional | - |
| `payme` | [`PayMeInfo \| undefined`](../../doc/models/pay-me-info.md) | Optional | - |
| `paypal` | [`PayPalInfo \| undefined`](../../doc/models/pay-pal-info.md) | Optional | - |
| `payto` | [`PayToInfo \| undefined`](../../doc/models/pay-to-info.md) | Optional | - |
| `pulse` | [`AccelInfo \| undefined`](../../doc/models/accel-info.md) | Optional | - |
| `reference` | `string \| undefined` | Optional | Your reference for the payment method. Supported characters a-z, A-Z, 0-9.<br><br>**Constraints**: *Maximum Length*: `150` |
| `sepadirectdebit` | [`SepaDirectDebitInfo \| undefined`](../../doc/models/sepa-direct-debit-info.md) | Optional | - |
| `shopperInteraction` | [`ShopperInteraction2 \| undefined`](../../doc/models/shopper-interaction-2.md) | Optional | - |
| `sodexo` | [`SodexoInfo \| undefined`](../../doc/models/sodexo-info.md) | Optional | - |
| `sofort` | [`SofortInfo \| undefined`](../../doc/models/sofort-info.md) | Optional | - |
| `star` | [`AccelInfo \| undefined`](../../doc/models/accel-info.md) | Optional | - |
| `storeIds` | `string[] \| undefined` | Optional | The unique identifier of the store for which to configure the payment method, if any. |
| `svs` | [`SvsInfo \| undefined`](../../doc/models/svs-info.md) | Optional | - |
| `swish` | [`SwishInfo \| undefined`](../../doc/models/swish-info.md) | Optional | - |
| `ticket` | [`TicketInfo \| undefined`](../../doc/models/ticket-info.md) | Optional | - |
| `twint` | [`TwintInfo \| undefined`](../../doc/models/twint-info.md) | Optional | - |
| `type` | [`Type510`](../../doc/models/type-510.md) | Required | - |
| `valuelink` | [`ValuelinkInfo \| undefined`](../../doc/models/valuelink-info.md) | Optional | - |
| `vipps` | [`VippsInfo \| undefined`](../../doc/models/vipps-info.md) | Optional | - |
| `visa` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `wechatpay` | [`WeChatPayInfo \| undefined`](../../doc/models/we-chat-pay-info.md) | Optional | - |
| `wechatpayPos` | [`WeChatPayInfo \| undefined`](../../doc/models/we-chat-pay-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  PaymentMethodSetupInfo,
  ProcessingType,
  ServiceLevel,
  Type33,
  Type510,
} from 'adyen';

const paymentMethodSetupInfo: PaymentMethodSetupInfo = {
  type: Type510.Abrapetite,
  accel: {
    processingType: ProcessingType.Billpay,
    transactionDescription: {
      doingBusinessAsName: 'doingBusinessAsName0',
      type: Type33.Fixed,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  affirm: {
    supportEmail: 'supportEmail2',
    pricePlan: 'pricePlan8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  afterpayTouch: {
    supportUrl: 'supportUrl4',
    supportEmail: 'supportEmail8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  alipayPlus: {
    settlementCurrencyCode: 'settlementCurrencyCode0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  amex: {
    serviceLevel: ServiceLevel.GatewayContract,
    midNumber: 'midNumber4',
    reuseMidNumber: false,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

