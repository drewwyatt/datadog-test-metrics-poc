import { Reporter, Context } from '@jest/reporters'
import { AggregatedResult } from '@jest/test-result'

export default class CustomReporter implements Pick<Reporter, 'onRunComplete'> {
  async onRunComplete(_: Set<Context>, results: AggregatedResult) {
    console.log('Your report is available!')
  }
}
