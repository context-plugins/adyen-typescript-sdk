
# Input Result

## Structure

`InputResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `device` | [`Device4Enum`](../../doc/models/device-4-enum.md) | Required | Logical device located on a Sale Terminal or a POI Terminal, in terms of class of information to output (display, print or store), or input (keyboard) for the Cashier or the Customer.<br>Possible values:<br><br>* **CashierDisplay**<br>* **CashierInput**<br>* **CustomerDisplay**<br>* **CustomerInput** |
| `infoQualify` | [`InfoQualify2Enum`](../../doc/models/info-qualify-2-enum.md) | Required | Qualification of the information to send to an output logical device, to display or print to the Cashier or the Customer.<br>Possible values:<br><br>* **CustomerAssistance**<br>* **Display**<br>* **Document**<br>* **Error**<br>* **Input**<br>* **POIReplication**<br>* **Receipt**<br>* **Sound**<br>* **Status**<br>* **Voucher** |
| `response` | [`Response1`](../../doc/models/response-1.md) | Required | Result of a message request processing.<br>If Result is Success, `ErrorCondition` is absent or not used in the processing of the message. In the other cases, the `ErrorCondition` has to be present and can refine the processing of the message response. `AdditionalResponse` gives more information about the success or the failure of the message request processing, for logging without real time involvements. |
| `input` | [`Input2 \| undefined`](../../doc/models/input-2.md) | Optional | Data entered by the user, related to the input command. |

## Example

```ts
import {
  Device4Enum,
  ErrorCondition1Enum,
  InfoQualify2Enum,
  InputCommand1Enum,
  InputResult,
  Result11Enum,
} from 'adyen';

const inputResult: InputResult = {
  device: Device4Enum.CashierDisplay,
  infoQualify: InfoQualify2Enum.Input,
  response: {
    result: Result11Enum.Partial,
    errorCondition: ErrorCondition1Enum.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
  },
  input: {
    inputCommand: InputCommand1Enum.GetMenuEntry,
    confirmedFlag: false,
    functionKey: 134,
    textInput: 'TextInput4',
    digitInput: 152,
    password: 'Password0',
  },
};
```

