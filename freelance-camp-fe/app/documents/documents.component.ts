import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html',
	styleUrls: ['documents.component.css']
}) 

export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"
	documents: Document[] = [
		{ 
			title: 'my first doc',
			description: 'asdfasf',
			file_url: 'google.com',
			updated_at: '12/3',
			image_url: 'https://c1.staticflickr.com/7/6129/5964208782_8bb300bbaa_b.jpg'
		},
		{ 
			title: 'my second doc',
			description: 'asdfasf',
			file_url: 'google.com',
			updated_at: '123',
			image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Traditional_American_taco_-_Evan_Swigart.jpg/1280px-Traditional_American_taco_-_Evan_Swigart.jpg'
		},
		{ 
			title: 'my third doc',
			description: 'asdfasf',
			file_url: 'google.com',
			updated_at: '123',
			image_url: 'https://c1.staticflickr.com/8/7003/6757470443_78bfba1c69_b.jpg'
		},
	]
}