import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'porposal-new',
	templateUrl: 'porposal-new.component.html',
	styleUrls: ['proposal-new.component.css']
})

export class ProposalNewComponent {
	proposal = new Proposal;
}