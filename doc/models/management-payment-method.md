
# Management Payment Method

## Structure

`ManagementPaymentMethod`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accel` | [`AccelResponseInfo1 \| undefined`](../../doc/models/accel-response-info-1.md) | Optional | **accel** details |
| `affirm` | [`AffirmResponseInfo1 \| undefined`](../../doc/models/affirm-response-info-1.md) | Optional | *affirm** details |
| `afterpayTouch` | [`AfterpayTouchResponseInfo1 \| undefined`](../../doc/models/afterpay-touch-response-info-1.md) | Optional | **afterpaytouch** details |
| `alipayPlus` | [`AlipayPlusResponseInfo1 \| undefined`](../../doc/models/alipay-plus-response-info-1.md) | Optional | **alipay_plus** details |
| `allowed` | `boolean \| undefined` | Optional | Indicates whether receiving payments is allowed. This value is set to **true** by Adyen after screening your merchant account. |
| `amex` | [`AmexResponseInfo1 \| undefined`](../../doc/models/amex-response-info-1.md) | Optional | **amex** details |
| `applePay` | [`ApplePayResponseInfo1 \| undefined`](../../doc/models/apple-pay-response-info-1.md) | Optional | **applepay** details |
| `associatedPaymentMethods` | [`AssociatedPaymentMethod[] \| undefined`](../../doc/models/associated-payment-method.md) | Optional | Payment methods that were also updated as part of an associated transition. |
| `bcmc` | [`BcmcResponseInfo1 \| undefined`](../../doc/models/bcmc-response-info-1.md) | Optional | **bcmc** (Bancontact) details |
| `businessLineId` | `string \| undefined` | Optional | The unique identifier of the business line. Required if you are a [platform model](https://docs.adyen.com/platforms). |
| `carnet` | [`CarnetResponseInfo1 \| undefined`](../../doc/models/carnet-response-info-1.md) | Optional | **carnet** details |
| `cartesBancaires` | [`CartesBancairesResponseInfo1 \| undefined`](../../doc/models/cartes-bancaires-response-info-1.md) | Optional | **cartesbancaire** details |
| `clearpay` | [`ClearpayResponseInfo1 \| undefined`](../../doc/models/clearpay-response-info-1.md) | Optional | **clearpay** details |
| `countries` | `string[] \| undefined` | Optional | The list of countries where a payment method is available. By default, all countries supported by the payment method. |
| `cup` | [`CupResponseInfo1 \| undefined`](../../doc/models/cup-response-info-1.md) | Optional | **cup** (China Union Pay) details |
| `currencies` | `string[] \| undefined` | Optional | The list of currencies that a payment method supports. By default, all currencies supported by the payment method. |
| `customRoutingFlags` | `string[] \| undefined` | Optional | The list of custom routing flags to route payment to the intended acquirer. |
| `diners` | [`DinersResponseInfo1 \| undefined`](../../doc/models/diners-response-info-1.md) | Optional | **diners** details |
| `discover` | [`DiscoverResponseInfo1 \| undefined`](../../doc/models/discover-response-info-1.md) | Optional | **discover**. details |
| `eftDirectdebitCA` | [`EFTDirectDebitCAResponseInfo1 \| undefined`](../../doc/models/eft-direct-debit-ca-response-info-1.md) | Optional | **eft_directdebit_CA** (EFT PAD) details |
| `eftposAustralia` | [`EftPosAustraliaResponseInfo1 \| undefined`](../../doc/models/eft-pos-australia-response-info-1.md) | Optional | **eftpos_australia** details |
| `enabled` | `boolean \| undefined` | Optional | Indicates whether the payment method is enabled (**true**) or disabled (**false**). |
| `girocard` | [`GirocardResponseInfo1 \| undefined`](../../doc/models/girocard-response-info-1.md) | Optional | **girocard** details |
| `givex` | [`GivexResponseInfo1 \| undefined`](../../doc/models/givex-response-info-1.md) | Optional | **givex** details |
| `googlePay` | [`GooglePayResponseInfo1 \| undefined`](../../doc/models/google-pay-response-info-1.md) | Optional | **googlepay** details |
| `id` | `string` | Required | The identifier of the resource. |
| `ideal` | [`IdealResponseInfo1 \| undefined`](../../doc/models/ideal-response-info-1.md) | Optional | **ideal** details |
| `interacCard` | [`InteracCardResponseInfo1 \| undefined`](../../doc/models/interac-card-response-info-1.md) | Optional | **interac_card** details |
| `jcb` | [`JCBResponseInfo1 \| undefined`](../../doc/models/jcb-response-info-1.md) | Optional | **jcb** details |
| `klarna` | [`KlarnaResponseInfo1 \| undefined`](../../doc/models/klarna-response-info-1.md) | Optional | **klarna** or its variant details |
| `maestro` | [`MaestroResponseInfo1 \| undefined`](../../doc/models/maestro-response-info-1.md) | Optional | **maestro** details |
| `maestroUsa` | [`MaestroUSAResponseInfo1 \| undefined`](../../doc/models/maestro-usa-response-info-1.md) | Optional | Details to provide if `type` is **maestro_usa** details |
| `mc` | [`MCResponseInfo1 \| undefined`](../../doc/models/mc-response-info-1.md) | Optional | **mc** details |
| `mealVoucherFR` | [`MealVoucherFRResponseInfo1 \| undefined`](../../doc/models/meal-voucher-fr-response-info-1.md) | Optional | **mealVoucher_FR** details |
| `nyce` | [`NyceResponseInfo1 \| undefined`](../../doc/models/nyce-response-info-1.md) | Optional | **nyce** details |
| `paybybankPlaid` | [`PayByBankPlaidResponseInfo1 \| undefined`](../../doc/models/pay-by-bank-plaid-response-info-1.md) | Optional | **paybybank_plaid** details |
| `payme` | [`PayMeResponseInfo1 \| undefined`](../../doc/models/pay-me-response-info-1.md) | Optional | **payme** details |
| `paypal` | [`PayPalResponseInfo1 \| undefined`](../../doc/models/pay-pal-response-info-1.md) | Optional | **paypal** details |
| `payto` | [`PayToResponseInfo1 \| undefined`](../../doc/models/pay-to-response-info-1.md) | Optional | **payto** details |
| `pulse` | [`PulseResponseInfo2 \| undefined`](../../doc/models/pulse-response-info-2.md) | Optional | **pulse** details |
| `reference` | `string \| undefined` | Optional | Your reference for the payment method. Supported characters a-z, A-Z, 0-9.<br><br>**Constraints**: *Maximum Length*: `150` |
| `sepadirectdebit` | [`SepaDirectDebitResponseInfo2 \| undefined`](../../doc/models/sepa-direct-debit-response-info-2.md) | Optional | **sepadirectdebit** details |
| `shopperInteraction` | `string \| undefined` | Optional | The sales channel. |
| `sodexo` | [`SodexoResponseInfo2 \| undefined`](../../doc/models/sodexo-response-info-2.md) | Optional | **sodexo** details |
| `sofort` | [`SofortResponseInfo2 \| undefined`](../../doc/models/sofort-response-info-2.md) | Optional | Sofort details. |
| `star` | [`StarResponseInfo2 \| undefined`](../../doc/models/star-response-info-2.md) | Optional | **star** details |
| `storeIds` | `string[] \| undefined` | Optional | The unique identifier of the store for which to configure the payment method, if any. |
| `svs` | [`SvsResponseInfo2 \| undefined`](../../doc/models/svs-response-info-2.md) | Optional | **svs** details |
| `swish` | [`SwishResponseInfo2 \| undefined`](../../doc/models/swish-response-info-2.md) | Optional | **swish** or its variant details |
| `ticket` | [`TicketResponseInfo2 \| undefined`](../../doc/models/ticket-response-info-2.md) | Optional | **ticket** (Edenred Brazil) details |
| `twint` | [`TwintResponseInfo2 \| undefined`](../../doc/models/twint-response-info-2.md) | Optional | **twint** details |
| `type` | `string \| undefined` | Optional | Payment method [variant](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api). |
| `valuelink` | [`ValuelinkResponseInfo2 \| undefined`](../../doc/models/valuelink-response-info-2.md) | Optional | **valuelink** details |
| `verificationStatus` | [`VerificationStatusEnum \| undefined`](../../doc/models/verification-status-enum.md) | Optional | Payment method status. Possible values:<br><br>* **valid**<br>* **pending**<br>* **invalid**<br>* **rejected** |
| `vipps` | [`VippsResponseInfo2 \| undefined`](../../doc/models/vipps-response-info-2.md) | Optional | **vipps** details |
| `visa` | [`VisaResponseInfo2 \| undefined`](../../doc/models/visa-response-info-2.md) | Optional | **visa** details |
| `wechatpay` | [`WeChatPayResponseInfo2 \| undefined`](../../doc/models/we-chat-pay-response-info-2.md) | Optional | **wechatpay** details |
| `wechatpayPos` | [`WeChatPayPosResponseInfo2 \| undefined`](../../doc/models/we-chat-pay-pos-response-info-2.md) | Optional | **wechatpay_pos** details |

## Example

```ts
import {
  ManagementPaymentMethod,
  ProcessingTypeEnum,
  Type8Enum,
} from 'adyen';

const managementPaymentMethod: ManagementPaymentMethod = {
  id: 'id6',
  accel: {
    processingType: ProcessingTypeEnum.Billpay,
    transactionDescription: {
      doingBusinessAsName: 'doingBusinessAsName0',
      type: Type8Enum.Fixed,
    },
  },
  affirm: {
    publicApiKey: 'publicApiKey4',
  },
  afterpayTouch: {
    supportEmail: 'supportEmail8',
    supportUrl: 'supportUrl4',
  },
  alipayPlus: {
    settlementCurrencyCode: 'settlementCurrencyCode0',
  },
  allowed: false,
};
```

