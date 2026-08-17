
# Svs Response Info

## Structure

`SvsResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorisationMid` | `string \| undefined` | Optional | The merchant ID (MID) that the acquirer recognizes you by. |
| `currencyCode` | `string \| undefined` | Optional | The three-character ISO currency code, example **USD** |

## Example

```ts
import { SvsResponseInfo } from 'adyen';

const svsResponseInfo: SvsResponseInfo = {
  authorisationMid: 'authorisationMid4',
  currencyCode: 'currencyCode8',
};
```

