
# Request Type

Indicates the type of request to which the rule applies. If not provided, by default, this is set to **authorization**.

Possible values: **authorization**, **authentication**, **tokenization**, **bankTransfer**.

## Enumeration

`RequestType`

## Fields

| Name |
|  --- |
| `Authentication` |
| `Authorization` |
| `BankTransfer` |
| `Tokenization` |

## Example

```ts
import { RequestType } from 'adyenlib';

const requestType = RequestType.BankTransfer;
```

