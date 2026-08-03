
# Meal Voucher Fr Info 1

Details to provide if `type` is **mealVoucher_FR**.

*This model accepts additional fields of type unknown.*

## Structure

`MealVoucherFrInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `conecsId` | `string` | Required | Meal Voucher conecsId. Format: digits only |
| `siret` | `string` | Required | Meal Voucher siret. Format: 14 digits.<br><br>**Constraints**: *Minimum Length*: `14`, *Maximum Length*: `14` |
| `subTypes` | `string[]` | Required | The list of additional payment methods. Allowed values: **mealVoucher_FR_endenred**, **mealVoucher_FR_groupeup**, **mealVoucher_FR_natixis**, **mealVoucher_FR_sodexo**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MealVoucherFrInfo1 } from 'adyenlib';

const mealVoucherFrInfo1: MealVoucherFrInfo1 = {
  conecsId: 'conecsId4',
  siret: 'siret0',
  subTypes: [
    'subTypes9'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

