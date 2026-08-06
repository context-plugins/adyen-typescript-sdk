
# Identification Support 1

Support of the loyalty account identification. Allows knowing where and how you have found the loyalty account identification.
Possible values:

* **HybridCard**
* **LinkedCard**
* **LoyaltyCard**
* **NoCard**

## Enumeration

`IdentificationSupport1`

## Fields

| Name |
|  --- |
| `NoCard` |
| `LoyaltyCard` |
| `HybridCard` |
| `LinkedCard` |

## Example

```ts
import { IdentificationSupport1 } from 'adyen';

const identificationSupport1 = IdentificationSupport1.NoCard;
```

