# Visualizing "Find the Least Common Ancestor of a Binary Tree"

The goal of the project is to visualize an algorithm that you will implement to find the Least Common Ancestor (LCA) of a Binary Tree (NOTE: not a BST) when given a tree and two nodes in that tree. The least common ancestor is defined as the closest relative to both of those nodes. For example, assume we have the following tree:
```
     3
    / \
   9   7
  / \   \
 2   6   4
```
For this tree, the lowest common ancestor for `2` and `6` is `9` because it is the closest relative to both of those. For `6` and `7` the answer is `3` because that is the closest relative.

## Requirements
1. The app should have an input field that allows us to input a binary tree as an array and convert it into the above tree structure. The method for doing this conversion is already defined in the `Node` file (feel free to implement your own, but you should be using the `Node` class as is without modification for this). It takes in an as input an array of the form `[3, 9, 7, 2, 6, null, 4]` which represents a level order traversal from left to right.
2. The app should take a tree represented as a `Node` and visualize that tree similar to the output above (or however you wanna visualize it, get creative!)
3. The app should take in two numbers as input and return the LCA of those two numbers in the tree
4. The algorithm you write in step 3 should be use to visualize the iterations in the tree viz. eg. at each step, highlight or mark what you're currently processing and show how the algorithm finds the LCA

## Assumptions
1. The input is a Binary Tree, not a Binary Search Tree
2. The values in the tree are unique, so you don't need to worry about duplicates
3. A `Node` DOES NOT have pointers to its parents. If you need to add other properties to aid with visualization you can do that, but the properties should not aid in finding the LCA


## Bonus
This isn't a requirement, but feel free to get creative with the visualization. Add styling, css animations, w/e you want.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
