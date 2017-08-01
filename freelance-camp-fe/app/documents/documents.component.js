"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DocumentsComponent = (function () {
    function DocumentsComponent() {
        this.pageTitle = "Document Dashboard";
        this.documents = [
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
        ];
    }
    DocumentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'documents',
            templateUrl: 'documents.component.html',
            styleUrls: ['documents.component.css']
        })
    ], DocumentsComponent);
    return DocumentsComponent;
}());
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map