
# Three Ds 2 Result Request

*This model accepts additional fields of type unknown.*

## Structure

`ThreeDs2ResultRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which you want to process the transaction. |
| `pspReference` | `string` | Required | The pspReference returned in the /authorise call. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ThreeDs2ResultRequest } from 'adyenlib';

const threeDs2ResultRequest: ThreeDs2ResultRequest = {
  merchantAccount: 'merchantAccount6',
  pspReference: 'pspReference4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

