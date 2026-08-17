
# Verification Error Recursive

## Structure

`VerificationErrorRecursive`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `capabilities` | [`CapabilityEnum[] \| undefined`](../../doc/models/capability-enum.md) | Optional | Contains the capabilities that the verification error applies to. |
| `code` | `string \| undefined` | Optional | The verification error code. |
| `message` | `string \| undefined` | Optional | A description of the error. |
| `type` | [`Type212Enum \| undefined`](../../doc/models/type-212-enum.md) | Optional | The type of error.<br><br>Possible values:<br><br>* **invalidInput**<br>* **dataMissing**<br>* **pendingStatus**<br>* **dataReview** |
| `remediatingActions` | [`RemediatingAction[] \| undefined`](../../doc/models/remediating-action.md) | Optional | Contains the actions that you can take to resolve the verification error. |

## Example

```ts
import {
  CapabilityEnum,
  Type212Enum,
  VerificationErrorRecursive,
} from 'adyen';

const verificationErrorRecursive: VerificationErrorRecursive = {
  capabilities: [
    CapabilityEnum.UseCardInRestrictedIndustries,
    CapabilityEnum.UseCardInRestrictedCountriesConsumer
  ],
  code: 'code0',
  message: 'message2',
  type: Type212Enum.DataMissing,
  remediatingActions: [
    {
      code: 'code4',
      message: 'message6',
    }
  ],
};
```

