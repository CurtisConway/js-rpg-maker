<a name="BattleScene"></a>

## BattleScene ⇐ <code>Scene</code>
BattleScene

**Kind**: global class  
**Extends**: <code>Scene</code>  

* [BattleScene](#BattleScene) ⇐ <code>Scene</code>
    * [new BattleScene(params)](#new_BattleScene_new)
    * _instance_
        * [.aliveFriendlies](#BattleScene+aliveFriendlies) : <code>number</code>
        * [.aliveEnemies](#BattleScene+aliveEnemies) : <code>number</code>
        * [.getTurnOrder()](#BattleScene+getTurnOrder)
        * [.endTurn()](#BattleScene+endTurn)
        * [.nextTurn()](#BattleScene+nextTurn)
        * [.attack(attacker, defender, damage)](#BattleScene+attack)
        * [.addUnitDeathEventListeners()](#BattleScene+addUnitDeathEventListeners)
    * _static_
        * [.calculateDamage(attacker, defender, damage)](#BattleScene.calculateDamage)

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
| params.victoryScene | <code>Scene</code> | The scene to move to upon victory |
| params.deathScene | <code>Scene</code> | The scene to move to upon death |

<a name="BattleScene+aliveFriendlies"></a>

### battleScene.aliveFriendlies : <code>number</code>
Amount of alive friendly team members
When this number reaches 0, the death scene is mounted

**Kind**: instance property of [<code>BattleScene</code>](#BattleScene)  
<a name="BattleScene+aliveEnemies"></a>

### battleScene.aliveEnemies : <code>number</code>
Amount of alive enemy team members
When this number reaches 0, the victory scene is mounted

**Kind**: instance property of [<code>BattleScene</code>](#BattleScene)  
<a name="BattleScene+getTurnOrder"></a>

### battleScene.getTurnOrder()
Get the turn order

**Kind**: instance method of [<code>BattleScene</code>](#BattleScene)  
<a name="BattleScene+endTurn"></a>

### battleScene.endTurn()
End the current turn

**Kind**: instance method of [<code>BattleScene</code>](#BattleScene)  
<a name="BattleScene+nextTurn"></a>

### battleScene.nextTurn()
Go to the next turn

**Kind**: instance method of [<code>BattleScene</code>](#BattleScene)  
<a name="BattleScene+attack"></a>

### battleScene.attack(attacker, defender, damage)
Emit an attack event between two units

**Kind**: instance method of [<code>BattleScene</code>](#BattleScene)  

| Param | Type |
| --- | --- |
| attacker | <code>Unit</code> | 
| defender | <code>Unit</code> | 
| damage | <code>number</code> | 

<a name="BattleScene+addUnitDeathEventListeners"></a>

### battleScene.addUnitDeathEventListeners()
Add event listeners for whenever a unit dies

**Kind**: instance method of [<code>BattleScene</code>](#BattleScene)  
<a name="BattleScene.calculateDamage"></a>

### BattleScene.calculateDamage(attacker, defender, damage)
Calculate the damage based on unit attributes

Will increase damage by 1 for every 2 strength the attacker has
Will reduce the damage by 1 for every 100 armor the defender has

**Kind**: static method of [<code>BattleScene</code>](#BattleScene)  

| Param | Type |
| --- | --- |
| attacker | <code>Unit</code> | 
| defender | <code>Unit</code> | 
| damage | <code>number</code> | 

