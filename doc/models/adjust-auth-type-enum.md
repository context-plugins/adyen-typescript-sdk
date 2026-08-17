
# Adjust Auth Type Enum

The type of adjustment. Possible values:

* **cardholderInitiatedTransaction**

* **merchantInitiatedTransaction**

## Enumeration

`AdjustAuthTypeEnum`

## Fields

| Name |
|  --- |
| `CardholderInitiatedTransaction` |
| `MerchantInitiatedTransaction` |

## Example

```ts
import { AdjustAuthTypeEnum } from 'adyen';

const adjustAuthType = AdjustAuthTypeEnum.CardholderInitiatedTransaction;
```

