import * as core from '@actions/core'
import { Reporter as JestReporter, Context } from '@jest/reporters'
import { AggregatedResult } from '@jest/test-result'
import isCI from 'is-ci'

type Reporter = Pick<JestReporter, 'onRunComplete'>

const OUTPUT_PROPS: ReadonlyArray<keyof AggregatedResult> = [
  'numFailedTests',
  'numFailedTestSuites',
  'numPassedTests',
  'numPassedTestSuites',
  'numPendingTests',
  'numTodoTests',
  'numPendingTestSuites',
  'numRuntimeErrorTestSuites',
  'numTotalTests',
  'numTotalTestSuites',
  'snapshot',
  'startTime',
  'success',
  'wasInterrupted',
]

class ActionsReporter implements Reporter {
  async onRunComplete(_: Set<Context>, results: AggregatedResult) {
    core.info('Sending aggregate results to ouput...')
    for (let key of OUTPUT_PROPS) {
      core.info(`Setting ${key}...`)
      core.setOutput(key, results[key])
    }
    core.info('Done!')
  }
}

class FallbackReporter implements Reporter {
  async onRunComplete() {
    console.log('CI run not detected, skipping...')
  }
}

export default isCI ? ActionsReporter : FallbackReporter
