'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const test2 = new Test('test2');
    document.getElementById('test2').textContent = test2.text;
});

class Test {
    constructor(text) {
        this.text = text;
    }
}
