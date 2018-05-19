import frisbee from 'util/networking'

const createRanking = async (params = {}) => {
	return await frisbee.post('/rankings', params)
}

const inviteVoter = async (params = {}) => {
	return await frisbee.post('/invite-voter', params)
}

const vote = async (params = {}) => {
	return await frisbee.post('/vote', params)
}

const voteInfo = async id => {
	return await frisbee.get(`/rankings/${id}`)
}

const rankings = async () => {
	return await frisbee.get('/rankings')
}

export { createRanking, inviteVoter, vote, voteInfo, rankings }
