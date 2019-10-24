import { SymbolEntry } from './SymbolEntry';
import { FunctionDeclaration, EmptyFunctionDeclaration } from '../../grammar';

type Func = FunctionDeclaration | EmptyFunctionDeclaration;

export class SymbolTable {
  readonly symbols = new Map<string, SymbolEntry>();

  readonly functions = new Map<string, Func[]>();

  get(name: string): SymbolEntry | undefined {
    return this.symbols.get(name);
  }

  add(name: string, entry: SymbolEntry): void {
    if (!this.symbols.has(name)) {
      this.symbols.set(name, entry);
    }
  }

  has(name: string): boolean {
    return this.symbols.has(name);
  }

  addFunction(node: Func): void {
    const functions = this.functions.get(node.identifier.lexeme);

    if (functions) {
      functions.push(node);
    } else {
      this.functions.set(node.identifier.lexeme, [node]);
    }
  }

  hasFunction(name: string): boolean {
    return this.functions.has(name);
  }
}
