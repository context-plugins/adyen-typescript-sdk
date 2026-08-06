
# Management Payment Method

*This model accepts additional fields of type unknown.*

## Structure

`ManagementPaymentMethod`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accel` | [`AccelResponseInfo \| undefined`](../../doc/models/accel-response-info.md) | Optional | - |
| `affirm` | [`AffirmResponseInfo \| undefined`](../../doc/models/affirm-response-info.md) | Optional | - |
| `afterpayTouch` | [`AfterpayTouchResponseInfo \| undefined`](../../doc/models/afterpay-touch-response-info.md) | Optional | - |
| `alipayPlus` | [`AlipayPlusResponseInfo \| undefined`](../../doc/models/alipay-plus-response-info.md) | Optional | - |
| `allowed` | `boolean \| undefined` | Optional | Indicates whether receiving payments is allowed. This value is set to **true** by Adyen after screening your merchant account. |
| `amex` | [`AmexResponseInfo \| undefined`](../../doc/models/amex-response-info.md) | Optional | - |
| `applePay` | [`ApplePayResponseInfo \| undefined`](../../doc/models/apple-pay-response-info.md) | Optional | - |
| `associatedPaymentMethods` | [`AssociatedPaymentMethod[] \| undefined`](../../doc/models/associated-payment-method.md) | Optional | Payment methods that were also updated as part of an associated transition. |
| `bcmc` | [`BcmcResponseInfo \| undefined`](../../doc/models/bcmc-response-info.md) | Optional | - |
| `businessLineId` | `string \| undefined` | Optional | The unique identifier of the business line. Required if you are a [platform model](https://docs.adyen.com/platforms). |
| `carnet` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `cartesBancaires` | [`CartesBancairesResponseInfo \| undefined`](../../doc/models/cartes-bancaires-response-info.md) | Optional | - |
| `clearpay` | [`ClearpayResponseInfo \| undefined`](../../doc/models/clearpay-response-info.md) | Optional | - |
| `countries` | `string[] \| undefined` | Optional | The list of countries where a payment method is available. By default, all countries supported by the payment method. |
| `cup` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `currencies` | `string[] \| undefined` | Optional | The list of currencies that a payment method supports. By default, all currencies supported by the payment method. |
| `customRoutingFlags` | `string[] \| undefined` | Optional | The list of custom routing flags to route payment to the intended acquirer. |
| `diners` | [`DinersResponseInfo \| undefined`](../../doc/models/diners-response-info.md) | Optional | - |
| `discover` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `eftDirectdebitCa` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `eftposAustralia` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `enabled` | `boolean \| undefined` | Optional | Indicates whether the payment method is enabled (**true**) or disabled (**false**). |
| `girocard` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `givex` | [`GivexResponseInfo \| undefined`](../../doc/models/givex-response-info.md) | Optional | - |
| `googlePay` | [`GooglePayResponseInfo \| undefined`](../../doc/models/google-pay-response-info.md) | Optional | - |
| `id` | `string` | Required | The identifier of the resource. |
| `ideal` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `interacCard` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `jcb` | [`JcbResponseInfo \| undefined`](../../doc/models/jcb-response-info.md) | Optional | - |
| `klarna` | [`KlarnaResponseInfo \| undefined`](../../doc/models/klarna-response-info.md) | Optional | - |
| `maestro` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `maestroUsa` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `mc` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `mealVoucherFr` | [`MealVoucherFrResponseInfo \| undefined`](../../doc/models/meal-voucher-fr-response-info.md) | Optional | - |
| `nyce` | [`AccelResponseInfo \| undefined`](../../doc/models/accel-response-info.md) | Optional | - |
| `paybybankPlaid` | [`PayByBankPlaidResponseInfo \| undefined`](../../doc/models/pay-by-bank-plaid-response-info.md) | Optional | - |
| `payme` | [`PayMeResponseInfo \| undefined`](../../doc/models/pay-me-response-info.md) | Optional | - |
| `paypal` | [`PayPalResponseInfo \| undefined`](../../doc/models/pay-pal-response-info.md) | Optional | - |
| `payto` | [`PayToResponseInfo \| undefined`](../../doc/models/pay-to-response-info.md) | Optional | - |
| `pulse` | [`AccelResponseInfo \| undefined`](../../doc/models/accel-response-info.md) | Optional | - |
| `reference` | `string \| undefined` | Optional | Your reference for the payment method. Supported characters a-z, A-Z, 0-9.<br><br>**Constraints**: *Maximum Length*: `150` |
| `sepadirectdebit` | [`SepaDirectDebitInfo \| undefined`](../../doc/models/sepa-direct-debit-info.md) | Optional | - |
| `shopperInteraction` | `string \| undefined` | Optional | The sales channel. |
| `sodexo` | [`SodexoResponseInfo \| undefined`](../../doc/models/sodexo-response-info.md) | Optional | - |
| `sofort` | [`SofortResponseInfo \| undefined`](../../doc/models/sofort-response-info.md) | Optional | - |
| `star` | [`AccelResponseInfo \| undefined`](../../doc/models/accel-response-info.md) | Optional | - |
| `storeIds` | `string[] \| undefined` | Optional | The unique identifier of the store for which to configure the payment method, if any. |
| `svs` | [`SvsResponseInfo \| undefined`](../../doc/models/svs-response-info.md) | Optional | - |
| `swish` | [`SwishResponseInfo \| undefined`](../../doc/models/swish-response-info.md) | Optional | - |
| `ticket` | [`TicketInfo \| undefined`](../../doc/models/ticket-info.md) | Optional | - |
| `twint` | [`TwintResponseInfo \| undefined`](../../doc/models/twint-response-info.md) | Optional | - |
| `type` | `string \| undefined` | Optional | Payment method [variant](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api). |
| `valuelink` | [`ValuelinkResponseInfo \| undefined`](../../doc/models/valuelink-response-info.md) | Optional | - |
| `verificationStatus` | [`VerificationStatus \| undefined`](../../doc/models/verification-status.md) | Optional | - |
| `vipps` | [`VippsResponseInfo \| undefined`](../../doc/models/vipps-response-info.md) | Optional | - |
| `visa` | [`AccelUpdateInfo \| undefined`](../../doc/models/accel-update-info.md) | Optional | - |
| `wechatpay` | [`WeChatPayPosResponseInfo \| undefined`](../../doc/models/we-chat-pay-pos-response-info.md) | Optional | - |
| `wechatpayPos` | [`WeChatPayPosResponseInfo \| undefined`](../../doc/models/we-chat-pay-pos-response-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ManagementPaymentMethod, ProcessingType, Type33 } from 'adyen';

const managementPaymentMethod: ManagementPaymentMethod = {
  id: 'id6',
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
    publicApiKey: 'publicApiKey4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  afterpayTouch: {
    supportEmail: 'supportEmail8',
    supportUrl: 'supportUrl4',
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
  allowed: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

