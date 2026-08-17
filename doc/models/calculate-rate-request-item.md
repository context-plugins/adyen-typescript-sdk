
# Calculate Rate Request Item

The request parameters required to calculate an amount in a different currency.

## Structure

`CalculateRateRequestItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exchangeSide` | [`ExchangeSide2Enum`](../../doc/models/exchange-side-2-enum.md) | Required | The operation performed on the source amount. Possible values:<br><br>* **buy**<br>* **sell** |
| `sourceAmount` | [`Amount19`](../../doc/models/amount-19.md) | Required | An object specifying the currency and value for which you want to perform an exchange calculation. |
| `targetCurrency` | `string` | Required | The currency to which you want to convert the source amount. |
| `type` | [`RateType2Enum`](../../doc/models/rate-type-2-enum.md) | Required | The type of transaction. Possible values:<br><br>* **splitPayment**: for payments<br>* **splitRefund**: for refunds |

## Example

```ts
import {
  CalculateRateRequestItem,
  ExchangeSide2Enum,
  RateType2Enum,
} from 'adyen';

const calculateRateRequestItem: CalculateRateRequestItem = {
  exchangeSide: ExchangeSide2Enum.Buy,
  sourceAmount: {
    currency: 'currency8',
    value: BigInt(232),
  },
  targetCurrency: 'targetCurrency8',
  type: RateType2Enum.Transfer,
};
```

