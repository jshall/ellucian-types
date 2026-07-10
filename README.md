# ellucian-types
Ad-hoc type definitions for Ellucian modules.

This repository contains semi-independent branches which contain [DefinitelyTyped](https://definitelytyped.org/)-style modules for various Ellucian packages.


## Usage
<mark>**Warning**: These definitions are incomplete. There are likely to be gaps that you need to fill in to achieve a clean build. Contributions are welcome!

To use these modules without modification you can include the desired branch(es) directly from GitHub.
```
npm install --save-dev github:jshall/ellucian-types#react-design-system github:jshall/ellucian-types#experience-extension-utils
```

However, since you are likely to need to augment these modules, here a two techniques you can use to manage those modifications.  
[npm link](#npm-link) and [git submodules](#git-submodules)

### npm link

### git submodules