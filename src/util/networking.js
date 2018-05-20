import Frisbee from 'frisbee'

const frisbee = new Frisbee({
	baseURI: `http://${__DEV__ ? 'localhost' : '47.75.65.198'}:9000/api/`,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
})

export default frisbee
