# Vue router bug reproduction

This is a very basic example of a page that tries to block the user
from navigating away from the application. It uses a `beforeEach`
event and if `blockStore.block` is set to true it will ask the user if they want to leave that page.

```javascript
router.beforeEach((to, from, next) => {
    if (blockStore.block) {
        if (!confirm("leave?")) {
            next(false);
            return;
        }
    }
    next();
});
```

On Vue router 3.x.x for Vue 2, when the user clicks on cancel we call for 
`next(false)` to stop the navigation and this puts the browser on a state
where it can't navigate to any other page until the user clicks back on the page (interact with it).

# Videos explaining it
