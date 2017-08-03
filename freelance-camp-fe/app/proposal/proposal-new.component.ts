import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';

@Component({
	moduleId: module.id,
	selector: 'porposal-new',
	templateUrl: 'porposal-new.component.html',
	styleUrls: ['proposal-new.component.css'],
	providers: [ ProposalService ]
})

export class ProposalNewComponent {
	proposal = new Proposal;
	submitted: boolean = false;

	constructor(
		private porposalService: ProposalService
	) {}

	createProposal(proposal: Proposal) {
		this.submitted = true;
		this.porposalService.createProposal(proposal)
				.subscribe(data => { return true }, 
					error => { console.log("Error saving Proposal");
					return Observable.throw(error);
					}
				);
	}
}