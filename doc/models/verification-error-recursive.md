
# Verification Error Recursive

*This model accepts additional fields of type unknown.*

## Structure

`VerificationErrorRecursive`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `capabilities` | [`Capability[] \| undefined`](../../doc/models/capability.md) | Optional | Contains the capabilities that the verification error applies to. |
| `code` | `string \| undefined` | Optional | The verification error code. |
| `message` | `string \| undefined` | Optional | A description of the error. |
| `type` | [`Type21 \| undefined`](../../doc/models/type-21.md) | Optional | - |
| `remediatingActions` | [`RemediatingAction[] \| undefined`](../../doc/models/remediating-action.md) | Optional | Contains the actions that you can take to resolve the verification error. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Capability, Type21, VerificationErrorRecursive } from 'adyenlib';

const verificationErrorRecursive: VerificationErrorRecursive = {
  capabilities: [
    Capability.UseCardInRestrictedIndustries,
    Capability.UseCardInRestrictedCountriesConsumer
  ],
  code: 'code0',
  message: 'message2',
  type: Type21.DataMissing,
  remediatingActions: [
    {
      code: 'code4',
      message: 'message6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

