
# Verification Error

*This model accepts additional fields of type unknown.*

## Structure

`VerificationError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `capabilities` | [`Capability[] \| undefined`](../../doc/models/capability.md) | Optional | Contains the capabilities that the verification error applies to. |
| `code` | `string \| undefined` | Optional | The verification error code. |
| `message` | `string \| undefined` | Optional | A description of the error. |
| `remediatingActions` | [`RemediatingAction[] \| undefined`](../../doc/models/remediating-action.md) | Optional | Contains the actions that you can take to resolve the verification error. |
| `subErrors` | [`VerificationErrorRecursive[] \| undefined`](../../doc/models/verification-error-recursive.md) | Optional | Contains more granular information about the verification error. |
| `type` | [`Type21 \| undefined`](../../doc/models/type-21.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Capability, Type21, VerificationError } from 'adyenlib';

const verificationError: VerificationError = {
  capabilities: [
    Capability.UseChargeCardCommercial,
    Capability.WithdrawFromAtm
  ],
  code: 'code2',
  message: 'message4',
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
    },
    {
      code: 'code4',
      message: 'message6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  subErrors: [
    {
      capabilities: [
        Capability.Processing,
        Capability.PayoutToTransferInstrument
      ],
      code: 'code2',
      message: 'message4',
      type: Type21.InvalidInput,
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
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

