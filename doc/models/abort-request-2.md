
# Abort Request 2

Content of the Abort Request message.

*This model accepts additional fields of type unknown.*

## Structure

`AbortRequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messageReference` | [`MessageReference1`](../../doc/models/message-reference-1.md) | Required | - |
| `abortReason` | `string` | Required | Reason of aborting a transaction.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `displayOutput` | [`DisplayOutput3 \| undefined`](../../doc/models/display-output-3.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AbortRequest2,
  CharacterHeight1,
  CharacterWidth1,
  Device11,
  InfoQualify1,
  MenuEntryTag1,
  MessageCategory2,
  OutputFormat1,
  OutputFormat2,
} from 'adyen';

const abortRequest2: AbortRequest2 = {
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
  abortReason: 'AbortReason8',
  displayOutput: {
    device: Device11.CashierDisplay,
    infoQualify: InfoQualify1.Status,
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
    responseRequiredFlag: false,
    minimumDisplayTime: 110,
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
      },
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
    outputSignature: 'OutputSignature4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

