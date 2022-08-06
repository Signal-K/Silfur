using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[System.Serializable]
public class InventorySlot {
    [SerializeField] private InventoryItemData itemData; // ref to inventory item object (scriptable object)
    [SerializeField] private int stackSize; // how many item is accessed in this slot

    public InventoryItemData ItemData => itemData;
    public int StackSize => stackSize;

    public InventorySlot(InventoryItemData source, int amount) { // e.g. test item 1 -> params listed in InventoryItemData object
        itemData = source;
        stackSize = amount;
    }

    public InventorySlot() {
        ClearSlot();
    }

    public void ClearSlot() { // Take an item out of the slot/inventory
        itemData = null; // If the slot doesn't have anything in it, there's no item type and no amount of item type
        stackSize = -1;  // The slot is still there are ready to be accessed
    }

    public bool RoomLeftInStack(int amountToAdd, out int amountRemaining) {
        amountRemaining = ItemData.MaxStackSize - stackSize;

        return RoomLeftInStack(amountToAdd);
    }

    public bool RoomLeftInStack(int amountToAdd) { // Can the stack/slot hold more items of the same type?
        if (stackSize + amountToAdd <= itemData.MaxStackSize) return true;
        else return false;
    }

    public void AddToStack(int amount) {
        stackSize += amount;
    }

    public void RemoveFromStack(int amount) {
        stackSize -= amount;
    }

}
