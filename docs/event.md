<a name="Events"></a>

## Events
This provides methods used for event handling. It's not meant to
be used directly.

**Kind**: global mixin  

* [Events](#Events)
    * [.on(event, handler)](#Events.on)
    * [.emit(event, payload)](#Events.emit)

<a name="Events.on"></a>

### Events.on(event, handler)
Add an event listener by event name

**Kind**: static method of [<code>Events</code>](#Events)  

| Param | Type |
| --- | --- |
| event | <code>string</code> | 
| handler | <code>function</code> | 

<a name="Events.emit"></a>

### Events.emit(event, payload)
Emit any event listener by event name

**Kind**: static method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> |  |
| payload | <code>object</code> | Optional data to pass along with the event |

