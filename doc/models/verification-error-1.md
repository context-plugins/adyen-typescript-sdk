
# Verification Error 1

*This model accepts additional fields of type unknown.*

## Structure

`VerificationError1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `capabilities` | [`Capability[] \| undefined`](../../doc/models/capability.md) | Optional | Contains key-value pairs that specify the actions that the legal entity can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing.The value is an object containing the settings for the capability. |
| `code` | `string \| undefined` | Optional | The general error code. |
| `message` | `string \| undefined` | Optional | The general error message. |
| `remediatingActions` | [`RemediatingAction[] \| undefined`](../../doc/models/remediating-action.md) | Optional | An object containing possible solutions to fix a verification error. |
| `subErrors` | [`VerificationErrorRecursive1[] \| undefined`](../../doc/models/verification-error-recursive-1.md) | Optional | An array containing more granular information about the cause of the verification error. |
| `type` | [`Type59 \| undefined`](../../doc/models/type-59.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Capability, Type59, VerificationError1 } from 'adyen';

const verificationError1: VerificationError1 = {
  capabilities: [
    Capability.AtmWithdrawalInRestrictedCountriesConsumer
  ],
  code: 'code6',
  message: 'message8',
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
  subErrors: [
    {
      capabilities: [
        Capability.Processing,
        Capability.PayoutToTransferInstrument
      ],
      code: 'code2',
      message: 'message4',
      type: Type59.DataReview,
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
    },
    {
      capabilities: [
        Capability.Processing,
        Capability.PayoutToTransferInstrument
      ],
      code: 'code2',
      message: 'message4',
      type: Type59.DataReview,
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
    },
    {
      capabilities: [
        Capability.Processing,
        Capability.PayoutToTransferInstrument
      ],
      code: 'code2',
      message: 'message4',
      type: Type59.DataReview,
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

