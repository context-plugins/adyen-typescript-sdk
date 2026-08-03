
# Generate Pci Description Request

*This model accepts additional fields of type unknown.*

## Structure

`GeneratePciDescriptionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalSalesChannels` | [`AdditionalSalesChannel[] \| undefined`](../../doc/models/additional-sales-channel.md) | Optional | An array of additional sales channels to generate PCI questionnaires. Include the relevant sales channels if you need your user to sign PCI questionnaires. Not required if you [create stores](https://docs.adyen.com/platforms) and [add payment methods](https://docs.adyen.com/adyen-for-platforms-model) before you generate the questionnaires.<br><br>Possible values:<br><br>* **eCommerce**<br>* **pos**<br>* **ecomMoto**<br>* **posMoto** |
| `language` | `string \| undefined` | Optional | Sets the language of the PCI questionnaire. Its value is a two-character [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) language code, for example, **en**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AdditionalSalesChannel,
  GeneratePciDescriptionRequest,
} from 'adyenlib';

const generatePciDescriptionRequest: GeneratePciDescriptionRequest = {
  additionalSalesChannels: [
    AdditionalSalesChannel.Pos,
    AdditionalSalesChannel.PosMoto,
    AdditionalSalesChannel.ECommerce
  ],
  language: 'language0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

