
# Bank Account Detail

The details of the bank account to where a payout was made.

## Structure

`BankAccountDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string \| undefined` | Optional | The bank account number (without separators).<br><br>> Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements. |
| `accountType` | `string \| undefined` | Optional | The type of bank account.<br>Only applicable to bank accounts held in the USA.<br>The permitted values are: `checking`, `savings`.<br><br>> Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements. |
| `bankAccountName` | `string \| undefined` | Optional | The name of the bank account. |
| `bankAccountReference` | `string \| undefined` | Optional | Merchant reference to the bank account. |
| `bankAccountUUID` | `string \| undefined` | Optional | The unique identifier (UUID) of the Bank Account.<br><br>> If, during an account holder create or update request, this field is left blank (but other fields provided), a new Bank Account will be created with a procedurally-generated UUID.<br><br>> If, during an account holder create request, a UUID is provided, the creation of the Bank Account will fail while the creation of the account holder will continue.<br><br>> If, during an account holder update request, a UUID that is not correlated with an existing Bank Account is provided, the update of the account holder will fail.<br><br>> If, during an account holder update request, a UUID that is correlated with an existing Bank Account is provided, the existing Bank Account will be updated. |
| `bankBicSwift` | `string \| undefined` | Optional | The bank identifier code.<br><br>> Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements. |
| `bankCity` | `string \| undefined` | Optional | The city in which the bank branch is located.<br><br>> Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements. |
| `bankCode` | `string \| undefined` | Optional | The bank code of the banking institution with which the bank account is registered.<br><br>> Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements. |
| `bankName` | `string \| undefined` | Optional | The name of the banking institution with which the bank account is held.<br><br>> Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements. |
| `branchCode` | `string \| undefined` | Optional | The branch code of the branch under which the bank account is registered. The value to be specified in this parameter depends on the country of the bank account:<br><br>* United States - Routing number<br>* United Kingdom - Sort code<br>* Germany - Bankleitzahl<br><br>> Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements. |
| `checkCode` | `string \| undefined` | Optional | The check code of the bank account.<br><br>> Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements. |
| `countryCode` | `string \| undefined` | Optional | The two-letter country code in which the bank account is registered.<br><br>> The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').<br><br>> Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements. |
| `currencyCode` | `string \| undefined` | Optional | The currency in which the bank account deals.<br><br>> The permitted currency codes are defined in ISO-4217 (e.g. 'EUR'). |
| `iban` | `string \| undefined` | Optional | The international bank account number.<br><br>> The IBAN standard is defined in ISO-13616.<br><br>> Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements. |
| `ownerCity` | `string \| undefined` | Optional | The city of residence of the bank account owner.<br><br>> Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements. |
| `ownerCountryCode` | `string \| undefined` | Optional | The country code of the country of residence of the bank account owner.<br><br>> The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').<br><br>> Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements. |
| `ownerDateOfBirth` | `string \| undefined` | Optional | The date of birth of the bank account owner.<br>The date should be in ISO-8601 format yyyy-mm-dd (e.g. 2000-01-31). |
| `ownerHouseNumberOrName` | `string \| undefined` | Optional | The house name or number of the residence of the bank account owner.<br><br>> Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements. |
| `ownerName` | `string \| undefined` | Optional | The name of the bank account owner.<br><br>> Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements. |
| `ownerNationality` | `string \| undefined` | Optional | The country code of the country of nationality of the bank account owner.<br><br>> The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').<br><br>> Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements. |
| `ownerPostalCode` | `string \| undefined` | Optional | The postal code of the residence of the bank account owner.<br><br>> Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements. |
| `ownerState` | `string \| undefined` | Optional | The state of residence of the bank account owner.<br><br>> Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements. |
| `ownerStreet` | `string \| undefined` | Optional | The street name of the residence of the bank account owner.<br><br>> Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements. |
| `primaryAccount` | `boolean \| undefined` | Optional | If set to true, the bank account is a primary account. |
| `taxId` | `string \| undefined` | Optional | The tax ID number.<br><br>> Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements. |
| `urlForVerification` | `string \| undefined` | Optional | The URL to be used for bank account verification.<br>This may be generated on bank account creation.<br><br>> Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements. |

## Example

```ts
import { BankAccountDetail } from 'adyen';

const bankAccountDetail: BankAccountDetail = {
  accountNumber: 'accountNumber8',
  accountType: 'accountType4',
  bankAccountName: 'bankAccountName4',
  bankAccountReference: 'bankAccountReference4',
  bankAccountUUID: 'bankAccountUUID0',
};
```

