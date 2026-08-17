
# Loyalty Handling 1 Enum

Type of Loyalty processing requested by the Sale System.
Possible values:

* **Allowed**
* **Forbidden**
* **Processed**
* **Proposed**
* **Required**

## Enumeration

`LoyaltyHandling1Enum`

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
import { LoyaltyHandling1Enum } from 'adyen';

const loyaltyHandling1 = LoyaltyHandling1Enum.Forbidden;
```

