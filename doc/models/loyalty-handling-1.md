
# Loyalty Handling 1

Type of Loyalty processing requested by the Sale System.
Possible values:

* **Allowed**
* **Forbidden**
* **Processed**
* **Proposed**
* **Required**

## Enumeration

`LoyaltyHandling1`

## Fields

| Name |
|  --- |
| `Forbidden` |
| `Processed` |
| `Allowed` |
| `Proposed` |
| `Required` |

## Example

```ts
import { LoyaltyHandling1 } from 'adyen';

const loyaltyHandling1 = LoyaltyHandling1.Forbidden;
```

