
# Us Instant Payout Address Requirement

*This model accepts additional fields of type unknown.*

## Structure

`UsInstantPayoutAddressRequirement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | Specifies that you must provide complete street addresses for the party and counterParty for transactions greater than USD 3000. |
| `type` | [`Type373`](../../doc/models/type-373.md) | Required | **usInstantPayoutAddressRequirement** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Type373, UsInstantPayoutAddressRequirement } from 'adyen';

const usInstantPayoutAddressRequirement: UsInstantPayoutAddressRequirement = {
  type: Type373.UsInstantPayoutAddressRequirement,
  description: 'description6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

