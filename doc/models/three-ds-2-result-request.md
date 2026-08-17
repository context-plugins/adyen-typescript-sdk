
# Three DS 2 Result Request

## Structure

`ThreeDS2ResultRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which you want to process the transaction. |
| `pspReference` | `string` | Required | The pspReference returned in the /authorise call. |

## Example

```ts
import { ThreeDS2ResultRequest } from 'adyen';

const threeDS2ResultRequest: ThreeDS2ResultRequest = {
  merchantAccount: 'merchantAccount0',
  pspReference: 'pspReference0',
};
```

