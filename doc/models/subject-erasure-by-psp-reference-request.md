
# Subject Erasure by Psp Reference Request

## Structure

`SubjectErasureByPspReferenceRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `forceErasure` | `boolean \| undefined` | Optional | Set this to **true** if you want to delete shopper-related data, even if the shopper has an existing recurring transaction. This only deletes the shopper-related data for the specific payment, but does not cancel the existing recurring transaction. |
| `merchantAccount` | `string \| undefined` | Optional | Your merchant account |
| `pspReference` | `string \| undefined` | Optional | The PSP reference of the payment. We will delete all shopper-related data for this payment. |

## Example

```ts
import { SubjectErasureByPspReferenceRequest } from 'adyen';

const subjectErasureByPspReferenceRequest: SubjectErasureByPspReferenceRequest = {
  forceErasure: false,
  merchantAccount: 'merchantAccount8',
  pspReference: 'pspReference2',
};
```

