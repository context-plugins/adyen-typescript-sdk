
# Dispute Status 1

The current status of the dispute.

When you create a dispute, you can only set the `status` to **draft**. When you update a dispute, you can set the `status` to **submitted** or **closed**.

Possible values: **draft**, **submitted**, **closed**, **won**, **chargeback**, **secondPresentment**.

## Enumeration

`DisputeStatus1`

## Fields

| Name |
|  --- |
| `Draft` |
| `Submitted` |
| `Chargeback` |
| `SecondPresentment` |
| `Won` |
| `Closed` |

## Example

```ts
import { DisputeStatus1 } from 'adyen';

const disputeStatus1 = DisputeStatus1.Draft;
```

