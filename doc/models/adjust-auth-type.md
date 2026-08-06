
# Adjust Auth Type

The type of adjustment. Possible values:

* **cardholderInitiatedTransaction**

* **merchantInitiatedTransaction**

## Enumeration

`AdjustAuthType`

## Fields

| Name |
|  --- |
| `CardholderInitiatedTransaction` |
| `MerchantInitiatedTransaction` |

## Example

```ts
import { AdjustAuthType } from 'adyen';

const adjustAuthType = AdjustAuthType.CardholderInitiatedTransaction;
```

