
# Calculate Rate Response Item

The response parameters returned when you calculate an amount in a different currency.

## Structure

`CalculateRateResponseItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `appliedExchangeRate` | `number \| undefined` | Optional | The exchange rate to convert the source currency to the target currency. This includes Adyen's markup. |
| `exchangeSide` | `string \| undefined` | Optional | The operation performed on the source amount. Possible values:<br><br>* **buy**<br>* **sell** |
| `sourceAmount` | [`Amount22 \| undefined`](../../doc/models/amount-22.md) | Optional | The currency of the amount you converted (the source amount). |
| `targetAmount` | [`Amount34 \| undefined`](../../doc/models/amount-34.md) | Optional | An object specifying the currency and value to which you want to convert the source amount (the target amount). |
| `type` | `string \| undefined` | Optional | The type of transaction. Possible values:<br><br>* **splitPayment**: for payments<br>* **splitRefund**: for refunds |

## Example

```ts
import { CalculateRateResponseItem } from 'adyen';

const calculateRateResponseItem: CalculateRateResponseItem = {
  appliedExchangeRate: 168.82,
  exchangeSide: 'exchangeSide4',
  sourceAmount: {
    currency: 'currency8',
    value: BigInt(232),
  },
  targetAmount: {
    currency: 'currency8',
    value: BigInt(168),
  },
  type: 'type6',
};
```

