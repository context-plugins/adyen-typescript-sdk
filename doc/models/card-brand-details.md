
# Card Brand Details

## Structure

`CardBrandDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `healthcare` | `boolean \| undefined` | Optional | Indicates if the card supports FSA/HSA healthcare payments. |
| `supported` | `boolean \| undefined` | Optional | Indicates if you support the card brand. |
| `type` | `string \| undefined` | Optional | The name of the card brand. |

## Example

```ts
import { CardBrandDetails } from 'adyen';

const cardBrandDetails: CardBrandDetails = {
  healthcare: false,
  supported: false,
  type: 'type4',
};
```

