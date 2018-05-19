import Frisbee from 'frisbee'

const frisbee = new Frisbee({
	baseURI: 'localhost:8080',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
})

export default frisbee
