
# Status 15 Enum

The status of the transfer.

Possible values:

- **credited**: the funds are credited to your user's transfer instrument or bank account.- **accepted**: the request is accepted by the integration.

## Enumeration

`Status15Enum`

## Fields

| Name |
|  --- |
| `Credited` |
| `Accepted` |

## Example

```ts
import { Status15Enum } from 'adyen';

const status15 = Status15Enum.Credited;
```

