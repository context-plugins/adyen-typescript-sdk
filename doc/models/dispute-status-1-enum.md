
# Dispute Status 1 Enum

The current status of the dispute.

When you create a dispute, you can only set the `status` to **draft**. When you update a dispute, you can set the `status` to **submitted** or **closed**.

Possible values: **draft**, **submitted**, **closed**, **won**, **chargeback**, **secondPresentment**.

## Enumeration

`DisputeStatus1Enum`

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
import { DisputeStatus1Enum } from 'adyen';

const disputeStatus1 = DisputeStatus1Enum.Draft;
```

