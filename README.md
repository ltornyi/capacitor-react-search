# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

    npx create-react-app capacitor-react-search --template typescript

## Additional dependencies

    yarn add react-bootstrap
    yarn add bootstrap
    yarn add react-router-dom
    yarn add --dev @types/react-router-dom
    yarn add lodash
    yarn add --dev @types/lodash

## First iteration

Added search functionality.
Added MainNav and search route.
Adjusted test.

This is commit "First iteration"

## Prepare for iOS development

    brew install cocoapods

install xcode from the app store

    xcode-select --install

This can be useful if later xcodebuild complains about the command line tools instance:

    sudo xcode-select -s /Applications/Xcode.app/Contents/Developer

Set up your developer account in Xcode in preferences->Accounts

## Add capacitor to the project

    yarn add @capacitor/core
    yarn add --dev @capacitor/cli

    npx cap init

Name of your app: capacitor-react-search
Package ID: com.ltornyi.capacitorReactSearch

## Add iOS platform to the project

    yarn add @capacitor/ios
    npx cap add ios

    cd ios/App
    pod install

## Create first build and sync to native project

    yarn build
    npx cap sync

## Run native project

    npx cap open ios

or

    npx cap run


## Available Scripts

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3500](http://localhost:3500) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
