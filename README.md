# ngBlankUI - Modern Angular UI Components for faster development

ngBlankUI is a library for unification of development of visual components and user interaction on web applications, done with relative ease and speed. The goal of this library is to provide easy to use components built with the help of AngularJS and made available as AngularJS-native UI components.

[Click here](https://trello.com/b/P1lnxA60/ngblankui) for the trello board to track the progress of the repo.

## Components

### Buttons

``` html
<bui-button class="bui-btn" disabled="false">Button</bui-button>
```

The ```<bui-button>Button</bui-button>``` tag can be used to implement a button component in your application. The class attribute can be used to style the button  component as necessary for the application. The disabled attribute can be used to make the button active/disabled.

#### Theming options

##### Solid button classes

```html
.bui-btn-primary | .bui-btn-success | .bui-btn-warning | .bui-btn-danger
```

##### Hollow button classes

```html
.bui-btn-hollow-primary | .bui-btn-hollow-success | .bui-btn-hollow-warning | .bui-btn-hollow-danger
```

##### Rounded button classes

```html
.bui-btn-rounded
```

### Switches

``` html
<bui-switch id="termsncondition" ng-model="$ctrl.termsncondition"></bui-switch>
```

The ```<bui-switch></bui-switch>``` tag allows the implementation of a toggle, taking either ```true``` or ```false``` values. It has two required attributes -

```id``` allows providing an unique id for the switch component. This is required for the proper functioning of the switch.

```ng-model``` is the value set to the switch. This is also required because what are you going to do with a switch that doesn't give you anything to work with?

### Checkboxes

```html
<bui-checkbox id="termscheckbox" class="bui-chkbox-success" ng-model="$ctrl.termscheck">I agree to the T&C</bui-checkbox>
```

The ```<bui-checkbox></bui-checkbox>``` tag is a simple checkbox element which by default takes ```true``` or ```false``` values. It has three attributes -

```id``` gives an unique id to the checkbox. This is required for the proper functioning of the checkbox.

```ng-model``` is obvious.

```class``` is optional. The following classes can be set to the component -

* bui-chkbox-primary
* bui-chkbox-success
* bui-chkbox-warning
* bui-chkbox-danger

By default, the class ```bui-chkbox-primary``` is set to the component.

### Stepper

```html
<bui-stepper ng-model="$ctrl.count" diff="2"></bui-stepper>
```

The ```<bui-stepper>``` component creates an incrementer/decrement control. It lets users increase or decrease a value with a particular difference. This difference is specified with the ```diff``` attribute.

---

## Dev scripts

 *`npm run build` : runs Webpack, which will transpile, concatenate, and compress (collectively, "bundle") all assets and modules into `dist/bundle.js`. It also prepares `index.html` to be used as application entry point, links assets and created dist version of our application

 *`npm run serve` : starts a dev server via `webpack-dev-server`, serving the client folder

 *`npm run watch` : alias of `serve`

 *`npm start` : (which is the default task that runs when typing gulp without providing an argument) runs serve

 *`npm run component -- --name componentName` : scaffolds a new Angular component
