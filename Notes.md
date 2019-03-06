# XXIGO NOTES

## Folder Structure

A Scene folder like **"src/Scenes/SignIn"** only contain resources that are exclusive to it.

Components that are used in different scenes get their own folder in *src*. For example: **"src/SuperOrder"**.


### Scenes

A *scene* is really just another word for a page. Each scene should have it's route in the app component.

The scenes are as follows:

* **Welcome**
* **SignIn**
* **Catalog**: The user can see what superorders are available. They can search by location and tag.

* **Superorder**
    The user can inspect a superorder and make a request to add their order.
* **Profile**




If this was ever to be a viable business it would be great (essential) to have a view that shows what products can be ordered as well (looking at popular items previously ordered from superorders to the same store as a currently available superorder).

## Conventions

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

## Interesting api's

- **mailboxlayer**: Email address validation
- **NumValidate**: Open Source phone number validation
- **Exchangeratesapi**: Exchange rates with currency conversion
- **Cloudinary**: hosting images.

