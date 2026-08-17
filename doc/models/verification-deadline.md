
# Verification Deadline

## Structure

`VerificationDeadline`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `capabilities` | [`CapabilityEnum[]`](../../doc/models/capability-enum.md) | Required, Read-only | The names of the capabilities to be disallowed. |
| `entityIds` | `string[] \| undefined` | Optional, Read-only | The unique identifiers of the bank account(s) that the deadline applies to |
| `expiresAt` | `string` | Required, Read-only | The date that verification is due by before capabilities are disallowed. |

## Example

```ts
import { VerificationDeadline } from 'adyen';

const verificationDeadline: VerificationDeadline = {
  capabilities: [],
  expiresAt: '',
};
```

