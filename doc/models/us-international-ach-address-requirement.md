
# Us International Ach Address Requirement

*This model accepts additional fields of type unknown.*

## Structure

`UsInternationalAchAddressRequirement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | Specifies that you must provide a complete street address for International ACH (IAT) transactions. |
| `type` | [`Type383`](../../doc/models/type-383.md) | Required | **usInternationalAchAddressRequirement** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Type383, UsInternationalAchAddressRequirement } from 'adyenlib';

const usInternationalAchAddressRequirement: UsInternationalAchAddressRequirement = {
  type: Type383.UsInternationalAchAddressRequirement,
  description: 'description4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

