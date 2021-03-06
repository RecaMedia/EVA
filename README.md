EVA
===

I decided to create the EVA script after seeing how elements would appear on http://www.kriesi.at/. I thought it was a cool idea and wanted to replicate it. I originally tried searching to see if there was an open source script already available. After failing to find any, I decided "eh, I'll just try making one."

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

<div class="box">
	<div class="so" style="margin-left:25%;"></div>
</div>

<div class="box">
	<div class="mo" style="margin-left:50%;"></div>
</div>
```

**Initiate elements by doing the following prior to the closing body tag:**

```html
<script>
var yo = new eva();

yo.init(1000,200);
yo.add('yo','jump');
yo.add('so','zoomspin');
yo.add('mo','fade');
</script>
```

**You must fill in the following:**
```javascript
yo.init(/*Animation Length*/,/*Delay between Animations*/); //Do this once.
yo.add(/*Element Class*/,/*Animation Option*/); //Add as many elements as you'd like.
yo.add(...); //Etc.
```
Animation Options
=================

**jump** - Fades in with a bouncing action.

**fade** - Simply fades in.

**zoom** - Does a zoom animation.

**zoomspin** - Zoom animation with a 360 spin.
