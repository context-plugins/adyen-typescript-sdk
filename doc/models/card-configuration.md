
# Card Configuration

*This model accepts additional fields of type unknown.*

## Structure

`CardConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `activation` | `string \| undefined` | Optional | The activation label attached to the card that contains the activation instructions.<br><br>This field overrides the activation label design ID defined in the card configuration profile. |
| `activationUrl` | `string \| undefined` | Optional | Your app's URL, if you want to activate cards through your app. For example, **my-app://ref1236a7d**. A QR code is created based on this URL, and is included in the carrier. Before you use this field, reach out to your Adyen contact to set up the QR code process.<br><br>Maximum length: 255 characters.<br><br>**Constraints**: *Maximum Length*: `255` |
| `bulkAddress` | [`BulkAddress \| undefined`](../../doc/models/bulk-address.md) | Optional | - |
| `cardImageId` | `string \| undefined` | Optional | The unique identifier of the card image. This image is printed on the full front of the card. |
| `carrier` | `string \| undefined` | Optional | The letter or packaging to which the card is attached.<br><br>This field overrides the carrier design ID defined in the card configuration profile. |
| `carrierImageId` | `string \| undefined` | Optional | The unique identifier of the carrier image. This image is printed on the letter to which the card is attached. |
| `configurationProfileId` | `string` | Required | The unique identifier of the card configuration profile that contains the settings that are applied to the card. For example, the envelope and PIN mailer designs or the logistics company handling the shipment.<br><br>You can override some of the existing settings in the configuration profile by providing the corresponding fields in the `configuration` object. For example, send the `shipmentMethod` to override the logistics company defined in the card configuration profile. |
| `currency` | `string \| undefined` | Optional | The three-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the card. For example, **EUR**.<br><br>This field overrides the existing currency setting on the card configuration profile. |
| `envelope` | `string \| undefined` | Optional | Overrides the envelope design ID defined in the card configuration profile. |
| `insert` | `string \| undefined` | Optional | Any additional material, such as marketing material, that is shipped together with the card.<br><br>This field overrides the insert design ID defined in the card configuration profile. |
| `language` | `string \| undefined` | Optional | The two-letter [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code of the card. For example, **en**. |
| `logoImageId` | `string \| undefined` | Optional | The unique identifier of the logo image. This image is printed on the partial front of the card, for example, a logo on the upper right corner. |
| `pinMailer` | `string \| undefined` | Optional | The letter on which the PIN of the card is printed.<br><br>This field overrides the PIN mailer design ID defined in the card configuration profile. |
| `printLine` | `string \| undefined` | Optional | Print Line.<br><br>Text printed on the physical card below the cardholder name. You provide the value, which can be up to 26 characters. |
| `shipmentMethod` | `string \| undefined` | Optional | The logistics company that ships the card.<br><br>This field overrides the logistics company defined in the card configuration profile. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CardConfiguration } from 'adyenlib';

const cardConfiguration: CardConfiguration = {
  configurationProfileId: 'configurationProfileId6',
  activation: 'activation2',
  activationUrl: 'activationUrl8',
  bulkAddress: {
    country: 'country0',
    city: 'city6',
    company: 'company6',
    email: 'email0',
    houseNumberOrName: 'houseNumberOrName4',
    line1: 'line18',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  cardImageId: 'cardImageId0',
  carrier: 'carrier8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

