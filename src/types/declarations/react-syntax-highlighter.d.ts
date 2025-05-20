declare module 'react-syntax-highlighter' {
  import { ComponentType, ReactNode, CSSProperties } from 'react';
  
  export interface StyleObject {
    [key: string]: string | number | StyleObject;
  }
  
  export interface CodeTagProps {
    style?: CSSProperties;
    [key: string]: unknown;
  }
  
  export interface LineNumberStyle {
    color?: string;
    [key: string]: string | number | undefined;
  }
  
  export interface SyntaxHighlighterProps {
    language?: string;
    style?: StyleObject;
    customStyle?: CSSProperties;
    codeTagProps?: CodeTagProps;
    useInlineStyles?: boolean;
    showLineNumbers?: boolean;
    startingLineNumber?: number;
    lineNumberStyle?: LineNumberStyle;
    children?: ReactNode;
    [key: string]: unknown;
  }

  const SyntaxHighlighter: ComponentType<SyntaxHighlighterProps>;
  export const Light: typeof SyntaxHighlighter;
  export const Prism: typeof SyntaxHighlighter;
  export default SyntaxHighlighter;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs' {
  import { StyleObject } from 'react-syntax-highlighter';
  export const atomOneDark: StyleObject;
}