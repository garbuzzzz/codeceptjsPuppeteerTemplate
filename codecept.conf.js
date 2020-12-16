const { setHeadlessWhen } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
		Puppeteer: {
			restart: true,
			pressKeyDelay: 4,
			waitForNavigation: ['networkidle2'],
			waitForAction: 200,
			url: 'http://localhost',
			show: true,
			windowSize: '1920x850',
			chrome: {
				'args': [
					'--user-agent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36"',
					'--disable-setui-sandbox',
					'--ignore-certificate-errors',
					'--ignore-certificate-errors-spki-list',
					'--allow-insecure-localhost',
					'--allow-running-insecure-content',
					'--no-sandbox',
					'--start-maximized',
					'--disable-web-security',
					'--enable-potentially-annoying-security-features',
					'--enable-site-per-process',
					'--user-data-dir=C:\\Users\\jbUser\\AppData\\Local\\Google\\Chrome\\User Data Test',
				],
				ignoreHTTPSErrors: true,
			}
		}
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs_puppeteer_DDT',
  plugins: {
		pauseOnFail: {},
		retryFailedStep: {
			enabled: true,
			retries: 25,
			defaultIgnoredSteps: ['wait*', 'execute*', 'run*', 'have*', 'send*']
		},
		tryTo: {
			enabled: true
		},
		screenshotOnFail: {
			enabled: true
		},
		allure: {
			enabled: true
		}
  }
}