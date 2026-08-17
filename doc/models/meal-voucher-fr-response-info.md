
# Meal Voucher FR Response Info

## Structure

`MealVoucherFRResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `conecsId` | `string \| undefined` | Optional | Meal Voucher conecsId. |
| `siret` | `string \| undefined` | Optional | Meal Voucher siret. |
| `subTypes` | `string[] \| undefined` | Optional | The list of additional payment methods. |

## Example

```ts
import { MealVoucherFRResponseInfo } from 'adyen';

const mealVoucherFRResponseInfo: MealVoucherFRResponseInfo = {
  conecsId: 'conecsId2',
  siret: 'siret8',
  subTypes: [
    'subTypes7'
  ],
};
```

