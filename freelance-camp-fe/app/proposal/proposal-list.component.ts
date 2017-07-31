import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(15, 'Abc Company', 'http://stuff.com', 'ruby and rails', 150, 120, 15, 'asdf@asdf.com')
	proposalTwo: Proposal = new Proposal(16, 'Abcde Company', 'http://stuffs.com', 'ruby and rails', 150, 120, 15, 'asdf@asdf.com')
	proposalThree: Proposal = new Proposal(17, 'Abcd Company', 'http://stuffer.com', 'ruby and rails', 150, 120, 15, 'asdf@sdf.com')

	proposals: Proposal[] = [
		this.proposalOne,
		this.proposalTwo,
		this.proposalThree
		]
}