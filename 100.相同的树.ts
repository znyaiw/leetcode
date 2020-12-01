/*
 * @lc app=leetcode.cn id=100 lang=typescript
 *
 * [100] 相同的树
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
	// p & q: All Empty
	if (!p && !q) return true;
	// p || q: One Empty, another Not
	if (!p || !q) return false;
	// p & q: All Not Empty
	return (p.val === q.val)
		&& isSameTree(p.left, q.left)
		&& isSameTree(p.right, q.right);
};
// @lc code=end

