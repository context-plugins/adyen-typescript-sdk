
# Svs Response Info

*This model accepts additional fields of type unknown.*

## Structure

`SvsResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorisationMid` | `string \| undefined` | Optional | The merchant ID (MID) that the acquirer recognizes you by. |
| `currencyCode` | `string \| undefined` | Optional | The three-character ISO currency code, example **USD** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SvsResponseInfo } from 'adyenlib';

const svsResponseInfo: SvsResponseInfo = {
  authorisationMid: 'authorisationMid4',
  currencyCode: 'currencyCode8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

