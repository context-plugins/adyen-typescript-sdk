
# Remainder Enum

Books the amount left over after currency conversion to the specified balance account.

Possible values: **addToLiableAccount**, **addToOneBalanceAccount**.

## Enumeration

`RemainderEnum`

## Fields

| Name |
|  --- |
| `AddToLiableAccount` |
| `AddToOneBalanceAccount` |

## Example

```ts
import { RemainderEnum } from 'adyen';

const remainder = RemainderEnum.AddToLiableAccount;
```

