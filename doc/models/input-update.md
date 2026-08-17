
# Input Update

Definition: Content of the Input Update message. : It conveys
update of the display of an Input request in progress.

## Structure

`InputUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messageReference` | [`MessageReference`](../../doc/models/message-reference.md) | Required | Identification of a previous POI transaction.<br>To abort a transaction in progress or to request the status of a transaction from which no response has been received. It identifies the message header of the message request to abort or request the status. |
| `outputContent` | [`OutputContent`](../../doc/models/output-content.md) | Required | Content to display or print.<br>This is a sequence of elements if they have different formats. |
| `menuEntry` | [`MenuEntry[] \| undefined`](../../doc/models/menu-entry.md) | Optional | - |
| `outputSignature` | `string \| undefined` | Optional | **Constraints**: *Pattern*: `^.+$` |
| `minLength` | `number \| undefined` | Optional | - |
| `maxLength` | `number \| undefined` | Optional | - |
| `maxDecimalLength` | `number \| undefined` | Optional | - |

## Example

```ts
import {
  CharacterHeight1Enum,
  CharacterWidth1Enum,
  InputUpdate,
  MenuEntryTag1Enum,
  MessageCategory2Enum,
  OutputFormat1Enum,
  OutputFormat2Enum,
} from 'adyen';

const inputUpdate: InputUpdate = {
  messageReference: {
    messageCategory: MessageCategory2Enum.Payment,
    serviceID: 'ServiceID0',
    deviceID: 'DeviceID2',
    saleID: 'SaleID8',
    pOIID: 'POIID2',
  },
  outputContent: {
    outputFormat: OutputFormat1Enum.XHTML,
    predefinedContent: {
      referenceID: 'ReferenceID0',
      language: 'Language2',
    },
    outputText: [
      {
        text: 'Text6',
        characterSet: 194,
        startRow: 74,
        startColumn: 220,
        characterWidth: CharacterWidth1Enum.SingleWidth,
        characterHeight: CharacterHeight1Enum.SingleHeight,
      }
    ],
    outputXHTML: 'OutputXHTML2',
    outputBarcode: {
      barcodeValue: 'BarcodeValue2',
    },
  },
  menuEntry: [
    {
      outputFormat: OutputFormat2Enum.XHTML,
      menuEntryTag: MenuEntryTag1Enum.SubMenu,
      defaultSelectedFlag: false,
      predefinedContent: {
        referenceID: 'ReferenceID0',
        language: 'Language2',
      },
      outputText: [
        {
          text: 'Text6',
          characterSet: 194,
          startRow: 74,
          startColumn: 220,
          characterWidth: CharacterWidth1Enum.SingleWidth,
          characterHeight: CharacterHeight1Enum.SingleHeight,
        },
        {
          text: 'Text6',
          characterSet: 194,
          startRow: 74,
          startColumn: 220,
          characterWidth: CharacterWidth1Enum.SingleWidth,
          characterHeight: CharacterHeight1Enum.SingleHeight,
        }
      ],
      outputXHTML: 'OutputXHTML8',
    }
  ],
  outputSignature: 'OutputSignature6',
  minLength: 248,
  maxLength: 16,
  maxDecimalLength: 24,
};
```

