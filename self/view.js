'use strict'

const renderItem = Symbol()
const onChangeInput = Symbol()

export default class{
    constructor($doc){
        this.$doc = $doc
        this.$list = this.$doc.querySelector(".todo-list")

        let $input = $doc.querySelector(".new-todo")
        $input.addEventListener("change", this[onChangeInput].bind(this))
    }

    [onChangeInput]({target}){
        // fire event, invoke subscriber
        let item = {
            id: Date.now(),
            title: target.value.trim()
        }
        this.onAddItemHandler &&
        this.onAddItemHandler(item) &&
        (this.$input.value = '')
    }

    registerAddItemHandler(handler){
        this.onAddItemHandler = handler
    }

    renderItems(items){
        this.$list.innerHTML = items.map(this[renderItem]).join('')
    }

    addItem(item){
        console.log("additem in view", item)

        let $elem = document.createElement('div')
        $elem.innerHTML = this[renderItem](item)
        this.$list.appendChild($elem.childNodes[0])
        
    }

    // private function
    [renderItem](item){
        return `<li data-id="${item.id}">
            <label>${item.title}</label>
            <button class="destroy"></button>
        </li>`;
    }
}