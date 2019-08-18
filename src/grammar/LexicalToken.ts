export enum LexicalToken {
  // Whitespace
  NEWLINE,
  INDENT,
  OUTDENT,
  COMMENT,
  WHITESPACE,

  // Identifier
  IDENTIFIER,

  // Operators
  PLUS,
  MINUS,
  STAR,
  SLASH,
  PERCENT,
  CARET,
  EQUAL,

  // Punctuation
  DOT,
  COMMA,
  LSQB,
  RSQB,
  LPAR,
  RPAR,
  LBRACE,
  RBRACE,

  // Literals
  NUMBER,
  STRING,
  BOOLEAN,
  NULL,

  // Keywords
  CLASS,
  NEW,
  STATIC,
  THIS,
  SUPER,
  EXTENDS,
  INSTANCEOF,

  IF,
  ELSE,

  SWITCH,
  CASE,
  FALLTHROUGH,

  FUNCTION,
  RETURN,
  RETURNS,
  VOID,

  ASYNC,

  TRY,
  CATCH,
  THROW,

  IMPORT,
  AS,

  FOR,
  IN,
  REPEAT,
  TIMES,
  WHILE,
  CONTINUE,
  BREAK,

  AND,
  OR,
  NOT,

  IS,
  IS_NOT,
  IS_LESS_THAN,
  IS_GREATER_THAN,

  VAR,

  // End of file
  EOF,
}
