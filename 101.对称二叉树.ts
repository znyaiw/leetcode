/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
	return isMirror(root, root);
};

function isMirror(ln: TreeNode | null, rn: TreeNode | null): boolean {
	// left & right: null
	if (!ln && !rn) return true;
	// left | right: null
	if (!ln || !rn) return false;
	// left.val === right.val -> child node
	if (ln.val === rn.val) {
		return isMirror(ln.left, rn.right) && isMirror(ln.right, rn.left);
	}
	// left.val !== right.val
	return false;
}
// @lc code=end

