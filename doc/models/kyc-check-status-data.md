
# KYC Check Status Data

## Structure

`KYCCheckStatusData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requiredFields` | `string[] \| undefined` | Optional | A list of the fields required for execution of the check. |
| `status` | [`Status32Enum`](../../doc/models/status-32-enum.md) | Required | The status of the check.<br><br>Possible values: **AWAITING_DATA** , **DATA_PROVIDED**, **FAILED**, **INVALID_DATA**, **PASSED**, **PENDING**, **RETRY_LIMIT_REACHED**. |
| `summary` | [`KYCCheckSummary2 \| undefined`](../../doc/models/kyc-check-summary-2.md) | Optional | A summary of the execution of the check. |
| `type` | [`Type211Enum`](../../doc/models/type-211-enum.md) | Required | The type of check.<br><br>Possible values:<br><br>* **BANK_ACCOUNT_VERIFICATION**: Used in v5 and earlier. Replaced by **PAYOUT_METHOD_VERIFICATION** in v6 and later.<br><br>* **COMPANY_VERIFICATION**<br><br>* **CARD_VERIFICATION**<br><br>* **IDENTITY_VERIFICATION**<br><br>* **LEGAL_ARRANGEMENT_VERIFICATION**<br><br>* **NONPROFIT_VERIFICATION**<br><br>* **PASSPORT_VERIFICATION**<br><br>* **PAYOUT_METHOD_VERIFICATION**: Used in v6 and later.<br><br>* **PCI_VERIFICATION** |

## Example

```ts
import { KYCCheckStatusData, Status32Enum, Type211Enum } from 'adyen';

const kYCCheckStatusData: KYCCheckStatusData = {
  status: Status32Enum.PENDINGREVIEW,
  type: Type211Enum.BANKACCOUNTVERIFICATION,
  requiredFields: [
    'requiredFields6',
    'requiredFields7'
  ],
  summary: {
    kycCheckCode: 128,
    kycCheckDescription: 'kycCheckDescription8',
  },
};
```

