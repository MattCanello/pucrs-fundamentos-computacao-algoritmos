class OptionQueue {
    constructor(selectElement) {
        this.container = selectElement;
        this.items = [];
        this.current = null;
        this.currentValue = -1;
    }

    add = function(text) {
        let option = document.createElement('option');
        option.text = text;
        option.value = this.currentValue = this.currentValue + 1;

        this.items.push(option);
        this.container.add(option);

        if (this.current != null) {
            return option;
        }
        
        this.current = option;
        option.selected = true;
        return option;
    }

    remove = function() {
        if (this.current == null) {
            return false;
        }

        this.current.selected = false;
        this.container.remove(this.current);
        this.current = null;

        this.items.shift();

        if (this.items.length > 0) {
            this.current = this.items[0];
            this.current.selected = true;
        }

        return true;
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
            this.remove();
        }
    }
}