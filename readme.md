## SOQL Tool for Salesforce

### Objectives
1. Create users with authentication
2. After users are created, filter routes
3. Store queries
4. Make queries public
5. SOQL help section
6. SOQL templates
7. Typeahead for query writing
8. Load metadata
9. Determine errors in SOQL statement




#### Typeahead specs

Function to parse input text into an object
{
    type: "SELECT",
    fields: [
        "Id",
        "Name"],
    sobject: "Account",
    availableFields: [],
    filters: [{field:"BillingCity",operator:"=",value="Boston"}]
}

event based directive based on "tab" key.

During type ahead the $scope.query = "SELECT Id, Bill<highlighted>ingCity__c</highlighted> FROM Account"
Highlighted section should dissapear and fill with proposed value when tab key is hit.

Function needs to be 