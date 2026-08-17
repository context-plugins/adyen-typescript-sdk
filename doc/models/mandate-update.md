
# Mandate Update

## Structure

`MandateUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentInstrumentId` | `string \| null \| undefined` | Optional | The unique identifier of the payment instrument linked to the mandate. |

## Example

```ts
import { MandateUpdate } from 'adyen';

const mandateUpdate: MandateUpdate = {
  paymentInstrumentId: 'paymentInstrumentId4',
};
```

