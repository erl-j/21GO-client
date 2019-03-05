# App Structure



# Conventions

# Folder Structure

A *scene* is really just another word for a page. Each scene should have it's route in the app component.

The scenes are as follows:

* **Welcome**
* **SignIn**
* **Catalog**
    
    Here the user can see what superorders are available. They can search by location and tag.

    * SuperorderSummary

* **Superorder**
    The user can inspect a superorder and make a request to add their order.
* **Profile**




If this was ever to be a viable business it would be great (essential) to have a view that shows what products can be ordered as well (looking at popular items previously ordered from superorders to the same store as a currently available superorder).


## Container Components:

- class component
- connected to store
- dispatches actions

## Presentation components:

- functional component.
- not connected to store (has to use container).
- dispatches actions.

# Interesting api's

- **mailboxlayer**: Email address validation
- **NumValidate**: Open Source phone number validation
- **Exchangeratesapi**: Exchange rates with currency conversion

