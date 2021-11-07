import path from 'path'
import fs from 'fs-extra'
import * as mocha from 'mocha'
import * as parser from '../../src/parser/parser'
import { expect } from 'chai'

const exampleFolder = path.resolve(__dirname, './examples')
mocha.describe.only('Check AST', function () {
  for (const filename of fs.readdirSync(exampleFolder).filter(f => f.endsWith('.input.sql'))) {
    mocha.it(filename, async function () {
      const inputFileName = path.join(exampleFolder, filename)
      const outputFileName = inputFileName.replace('input.sql', 'output.json')
      const [inputContent, outputContent] = await Promise.all([fs.readFile(inputFileName), fs.readJSON(outputFileName)])
      const parsed = parser.parseForESLint(inputContent.toString())
      expect(parsed).equal(outputContent)
    })
  }
})
