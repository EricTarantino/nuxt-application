To have a fully responsive website, we use multiple functionalities. They are 
- $refs (i)
- resize (ii)
- data variables (iii)
- binding to html properties (iv)

(v)
- body hmtl selector
- SCROLLBAR OVERFLOW hidden
- body scrollheight/ innerHeight/ scrollY

(vi)


(i)
Ref is used to get a dom element and to get the height or width of a dom element. Other elements can then depend on those heights or widths. 
For instance an element lower than a navbar and higher than a footer is retrieved by subtracting the sum of the height (this.$ref.name.clientHeight) of the
navbar and the footer from the visible window (window.innerHeight). In order to make the elements available through ref, the ref element needs a binding 
to a data-variable. Also, as the retrieval of properties from ref should happen within a try catch block. The type of the this.$ref.element must not be undefined
in that moment to prevent errors in the console. 

(ii)
Window events such as resize call a function, especially the resize function in which the responsive properties such as height or width are adjusted according
to dependencies on other elements or according to functions. The latter are usual linear functions to control margin or width. Two point are sufficient to establish
such a function, which we can call the 'responsive-ratio', they can be defined over the inner width or inner height. Other dependencies such as screen rotation or
sensors are thinkable, e.g. light sensors to define colors. There is room to grow the thought. 

(iii, iv)
Reactive data variables are set in the resize handle, resize handler call other methods for this purpose too. The variables get utilized in the html properties. 
E.g. such as <div :style='height: ' + myHeightVariable + 'px; width :' + myWidthVariables + 'px;'></div>. Another choice would be to use functions, I find 
variables provide a smoother performance. 


(v)  html selector to select dom elements to ( no jquery please), overflow controls the sidebar, scrollHeight is the scrollable field - a body property, innerHeight is the 
visible Hight in the window, can be taken from mounted or created. From mounted is usually safe.

After controlling the footer, bottom and elements, we can also control the elements themselves.  in the UI.

(vi) 
We can then use a library such as bootstrap or vuetify for the gridsystem and styling and for responsive widget/ components. 

In a newer version, we use vuex variables and default.vue for the responsiveness. Also javascript selectors to toggle the scrollbar betwween visible and invisible.

A component passes their element heights, which we observe via use of refs, to the vuex store. Default observes those heights and knows the body scrollbarheight and
the window innerheight. If the component height is greater than the window innerheight, then the scrollbar is visible and elsewise it's not visible. 

Body methods:


Window methods:
window.scrollTo(xCoord, yCoord)
window.innerheight

Element properties:
<element-name>.clientHeight

Element javascript selector:
document.querySelector("body")
document.getElementsByClassName('v-application--wrap')
document.getElementsByClassName('v-application--wrap')

We use the height handler in default.vue, one for each component which measure the component height and know the 
window height, those get compared and determine the visibility of the scrollbar.
The one for the active page that is route, gets called in the resize handler in the default route. 

Watchers over the component height, the height is stored in vuex, call the height handler as well. 

So a change in component height or a change in the window size fires the height handlers. 
A size in the window additionaly adjusts the sidebar height and also the footer position. 

A scroll action adjusts the footer position as the footer is positioned via the css top property. The adjustment changes the value.

We also remove the shadow from the sidebar via class selector. 
let doc = document.getElementsByClassName('v-navigation-drawer')
console.log(doc[0], " doc")
doc[0].classList.remove("v-navigation-drawer--is-mobile")

The navigation drawer works as expected with elevation="0" and also with enable-resize-watcher, however the elevation itself has no effect.
The breakpoint to still have the navigation drawer gets set to mobile-breakpoint="340", so this is 340 pixel. That is, on fresh reload 
or on page refresh (e.g. via key), the naviation drawer stays hidden. Unexpectingly the navigation drawer is not hidden when resizing over the
breakpoint, especially smaller resize than the breakpoint. So the v-if function still gets used to have a clear distinguisher for mobile 
navigation menu and the standard navigation menu. 

We set the footer height with a javascript id selector which reads out the footer height. The footer height is then set accordingly for a parent 
that determines the color, to wrap the child in a uniform color. This takes place in the end of resize. 