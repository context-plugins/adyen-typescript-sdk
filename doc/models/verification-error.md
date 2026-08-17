
# Verification Error

## Structure

`VerificationError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `capabilities` | [`CapabilityEnum[] \| undefined`](../../doc/models/capability-enum.md) | Optional | Contains the capabilities that the verification error applies to. |
| `code` | `string \| undefined` | Optional | The verification error code. |
| `message` | `string \| undefined` | Optional | A description of the error. |
| `remediatingActions` | [`RemediatingAction[] \| undefined`](../../doc/models/remediating-action.md) | Optional | Contains the actions that you can take to resolve the verification error. |
| `subErrors` | [`VerificationErrorRecursive[] \| undefined`](../../doc/models/verification-error-recursive.md) | Optional | Contains more granular information about the verification error. |
| `type` | [`Type212Enum \| undefined`](../../doc/models/type-212-enum.md) | Optional | The type of error.<br><br>Possible values:<br><br>* **invalidInput**<br>* **dataMissing**<br>* **pendingStatus**<br>* **dataReview** |

## Example

```ts
import { CapabilityEnum, Type212Enum, VerificationError } from 'adyen';

const verificationError: VerificationError = {
  capabilities: [
    CapabilityEnum.UseChargeCardCommercial,
    CapabilityEnum.WithdrawFromAtm
  ],
  code: 'code2',
  message: 'message4',
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
  subErrors: [
    {
      capabilities: [
        CapabilityEnum.Processing,
        CapabilityEnum.PayoutToTransferInstrument
      ],
      code: 'code2',
      message: 'message4',
      type: Type212Enum.InvalidInput,
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

