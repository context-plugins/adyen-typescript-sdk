
# Status 11 Enum

The status of the store. Possible values are:

- **active**. This value is assigned automatically when a store is created.
- **inactive**. The terminals under the store are blocked from accepting new transactions, but capturing outstanding transactions is still possible.
- **closed**. This status is irreversible. The terminals under the store are reassigned to the merchant inventory.

## Enumeration

`Status11Enum`

## Fields

| Name |
|  --- |
| `Active` |
| `Closed` |
| `Inactive` |

## Example

```ts
import { Status11Enum } from 'adyen';

const status11 = Status11Enum.Inactive;
```

