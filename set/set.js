class OptionSet {
    constructor(selectElement) {
        this.container = selectElement;
        this.options = new Set();
    }

    add = function(text) {
        if (this.options.has(text)) {
            return false;
        }

        this.options.add(text);

        let option = document.createElement('option');
        option.text = text;
        option.value = text;

        this.container.add(option);

        return true;
    }

    remove = function() {
        for (let i = this.container.children.length - 1; i >= 0; i--) {
            let option = this.container.children[i];

            if (option.selected) {
                this.container.removeChild(option);
                this.options.delete(option.value);
            }
        }
    }

    size = function() {
        return this.options.length;
    }

    clear = function() {
        for (let i = this.container.children.length - 1; i >= 0; i--) {
            let option = this.container.children[i];

            this.container.removeChild(option);
            this.options.delete(option.value);
        }
    }
}