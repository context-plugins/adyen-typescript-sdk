import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerOrderReqSchema, type CustomerOrderReq } from "./customer-order-req.js";
import { saleSoftware1Schema, type SaleSoftware1 } from "./sale-software1.js";
import { saleTerminalData2Schema, type SaleTerminalData2 } from "./sale-terminal-data2.js";
import { tokenRequestedType1Schema, type TokenRequestedType1 } from "./token-requested-type1.js";

export type LoginRequest = {
  dateTime: Date;
  saleSoftware: SaleSoftware1;
  saleTerminalData?: SaleTerminalData2;
  trainingModeFlag?: boolean;
  operatorLanguage: string;
  operatorId?: string;
  shiftNumber?: string;
  tokenRequestedType?: TokenRequestedType1;
  customerOrderReq?: CustomerOrderReq[];
  poiSerialNumber?: string;
};

export const loginRequestSchema: Schema<LoginRequest> = s.object<LoginRequest>({
  dateTime: s.dateTime(),
  saleSoftware: saleSoftware1Schema,
  saleTerminalData: s.optional(s.lazy(() => saleTerminalData2Schema)),
  trainingModeFlag: s.optional(s.boolean()),
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
