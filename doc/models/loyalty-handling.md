
# Loyalty Handling

Possible values:

* **Forbidden**
* **Processed**
* **Allowed**
* **Proposed**
* **Required**

## Enumeration

`LoyaltyHandling`

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
import { LoyaltyHandling } from 'adyen';

const loyaltyHandling = LoyaltyHandling.Allowed;
```

