import { BaseStatementAST } from 'src/base';
import { describe, expect, test } from '@jest/globals';
import { codeGenerator } from 'src/languages/typescript';

describe('Typescript : Creates Valid Let Statement Code', () => {

    test(`Check that valid code is produced`, () => {
        const letStatementAST: BaseStatementAST[] = [
            {
                type: 'LET_STATEMENT',
                name: 'x',
                value: 10,
                variableType: 'NUMBER'
            },
            {
                type: 'LET_STATEMENT',
                name: 'y',
                value: 20,
                variableType: 'NUMBER'
            }
            ,
            {
                type: 'FUNCTION_CALL_STATEMENT',
                name: 'console.log',
                args: ['ident_x', 'ident_y']
            }
        ]

        const actualCode = codeGenerator(letStatementAST);

        const expectedCode = `let x: number = 10; let y: number = 20;`;

        expect(actualCode).toBe(expectedCode);
    });
});