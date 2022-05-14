export const deserializeBT = (arr: (number | null)[]): Node | null => {

  // remove second if cause what if first element is null and the rest are valid
  //  || arr[0] == null */
  if (!arr.length) {
    return null;
  }

  const root = new Node(arr.shift()!);
  const queue: Node[] = [root];
  while (arr.length) {
    let node = queue.shift(), val: number | null | undefined;
    if (!node) {
      return root;
    }

    //Set the left and right child values
    node.left = (val = arr.shift()) || val === 0 ? new Node(val) : null;
    node.right = (val = arr.shift()) || val === 0 ? new Node(val) : null;
    
    //Add the left and right child to the queue
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }

  return root;
};


/**
 * @param {Node} root
 * @param {Node} firstInput
 * @param {Node} secondInput
 */
export const lowestCommonAncestor = (root: Node, firstInput: Node, secondInput: Node): Node => {
  if (!root || !root.left || !root.right || root === firstInput || root === secondInput) return root;
  var resL = lowestCommonAncestor(root.left, firstInput, secondInput);
  var resR = lowestCommonAncestor(root.right, firstInput, secondInput);
  return (resL && resR) ? root : (resL || resR);
};

export default class Node {
  public value: number;
  public left: Node | null = null;
  public right: Node | null = null;

  constructor(val: number) {
    this.value = val;
  }
}
