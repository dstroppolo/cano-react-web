# Cano interview test for React Web

---

## Instructions

- Fork the repository
- Create a new branch called `your-name-dd-mm`
- Complete the tasks listed below
- Open a pull request

## Tasks

1. Make alternating rows different colors.
2. Format the `Price` column to match the pattern `$X.XX`. Eg. 2.21 -> $2.21, 5.5 -> $5.50
3. Implement the `removeItem` function to the app. The function already exists as an action and is already imported in the `List` component. All that's left is to implement the reducer and call the function in the component while also adding a button. 
4. The "Reset original items" button causes the web page to crash. Fix the function it calls so it no longer crashes and resets the items list properly. Do not change the reducer or the rendered component.
5. Prevent the user from adding a new item if 1) Any of the fields are empty 2) The UUID is duplicated.
