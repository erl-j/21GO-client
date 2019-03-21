

## Our idea
    
*21go* is a platform on which you can easily make group orders, called *super orders*, to existing web shops.

A user can initiate an super order or browse the catalog to join an existing super order.


## What we've done

-Built a custom backend (using node.js, typeorm, mysql etc..)

-Landing Page/Sign in/Sign up: Most infrastructure and presentation in place. 70%

-Catalog : Infrastructure in place, presentation in progress. Currently no superorders to show 50%

-My profile : 0%

-Set (Create/edit) superorder: Not yet linked anywhere but accessible at <baserUrl>/setSuperOrder 95%

-Set (Create/edit) order:  Some infrastructure and presentation in place 50%   
     
## What we plan to do

  -Finish aforementioned scenes.

  -Set up appropriate validation for all inputs.
  
  -Iterate

## Project file structure (short description/purpose of each file)

A Scene folder like **"src/Scenes/SignIn"** only contain resources (containers/presentational components, actions, reducers) that are exclusive to it.

Context agnostic components like *ValidatedInput*,*Checkbox* are stored in **"src/Components"

Other components that are used in different scenes get their own folder in *src*. For example: **"src/SuperOrder"**.

The scenes are as follow:
    
-Welcome/Sign in/Sign up (currently separate but to be merged in the next refactor)

-Catalog : here you can see currently available group orders

-Set (Create/edit) superorder: here you can create or edit a super order.

-Set (Create/edit) order: here you can add to an existing super order.

-My profile : here you can see your account details as well as your current and past orders and super orders.


### Containers:

- name always ends in container
- class component
- connected to store
- dispatches actions
- can summon different presentational components (using render props for now).

### Presentation:

- functional component.
- not connected to store (has to use container).
- dispatches actions.
- State limited to ui/input (use hook useState())
    


