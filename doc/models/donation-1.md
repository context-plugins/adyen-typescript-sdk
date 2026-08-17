
# Donation 1

The object that contains the details of the donation.

## Structure

`Donation1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes/). |
| `donationType` | `string \| undefined` | Optional | The [type of donation](https://docs.adyen.com/online-payments/donations/#donation-types).<br><br>Possible values:<br><br>* **roundup**: a donation where the original transaction amount is rounded up as a donation.<br>* **fixedAmounts**: a donation where you show fixed donations amounts that the shopper can select from. |
| `maxRoundupAmount` | `bigint \| undefined` | Optional | The maximum amount a transaction can be rounded up to make a donation. This field is only present when `donationType` is **roundup**. |
| `type` | `string` | Required | The [type of donation](https://docs.adyen.com/online-payments/donations/#donation-types).<br><br>Possible values:<br><br>* **roundup**: a donation where the original transaction amount is rounded up as a donation.<br>* **fixedAmounts**: a donation where you show fixed donation amounts that the shopper can select from. |
| `values` | `bigint[] \| undefined` | Optional | The fixed donation amounts in [minor units](https://docs.adyen.com/development-resources/currency-codes//#minor-units). This field is only present when `donationType` is **fixedAmounts**. |

## Example

```ts
import { Donation1 } from 'adyen';

const donation1: Donation1 = {
  currency: 'currency0',
  type: 'type0',
  donationType: 'donationType2',
  maxRoundupAmount: BigInt(60),
  values: [
    BigInt(8),
    BigInt(7),
    BigInt(6)
  ],
};
```

