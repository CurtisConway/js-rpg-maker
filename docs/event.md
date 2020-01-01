## Mixins

<dl>
<dt><a href="#Events">Events</a></dt>
<dd><p>This provides methods used for event handling. It&#39;s not meant to
be used directly.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#Event">Event(emitter, payload)</a></dt>
<dd><p>Event</p>
</dd>
</dl>

<a name="Events"></a>

## Events
This provides methods used for event handling. It's not meant to
be used directly.

**Kind**: global mixin  

* [Events](#Events)
    * [.on(event, handler)](#Events.on)
    * [.emit(eventName, payload)](#Events.emit)

<a name="Events.on"></a>

### Events.on(event, handler)
Add an event listener by event name

**Kind**: static method of [<code>Events</code>](#Events)  

| Param | Type |
| --- | --- |
| event | <code>string</code> | 
| handler | <code>function</code> | 

<a name="Events.emit"></a>

### Events.emit(eventName, payload)
Emit any event listener by event name

**Kind**: static method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>string</code> |  |
| payload | <code>object</code> | Optional data to pass along with the event |

<a name="Event"></a>

## Event(emitter, payload)
Event

**Kind**: global function  

| Param | Type |
| --- | --- |
| emitter | <code>object</code> | 
| payload | <code>object</code> | 

