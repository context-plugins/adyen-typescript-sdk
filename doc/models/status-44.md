
# Status 44

The status of the transfer.

Possible values:

- **pending**: the transfer is under internal review by Adyen.

- **failed**: the transfer failed Adyen's internal review. For details, see `reason`.

## Enumeration

`Status44`

## Fields

| Name |
|  --- |
| `Pending` |
| `Failed` |

## Example

```ts
import { Status44 } from 'adyenlib';

const status44 = Status44.Pending;
```

