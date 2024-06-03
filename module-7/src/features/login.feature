@Login @ProductFeature
Feature: Login Functionality and Product Selection
 
@LoginTest
Scenario Outline: Users can log in with valid credentials
  Given I am on the login page
  When I log in with "<username>" and "<password>"
  Then I should be redirected to the home page
  And the homepage title should be "Swag Labs"

    Examples:
      | username         | password     |
      | standard_user    | secret_sauce |
      | visual_user | secret_sauce |
      | problem_user     | secret_sauce |

@AddToCartTest
Scenario: Sort products and add to cart
  When I sort products by "Price (low to high)"
  And I add a product to the cart
  