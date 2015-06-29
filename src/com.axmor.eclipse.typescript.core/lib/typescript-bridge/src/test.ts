/// <reference path="../node/node.d.ts"/>
/// <reference path="./log.ts" />
/// <reference path="./service.ts" />

import log = require('./log')

// activity indicator
var activity = false
import service = require('./service')

var tss: service.TSService = new service.TSService

log.debug(tss.getVersion())
log.debug(tss.getReferences('B.ts'));
log.debug(tss.getSemanticDiagnostics('A.ts'));
//tss.getScriptLexicalStructure('module1.ts');
//tss.setFileContent('module1.ts', 'class TestM {}');
//tss.getScriptLexicalStructure('module1.ts');
//tss.getScriptLexicalStructure('test_ts2.ts');
//tss.addFile('module1.ts');
//log.debug(tss.getCompletionsAtPosition('module2.ts', 100));
//log.debug(tss.getDefinitionAtPosition('module2.ts', 100));
//log.info(tss.getFormattingEditsForDocument('module2.ts', 0, 500, { "ConvertTabsToSpaces":true, "IndentSize":4, "InsertSpaceAfterCommaDelimiter":true, "InsertSpaceAfterFunctionKeywordForAnonymousFunctions":false, "InsertSpaceAfterKeywordsInControlFlowStatements":true, "InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis":false, "InsertSpaceAfterSemicolonInForStatements":true, "InsertSpaceBeforeAndAfterBinaryOperators":true, "NewLineCharacter":"\r\n", "PlaceOpenBraceOnNewLineForControlBlocks":false,"PlaceOpenBraceOnNewLineForFunctions":false,"TabSize":4}));
//tss.getScriptLexicalStructure('module2.ts');
//tss.setFileContent('module2.ts', 'class 1TestM {}');
//log.debug(tss.getSignatureAtPosition('module2.ts', 107));
//log.debug(tss.getVersion());
/*
log.debug(JSON.stringify({ 'model' : tss.getSyntaxTree('module2.ts') }, 
              	function(key, value) {
              		//log.debug(key);
              		//log.debug(value);
  					//if (key == '_sourceUnit') return null;
  					//if (key == 'syntaxTree') return null;
  					if (key == 'members') {
  						return undefined;
  					}
  					if (value && (key == 'parent' || key == 'name')) {
						if (key == 'name' && value) {
							return {text: value.text ? value.text : "", filename: value.filename};
						}
						if (key == 'parent' && value) {
							if (value.name) {
	  							return {name: value.name.text, filename: value.filename};
	  						} else {
	  							return {filename: value.filename};
	  						}
						}
						return value;
  					}
  					return value;
				})
);
*/
/*
log.error(tsc.compile('new_file.ts', 
    {
      "allowAutomaticSemicolonInsertion":true,
      "allowBool":false,
      "allowModuleKeywordInExternalModuleReference":false,
      "codeGenTarget":1,
      "gatherDiagnostics":false,
      "generateDeclarationFiles":false,
      "mapRoot":"",
      "mapSourceFiles":true,
      "moduleGenTarget":0,
      "noImplicitAny":false,
      "noLib":false,
      "noResolve":false,
      "outDirOption":"target",
      "outFileOption":"",
      "propagateEnumConstants":false,
      "removeComments":false,
      "sourceRoot":"",
      "updateTC":false,
      "useCaseSensitiveFileResolution":false,
      "watch":false}));
*/
