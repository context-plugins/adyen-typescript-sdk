
# Sca on Approval Enum

Shows the status of the Strong Customer Authentication (SCA) process.

Possible values: **required**, **notApplicable**.

## Enumeration

`ScaOnApprovalEnum`

## Fields

| Name |
|  --- |
| `Completed` |
| `NotApplicable` |
| `Required` |

## Example

```ts
import { ScaOnApprovalEnum } from 'adyen';

const scaOnApproval = ScaOnApprovalEnum.NotApplicable;
```

