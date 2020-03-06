# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

rails new app-name -d postgresql -T

2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - Get grabs the address in the addressbar and runs the method associated
library - library is a referance to a view
:id - this is a prameter to pass as a value into the method stated above
book - book is the name of the controller that a method lives inside
show - show is the method that lives in the controller book

3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

-*-In Console-*-
- rails g migration
-*-In Coding Environment-*-
- add_colum :model, :parent_id, :integer
-*-In Console-*-
- rails db:migrate

4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

-*-Datatype doesn't have to be string-*-
- rails g model Person shirt:string pants:string shoes:string

5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

-*-In Coding Environment-*-
- Navigate to validations for model. ./app/models/"yourmodel".rb
-*-Add Code-*-
validates :shirt, :pants, :shoes, presence: true