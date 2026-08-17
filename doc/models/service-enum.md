
# Service Enum

The service for which you are creating the business line.

Possible values:

* **paymentProcessing**
* **issuing**
* **banking**

## Enumeration

`ServiceEnum`

## Fields

| Name |
|  --- |
| `PaymentProcessing` |
| `Issuing` |
| `Banking` |

## Example

```ts
import { ServiceEnum } from 'adyen';

const service = ServiceEnum.Issuing;
```

