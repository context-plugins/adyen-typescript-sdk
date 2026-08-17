
# Verification Error 1

## Structure

`VerificationError1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `capabilities` | [`CapabilityEnum[] \| undefined`](../../doc/models/capability-enum.md) | Optional | Contains key-value pairs that specify the actions that the legal entity can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing.The value is an object containing the settings for the capability. |
| `code` | `string \| undefined` | Optional | The general error code. |
| `message` | `string \| undefined` | Optional | The general error message. |
| `remediatingActions` | [`RemediatingAction[] \| undefined`](../../doc/models/remediating-action.md) | Optional | An object containing possible solutions to fix a verification error. |
| `subErrors` | [`VerificationErrorRecursive1[] \| undefined`](../../doc/models/verification-error-recursive-1.md) | Optional | An array containing more granular information about the cause of the verification error. |
| `type` | [`Type512Enum \| undefined`](../../doc/models/type-512-enum.md) | Optional | The type of error.<br><br>Possible values:<br><br>* **invalidInput**<br>* **dataMissing**<br>* **pendingStatus**<br>* **rejected**<br>* **dataReview** |

## Example

```ts
import { CapabilityEnum, Type512Enum, VerificationError1 } from 'adyen';

const verificationError1: VerificationError1 = {
  capabilities: [
    CapabilityEnum.AtmWithdrawalInRestrictedCountriesConsumer
  ],
  code: 'code6',
  message: 'message8',
  remediatingActions: [
    {
      code: 'code4',
      message: 'message6',
    },
    {
      code: 'code4',
      message: 'message6',
    }
  ],
  subErrors: [
    {
      capabilities: [
        CapabilityEnum.Processing,
        CapabilityEnum.PayoutToTransferInstrument
      ],
      code: 'code2',
      message: 'message4',
      type: Type512Enum.DataReview,
      remediatingActions: [
        {
          code: 'code4',
          message: 'message6',
        },
        {
          code: 'code4',
          message: 'message6',
        },
        {
          code: 'code4',
          message: 'message6',
        }
      ],
    },
    {
      capabilities: [
        CapabilityEnum.Processing,
        CapabilityEnum.PayoutToTransferInstrument
      ],
      code: 'code2',
      message: 'message4',
      type: Type512Enum.DataReview,
      remediatingActions: [
        {
          code: 'code4',
          message: 'message6',
        },
        {
          code: 'code4',
          message: 'message6',
        },
        {
          code: 'code4',
          message: 'message6',
        }
      ],
    },
    {
      capabilities: [
        CapabilityEnum.Processing,
        CapabilityEnum.PayoutToTransferInstrument
      ],
      code: 'code2',
      message: 'message4',
      type: Type512Enum.DataReview,
      remediatingActions: [
        {
          code: 'code4',
          message: 'message6',
        },
        {
          code: 'code4',
          message: 'message6',
        },
        {
          code: 'code4',
          message: 'message6',
        }
      ],
    }
  ],
};
```

