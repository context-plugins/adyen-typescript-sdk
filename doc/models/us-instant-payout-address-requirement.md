
# US Instant Payout Address Requirement

## Structure

`USInstantPayoutAddressRequirement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | Specifies that you must provide complete street addresses for the party and counterParty for transactions greater than USD 3000. |
| `type` | `string` | Required, Constant | **usInstantPayoutAddressRequirement**<br><br>**Value**: `'usInstantPayoutAddressRequirement'` |

## Example

```ts
import { USInstantPayoutAddressRequirement } from 'adyen';

const uSInstantPayoutAddressRequirement: USInstantPayoutAddressRequirement = {
  type: 'usInstantPayoutAddressRequirement',
  description: 'description2',
};
```

