<a name="TextScene"></a>

## TextScene ⇐ <code>Scene</code>
TextScene

**Kind**: global class  
**Extends**: <code>Scene</code>  

* [TextScene](#TextScene) ⇐ <code>Scene</code>
    * [new TextScene(params)](#new_TextScene_new)
    * [.go(index)](#TextScene+go)

<a name="new_TextScene_new"></a>

### new TextScene(params)
Construct the text scene


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> |  |
| params.name | <code>string</code> | the name of the scene |
| [params.onMount] | <code>function</code> | event handler for the mount event |
| [params.onDismount] | <code>function</code> | event handler for the dismount event |
| params.text | <code>string</code> | The text for the scene to display |
| params.nextScenes | <code>array</code> | The next scenes to go to |

<a name="TextScene+go"></a>

### textScene.go(index)
Go to one of the next scenes if it exists
defaults to the first item if the index doesn't exist

**Kind**: instance method of [<code>TextScene</code>](#TextScene)  

| Param | Type |
| --- | --- |
| index | <code>number</code> | 

