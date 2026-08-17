
# Meal Voucher FR Info 1

Details to provide if `type` is **mealVoucher_FR**.

## Structure

`MealVoucherFRInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `conecsId` | `string` | Required | Meal Voucher conecsId. Format: digits only |
| `siret` | `string` | Required | Meal Voucher siret. Format: 14 digits.<br><br>**Constraints**: *Minimum Length*: `14`, *Maximum Length*: `14` |
| `subTypes` | `string[]` | Required | The list of additional payment methods. Allowed values: **mealVoucher_FR_endenred**, **mealVoucher_FR_groupeup**, **mealVoucher_FR_natixis**, **mealVoucher_FR_sodexo**. |

## Example

```ts
import { MealVoucherFRInfo1 } from 'adyen';

const mealVoucherFRInfo1: MealVoucherFRInfo1 = {
  conecsId: 'conecsId2',
  siret: 'siret2',
  subTypes: [
    'subTypes7'
  ],
};
```

