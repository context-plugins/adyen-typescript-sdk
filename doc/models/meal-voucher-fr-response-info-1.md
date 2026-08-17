
# Meal Voucher FR Response Info 1

**mealVoucher_FR** details

## Structure

`MealVoucherFRResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `conecsId` | `string \| undefined` | Optional | Meal Voucher conecsId. |
| `siret` | `string \| undefined` | Optional | Meal Voucher siret. |
| `subTypes` | `string[] \| undefined` | Optional | The list of additional payment methods. |

## Example

```ts
import { MealVoucherFRResponseInfo1 } from 'adyen';

const mealVoucherFRResponseInfo1: MealVoucherFRResponseInfo1 = {
  conecsId: 'conecsId2',
  siret: 'siret6',
  subTypes: [
    'subTypes3'
  ],
};
```

