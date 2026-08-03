
# Subject Erasure by Psp Reference Request

*This model accepts additional fields of type unknown.*

## Structure

`SubjectErasureByPspReferenceRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `forceErasure` | `boolean \| undefined` | Optional | Set this to **true** if you want to delete shopper-related data, even if the shopper has an existing recurring transaction. This only deletes the shopper-related data for the specific payment, but does not cancel the existing recurring transaction. |
| `merchantAccount` | `string \| undefined` | Optional | Your merchant account |
| `pspReference` | `string \| undefined` | Optional | The PSP reference of the payment. We will delete all shopper-related data for this payment. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SubjectErasureByPspReferenceRequest } from 'adyenlib';

const subjectErasureByPspReferenceRequest: SubjectErasureByPspReferenceRequest = {
  forceErasure: false,
  merchantAccount: 'merchantAccount8',
  pspReference: 'pspReference2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

