
# Sca on Approval

Shows the status of the Strong Customer Authentication (SCA) process.

Possible values: **required**, **notApplicable**.

## Enumeration

`ScaOnApproval`

## Fields

| Name |
|  --- |
| `Completed` |
| `NotApplicable` |
| `Required` |

## Example

```ts
import { ScaOnApproval } from 'adyen';

const scaOnApproval = ScaOnApproval.NotApplicable;
```

