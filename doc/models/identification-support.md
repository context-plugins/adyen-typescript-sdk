
# Identification Support

Support of the loyalty account identification. Allows knowing where and how you have found the loyalty account identification.
Possible values:

* **NoCard**
* **LoyaltyCard**
* **HybridCard**
* **LinkedCard**

## Enumeration

`IdentificationSupport`

## Fields

| Name |
|  --- |
| `NoCard` |
| `LoyaltyCard` |
| `HybridCard` |
| `LinkedCard` |

## Example

```ts
import { IdentificationSupport } from 'adyen';

const identificationSupport = IdentificationSupport.NoCard;
```

