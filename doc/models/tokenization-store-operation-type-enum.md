
# Tokenization Store Operation Type Enum

The operation performed on the token. Possible values:

* **created**: the token has been created.
* **updated**: the existing token has been updated.
* **alreadyExisting**: the details have already been stored.

## Enumeration

`TokenizationStoreOperationTypeEnum`

## Fields

| Name |
|  --- |
| `Created` |
| `Updated` |
| `AlreadyExisting` |

## Example

```ts
import { TokenizationStoreOperationTypeEnum } from 'adyen';

const tokenizationStoreOperationType = TokenizationStoreOperationTypeEnum.AlreadyExisting;
```

