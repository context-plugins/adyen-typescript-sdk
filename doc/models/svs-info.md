
# Svs Info

*This model accepts additional fields of type unknown.*

## Structure

`SvsInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorisationMid` | `string` | Required | The merchant ID (MID) that the acquirer recognizes you by. |
| `currencyCode` | `string` | Required | The three-character ISO currency code, example **USD** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SvsInfo } from 'adyenlib';

const svsInfo: SvsInfo = {
  authorisationMid: 'authorisationMid4',
  currencyCode: 'currencyCode8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

