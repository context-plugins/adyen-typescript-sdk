
# Account Supporting Entity Capability

*This model accepts additional fields of type unknown.*

## Structure

`AccountSupportingEntityCapability`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allowed` | `boolean \| undefined` | Optional, Read-only | Indicates whether the supporting entity capability is allowed. Adyen sets this to **true** if the verification is successful and the account holder is permitted to use the capability. |
| `allowedLevel` | [`AllowedLevel \| undefined`](../../doc/models/allowed-level.md) | Optional, Read-only | - |
| `enabled` | `boolean \| undefined` | Optional | Indicates whether the capability is enabled. If **false**, the capability is temporarily disabled for the account holder. |
| `id` | `string \| undefined` | Optional, Read-only | The ID of the supporting entity. |
| `requested` | `boolean \| undefined` | Optional | Indicates whether the capability is requested. To check whether the account holder is permitted to use the capability, refer to the `allowed` field. |
| `requestedLevel` | [`RequestedLevel \| undefined`](../../doc/models/requested-level.md) | Optional | - |
| `verificationStatus` | [`VerificationStatus \| undefined`](../../doc/models/verification-status.md) | Optional, Read-only | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AccountSupportingEntityCapability, AllowedLevel } from 'adyenlib';

const accountSupportingEntityCapability: AccountSupportingEntityCapability = {
  allowed: false,
  allowedLevel: AllowedLevel.High,
  enabled: false,
  id: 'id2',
  requested: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

