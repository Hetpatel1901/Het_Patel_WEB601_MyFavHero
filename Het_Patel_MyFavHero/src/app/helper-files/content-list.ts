import { Content } from "./content-interface";

export class ContentList {
    private _items: Content [];

    constructor() {
        this._items = [];
    }

    getItems(): Content [] {
        return this._items;
    }

    addFunction(contentItem: Content) {
        return this._items.push(contentItem);
    }

    getLength(){
        return this._items.length;
    }

    printIndex(index: number): string {
        let readerFriendlyHtml = `<div><p>Title: ${this._items[index].title}</p>
        <p>Description: ${this._items[index].description}</p><p>Creator: ${this._items[index].creator}</p></div>`;

        return readerFriendlyHtml;
    }
}