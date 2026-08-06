
# Address Requirement

*This model accepts additional fields of type unknown.*

## Structure

`AddressRequirement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | Specifies the required address related fields for a particular route. |
| `requiredAddressFields` | [`RequiredAddressField[] \| undefined`](../../doc/models/required-address-field.md) | Optional | List of address fields. |
| `type` | [`Type710`](../../doc/models/type-710.md) | Required | **addressRequirement** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AddressRequirement, RequiredAddressField, Type710 } from 'adyen';

const addressRequirement: AddressRequirement = {
  type: Type710.AddressRequirement,
  description: 'description2',
  requiredAddressFields: [
    RequiredAddressField.Country,
    RequiredAddressField.City,
    RequiredAddressField.StateOrProvince
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

