
# Amount Adjustment

## Structure

`AmountAdjustment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount17 \| undefined`](../../doc/models/amount-17.md) | Optional | The adjustment amount. |
| `amountAdjustmentType` | [`AmountAdjustmentTypeEnum \| undefined`](../../doc/models/amount-adjustment-type-enum.md) | Optional | The type of markup that is applied to an authorised payment.<br><br>Possible values: **exchange**, **forexMarkup**, **authHoldReserve**, **atmMarkup**. |
| `basepoints` | `number \| undefined` | Optional | The basepoints associated with the applied markup. |

## Example

```ts
import { AmountAdjustment, AmountAdjustmentTypeEnum } from 'adyen';

const amountAdjustment: AmountAdjustment = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  amountAdjustmentType: AmountAdjustmentTypeEnum.Exchange,
  basepoints: 76,
};
```

