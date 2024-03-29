const LinkedListNode = (value) => {
  this.value = value;
  this.next = null;
}

const reverse = (head) => {
  if(!head || !head.next) return head;
  let tmp = reverse(head.next);
  head.next.next = head;
  head.next = undefined;
  return tmp;
}
