import * as grammar from '../../grammar';
import { Scope, SymbolEntry, SymbolType } from '../../scope';

export class TypeCollector {
  private readonly scope: Scope;

  constructor(scope: Scope) {
    this.scope = scope;
  }

  collect(): void {
    this.scope.table.symbols.forEach(symbol => this.handleSymbol(symbol));
  }

  private handleSymbol(symbol: SymbolEntry): void {
    switch (symbol.node.type) {
      case grammar.SyntacticToken.VARIABLE_DECL: {
        const decl = symbol.node as grammar.VariableDeclaration;

        switch (decl.value.type) {
          case grammar.SyntacticToken.NUMBER_LITERAL: {
            symbol.setType(new SymbolType(this.scope.getSymbol('Number')!, [], 0));
            break;
          }

          case grammar.SyntacticToken.STRING_LITERAL: {
            symbol.setType(new SymbolType(this.scope.getSymbol('String')!, [], 0));
            break;
          }

          case grammar.SyntacticToken.BOOLEAN_LITERAL: {
            symbol.setType(new SymbolType(this.scope.getSymbol('Boolean')!, [], 0));
            break;
          }

          case grammar.SyntacticToken.IDENTIFIER: {
            const value = decl.value as grammar.Identifier;
            symbol.setType(this.scope.getSymbol(value.lexeme)!.getType());
            break;
          }

          default:
            throw new Error(`Can't handle type of type ${grammar.SyntacticToken[decl.value.type]}`);
        }

        break;
      }

      default:
        throw new Error(`Can't handle symbol of type ${grammar.SyntacticToken[symbol.node.type]}`);
    }
  }
}
