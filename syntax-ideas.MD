@reduxAware
@initialState({initial: 'state'})
@reduxWrapper({ACTION1: 'ACTION1', ACTION2: 'ACTION2'}, reducer)
class MyApi {
	@actionType
	static ACTION3 = 'ACTION3';

	constructor(????) {
	}
}