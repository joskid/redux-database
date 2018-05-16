import { Record } from "./util";

export interface UpdateAction {
  type: "UPDATE_RECORD";
  payload: {
    ids: string[];
    key: string;
    context?: string;
    data: Partial<Record>;
  };
}

export interface InsertAction {
  type: "INSERT_RECORD";
  payload: {
    ids: string[];
    key: string;
    context?: string;
    data: Record[];
  };
}

export interface DeleteAction {
  type: "DELETE_RECORD";
  payload: {
    key: string;
    context?: string;
    ids: string[];
  };
}

export interface SettingsUpdateAction {
  type: "SETTINGS_UPDATE";
  payload: {
    key: string;
    context?: string;
    setting: any;
  };
}

export interface CommitContextAction {
  type: "COMMIT_CONTEXT";
  payload: {
    context: string;
  };
}

export interface TransactionAction {
  type: "TRANSACTION";
  payload: {
    actions: DBAction[];
  };
}

export type DBAction =
  | UpdateAction
  | DeleteAction
  | InsertAction
  | SettingsUpdateAction
  | TransactionAction
  | CommitContextAction;

export type DBDispatch = (action: DBAction) => void;