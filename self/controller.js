'use strict'

let items

export default class{
    constructor(view){
        this.view = view

/*        items = this.getItems()
        view.renderItems(items)
*/
        view.registerAddItemHandler(this.onAddItem.bind(this))

    }

    onAddItem(item){
        // save to db
        // render item in view
        console.log(item)
        this.view.addItem(item)
    }

}