const LinkedListNode = value => {
  this.value = value;
  this.next = null;
};

const reverse = (head) => {
  let node = head,
    previous,
    tmp;

  while (node) {
    tmp = node.next;
    node.next = previous;
    previous = node;
    node = tmp;
  }
  
  return previous;
}
