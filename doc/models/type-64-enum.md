
# Type 64 Enum

The type of Terms of Service.

Possible values:

* **adyenForPlatformsManage**
* **adyenIssuing**
* **adyenForPlatformsAdvanced**
* **adyenCapital**
* **adyenAccount**
* **adyenCard**
* **adyenFranchisee**
* **adyenPccr**
* **adyenChargeCard**
* **kycOnInvite**

## Enumeration

`Type64Enum`

## Fields

| Name |
|  --- |
| `AdyenAccount` |
| `AdyenCapital` |
| `AdyenCard` |
| `AdyenChargeCard` |
| `AdyenForPlatformsAdvanced` |
| `AdyenForPlatformsManage` |
| `AdyenFranchisee` |
| `AdyenIssuing` |
| `AdyenPccr` |
| `KycOnInvite` |

## Example

```ts
import { Type64Enum } from 'adyen';

const type64 = Type64Enum.AdyenAccount;
```

