
# Login Request 2

Content of the Login Request message.

*This model accepts additional fields of type unknown.*

## Structure

`LoginRequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dateTime` | `string` | Required | Date and Time. In the Login request message, the Sale System gives its date and time to the POI System. In the Login response, the POI System gives its date and time to the Sale System. |
| `saleSoftware` | [`SaleSoftware2`](../../doc/models/sale-software-2.md) | Required | - |
| `saleTerminalData` | [`SaleTerminalData3 \| undefined`](../../doc/models/sale-terminal-data-3.md) | Optional | - |
| `trainingModeFlag` | `boolean \| undefined` | Optional | Training mode.<br>This flag indicates to the POI that the entire session will be not used to make real transaction, but is used for test of system or operator training.<br><br>**Default**: `false` |
| `operatorLanguage` | `string` | Required | Language of the Cashier or Operator.<br>Default value for Device type displays.<br><br>**Constraints**: *Pattern*: `^[a-z]{2,2}$` |
| `operatorId` | `string \| undefined` | Optional | Identification of the Cashier or Operator.<br>Four conditions to send it:<br><br>* The Sale System wants the POI to log it in the transaction log.<br>* Because of reconciliation with total on OperatorID.<br>* Because the POI needs it.<br>* Acquirer or issuer need it.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `shiftNumber` | `string \| undefined` | Optional | Shift number.<br>Same as OperatorID.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `tokenRequestedType` | [`TokenRequestedType1 \| undefined`](../../doc/models/token-requested-type-1.md) | Optional | - |
| `customerOrderReq` | [`CustomerOrderReq[] \| undefined`](../../doc/models/customer-order-req.md) | Optional | List of customer order open, closed or both to be sent in the response messages.<br>Possible values:<br><br>* **Both**<br>* **Closed**<br>* **Open** |
| `poiSerialNumber` | `string \| undefined` | Optional | Serial number of a POI Terminal.<br>If the login involve a POI Terminal and not the first Login to the POI System.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { LoginRequest2, TokenRequestedType1 } from 'adyenlib';

const loginRequest2: LoginRequest2 = {
  dateTime: '2016-03-13T12:52:32.123Z',
  saleSoftware: {
    manufacturerId: 'ManufacturerID4',
    applicationName: 'ApplicationName8',
    softwareVersion: 'SoftwareVersion0',
    certificationCode: 'CertificationCode4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  operatorLanguage: 'OperatorLanguage4',
  saleTerminalData: {
    totalsGroupId: 'TotalsGroupID4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  trainingModeFlag: false,
  operatorId: 'OperatorID0',
  shiftNumber: 'ShiftNumber2',
  tokenRequestedType: TokenRequestedType1.Transaction,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

