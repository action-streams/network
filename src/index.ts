import { Action } from '@action-streams/core';

const NetworkActionType = 'network';

interface NetworkAction extends Action {
  payload: unknown; // @todo
  type: typeof NetworkActionType;
}

// @todo

export { NetworkAction, NetworkActionType };
