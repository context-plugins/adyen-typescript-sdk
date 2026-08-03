
# Input Update

Definition: Content of the Input Update message. : It conveys
update of the display of an Input request in progress.

*This model accepts additional fields of type unknown.*

## Structure

`InputUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messageReference` | [`MessageReference1`](../../doc/models/message-reference-1.md) | Required | - |
| `outputContent` | [`OutputContent2`](../../doc/models/output-content-2.md) | Required | - |
| `menuEntry` | [`MenuEntry[] \| undefined`](../../doc/models/menu-entry.md) | Optional | - |
| `outputSignature` | `string \| undefined` | Optional | **Constraints**: *Pattern*: `^.+$` |
| `minLength` | `number \| undefined` | Optional | - |
| `maxLength` | `number \| undefined` | Optional | - |
| `maxDecimalLength` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  CharacterHeight1,
  CharacterWidth1,
  InputUpdate,
  MenuEntryTag1,
  MessageCategory2,
  OutputFormat1,
  OutputFormat2,
} from 'adyenlib';

const inputUpdate: InputUpdate = {
  messageReference: {
    messageCategory: MessageCategory2.Payment,
    serviceId: 'ServiceID0',
    deviceId: 'DeviceID2',
    saleId: 'SaleID8',
    poiid: 'POIID2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  outputContent: {
    outputFormat: OutputFormat1.Xhtml,
    predefinedContent: {
      referenceId: 'ReferenceID0',
      language: 'Language2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    outputText: [
      {
        text: 'Text6',
        characterSet: 194,
        startRow: 74,
        startColumn: 220,
        characterWidth: CharacterWidth1.SingleWidth,
        characterHeight: CharacterHeight1.SingleHeight,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
    outputXhtml: 'OutputXHTML2',
    outputBarcode: {
      barcodeValue: 'BarcodeValue2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  menuEntry: [
    {
      outputFormat: OutputFormat2.Xhtml,
      menuEntryTag: MenuEntryTag1.SubMenu,
      defaultSelectedFlag: false,
      predefinedContent: {
        referenceId: 'ReferenceID0',
        language: 'Language2',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      outputText: [
        {
          text: 'Text6',
          characterSet: 194,
          startRow: 74,
          startColumn: 220,
          characterWidth: CharacterWidth1.SingleWidth,
          characterHeight: CharacterHeight1.SingleHeight,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          text: 'Text6',
          characterSet: 194,
          startRow: 74,
          startColumn: 220,
          characterWidth: CharacterWidth1.SingleWidth,
          characterHeight: CharacterHeight1.SingleHeight,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      outputXhtml: 'OutputXHTML8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  outputSignature: 'OutputSignature6',
  minLength: 248,
  maxLength: 16,
  maxDecimalLength: 24,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

