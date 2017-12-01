# About Me 

1. Pre-Thinkful
2. As a student
3. Now - AG

---
## Why DevTools?

### Ask the room 

1. Productivity
  - Using Chrome DevTools will allow you to prototype/try things out in the browser without context switching back-and-forth between your editor and the browser.

2. Professionalism
  - Chances are the pros are using developer tools _every. single. day._ Knowing your way around the tooling makes you look like you've been developing a lot longer than 3-6 months.

3. Deeper Insight
  - There's a lot of things that you can inspect/debug using developer tools that you wouldn't be able to profile/inspect otherwise.
  - You can inspect _any_ page...so if you see something you like on a website, you can actually inspect _exactly_ how it is done.

---

## Example: HTML

## Things to demo
1. selecting an element
- The current element will be highlighted
- the current element's padding/margin will also be highlighted
2. edit an element's attributes -- if it's in the DOM, you can change it!
  - change image `src` to be https://pbs.twimg.com/profile_images/848471660860538880/pevXVsIp.jpg

3. Adding an element to the DOM
  - add a `header` element
  - add an `a` tag within the header

  - href: `https://thinkful.com`
  
  ```html
    <header>
      <a href="https://thinkful.com">see thinkful!</a>
    </header>
  ```

4. Shortcuts
  - arrow keys to navigate faster

---

## Example Responsive Design

1. Toggle responsive mode
1. View different breakpoints
  - Via `responsive`
  - Quick View
1. Device Emulator
  - Make the point that **is not fully suitable for testing, can manage sizes but not separate browsers**
  - however, still useful for testing viewport sizes
1. Changing the Percentage Size to view larger screens

---
## Example: CSS

### Things to demo
1. Viewing classes applied to an element
- toggle rules on/off
1. Adding/toggling classes
- add `border-success` to the first element
1. Adding a new rule
- `+` icon
- rule to add -- `:hover` effect (`border-danger & box-shadow`)
1. Toggling state (`:hov`)
1. Viewing a rule's origin
- note RE: `inspector-stylesheet`
1. Viewing _all_ rules applied to a single element
