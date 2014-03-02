Labelit.js
====================

Easy to use and customize JavaScript demo that adds labels to your inputs if you use placeholders.

## Demos
Checkout http://ingojoseph.github.io/labelit.js for three demos.

If you like it please give me a star and follow me at [@IngoJoseph](https://www.twitter.com/IngoJoseph) for updates.

## How to use it?

### HTML
You need inputs with a placeholder and a id.
```
<input class="input" type="text" id="username" placeholder="Username" />
<input class="input" type="email" id="email" placeholder="Email" />
<input class="input" type="password" id="password" placeholder="Password" />
```
### CSS
You have to add this CSS. Customize it how you want it. The new label that will be added by the script has the class `.label`.

```
.hide {  
    opacity: 0;
    margin-top: -8px;
}
.input {
    display: block;
    width: 40%;
    outline: none;
    margin-bottom: 22px;
    border: 0;
    border-bottom: 2px solid #ddd;
}
.label {
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    transition: .4s margin-top;
    margin-top: -12px;
    color: #3498db;
}
```
### JavaScript
Just add my JavaScript to your site and it works. If you need some other options feel free to edit my simple script.
