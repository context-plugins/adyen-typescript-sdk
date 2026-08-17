
# Svs Response Info 2

**svs** details

## Structure

`SvsResponseInfo2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorisationMid` | `string \| undefined` | Optional | The merchant ID (MID) that the acquirer recognizes you by. |
| `currencyCode` | `string \| undefined` | Optional | The three-character ISO currency code, example **USD** |

## Example

```ts
import { SvsResponseInfo2 } from 'adyen';

const svsResponseInfo2: SvsResponseInfo2 = {
  authorisationMid: 'authorisationMid8',
  currencyCode: 'currencyCode2',
};
```

