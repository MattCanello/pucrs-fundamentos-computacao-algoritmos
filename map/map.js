class OptionMap {
    constructor(selectElement) {
        this.container = selectElement;
        this.options = new Map();
    }

    add = function(key, value) {
        let option = this.options.get(key);

        if (option) {
            option.text = key + " - " + value;
            return true;
        }

        option = document.createElement('option');
        option.text = key + " - " + value;
        option.value = key;

        this.options.set(key, option);
        this.container.add(option);

        return true;
    }

    remove = function() {
        for (let i = this.container.children.length - 1; i >= 0; i--) {
            let option = this.container.children[i];

            if (!option.selected) {
                continue;
            }

            if (this.options.delete(option.value)) {
                this.container.removeChild(option);
            }
        }
    }

    size = function() {
        return this.options.length;
    }

    clear = function() {
        for (let i = this.container.children.length - 1; i >= 0; i--) {
            let option = this.container.children[i];

            if (this.options.delete(option.value)) {
                this.container.removeChild(option);
            }
        }
    }
}