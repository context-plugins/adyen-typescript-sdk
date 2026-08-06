
# Patchable Amount Dto

Required if `type` is **business**, **assetSale**, **gamblingWinnings** or **inheritance**.

For `type` **business**, provide the annual turn over of the business. For `type` **assetSale**, **gamblingWinnings** or **inheritance**, provide the amount of the funds.

*This model accepts additional fields of type unknown.*

## Structure

`PatchableAmountDto`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string \| undefined` | Optional | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). |
| `value` | `bigint \| undefined` | Optional | The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PatchableAmountDto } from 'adyen';

const patchableAmountDto: PatchableAmountDto = {
  currency: 'currency8',
  value: BigInt(174),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

