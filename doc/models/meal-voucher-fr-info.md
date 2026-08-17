
# Meal Voucher FR Info

## Structure

`MealVoucherFRInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `conecsId` | `string` | Required | Meal Voucher conecsId. Format: digits only |
| `siret` | `string` | Required | Meal Voucher siret. Format: 14 digits.<br><br>**Constraints**: *Minimum Length*: `14`, *Maximum Length*: `14` |
| `subTypes` | `string[]` | Required | The list of additional payment methods. Allowed values: **mealVoucher_FR_endenred**, **mealVoucher_FR_groupeup**, **mealVoucher_FR_natixis**, **mealVoucher_FR_sodexo**. |

## Example

```ts
import { MealVoucherFRInfo } from 'adyen';

const mealVoucherFRInfo: MealVoucherFRInfo = {
  conecsId: 'conecsId6',
  siret: 'siret8',
  subTypes: [
    'subTypes1'
  ],
};
```

