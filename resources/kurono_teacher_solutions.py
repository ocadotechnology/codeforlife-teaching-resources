#########################
# Worksheet 1 solutions #
#########################

# Starter code
def next_turn(world_state, avatar_state):
    new_dir = direction.NORTH
    # Your code goes here  
    action = MoveAction(new_dir)
    return action


# Task 2 - Change direction
def next_turn(world_state, avatar_state):
    new_dir = direction.SOUTH
    action = MoveAction(new_dir)
    return action

# Task 3 - All directions
import random
def next_turn(world_state, avatar_state):
    # Choose a random direction to move in
    number = random.randint(1,4)
    if number == 1:
        new_dir = direction.NORTH
    elif number == 2:
        new_dir = direction.EAST
    elif number == 3:
        new_dir = direction.SOUTH
    else:
        new_dir = direction.WEST

    action = MoveAction(new_dir)
    
    return action

# Task 4 - Investigate location
import random
def next_turn(world_state, avatar_state):
    # Choose a random direction to move in
    number = random.randint(1,4)
    if number == 1:
        new_dir = direction.NORTH
    elif number == 2:
        new_dir = direction.EAST
    elif number == 3:
        new_dir = direction.SOUTH
    else:
        new_dir = direction.WEST

    # Ask Kurono for details about the cell you would move into
    next_cell = avatar_state.location + new_dir 
    print("The co-ordinates of the next cell are", next_cell)
    if world_state.can_move_to(next_cell):
        print("Yes, I can move")
    else:
        print("I can't move there!")

    action = MoveAction(new_dir)
    
    return action


# Extension
# Currently, we try to move even if we know we cannot move to that location
# Instead, we could do this:
    if world_state.can_move_to(next_cell):
        print("Yes, I can move")
        action = MoveAction(new_dir)
    else:
        print("I can't move there!")
        action = WaitAction()
    return action


#########################
# Worksheet 2 solutions #
#########################

# Starter code
import random
def next_turn(world_state, avatar_state):
    # Choose a random direction to move in
    number = random.randint(1,4)
    if number == 1:
        new_dir = direction.NORTH
    elif number == 2:
        new_dir = direction.EAST
    elif number == 3:
        new_dir = direction.SOUTH
    else:
        new_dir = direction.WEST

    # Get details about the cell you would move into
    next_cell = avatar_state.location + new_dir 
    if world_state.can_move_to(next_cell):
        # This cell is free
        action = MoveAction(new_dir)
    else:
        print("I can't move that way!")
        action = WaitAction()
    
    return action

# Task 1 - Avoiding Obstacles
# Solution 1 - turn around 180 degrees
def next_turn(world_state, avatar_state):
    # Choose a random direction to move in
    number = random.randint(1,4)
    if number == 1:
        new_dir = direction.NORTH
    elif number == 2:
        new_dir = direction.EAST
    elif number == 3:
        new_dir = direction.SOUTH
    else:
        new_dir = direction.WEST

    # Get details about the cell you would move into
    next_cell = avatar_state.location + new_dir 
    if world_state.can_move_to(next_cell):
        # This cell is free
        action = MoveAction(new_dir)
    else:
        print("I can't move that way! Turning around...")
        # Turn around
        if new_dir == direction.NORTH:
            new_dir = direction.SOUTH
        elif new_dir == direction.EAST:
            new_dir = direction.WEST
        elif new_dir == direction.SOUTH:
            new_dir = direction.NORTH
        else:
            new_dir = direction.EAST

        action = MoveAction(new_dir)
    
    return action

# Solution 2 - choose another random direction (no additional subroutine)
import random
def next_turn(world_state, avatar_state):
    # Choose a random direction to move in
    number = random.randint(1,4)
    if number == 1:
        new_dir = direction.NORTH
    elif number == 2:
        new_dir = direction.EAST
    elif number == 3:
        new_dir = direction.SOUTH
    else:
        new_dir = direction.WEST

    # Get details about the cell you would move into
    next_cell = avatar_state.location + new_dir 
    if world_state.can_move_to(next_cell):
        # This cell is free
        action = MoveAction(new_dir)
    else:
        print("I can't move that way! Choosing another direction...")
        # Choose a random direction to move in
        number = random.randint(1,4)
        if number == 1:
            new_dir = direction.NORTH
        elif number == 2:
            new_dir = direction.EAST
        elif number == 3:
            new_dir = direction.SOUTH
        else:
            new_dir = direction.WEST

        action = MoveAction(new_dir)
    
    return action


