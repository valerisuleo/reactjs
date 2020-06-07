# Form Validation with `Joi`


## Exercise

#### Requirements

Add the following validations to the Donut app:

- Flavor is required
- Only certain flavors can be added (strawberry, chocolate, custard or apple)
- Size is required
- Only certain styles can be added (small, medium or large)
- Only show the validation messages after submit/on type
- Make sure that the form cannot be submitted if it is invalid

**Bonus:**

- Add some CSS styling to your validations
- Reset the form after submit (back to pristine and untouched)

#### Deliverable

Here is a screenshot of what your final code might look like:

![validations](https://cloud.githubusercontent.com/assets/40461/9593800/1ad6d962-504b-11e5-9338-f03a6ab4cacf.jpg)

#### Tips

- Attach your form to your `MainCtrl` using the `name` attribute on the form.
- Add `novalidate` to your `<form>` tag to stop the built in HTML5 validation popups.

## Additional Resources

- [`ngMessages` Docs](https://docs.angularjs.org/api/ngMessages)
- [Angular Validations Cheatsheet](http://www.ng-newsletter.com/posts/form-validation-with-angularjs.html)
