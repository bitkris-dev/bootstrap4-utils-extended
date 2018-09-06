# bootstrap4-utils-extended

Extend the Bootstrap 4 Utilities with new classes!

This repository wants to extend the useful Bootstrap 4 utilities with some new special classes. This is what is available:

- border directions based on **$grid-breakpoints**

- svg fills based on **$theme-colors**
- offsets based on **$spacers**, using `transform: translate` property
- box and text shadows (extra custom variables!)
- text utilities
- general cursor utilities

<br/>

> ##### About `$grid-breakpoints`, `$theme-colors` and `$spacers`
>
> These maps are included with default values in [Bootstrap 4](https://github.com/twbs/bootstrap) and can be easily modified and overridden with custom ones in SCSS. This mini-framework extension is based on those variables and it's supposed to be used in conjuction with Bootstrap 4 or at least its utilities.
>
> The classes are generated and structured following the same scheme of Bootstrap 4 utils. (some are _fully hyphenated_ and some more complex ones are _partially hyphenated_, meaning that the *direction* property is merged with the class base name)

<br/>

------

<br/>

# How to use

Install it:

`yarn add bootstrap4-utils-extended`
<br/>
or
<br/>
`npm -i bootstrap4-utils-extended`

<br/>

Add to your project:

```scss
@import "./custom_variables.scss";
@import "bootstrap4-utils-extended/b4ue.scss";
@import "bootstrap/scss/_utilities.scss";
```
> ##### Instructions
>- First create an SCSS with your custom **$theme-colors**, **grid-breakpoints** and **$spacers** and import it
>- Then add the **bootstrap4-utils-extended** SCSS (**bootstrap** variables are already included here)
>- And finally add **bootstrap** utilities

<br/>

------

<br/>

# Documentation

<br/>

## Borders

You can set a single border side based on the breakpoints specified in the **$grid-breakpoints** map and colors in the **$theme-colors** map.

The general structure is _fully hyphenated_ as the following:
```border-{direction}-{breakpoint}-{color}```

Where:
*`{direction}` corresponds to one of these values: [`top`, `bottom`, `left`, `right`]

*`{breakpoint}` corresponds to a value in **$grid-breakpoints** map

*`{color}` corresponds to a value in **$theme-colors** map


Example: `border-top-lg-primary`

<br/>

## SVG Fills

You can fill an svg with a specific color in the **$theme-colors** map.

The general structure is _fully hyphenated_ as the following:
```svg-{color}```

Where:
*`{color}` corresponds to a value in **$theme-colors** map


Example: `svg-primary`

<br/>

## Offsets

With offsets you can move around an element based on a direction, a breakpoint in the **$grid-breakpoints** map and a size in the **$spacers** map.

The general structure is _partially hyphenated_ as the following:
```off{direction}-{breakpoint}-{size}```

> Please, note that the direction is merged with `off` and not hyphenated from it, following Bootstrap 4 scheme.


Where:

*`{direction}` corresponds to one of these values: [`t`, `b`, `l`, `r`] (_top, bottom, left, right_)

*`{breakpoint}` corresponds to a value in **$grid-breakpoints** map

*`{size}` corresponds to a value in **$spacers** map



Example: `offt-md-5`

<br/>

## Box-shadow and text-shadow

These classes are based on the **$shadows** custom and overridable map. It already has some default values (mainly for building purposes) and it's recommended to replace them.

The general structure is _fully hyphenated_ as the following:
```{rule}-shadow-{index}```

Where:
*`{rule}` corresponds to one of these values: [`box`, `text`]

*`{index}` corresponds to a value in **$shadows** map


Example: `box-shadow-1` or `text-shadow-2`

<br/>

## Text utilities

You can use one of the following classes to edit text styles:

`font-weight-extrabold` (_sets font-weight to 900_)

`text-underlined` (_adds underlined text-decoration_)

<br/>

## General cursor utilities

You can use one of the following classes to manipulate selection and cursor functionalities:

`no-overflow` (_disables overflow_)

`no-pointer` (_disables any pointer_)

`no-pointer-cascade` (_disables any pointer, including children elements_)

`cursor-pointer` (_enables cursor pointer_)

`disable-select` (_disables element selection with cursor_)

<br/>

------

<br/>

# How to contribute

Fork this repo, clone it on your machine, work on the **dev** branch and create a pull request.
<br/><br/>
To work on it, it's required to execute a `yarn install`.
<br/>
To build it simply execute `yarn build`.

<br/>

------

<br/>

# Any doubt?

If you are unsure about something, please feel free to [create an issue](https://github.com/bitkris-dev/bootstrap4-utils-extended/issues/new) and visit **Bootstrap 4 [Utilities documentation](https://getbootstrap.com/docs/4.0/utilities/borders/)**.

<br/>

This repository wants to be a substitute for my previous utilities framework called [monomer-css](https://github.com/bitkris-dev/monomer-css), now discontinued because conceptually very similar to Bootstrap 4 Utilities. Adding the latter and this package to your project, you can cover the same monomer-css functionalities with a better and lighter structure.