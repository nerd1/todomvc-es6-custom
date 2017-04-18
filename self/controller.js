'use strict'

export default class{
    constructor($doc){
        this.$doc = $doc
        let $input = $doc.querySelector("#new-todo")
        this.$list = $doc.querySelector("#list")
        $input.addEventListener("change", this.onChangeInput.bind(this))
    }

    onChangeInput(ev){
        let $li = this.$doc.createElement("li")
        $li.innerText = ev.target.value
        this.$list.appendChild($li)
        $li.addEventListener("click", this.onClickLi.bind(this))
    }

    onClickLi(ev){
        this.$list.removeChild(ev.target)
    }
}