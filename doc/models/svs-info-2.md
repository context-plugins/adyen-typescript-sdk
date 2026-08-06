
# Svs Info 2

Details to provide if `type` is **svs**.

*This model accepts additional fields of type unknown.*

## Structure

`SvsInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorisationMid` | `string` | Required | The merchant ID (MID) that the acquirer recognizes you by. |
| `currencyCode` | `string` | Required | The three-character ISO currency code, example **USD** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SvsInfo2 } from 'adyen';

const svsInfo2: SvsInfo2 = {
  authorisationMid: 'authorisationMid6',
  currencyCode: 'currencyCode0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

