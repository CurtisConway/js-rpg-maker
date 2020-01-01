<a name="Scene"></a>

## Scene
Scene

**Kind**: global class  
**Mixes**: <code>Events</code>  

* [Scene](#Scene)
    * [new Scene(params)](#new_Scene_new)
    * [.mount()](#Scene+mount)
    * [.dismount()](#Scene+dismount)
    * [.next(scene)](#Scene+next)

<a name="new_Scene_new"></a>

### new Scene(params)
Construct the scene


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> |  |
| params.name | <code>string</code> | the name of the scene |
| [params.onMount] | <code>function</code> | event handler for the mount event |
| [params.onDismount] | <code>function</code> | event handler for the dismount event |

<a name="Scene+mount"></a>

### scene.mount()
Mount the scene

**Kind**: instance method of [<code>Scene</code>](#Scene)  
<a name="Scene+dismount"></a>

### scene.dismount()
Dismount the scene

**Kind**: instance method of [<code>Scene</code>](#Scene)  
<a name="Scene+next"></a>

### scene.next(scene)
Dismount the scene and mount the next scene

**Kind**: instance method of [<code>Scene</code>](#Scene)  

| Param | Type | Description |
| --- | --- | --- |
| scene | [<code>Scene</code>](#Scene) | The next scene to move on to |

