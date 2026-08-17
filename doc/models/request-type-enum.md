
# Request Type Enum

Indicates the type of request to which the rule applies. If not provided, by default, this is set to **authorization**.

Possible values: **authorization**, **authentication**, **tokenization**, **bankTransfer**.

## Enumeration

`RequestTypeEnum`

## Fields

| Name |
|  --- |
| `Authentication` |
| `Authorization` |
| `BankTransfer` |
| `Tokenization` |

## Example

```ts
import { RequestTypeEnum } from 'adyen';

const requestType = RequestTypeEnum.BankTransfer;
```

