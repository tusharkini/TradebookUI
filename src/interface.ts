export type LoginInterface = Record<string, unknown>;
export type Userobject = {
    name: string;
    tushsj:Shiftsobject[];
};

export type ShiftsList = {
    listobject:Shiftsobject[];
};
export type Shiftsobject= {
    ShiftId: number;
    shiftstart : Date;
    shiftend : Date;
    storename: string;
};

export type ListvalueProps ={
    listobject: Shiftsobject[] ;
    type : string;
    //setListobject:(listobject: Shiftsobject[]) => void;

};
export type Tradebookprops={
    setlistValueProps : (listobject: Shiftsobject[], type : string) => void;
};