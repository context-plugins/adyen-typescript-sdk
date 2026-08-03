
# Tokenization Store Operation Type

The operation performed on the token. Possible values:

* **created**: the token has been created.
* **updated**: the existing token has been updated.
* **alreadyExisting**: the details have already been stored.

## Enumeration

`TokenizationStoreOperationType`

## Fields

| Name |
|  --- |
| `Created` |
| `Updated` |
| `AlreadyExisting` |

## Example

```ts
import { TokenizationStoreOperationType } from 'adyenlib';

const tokenizationStoreOperationType = TokenizationStoreOperationType.AlreadyExisting;
```

