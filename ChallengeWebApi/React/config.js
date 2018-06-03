const ENV = 'local';

const configs = {
	local: {
		baseUrl: '',
		baseApiUrl: 'http://localhost:1337'
	},
	prod: {
		baseUrl: '',
		baseApiUrl: ''
	}
}

const envConfig=configs[ENV];

export default envConfig;