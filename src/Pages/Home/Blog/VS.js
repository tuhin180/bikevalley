import React from "react";

const VS = () => {
  return (
    <div className="p-10">
      <h1 className="mb-10 text-3xl text-center"> React vs Vue vs Angular</h1>
      <h1 className="text-xl font-bold">React</h1>
      <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
        React doesn’t enforce a specific project structure, and as you can see
        from the official “Hello World” example below, you can start using React
        with just a few lines of code. ReactDOM.render(
        <h1>Hello, world!</h1>, document.getElementById('root') ); React can be
        used as a UI library to render elements, without enforcing a specific
        project structure, and that’s why it’s not strictly a framework. React
        Elements are the smallest building blocks of React apps. They are more
        powerful than DOM elements because the React DOM makes sure to update
        them efficiently whenever something changes. Components are larger
        building blocks that define independent and reusable pieces to be used
        throughout the application. They accept inputs called props and produce
        elements that are then displayed to the user. React is based on
        JavaScript, but it’s mostly combined with JSX (JavaScript XML), a syntax
        extension that allows you to create elements that contain HTML and
        JavaScript at the same time. Anything you create with JSX could also be
        created with the React JavaScript API, but most developers prefer JSX
        because it’s more intuitive.
      </p>
      <h1 className="text-xl font-bold">vue </h1>
      <p>
        The Vue.js core library focuses on the View layer only. It’s called a
        progressive framework because you can extend its functionality with
        official and third-party packages, such as Vue Router or Vuex, to turn
        it into an actual framework. Although Vue is not strictly associated
        with the MVVM (Model-View-ViewModel) pattern, its design was partly
        inspired by it. With Vue, you’ll be working mostly on the ViewModel
        layer, to make sure that the application data is processed in a way that
        allows the framework to render an up-to-date View. Vue’s templating
        syntax lets you create View components, and it combines familiar HTML
        with special directives and features. This templating syntax is
        preferred, even though raw JavaScript and JSX are also supported.
        Components in Vue are small, self-contained, and can be reused
        throughout the application. Single File Components (SFCs) with the .vue
        extension contain HTML, CSS, and JavaScript so that all relevant code
        resides in one file. SFCs are the recommended way to organize code in
        Vue.js projects, especially larger ones. Tools such as Webpack or
        Browserify are required to transpile SFCs into working JavaScript code.
      </p>
      <h1 className="text-xl font-bold">Angular</h1>
      <p>
        In this article, I’m discussing Angular 2, and not the first version of
        the framework which is now known as AngularJS. AngularJS, the original
        framework, is an MVC (Model-View-Controller)) framework. But in Angular
        2, there’s no strict association with MV*-patterns as it is also
        component-based. Projects in Angular are structured into Modules,
        Components, and Services. Each Angular application has at least one root
        component and one root module. Each component in Angular contains a
        Template, a Class that defines the application logic, and MetaData
        (Decorators). The metadata for a component tells Angular where to find
        the building blocks that it needs to create and present its view.
        Angular templates are written in HTML but can also include Angular
        template syntax with special directives to output reactive data and
        render multiple elements, among other things. Services in Angular are
        used by Components to delegate business-logic tasks such as fetching
        data or validating input. They are a distinct part of Angular
        applications. While Angular doesn’t enforce their use, it’s highly
        suggested to structure apps as a set of distinct services that can be
        reused. Angular is built in TypeScript, so its use is recommended to get
        the most seamless experience, but plain JavaScript is also supported.
      </p>
    </div>
  );
};

export default VS;
