/**
 * @Description:
 * @author xianti.xiong
 * @date 2022/2/16
 */

import { FieldInfoType } from '@towify-types/live-data';

export namespace CustomerCms {
  export type PermissionType = { [key in 'create' | 'update' | 'delete' | string]: boolean };

  export type LoadPageStyle = 'loadMore' | 'pageIndex';

  export type ReferenceType = {
    referenceTableHashName: string;
    fieldHashName: string;
    reference?: ReferenceType;
  };

  export type ReferenceValueType = {
    _id: string;
    data: { [key: string]: string | number | boolean | Date | object | ReferenceValueType };
  };

  export type CollectionFieldInfoType = FieldInfoType & {
    referenceDataDisplayType?: string;
    reference?: ReferenceType;
  };

  export type DisplayValueType = {
    value: string | number | boolean | Date | object;
    referenceTable?: string;
    referenceValue?: {
      [key: string]: string | number | boolean | Date | object | ReferenceValueType;
    };
    reference?: { [key: string]: string | ReferenceType };
    referenceDataDisplayType?: string;
  };

  export type QueryType = string | 'custom' | 'referenceComponent' | 'referenceModel';

  export type FormItemType = FieldInfoType & DisplayValueType;

  export type QueryItemType = FieldInfoType &
    DisplayValueType & {
      operator: string;
      valueType: QueryType;
    };
}
