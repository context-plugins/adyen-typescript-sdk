
# Mandate Update

*This model accepts additional fields of type unknown.*

## Structure

`MandateUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentInstrumentId` | `string \| null \| undefined` | Optional | The unique identifier of the payment instrument linked to the mandate. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MandateUpdate } from 'adyenlib';

const mandateUpdate: MandateUpdate = {
  paymentInstrumentId: 'paymentInstrumentId4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