# With subroutines
# Task 1 - Choose another random direction (with additional subroutine)
import random
def next_turn(world_state, avatar_state):
    new_dir = get_random_dir()
    
    # Get details about the cell you would move into
    next_cell = avatar_state.location + new_dir 
    if world_state.can_move_to(next_cell):
        action = MoveAction(new_dir)
    else:
        print("I can't move that way! Choosing another direction...")
        action = next_dir = get_random_dir()
        action = MoveAction(new_dir)
    
    return action

def get_random_dir():
    # Choose a random direction to move in
    number = random.randint(1,4)
    if number == 1:
        new_dir = direction.NORTH
    elif number == 2:
        new_dir = direction.EAST
    elif number == 3:
        new_dir = direction.SOUTH
    else:
        new_dir = direction.WEST
    
    return new_dir

# Extension - favour a particular direction; in this case South and West
import random
def next_turn(world_state, avatar_state):
    new_dir = get_random_dir()
    
    # Get details about the cell you would move into
    next_cell = avatar_state.location + new_dir 
    if world_state.can_move_to(next_cell):
        action = MoveAction(new_dir)
    else:
        print("I can't move that way! Choosing another direction...")
        action = next_dir = get_random_dir()
        action = MoveAction(new_dir)
    
    return action

def get_random_dir():
    # Choose a random direction to move in
    number = random.randint(1,10)
    if number == 1:
        new_dir = direction.NORTH
    elif number == 2:
        new_dir = direction.EAST
    elif number < 7:
        new_dir = direction.SOUTH
    else:
        new_dir = direction.WEST
    
    return new_dir


# Task 2 - Picking up an artefact

# Starter code
def next_turn(world_state, avatar_state):
    # Check to see if there is an artefact on the current cell
    # Your code goes here

    # Pick it up if there is
    if ???: # Complete this
        # Your code goes here
    else: 
        # Otherwise, move in a random direction
        number = random.randint(1,4)
        if number == 1:
            new_dir = direction.NORTH
        elif number == 2:
            new_dir = direction.EAST
        elif number == 3:
            new_dir = direction.SOUTH
        else:
            new_dir = direction.WEST

        action = MoveAction(new_dir)

    return action

# Solution
import random
def next_turn(world_state, avatar_state):
    # Check to see if there is an artefact on the current cell
    current_cell = world_state.get_cell(avatar_state.location)
    if current_cell.has_artefact():
        print("Found an artefact!")
        action = PickupAction()
    else:
        # Choose a random direction to move in
        number = random.randint(1,4)
        if number == 1:
            new_dir = direction.NORTH
        elif number == 2:
            new_dir = direction.EAST
        elif number == 3:
            new_dir = direction.SOUTH
        else:
            new_dir = direction.WEST

        action = MoveAction(new_dir)

    return action

#########################
# Worksheet 3 solutions #
#########################

# Scans nearby, moves towards the nearest artefact, and picks it up
def next_turn(world_state, avatar_state):
    # scan_nearby has an optional 'radius' parameter. 
    # Set it to radius=20 for a bigger scan radius (defaults to 10).
    nearby = world_state.scan_nearby(avatar_state.location)
    nearest = nearby[0]
    
    current_cell = world_state.get_cell(avatar_state.location)
    if current_cell.has_artefact():
        action = PickupAction()
    else:    
        action = MoveTowardsAction(nearest)
    return action

# Inspection of the backpack and artefact type
def next_turn(world_state, avatar_state):
    my_backpack = avatar_state.backpack
    if len(my_backpack) == 5:
        print("I win!")

        # Check the content of my backpack by artefact type
        index = 0
        key_count = 0
        chest_count = 0
        while index < len(avatar_state.backpack):
            artefact = my_backpack[index]
            if artefact.type == world_state.artefact_types.KEY:
                key_count += 1
            elif artefact.type == world_state.artefact_types.CHEST:
                chest_count += 1    
            index += 1
        print("I have {0} keys and {1} chests.".format(key_count, chest_count))

    # Continue collecting artefact
    nearby = world_state.scan_nearby(avatar_state.location)
    nearest = nearby[0]
    
    current_cell = world_state.get_cell(avatar_state.location)
    if current_cell.has_artefact():
        action = PickupAction()
    else:    
        action = MoveTowardsAction(nearest)
        
    return action