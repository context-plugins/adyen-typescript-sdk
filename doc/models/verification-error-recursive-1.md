
# Verification Error Recursive 1

## Structure

`VerificationErrorRecursive1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `capabilities` | [`CapabilityEnum[] \| undefined`](../../doc/models/capability-enum.md) | Optional | Contains key-value pairs that specify the actions that the legal entity can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing.The value is an object containing the settings for the capability. |
| `code` | `string \| undefined` | Optional | The general error code. |
| `message` | `string \| undefined` | Optional | The general error message. |
| `type` | [`Type512Enum \| undefined`](../../doc/models/type-512-enum.md) | Optional | The type of error.<br><br>Possible values:<br><br>* **invalidInput**<br>* **dataMissing**<br>* **pendingStatus**<br>* **rejected**<br>* **dataReview** |
| `remediatingActions` | [`RemediatingAction[] \| undefined`](../../doc/models/remediating-action.md) | Optional | An object containing possible solutions to fix a verification error. |

## Example

```ts
import {
  CapabilityEnum,
  Type512Enum,
  VerificationErrorRecursive1,
} from 'adyen';

const verificationErrorRecursive1: VerificationErrorRecursive1 = {
  capabilities: [
    CapabilityEnum.ReceiveFromTransferInstrument
  ],
  code: 'code6',
  message: 'message8',
  type: Type512Enum.InvalidInput,
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
};
```

