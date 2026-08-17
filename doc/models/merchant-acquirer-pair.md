
# Merchant Acquirer Pair

## Structure

`MerchantAcquirerPair`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acquirerId` | `string \| undefined` | Optional | The acquirer ID. |
| `merchantId` | `string \| undefined` | Optional | The merchant identification number (MID). |

## Example

```ts
import { MerchantAcquirerPair } from 'adyen';

const merchantAcquirerPair: MerchantAcquirerPair = {
  acquirerId: 'acquirerId0',
  merchantId: 'merchantId4',
};
```

