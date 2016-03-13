import { expect } from 'chai';
import log from 'picolog';

import reduxAware from './redux-aware';

describe('reduxAware', () => {
	it('is a decorator function that makes classes redux-aware', () => {
		expect(reduxAware).to.not.equal(undefined);
		expect(reduxAware).to.be.a('function');
	});
});
