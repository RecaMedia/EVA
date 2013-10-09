EVA
===

Elements Visibly Appear script

Instructions
============

**Step 1:**
Add jQuery and jQuery UI dependencies within the HEAD tag.

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>
<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js" type="text/javascript"></script>
```

**Step 2:**
This is the element we will animate:

```html
<div class="box">
	<div class="yo"></div>
</div>
```

Initiate elements by doing the following prior to the closing body tag:

```html
<script>
var yo = new eva();
yo.init('yo','jump',2500);
</script>
```

You must fill in class name, animation option, and timing.

Animation Options
=================

**jump** - Fades in with a bouncing action.

**fade** - Simply fades in.

**zoom** - Does a zoom animation.

**zoomspin** - Zoom animation with a 360 spin.
