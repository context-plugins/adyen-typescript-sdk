
# Meal Voucher Fr Response Info

*This model accepts additional fields of type unknown.*

## Structure

`MealVoucherFrResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `conecsId` | `string \| undefined` | Optional | Meal Voucher conecsId. |
| `siret` | `string \| undefined` | Optional | Meal Voucher siret. |
| `subTypes` | `string[] \| undefined` | Optional | The list of additional payment methods. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MealVoucherFrResponseInfo } from 'adyen';

const mealVoucherFrResponseInfo: MealVoucherFrResponseInfo = {
  conecsId: 'conecsId6',
  siret: 'siret8',
  subTypes: [
    'subTypes1',
    'subTypes2',
    'subTypes3'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

