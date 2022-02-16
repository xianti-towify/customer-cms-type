/**
 * @Description:
 * @author xianti.xiong
 * @date 2022/2/16
 */

export namespace CustomerCmsType {
  export type LoadPageStyle = 'loadMore' | 'pageIndex';

  export type FieldInfoType = {
    hashName: string;
    displayName: string;
    type: string;
    columnWidth: number;
  };

  export type ReferenceType = {
    referenceTableHashName: string;
    fieldHashName: string;
    reference?: ReferenceType;
  };

  export type ReferenceValueType = {
    _id: string;
    data: { [key: string]: string | number | boolean | Date | object | ReferenceValueType };
  };

  export type DisplayItemType = {
    value: string | number | boolean | Date | object;
    isEditable: boolean;
    isRequired?: boolean;
    referenceTable?: string;
    referenceValue?: {
      [key: string]: string | number | boolean | Date | object | ReferenceValueType;
    };
    reference?: { [key: string]: string | ReferenceType };
    referenceDataDisplayType?: string;
  };

  export type CollectionItemType = FieldInfoType | DisplayItemType;

  export type QueryType = string | 'custom' | 'referenceComponent' | 'referenceModel';

  export type QueryItemType =
    | FieldInfoType
    | DisplayItemType
    | {
        operator: string;
        valueType: QueryType;
      };
}
