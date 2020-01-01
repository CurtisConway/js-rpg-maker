<a name="BattleScene"></a>

## BattleScene ⇐ <code>Scene</code>
BattleScene

**Kind**: global class  
**Extends**: <code>Scene</code>  

* [BattleScene](#BattleScene) ⇐ <code>Scene</code>
    * [new BattleScene(params)](#new_BattleScene_new)
    * [.getTurnOrder()](#BattleScene+getTurnOrder)
    * [.nextTurn()](#BattleScene+nextTurn)

<a name="new_BattleScene_new"></a>

### new BattleScene(params)
Construct the battle scene


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> |  |
| params.name | <code>string</code> | the name of the scene |
| [params.onMount] | <code>function</code> | event handler for the mount event |
| [params.onDismount] | <code>function</code> | event handler for the dismount event |
| params.text | <code>string</code> | The text for the scene to display |
| params.friendlyTeam | <code>array.&lt;Unit&gt;</code> | The friendly team in the battle |
| params.enemyTeam | <code>array.&lt;Unit&gt;</code> | The enemy team in the battle |

<a name="BattleScene+getTurnOrder"></a>

### battleScene.getTurnOrder()
Get the turn order

**Kind**: instance method of [<code>BattleScene</code>](#BattleScene)  
<a name="BattleScene+nextTurn"></a>

### battleScene.nextTurn()
Go to the next turn

**Kind**: instance method of [<code>BattleScene</code>](#BattleScene)  
