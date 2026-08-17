
# Address Requirement

## Structure

`AddressRequirement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | Specifies the required address related fields for a particular route. |
| `requiredAddressFields` | [`RequiredAddressFieldEnum[] \| undefined`](../../doc/models/required-address-field-enum.md) | Optional | List of address fields. |
| `type` | `string` | Required, Constant | **addressRequirement**<br><br>**Value**: `'addressRequirement'` |

## Example

```ts
import { AddressRequirement, RequiredAddressFieldEnum } from 'adyen';

const addressRequirement: AddressRequirement = {
  type: 'addressRequirement',
  description: 'description2',
  requiredAddressFields: [
    RequiredAddressFieldEnum.Country,
    RequiredAddressFieldEnum.City,
    RequiredAddressFieldEnum.StateOrProvince
  ],
};
```

