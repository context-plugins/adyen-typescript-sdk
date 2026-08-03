
# Status 110

The status of the transfer.

Possible values:

- **credited**: the funds are credited to your user's transfer instrument or bank account.- **accepted**: the request is accepted by the integration.

## Enumeration

`Status110`

## Fields

| Name |
|  --- |
| `Credited` |
| `Accepted` |

## Example

```ts
import { Status110 } from 'adyenlib';

const status110 = Status110.Credited;
```

