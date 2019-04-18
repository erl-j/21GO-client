## Our idea
    
*21go* is a platform on which you can easily make group orders, called *super orders*, to existing web shops.

A user can initiate an super order or browse the catalog to join an existing super order.
     
## Project file structure (short description/purpose of each file)

A Scene folder like **"src/Scenes/SignIn"** only contain resources (containers/presentational components, actions, reducers) that are exclusive to it.

Context agnostic components like *ValidatedInput*,*Checkbox* are stored in **"src/Components"

Other components that are used in different scenes get their own folder in *src*. For example: **"src/SuperOrder"**.

The scenes are as follow:
    
-Welcome, where you can sign in or sign up

-Catalog : here you can see currently available group orders

-Set (Create/edit) superorder: here you can create or edit a super order.

-Set (Create/edit) order: here you can add an order to an existing super order.

-My profile : here you can see your account details as well as your orders and super orders.


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
    
### External API Used

Cloudinary to host images, not very well integrated with the rest of the app, but the API calls are functional