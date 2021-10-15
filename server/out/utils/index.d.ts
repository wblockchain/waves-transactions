import { getExpressionType, getFuncArgumentOrTypeByPos, getFuncHoverByNode, getFuncHoverByTFunction, getTypeDoc, validateByPos } from './hoverUtils';
import { convertToCompletion, getCompletionDefaultResult, getNodeType, getPostfixFunctions, intersection } from './completionUtils';
import { getFunctionDefinition } from './definitionUtils';
import { IAnnotatedFunc, IAnnotation, IBlock, ICompilationError, IConstByteStr, IConstLong, IConstStr, IDApp, IFalse, IFunc, IFunctionCall, IGetter, IIf, ILet, IMatch, IParseAndCompileResult, IRef, IScript, ITrue, TDecl, TNode, TPrimitiveNode } from '@waves/ride-js';
export { getNodeType, getFunctionDefinition, getPostfixFunctions, getCompletionDefaultResult, convertToCompletion, intersection, getFuncArgumentOrTypeByPos, validateByPos, getFuncHoverByNode, getFuncHoverByTFunction, getTypeDoc, getExpressionType, };
export declare const isIConstByteStr: (node: IScript | IDApp | IBlock | IConstByteStr | IIf | IFunctionCall | IConstLong | IRef | IConstStr | ITrue | IFalse | IGetter | IMatch | ILet | import("@waves/ride-js").IMatchCase | IFunc | IAnnotatedFunc | IAnnotation | null) => node is IConstByteStr;
export declare const isIConstLong: (node: IScript | IDApp | IBlock | IConstByteStr | IIf | IFunctionCall | IConstLong | IRef | IConstStr | ITrue | IFalse | IGetter | IMatch | ILet | import("@waves/ride-js").IMatchCase | IFunc | IAnnotatedFunc | IAnnotation | null) => node is IConstLong;
export declare const isIConstStr: (node: IScript | IDApp | IBlock | IConstByteStr | IIf | IFunctionCall | IConstLong | IRef | IConstStr | ITrue | IFalse | IGetter | IMatch | ILet | import("@waves/ride-js").IMatchCase | IFunc | IAnnotatedFunc | IAnnotation | null) => node is IConstStr;
export declare const isITrue: (node: IScript | IDApp | IBlock | IConstByteStr | IIf | IFunctionCall | IConstLong | IRef | IConstStr | ITrue | IFalse | IGetter | IMatch | ILet | import("@waves/ride-js").IMatchCase | IFunc | IAnnotatedFunc | IAnnotation | null) => node is ITrue;
export declare const isIFalse: (node: IScript | IDApp | IBlock | IConstByteStr | IIf | IFunctionCall | IConstLong | IRef | IConstStr | ITrue | IFalse | IGetter | IMatch | ILet | import("@waves/ride-js").IMatchCase | IFunc | IAnnotatedFunc | IAnnotation | null) => node is IFalse;
export declare const isIRef: (node: IScript | IDApp | IBlock | IConstByteStr | IIf | IFunctionCall | IConstLong | IRef | IConstStr | ITrue | IFalse | IGetter | IMatch | ILet | import("@waves/ride-js").IMatchCase | IFunc | IAnnotatedFunc | IAnnotation | null) => node is IRef;
export declare const isIBlock: (node: IScript | IDApp | IBlock | IConstByteStr | IIf | IFunctionCall | IConstLong | IRef | IConstStr | ITrue | IFalse | IGetter | IMatch | ILet | import("@waves/ride-js").IMatchCase | IFunc | IAnnotatedFunc | IAnnotation | null) => node is IBlock;
export declare const isILet: (node: IScript | IDApp | IBlock | IConstByteStr | IIf | IFunctionCall | IConstLong | IRef | IConstStr | ITrue | IFalse | IGetter | IMatch | ILet | import("@waves/ride-js").IMatchCase | IFunc | IAnnotatedFunc | IAnnotation | null) => node is ILet;
export declare const isIIf: (node: IScript | IDApp | IBlock | IConstByteStr | IIf | IFunctionCall | IConstLong | IRef | IConstStr | ITrue | IFalse | IGetter | IMatch | ILet | import("@waves/ride-js").IMatchCase | IFunc | IAnnotatedFunc | IAnnotation | null) => node is IIf;
export declare const isIFunctionCall: (node: IScript | IDApp | IBlock | IConstByteStr | IIf | IFunctionCall | IConstLong | IRef | IConstStr | ITrue | IFalse | IGetter | IMatch | ILet | import("@waves/ride-js").IMatchCase | IFunc | IAnnotatedFunc | IAnnotation | null) => node is IFunctionCall;
export declare const isIGetter: (node: IScript | IDApp | IBlock | IConstByteStr | IIf | IFunctionCall | IConstLong | IRef | IConstStr | ITrue | IFalse | IGetter | IMatch | ILet | import("@waves/ride-js").IMatchCase | IFunc | IAnnotatedFunc | IAnnotation | null) => node is IGetter;
export declare const isIMatch: (node: IScript | IDApp | IBlock | IConstByteStr | IIf | IFunctionCall | IConstLong | IRef | IConstStr | ITrue | IFalse | IGetter | IMatch | ILet | import("@waves/ride-js").IMatchCase | IFunc | IAnnotatedFunc | IAnnotation | null) => node is IMatch;
export declare const isIFunc: (node: IScript | IDApp | IBlock | IConstByteStr | IIf | IFunctionCall | IConstLong | IRef | IConstStr | ITrue | IFalse | IGetter | IMatch | ILet | import("@waves/ride-js").IMatchCase | IFunc | IAnnotatedFunc | IAnnotation | null) => node is IFunc;
export declare const isIScript: (node: IScript | IDApp | IBlock | IConstByteStr | IIf | IFunctionCall | IConstLong | IRef | IConstStr | ITrue | IFalse | IGetter | IMatch | ILet | import("@waves/ride-js").IMatchCase | IFunc | IAnnotatedFunc | IAnnotation | null) => node is IScript;
export declare const isIDApp: (node: IScript | IDApp | IBlock | IConstByteStr | IIf | IFunctionCall | IConstLong | IRef | IConstStr | ITrue | IFalse | IGetter | IMatch | ILet | import("@waves/ride-js").IMatchCase | IFunc | IAnnotatedFunc | IAnnotation | null) => node is IDApp;
export declare const isIAnnotatedFunc: (node: IScript | IDApp | IBlock | IConstByteStr | IIf | IFunctionCall | IConstLong | IRef | IConstStr | ITrue | IFalse | IGetter | IMatch | ILet | import("@waves/ride-js").IMatchCase | IFunc | IAnnotatedFunc | IAnnotation | null) => node is IAnnotatedFunc;
export declare const isIAnnotation: (node: IScript | IDApp | IBlock | IConstByteStr | IIf | IFunctionCall | IConstLong | IRef | IConstStr | ITrue | IFalse | IGetter | IMatch | ILet | import("@waves/ride-js").IMatchCase | IFunc | IAnnotatedFunc | IAnnotation | null) => node is IAnnotation;
export declare const isParseError: (res: IParseAndCompileResult | ICompilationError) => res is ICompilationError;
export declare const isPrimitiveNode: (node: TNode) => node is TPrimitiveNode;
export declare function offsetToRange(startOffset: number, content: string): {
    line: number;
    character: number;
};
export declare function rangeToOffset(line: number, character: number, content: string): number;
export declare function getNodeByOffset(node: TNode, pos: number): TNode;
export declare function findAnnotatedFunc(funcList: any[], pos: number): any;
export declare function getConstantsFromFunction(funcNode: IFunc): TDecl[];
export declare function getSelectedConst(constants: TDecl[], position: number): TDecl | undefined;
