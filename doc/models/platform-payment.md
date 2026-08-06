
# Platform Payment

*This model accepts additional fields of type unknown.*

## Structure

`PlatformPayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `modificationMerchantReference` | `string \| undefined` | Optional | The capture's merchant reference included in the transfer. |
| `modificationPspReference` | `string \| undefined` | Optional | The capture reference included in the transfer. |
| `paymentMerchantReference` | `string \| undefined` | Optional | The payment's merchant reference included in the transfer. |
| `platformPaymentType` | [`PlatformPaymentType \| undefined`](../../doc/models/platform-payment-type.md) | Optional | - |
| `pspPaymentReference` | `string \| undefined` | Optional | The payment reference included in the transfer. |
| `type` | [`Type63 \| undefined`](../../doc/models/type-63.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PlatformPayment, PlatformPaymentType } from 'adyen';

const platformPayment: PlatformPayment = {
  modificationMerchantReference: 'modificationMerchantReference8',
  modificationPspReference: 'modificationPspReference0',
  paymentMerchantReference: 'paymentMerchantReference2',
  platformPaymentType: PlatformPaymentType.Interchange,
  pspPaymentReference: 'pspPaymentReference8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

