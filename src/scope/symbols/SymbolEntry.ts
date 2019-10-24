import { Node } from '../../grammar';
import { Scope } from '../scopes/Scope';
import { SymbolType } from './SymbolType';

export class SymbolEntry {
  readonly node: Node;

  readonly scope: Scope;

  readonly refs: Node[] = [];

  private type?: SymbolType;

  constructor(node: Node, scope: Scope) {
    this.node = node;
    this.scope = scope;
  }

  getType(): SymbolType {
    if (this.type) {
      return this.type;
    }

    throw new Error('Type is not set');
  }

  setType(type: SymbolType): void {
    if (this.type) {
      throw new Error('Can not change type');
    }

    this.type = type;
  }

  hasType(): boolean {
    return !!this.type;
  }
}
