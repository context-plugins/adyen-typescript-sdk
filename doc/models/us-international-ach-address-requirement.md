
# US International Ach Address Requirement

## Structure

`USInternationalAchAddressRequirement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | Specifies that you must provide a complete street address for International ACH (IAT) transactions. |
| `type` | `string` | Required, Constant | **usInternationalAchAddressRequirement**<br><br>**Value**: `'usInternationalAchAddressRequirement'` |

## Example

```ts
import { USInternationalAchAddressRequirement } from 'adyen';

const uSInternationalAchAddressRequirement: USInternationalAchAddressRequirement = {
  type: 'usInternationalAchAddressRequirement',
  description: 'description2',
};
```

