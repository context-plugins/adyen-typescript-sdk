
# Service

The service for which you are creating the business line.

Possible values:

* **paymentProcessing**
* **issuing**
* **banking**

## Enumeration

`Service`

## Fields

| Name |
|  --- |
| `PaymentProcessing` |
| `Issuing` |
| `Banking` |

## Example

```ts
import { Service } from 'adyen';

const service = Service.Issuing;
```

