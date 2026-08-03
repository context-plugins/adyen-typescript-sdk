
# Card Brand Details

*This model accepts additional fields of type unknown.*

## Structure

`CardBrandDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `healthcare` | `boolean \| undefined` | Optional | Indicates if the card supports FSA/HSA healthcare payments. |
| `supported` | `boolean \| undefined` | Optional | Indicates if you support the card brand. |
| `type` | `string \| undefined` | Optional | The name of the card brand. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CardBrandDetails } from 'adyenlib';

const cardBrandDetails: CardBrandDetails = {
  healthcare: false,
  supported: false,
  type: 'type4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

