/**
 * @Description:
 * @author xianti.xiong
 * @date 2022/2/16
 */

import type { FieldInfoType, FieldValueType, QueryFieldPathType } from '@towify-types/live-data';
import { QueryConditionEnum } from '@towify-types/live-data';

export namespace CustomerCms {
  export type PermissionType = { [key in 'create' | 'update' | 'delete' | string]: boolean };

  export type LoadPageStyle = 'loadMore' | 'pageIndex';

  export type ReferenceType = {
    referenceTableHashName: string;
    fieldHashName: string;
    reference?: ReferenceType;
  };

  export type CollectionFieldInfoType = FieldInfoType & {
    referenceDataDisplayType?: string;
    reference?: ReferenceType;
  };

  export type DisplayValueType = {
    isEditable: boolean;
    isRequired: boolean;
    value?: FieldValueType | null;
    referenceTable?: string;
    referenceValue?: FieldValueType;
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

  export type QueryItemDisplayType = QueryItemType & {
    displayOperators: QueryConditionEnum[];
    displayOperator: QueryConditionEnum;
    hideConditionValueInput: boolean;
  };

  export type ConditionType = {
    title: string;
    isCustom: boolean;
    fieldPath: QueryFieldPathType;
    value: FieldValueType | FieldValueType[];
    condition: QueryConditionEnum;
  };
}
