
# Meal Voucher Fr Response Info 1

**mealVoucher_FR** details

*This model accepts additional fields of type unknown.*

## Structure

`MealVoucherFrResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `conecsId` | `string \| undefined` | Optional | Meal Voucher conecsId. |
| `siret` | `string \| undefined` | Optional | Meal Voucher siret. |
| `subTypes` | `string[] \| undefined` | Optional | The list of additional payment methods. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MealVoucherFrResponseInfo1 } from 'adyen';

const mealVoucherFrResponseInfo1: MealVoucherFrResponseInfo1 = {
  conecsId: 'conecsId0',
  siret: 'siret6',
  subTypes: [
    'subTypes5',
    'subTypes6'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

