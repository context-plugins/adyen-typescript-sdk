
# Input Request 3

*This model accepts additional fields of type unknown.*

## Structure

`InputRequest3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `displayOutput` | [`DisplayOutput3 \| undefined`](../../doc/models/display-output-3.md) | Optional | - |
| `inputData` | [`InputData`](../../doc/models/input-data.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  CharacterHeight1,
  CharacterWidth1,
  Device11,
  Device2,
  InfoQualify1,
  InfoQualify2,
  InputCommand1,
  InputRequest3,
  MenuEntryTag1,
  OutputFormat1,
  OutputFormat2,
} from 'adyenlib';

const inputRequest3: InputRequest3 = {
  inputData: {
    device: Device2.CashierDisplay,
    infoQualify: InfoQualify2.CustomerAssistance,
    inputCommand: InputCommand1.GetAnyKey,
    notifyCardInputFlag: false,
    maxInputTime: 154,
    immediateResponseFlag: false,
    minLength: 242,
    maxLength: 246,
    waitUserValidationFlag: true,
    fromRightToLeftFlag: false,
    maskCharactersFlag: false,
    beepKeyFlag: false,
    globalCorrectionFlag: false,
    disableCancelFlag: false,
    disableCorrectFlag: false,
    disableValidFlag: false,
    menuBackFlag: false,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
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

