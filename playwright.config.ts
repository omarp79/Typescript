import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
    // Look for tests in the `tests` folder and match any `.test.ts` files.
    testDir: 'tests',
    testMatch: ['**/*.test.ts'],
    timeout: 60000,
    use: {
        actionTimeout: 100000,
        headless: false,
        screenshot: 'off',
        video: 'off'
    },
    retries: 0,
    reporter: [['dot'], ['json', {
        outputFile: 'report/test-results.json'
    }], ['html', {
        open: 'never'
    }]]
}

export default config