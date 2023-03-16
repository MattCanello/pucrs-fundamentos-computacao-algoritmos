class OptionStack {
    constructor(selectElement) {
        this.container = selectElement;
        this.items = [];
        this.current = null;
        this.currentValue = -1;
    }

    push = function(text) {
        let option = document.createElement('option');
        option.text = text;
        option.value = this.currentValue = this.currentValue + 1;

        this.items.push(option);
        this.container.insertBefore(option, this.current);

        if (this.current != null) {
            this.current.selected = false;
        }

        this.current = option;
        option.selected = true;
        return option;
    }

    pop = function() {
        if (this.current == null) {
            return false;
        }

        this.current.selected = false;
        this.container.remove(this.current);
        this.current = null;

        this.items.pop();

        if (this.items.length > 0) {
            this.current = this.items[this.items.length - 1];
            this.current.selected = true;
        }

        return this;
    }

    getCurrent = function() {
        return this.current;
    }

    hasCurrent = function() {
        return this.current != null;
    }

    isCurrent = function(other) {
        if (this.current == null) {
            return false;
        }

        return this.current == other;
    }

    size = function() {
        return this.items.length;
    }

    clear = function() {
        while (this.current != null) {
            this.pop();
        }
    }
}