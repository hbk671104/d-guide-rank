import Frisbee from 'frisbee'

const frisbee = new Frisbee({
	baseURI: 'http://47.75.65.198:3000/api/',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
})

export default frisbee
