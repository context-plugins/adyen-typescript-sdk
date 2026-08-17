
# Unreferenced

## Structure

`Unreferenced`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enableUnreferencedRefunds` | `boolean \| undefined` | Optional | Indicates whether unreferenced refunds are enabled on the terminal.<br><br>> You're fully liable for losses resulting from fraudulent or duplicate unreferenced refunds. We recommend that you [set an unreferenced refund limit and a refund delay](https://docs.adyen.com/point-of-sale/basic-tapi-integration/refund-payment/unreferenced/#risk-with-unreferenced-refunds) to reduce this risk. |

## Example

```ts
import { Unreferenced } from 'adyen';

const unreferenced: Unreferenced = {
  enableUnreferencedRefunds: false,
};
```

