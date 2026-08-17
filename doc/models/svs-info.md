
# Svs Info

## Structure

`SvsInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorisationMid` | `string` | Required | The merchant ID (MID) that the acquirer recognizes you by. |
| `currencyCode` | `string` | Required | The three-character ISO currency code, example **USD** |

## Example

```ts
import { SvsInfo } from 'adyen';

const svsInfo: SvsInfo = {
  authorisationMid: 'authorisationMid4',
  currencyCode: 'currencyCode8',
};
```

