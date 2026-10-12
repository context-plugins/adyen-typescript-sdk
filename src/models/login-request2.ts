import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerOrderReqSchema, type CustomerOrderReq } from "./customer-order-req.js";
import { saleSoftware1Schema, type SaleSoftware1 } from "./sale-software1.js";
import { saleTerminalData2Schema, type SaleTerminalData2 } from "./sale-terminal-data2.js";
import { tokenRequestedType1Schema, type TokenRequestedType1 } from "./token-requested-type1.js";

/** Content of the Login Request message. */
export type LoginRequest2 = {
  /**
   * Date and Time. In the Login request message, the Sale System gives its date and time to the POI
   * System. In the Login response, the POI System gives its date and time to the Sale System.
   */
  dateTime: Date;
  /**
   * Information related to the software of the Sale System which manages the Sale to POI protocol.
   */
  saleSoftware: SaleSoftware1;
  /**
   * Information related to the software and hardware feature of the Sale Terminal. Present if the
   * login involve a Sale Terminal.
   */
  saleTerminalData?: SaleTerminalData2;
  /**
   * Training mode. This flag indicates to the POI that the entire session will be not used to make
   * real transaction, but is used for test of system or operator training.
   *
   * @default false
   */
  trainingModeFlag?: boolean;
  /** Language of the Cashier or Operator. Default value for Device type displays. */
  operatorLanguage: string;
  /**
   * Identification of the Cashier or Operator. Four conditions to send it:
   * * The Sale System wants the POI to log it in the transaction log.
   * * Because of reconciliation with total on OperatorID.
   * * Because the POI needs it.
   * * Acquirer or issuer need it.
   */
  operatorId?: string;
  /** Shift number. Same as OperatorID. */
  shiftNumber?: string;
  /**
   * Type of token replacing the PAN of a payment card to identify the payment mean of the customer.
   * It allows, for a merchant, to use a token for a transaction only or for a longer period.
   * Possible values:
   * * **Customer**
   * * **Transaction**
   */
  tokenRequestedType?: TokenRequestedType1;
  /**
   * List of customer order open, closed or both to be sent in the response messages. Possible
   * values:
   * * **Both**
   * * **Closed**
   * * **Open**
   */
  customerOrderReq?: CustomerOrderReq[];
  /**
   * Serial number of a POI Terminal. If the login involve a POI Terminal and not the first Login to
   * the POI System.
   */
  poiSerialNumber?: string;
};

export const loginRequest2Schema: Schema<LoginRequest2> = s.object<LoginRequest2>({
  dateTime: s.dateTime(),
  saleSoftware: saleSoftware1Schema,
  saleTerminalData: s.optional(s.lazy(() => saleTerminalData2Schema)),
  trainingModeFlag: s.defaulted(s.boolean(), false),
  operatorLanguage: s.string(),
  operatorId: s.optional(s.string()),
  shiftNumber: s.optional(s.string()),
  tokenRequestedType: s.optional(s.lazy(() => tokenRequestedType1Schema)),
  customerOrderReq: s.optional(s.array(s.lazy(() => customerOrderReqSchema))),
  poiSerialNumber: s.optional(s.string()),
  _keysMap: {
    dateTime: "DateTime",
    saleSoftware: "SaleSoftware",
    saleTerminalData: "SaleTerminalData",
    trainingModeFlag: "TrainingModeFlag",
    operatorLanguage: "OperatorLanguage",
    operatorId: "OperatorID",
    shiftNumber: "ShiftNumber",
    tokenRequestedType: "TokenRequestedType",
    customerOrderReq: "CustomerOrderReq",
    poiSerialNumber: "POISerialNumber",
  },
});
