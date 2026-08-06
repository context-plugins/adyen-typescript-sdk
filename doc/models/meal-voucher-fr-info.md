
# Meal Voucher Fr Info

*This model accepts additional fields of type unknown.*

## Structure

`MealVoucherFrInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `conecsId` | `string` | Required | Meal Voucher conecsId. Format: digits only |
| `siret` | `string` | Required | Meal Voucher siret. Format: 14 digits.<br><br>**Constraints**: *Minimum Length*: `14`, *Maximum Length*: `14` |
| `subTypes` | `string[]` | Required | The list of additional payment methods. Allowed values: **mealVoucher_FR_endenred**, **mealVoucher_FR_groupeup**, **mealVoucher_FR_natixis**, **mealVoucher_FR_sodexo**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MealVoucherFrInfo } from 'adyen';

const mealVoucherFrInfo: MealVoucherFrInfo = {
  conecsId: 'conecsId0',
  siret: 'siret4',
  subTypes: [
    'subTypes5',
    'subTypes6',
    'subTypes7'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

