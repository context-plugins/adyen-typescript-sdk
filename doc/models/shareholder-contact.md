
# Shareholder Contact

## Structure

`ShareholderContact`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`ViasAddress2 \| undefined`](../../doc/models/vias-address-2.md) | Optional | The address of the person. |
| `email` | `string \| undefined` | Optional | The e-mail address of the person. |
| `fullPhoneNumber` | `string \| undefined` | Optional | The phone number of the person provided as a single string.  It will be handled as a landline phone.<br>Examples: "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344" |
| `jobTitle` | `string \| undefined` | Optional | Job title of the person. Required when the `shareholderType` is **Controller**.<br><br>Example values: **Chief Executive Officer**, **Chief Financial Officer**, **Chief Operating Officer**, **President**, **Vice President**, **Executive President**, **Managing Member**, **Partner**, **Treasurer**, **Director**, or **Other**. |
| `name` | [`ViasName1 \| undefined`](../../doc/models/vias-name-1.md) | Optional | The name of the person. |
| `personalData` | [`ViasPersonalData1 \| undefined`](../../doc/models/vias-personal-data-1.md) | Optional | Contains information about the person. |
| `phoneNumber` | [`ViasPhoneNumber1 \| undefined`](../../doc/models/vias-phone-number-1.md) | Optional | The phone number of the person. |
| `shareholderCode` | `string \| undefined` | Optional | The unique identifier (UUID) of the shareholder entry.<br><br>> **If, during an Account Holder create or update request, this field is left blank (but other fields provided), a new Shareholder will be created with a procedurally-generated UUID.**<br><br>> **If, during an Account Holder create request, a UUID is provided, the creation of Account Holder will fail with a validation Error..**<br><br>> **If, during an Account Holder update request, a UUID that is not correlated with an existing Shareholder is provided, the update of the Shareholder will fail.**<br><br>> **If, during an Account Holder update request, a UUID that is correlated with an existing Shareholder is provided, the existing Shareholder will be updated.** |
| `shareholderReference` | `string \| undefined` | Optional | Your reference for the shareholder entry. |
| `shareholderType` | [`ShareholderTypeEnum \| undefined`](../../doc/models/shareholder-type-enum.md) | Optional | Specifies how the person is associated with the account holder.<br><br>Possible values:<br><br>* **Owner**: Individuals who directly or indirectly own 25% or more of a company.<br><br>* **Controller**: Individuals who are members of senior management staff responsible for managing a company or organization. |
| `webAddress` | `string \| undefined` | Optional | The URL of the person's website. |

## Example

```ts
import { GenderEnum, ShareholderContact } from 'adyen';

const shareholderContact: ShareholderContact = {
  address: {
    country: 'country0',
    city: 'city6',
    houseNumberOrName: 'houseNumberOrName4',
    postalCode: 'postalCode8',
    stateOrProvince: 'stateOrProvince4',
    street: 'street6',
  },
  email: 'email6',
  fullPhoneNumber: 'fullPhoneNumber4',
  jobTitle: 'jobTitle4',
  name: {
    firstName: 'firstName4',
    gender: GenderEnum.MALE,
    infix: 'infix4',
    lastName: 'lastName4',
  },
};
```

