
# Verification Error Recursive 1

*This model accepts additional fields of type unknown.*

## Structure

`VerificationErrorRecursive1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `capabilities` | [`Capability[] \| undefined`](../../doc/models/capability.md) | Optional | Contains key-value pairs that specify the actions that the legal entity can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing.The value is an object containing the settings for the capability. |
| `code` | `string \| undefined` | Optional | The general error code. |
| `message` | `string \| undefined` | Optional | The general error message. |
| `type` | [`Type59 \| undefined`](../../doc/models/type-59.md) | Optional | - |
| `remediatingActions` | [`RemediatingAction[] \| undefined`](../../doc/models/remediating-action.md) | Optional | An object containing possible solutions to fix a verification error. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Capability, Type59, VerificationErrorRecursive1 } from 'adyenlib';

const verificationErrorRecursive1: VerificationErrorRecursive1 = {
  capabilities: [
    Capability.ReceiveFromTransferInstrument
  ],
  code: 'code6',
  message: 'message8',
  type: Type59.InvalidInput,
  remediatingActions: [
    {
      code: 'code4',
      message: 'message6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
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

