import frisbee from 'util/networking'

const createRanking = async (params = {}) => {
	return await frisbee.post('/api/rankings', params)
}

const inviteVoter = async (params = {}) => {
	return await frisbee.post('/api/invite-voter', params)
}

const vote = async (params = {}) => {
	return await frisbee.post('/api/vote', params)
}

const voteInfo = async id => {
	return await frisbee.get(`/api/vote-info/${id}`)
}

const rankings = async () => {
	return await frisbee.get('/api/rankings')
}

const rankItem = async id => {
	return await frisbee.get(`/api/rankings/${id}`)
}

export { createRanking, inviteVoter, vote, voteInfo, rankings }
