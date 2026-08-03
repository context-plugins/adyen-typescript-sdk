
# Verification Deadline

*This model accepts additional fields of type unknown.*

## Structure

`VerificationDeadline`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `capabilities` | [`Capability[]`](../../doc/models/capability.md) | Required, Read-only | The names of the capabilities to be disallowed. |
| `entityIds` | `string[] \| undefined` | Optional, Read-only | The unique identifiers of the bank account(s) that the deadline applies to |
| `expiresAt` | `string` | Required, Read-only | The date that verification is due by before capabilities are disallowed. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Capability, VerificationDeadline } from 'adyenlib';

const verificationDeadline: VerificationDeadline = {
  capabilities: [
    Capability.AcceptTransactionInRestrictedIndustriesCommercial,
    Capability.AcceptTransactionInRestrictedIndustries,
    Capability.AcceptTransactionInRestrictedCountriesConsumer
  ],
  expiresAt: '2016-03-13T12:52:32.123Z',
  entityIds: [
    'entityIds1',
    'entityIds2',
    'entityIds3'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

