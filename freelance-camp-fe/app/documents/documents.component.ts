import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html'
}) 

export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"
	documents: Document[] = [
		{ 
			title: 'my first doc',
			description: 'asdfasf',
			file_url: 'google.com',
			updated_at: '123',
			image_url: 'http://google.com'
		},
		{ 
			title: 'my second doc',
			description: 'asdfasf',
			file_url: 'google.com',
			updated_at: '123',
			image_url: 'http://google.com'
		},
		{ 
			title: 'my third doc',
			description: 'asdfasf',
			file_url: 'google.com',
			updated_at: '123',
			image_url: 'http://google.com'
		},
	]
}