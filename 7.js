function singleLinkedList(list) {
    let curr = list;
    let prev = null;
    
    while (curr !== null) {
        let next = curr.n;
        curr.n = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}

const list = {
    v: 1,
    n: {
        v: 2,
        n: {
            v: 3,
            n: {
                v: 4,
                n: null
            }
        }
    }
}

console.log(`singleLinkedList(${JSON.stringify(list)})`, singleLinkedList(list))
