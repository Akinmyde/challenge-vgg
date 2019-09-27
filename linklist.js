const insertNodeAtPosition = (head, data, position) => {
    var parent = null;
    var current = head;
    var index = 0;

    while (current && index < position) {
        parent = current;
        current = current.next;
        index++;
    }

    if (current) {
        let child = new this.Node(current.data);
        child.next = current.next;

        current.data = data;
        current.next = child;
    }
    return head;
}