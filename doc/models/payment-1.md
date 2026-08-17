
# Payment 1

## Structure

`Payment1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contactlessCurrency` | `string \| undefined` | Optional | The default currency for contactless payments on the payment terminal, in three-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code format.<br><br>Contact Adyen before you update this setting for the first time. To enable you to change the contactless currency, we first need to check if you meet the compliance requirements.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `hideMinorUnitsInCurrencies` | `string[] \| undefined` | Optional | Hides the minor units for the listed [ISO currency codes](https://en.wikipedia.org/wiki/ISO_4217). |

## Example

```ts
import { Payment1 } from 'adyen';

const payment1: Payment1 = {
  contactlessCurrency: 'contactlessCurrency6',
  hideMinorUnitsInCurrencies: [
    'hideMinorUnitsInCurrencies4',
    'hideMinorUnitsInCurrencies5',
    'hideMinorUnitsInCurrencies6'
  ],
};
```

