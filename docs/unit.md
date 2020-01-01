<a name="Unit"></a>

## Unit
Unit

**Kind**: global class  
**Mixes**: <code>Events</code>  

* [Unit](#Unit)
    * [new Unit(params)](#new_Unit_new)
    * [.spawn([params])](#Unit+spawn)
    * [.damage(amount)](#Unit+damage)
    * [.heal(amount)](#Unit+heal)

<a name="new_Unit_new"></a>

### new Unit(params)
Construct the Unit


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  |  |
| params.name | <code>string</code> |  | the name of the unit |
| [params.totalHealth] | <code>number</code> | <code>1</code> | the total health of the unit |
| [params.currentHealth] | <code>number</code> |  | the current health of the unit |
| [params.speed] | <code>number</code> | <code>1</code> | the speed of the unit |
| [params.strength] | <code>number</code> | <code>1</code> | the strength of the unit |
| [params.armor] | <code>number</code> | <code>1</code> | the armor of the unit |
| [params.onSpawn] | <code>function</code> |  | event handler for the spawn event |
| [params.onDeath] | <code>function</code> |  | event handler for the death event |

<a name="Unit+spawn"></a>

### unit.spawn([params])
Spawn the Unit

**Kind**: instance method of [<code>Unit</code>](#Unit)  

| Param | Type | Description |
| --- | --- | --- |
| [params] | <code>object</code> |  |
| [params.totalHealth] | <code>number</code> | the total health of the unit |
| [params.currentHealth] | <code>number</code> | the current health of the unit |
| [params.speed] | <code>number</code> | the speed of the unit |
| [params.strength] | <code>number</code> | the strength of the unit |
| [params.armor] | <code>number</code> | the armor of the unit |

<a name="Unit+damage"></a>

### unit.damage(amount)
Damage the Unit

**Kind**: instance method of [<code>Unit</code>](#Unit)  

| Param | Type | Default |
| --- | --- | --- |
| amount | <code>number</code> | <code>0</code> | 

<a name="Unit+heal"></a>

### unit.heal(amount)
Heal the Unit

**Kind**: instance method of [<code>Unit</code>](#Unit)  

| Param | Type | Default |
| --- | --- | --- |
| amount | <code>number</code> | <code>0</code> | 

