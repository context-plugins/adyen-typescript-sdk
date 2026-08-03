
# Bin Detail

*This model accepts additional fields of type unknown.*

## Structure

`BinDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `issuerCountry` | `string \| undefined` | Optional | The country where the card was issued. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BinDetail } from 'adyenlib';

const binDetail: BinDetail = {
  issuerCountry: 'issuerCountry0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

