
# Split Configuration Rule

## Structure

`SplitConfigurationRule`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardRegion` | [`CardRegionEnum \| undefined`](../../doc/models/card-region-enum.md) | Optional | The card region condition that determines whether the [split logic](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/splitConfigurations#request-rules-splitLogic) applies to the transaction.<br><br>> This condition is in pilot phase, and not yet available for all platforms.<br><br>Possible values:<br><br>* **domestic**: The card issuer and the store where the transaction is processed are registered in the same country.<br>* **international**: The card issuer and the store where the transaction is processed are registered in different countries or regions. Includes all **interRegional** and **intraRegional** transactions.<br>* **interRegional**: The card issuer and the store where the transaction is processed are registered in different regions.<br>* **intraRegional**: The card issuer and the store where the transaction is processed are registered in different countries, but in the same region.<br>* **intraEEA**: The card issuer and the store where the transaction is processed are registered in different countries, but in the European Economic Area (EEA).<br>* **ANY**: Applies to all transactions, regardless of the processing and issuing country/region. |
| `currency` | `string` | Required | The currency condition that defines whether the split logic applies.<br>Its value must be a three-character [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217). |
| `fundingSource` | [`FundingSource1Enum`](../../doc/models/funding-source-1-enum.md) | Required | The funding source of the payment method.<br><br>Possible values:<br><br>* **credit**<br>* **debit**<br>* **prepaid**<br>* **deferred_debit**<br>* **charged**<br>* **ANY** |
| `paymentMethod` | `string` | Required | The payment method condition that defines whether the split logic applies.<br><br>Possible values:<br><br>* [Payment method variant](https://docs.adyen.com/development-resources/paymentmethodvariant): Apply the split logic for a specific payment method.<br>* **ANY**: Apply the split logic for all available payment methods. |
| `ruleId` | `string \| undefined` | Optional, Read-only | The unique identifier of the split configuration rule. |
| `shopperInteraction` | [`ShopperInteraction11Enum`](../../doc/models/shopper-interaction-11-enum.md) | Required | The sales channel condition that defines whether the split logic applies.<br><br>Possible values:<br><br>* **Ecommerce**: Online transactions where the cardholder is present.<br>* **ContAuth**: Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer).<br>* **Moto**: Mail-order and telephone-order transactions where the customer is in contact with the merchant via email or telephone.<br>* **POS**: Point-of-sale transactions where the customer is physically present to make a payment using a secure payment terminal.<br>* **ANY**: All sales channels. |
| `splitLogic` | [`SplitConfigurationLogic2`](../../doc/models/split-configuration-logic-2.md) | Required | Contains the split logic that is applied if the rule conditions are met. |

## Example

```ts
import {
  AcquiringFeesEnum,
  AdyenCommissionEnum,
  AdyenFeesEnum,
  AdyenMarkupEnum,
  CardRegionEnum,
  FundingSource1Enum,
  ShopperInteraction11Enum,
  SplitConfigurationRule,
} from 'adyen';

const splitConfigurationRule: SplitConfigurationRule = {
  currency: 'currency6',
  fundingSource: FundingSource1Enum.Prepaid,
  paymentMethod: 'paymentMethod6',
  shopperInteraction: ShopperInteraction11Enum.Moto,
  splitLogic: {
    commission: {
      fixedAmount: BigInt(112),
      variablePercentage: BigInt(52),
    },
    acquiringFees: AcquiringFeesEnum.DeductFromLiableAccount,
    additionalCommission: {
      balanceAccountId: 'balanceAccountId0',
      fixedAmount: BigInt(100),
      variablePercentage: BigInt(64),
    },
    adyenCommission: AdyenCommissionEnum.DeductFromLiableAccount,
    adyenFees: AdyenFeesEnum.DeductFromLiableAccount,
    adyenMarkup: AdyenMarkupEnum.DeductFromLiableAccount,
  },
  cardRegion: CardRegionEnum.International,
};
```

