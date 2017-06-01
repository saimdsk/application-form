  var app = angular.module('DynamicFormApp', []);

  app.controller('DynamicFormController', function($scope, $log) {

      // we would get this from the api
      $scope.entity = {
          "questionare_guid": "adfs-23ds-33fs-fsaf-999999a",
          "questionare_created": "20170530",
          "questionare_created_by": "MSK",
          "question_List": [
          {
              "question_sectoin_guid": "adfs-23ds-33fs-fsaf-999999a",
              "question_section": "Application Information",
              "questions": [{
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Contact Information",
                  "question_text": "",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "InputFields",
                  "input": [{
                      "fieldname": "CADB Administrator (Primary Contact)",
                      "fieldtype": "text",
                      "fieldsize": "50",
                      "validator": "required"
                  }, {
                      "fieldname": "Address",
                      "fieldtype": "text",
                      "fieldsize": "50",
                      "validator": "required"
                  },
                  {
                      "fieldname": "City",
                      "fieldtype": "text",
                      "fieldsize": "50",
                      "validator": "required"
                  }, {
                      "fieldname": "State",
                      "fieldtype": "text",
                      "fieldsize": "2",
                      "validator": "required"
                  },
                  {
                      "fieldname": "Zip Code",
                      "fieldtype": "text",
                      "fieldsize": "5",
                      "validator": "required"
                  },
                  {
                      "fieldname": "Email",
                      "fieldtype": "text",
                      "fieldsize": "50",
                      "validator": "required"
                  },
                  {
                      "fieldname": "Phone",
                      "fieldtype": "text",
                      "fieldsize": "15",
                      "validator": "required"
                  },
                  {
                      "fieldname": "Fax",
                      "fieldtype": "text",
                      "fieldsize": "15",
                      "validator": "required"
                  }]
              }, {
                  "id": "agricultural",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Agricultural Development Areas:",
                  "question_text": "",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "values":[
                  {
                    "type":"radio",
                    "typeValue":"Yes"
                  },
                  {
                    "type":"radio",
                    "typeValue":"No"
                  
                  }],
                  "dependent_question": [{
                      "dependent_on": "agricultural",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "Is the county requesting SADC certification of an agricultural development area amendment as part of this application approval?",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "checkList",
                      "checkList": [{
                          "fieldname": "A copy of the adopted criteria for agricultural development area identification",
                          "fieldtype": "checkbox",
                          "validator": "required"
                      }, {
                          "fieldname": "A copy of the CADB resolution of agricultural development area adoption",
                          "fieldtype": "checkbox",
                          "validator": "required"
                      }, {
                          "fieldname": "Justification that the adopted agricultural development area meets the statutory criteria set forth at N.J.A.C.2:76-1.3.",
                          "fieldtype": "checkbox",
                          "validator": "required"
                      }]
                  }]
              }, {
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Project Areas:",
                  "question_text": "For each project area please attach a completed Project Area Summary Form",
                  "question_help_text": "Add additional rows as needed",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "table",
                  "tableHeader": [{
                      "name": "Project Area"
                  }, {
                      "name": "Project Area Aggregate Size(Acres)"
                  }, {
                      "name": "Project Area Density(%)"
                  }, {
                      "name": "Total # Of Targeted Farms"
                  }, {
                      "name": "Total Acreage of Targeted Farms"
                  }, {
                      "name": "Targeted Farm Soil Productivity(%)"
                  }, {
                      "name": "Total Estimated Cost For Targeted Farms Easement Purchase"
                  }],
                  "tableData": [{
                      "name": ""
                  }, {
                      "name": ""
                  }, {
                      "name": ""
                  }, {
                      "name": ""
                  }, {
                      "name": ""
                  }]
              }, {
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Project Areas Totals:",
                  "question_text": "",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "table",
                  "tableHeader": [{
                      "name": "Total Project Area Acreage"
                  }, {
                      "name": "Total # of Targeted Farms"
                  }, {
                      "name": "Total Acreage of Targeted Farms"
                  }, {
                      "name": "Total Estimated Cost"
                  }],
                  "tableData": [{
                      "name": ""
                  }]
              }, {
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Preservation Goals:",
                  "question_text": "",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "table",
                  "tableHeader": [{
                      "name": "Target"
                  }, {
                      "name": "Acres"
                  }, {
                      "name": "Number of farms"
                  }],
                  "tableData": [{
                      "name": ""
                    },{
                      "name": ""
                    },{
                      "name": ""
                    
                  }]
              }]
            },
          {
              "question_sectoin_guid": "adfs-23ds-33fs-fsaf-999999a",
              "question_section": "County Policy Information:",
              "question_section_help_text": "If the answer is YES to the following and the amendment has been made since last year's submittal,please attach a copy of the adopted County Agricultural Development Board or Freeholder Board policy or resolution explaining the position of the county.A NO answer is acknowledgement that the county relies upon SADC policy or regulation.",
              "questions": [{
                  "id": "MEC1",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Minimum Eligibilty Criteria:",
                  "question_text": "Does the county have a minimum eligibilty criteria or standards policy for solicitation and approval of applications for farmland preservation?",
                  "question_help_text": "See SADC regulation N.J.A.C 2:76-6.20",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "values": [
                    {
                      "type": 'radio',
                      "typeValue": 'Yes'
                    },
                    {
                      "type": 'radio',
                      "typeValue": 'No'
                    }
                  ],
                  "dependent_question": [{
                      "dependent_on": "MEC1",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "If yes,has the policy been amended since last year's submittal?",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "YesNo",
                      "values": [
                        {
                          "type": 'radio',
                          "typeValue": 'Yes'
                        },
                        {
                          "type": 'radio',
                          "typeValue": 'No'
                        }
                      ]
                  }]
              }, {
                  "id": "CRC1",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "County Ranking Criteria:",
                  "question_text": "Does the county have a ranking criteria policy to prioritize farms for preservation funding?",
                  "question_help_text": "See SADC regulation N.J.A.C.2:76-6.16 & SADC Policy P-14E",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "values": [
                    {
                      "type": 'radio',
                      "typeValue": 'Yes'
                    },
                    {
                      "type": 'radio',
                      "typeValue": 'No'
                    }
                  ],
                  "dependent_question": [{
                      "dependent_on": "CRC1",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "If yes,has the policy been amended since last year's submittal?",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "YesNo",
                      "values": [
                        {
                          "type": 'radio',
                          "typeValue": 'Yes'
                        },
                        {
                          "type": 'radio',
                          "typeValue": 'No'
                        }
                      ]
                  }]
              }, {
                  "id": "ALH1",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Agricultural Labour Housing:",
                  "question_text": "Does the county have a policy on agricultural labor housing for preserved forms?",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "values": [
                    {
                      "type": 'radio',
                      "typeValue": 'Yes'
                    },
                    {
                      "type": 'radio',
                      "typeValue": 'No'
                    }
                  ],
                  "dependent_question": [{
                      "dependent_on": "ALH1",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "If yes,has the policy been amended since last year's submittal?",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "YesNo",
                      "values": [
                        {
                          "type": 'radio',
                          "typeValue": 'Yes'
                        },
                        {
                          "type": 'radio',
                          "typeValue": 'No'
                        }
                      ]
                  }]
              },
              {
                  "id": "HR1",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "House Replacement:",
                  "question_text": "Does the county have a policy replacement of a residence on preserved farmland?",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "values": [
                    {
                      "type": 'radio',
                      "typeValue": 'Yes'
                    },
                    {
                      "type": 'radio',
                      "typeValue": 'No'
                    }
                  ],
                  "dependent_question": [{
                      "dependent_on": "HR1",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "If yes,has the policy been amended since last year's submittal?",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "YesNo",
                      "values": [
                        {
                          "type": 'radio',
                          "typeValue": 'Yes'
                        },
                        {
                          "type": 'radio',
                          "typeValue": 'No'
                        }
                      ]
                  }]
              },
              {
                  "id": "RDSOA1",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Residual Dwelling Site Opportunity Allocation:",
                  "question_text": "Does the county have a policy for the allocation of Residual Dwelling Site Opportunities?",
                  "question_help_text": "See SADC regulation N.J.A.C.2:76-6.17 and Policy P-28",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "values": [
                    {
                      "type": 'radio',
                      "typeValue": 'Yes'
                    },
                    {
                      "type": 'radio',
                      "typeValue": 'No'
                    }
                  ],
                  "dependent_question": [{
                      "dependent_on": "RDSOA1",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "If yes,has the policy been amended since last year's submittal?",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "YesNo",
                      "values": [
                        {
                          "type": 'radio',
                          "typeValue": 'Yes'
                        },
                        {
                          "type": 'radio',
                          "typeValue": 'No'
                        }
                      ]
                  }]
              },
            {
                "id": "ERDSO1",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Exercising a Residual Dwelling Site Opportunity:",
                  "question_text": "Does the county have a policy for exercising Residual Dwelling Site Opportunity?",
                  "question_help_text": "See SADC regulation N.J.A.C.2:76-6.17 and Policy P-31",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "values": [
                    {
                      "type": 'radio',
                      "typeValue": 'Yes'
                    },
                    {
                      "type": 'radio',
                      "typeValue": 'No'
                    }
                  ],
                  "dependent_question": [{
                      "dependent_on": "ERDSO1",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "If yes,has the policy been amended since last year's submittal?",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "YesNo",
                      "values": [
                        {
                          "type": 'radio',
                          "typeValue": 'Yes'
                        },
                        {
                          "type": 'radio',
                          "typeValue": 'No'
                        }
                      ]
                  }]
              },
            {
                "id": "DOP1",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Division of Premises:",
                  "question_text": "Does the county have a policy regarding the division of permanently preserved farmland?",
                  "question_help_text": "See SADC Policy P-30A",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "values": [
                    {
                      "type": 'radio',
                      "typeValue": 'Yes'
                    },
                    {
                      "type": 'radio',
                      "typeValue": 'No'
                    }
                  ],
                  "dependent_question": [{
                      "dependent_on": "DOP1",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "If yes,has the policy been amended since last year's submittal?",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "YesNo",
                      "values": [
                        {
                          "type": 'radio',
                          "typeValue": 'Yes'
                        },
                        {
                          "type": 'radio',
                          "typeValue": 'No'
                        }
                      ]
                  }]
              },
            {
                 "id": "EX1",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Exemptions:",
                  "question_text": "Does the county have a policy for the granting of severable and non-severable exceptions?",
                  "question_help_text": "See SADC Policy P-29A",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "values": [
                    {
                      "type": 'radio',
                      "typeValue": 'Yes'
                    },
                    {
                      "type": 'radio',
                      "typeValue": 'No'
                    }
                  ],
                  "dependent_question": [{
                      "dependent_on": "EX1",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "If yes,has the policy been amended since last year's submittal?",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "YesNo",
                      "values": [
                        {
                          "type": 'radio',
                          "typeValue": 'Yes'
                        },
                        {
                          "type": 'radio',
                          "typeValue": 'No'
                        }
                      ]
                  }]
              },
            {
                 "id": "OP1",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Other Policies:",
                  "question_text": "Does the county have other policies related to farmland preservation?",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "values": [
                    {
                      "type": 'radio',
                      "typeValue": 'Yes'
                    },
                    {
                      "type": 'radio',
                      "typeValue": 'No'
                    }
                  ],
                  "dependent_question": [{
                      "dependent_on": "OP1",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "If yes,please list and describe:",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "YesNo",
                      // "values": [
                      //   {
                      //     "type": 'radio',
                      //     "typeValue": 'Yes'
                      //   },
                      //   {
                      //     "type": 'radio',
                      //     "typeValue": 'No'
                      //   }
                      // ]
                  }]

              }] 
            },
          {
              "question_sectoin_guid": "adfs-23ds-33fs-fsaf-999999a",
              "question_section": "Funding Information:",
              "question_section_help_text": "",
              "questions": [{
                  "id": "funding",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "County Funding:",
                  "question_text": "Please check all that apply:",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                  "dependent_question": [{
                      "dependent_on": "funding",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "County dedicated open space/farmland preservation tax:",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "checkList",
                      "checkList": [{
                          "fieldname": "County dedicated open space/farmland preservation tax: ",
                          "fieldtype": "checkbox",
                          "validator": "required",
                          "help_text1": "Annual revenue generated from dedicated tax: $",
                          "help_text2": "Annual tax revenue dedicated to farmland preservation: $"
                      }, {
                          "fieldname": "Repeated annual appropriations dedicated to farmland preservation:",
                          "fieldtype": "checkbox",
                          "validator": "required",
                          "help_text1": "Please describe:"
                      },
                         {
                          "fieldname": "Repeated Issuance of Bonded Indebtedness",
                          "fieldtype": "checkbox",
                          "validator": "required",
                          "help_text1": "Please describe"

                      },
                       {
                          "fieldname": "Other funding sources:",
                          "fieldtype": "checkbox",
                          "validator": "required",
                          "help_text1": "Please describe:"
                      }]
                  }]
              
              }, {
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Municipal Funding:",
                  "question_text": "For each project",
                  "question_help_text": "Add additional rows as needed",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "table",
                  "tableHeader": [{
                      "name": "Municipality"
                  }, {
                      "name": "Tax Rate per $100"
                  }, {
                      "name": "Annual Revenue Generated"
                  }, {
                      "name": "Annual Revenue Deducted to Farmland Preservation"
                  }, {
                      "name": "Repeated Annual Appropriations"
                  }, {
                      "name": "Repeated Issuance of Bonded Indebtedness "
                  }, {
                      "name": "Revenue from Others Sources"
                  }],
                  "tableData": [{
                      "name": ""
                  }, {
                      "name": ""
                  }, {
                      "name": ""
                  }, {
                      "name": ""
                  }, {
                      "name": ""
                  }]
              }, {
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Municipal Funding Totals:",
                  "question_text": "",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "table",
                  "tableHeader": [{
                      "name": "Total Annual Revenue Generated"
                  }, {
                      "name": "Total Annual Revenue Deducted to Farmland Preservation"
                  }, {
                      "name": "Total Repeated Annual Appropriations "
                  }, {
                      "name": "Total Issuance of Bonded Indebtedness"
                  }, {
                      "name": "Total Revenue from Others Sources"
                  }],
                  "tableData": [{
                      "name": ""
                  }]
                },
                {
                  "id": "CSR",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Cost Share Requirements:",
                  "question_text": "",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                   "values":[
                  {
                    "type":"radio",
                    "typeValue":"Yes"
                  },
                  {
                    "type":"radio",
                    "typeValue":"No"
                  
                  }],
                  "dependent_question": [{
                      "dependent_on": "CSR",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "Does the county require cost share contribution from sources other than the state on development easement acquisitions?",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true"
                  }]
                },
                {
                  "id": "IPA",
                  "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                  "question_heading": "Installment Purchase Agreements:",
                  "question_text": "If the answer is YES to any of the following............",
                  "question_help_text": "",
                  "allow_notes": "true",
                  "allow_updates": "true",
                  "question_type": "YesNo",
                   "values":[
                  {
                    "type":"radio",
                    "typeValue":"Yes"
                  },
                  {
                    "type":"radio",
                    "typeValue":"No"

                  }],
                  "dependent_question": [{
                      "dependent_on": "IPA",
                      "ask_if": "Yes",
                      "question_guid": "adfs-23ds-33fs-fsaf-999999a",
                      "question_heading": "",
                      "question_text": "Does the county permit the use of installment purchase agreements?",
                      "question_help_text": "",
                      "allow_notes": "true",
                      "allow_updates": "true",
                      "question_type": "checkList",
                      "checkList": [{
                          "fieldname": "Installment Purchase Agreements are: (plese check all that apply) ",
                          "fieldtype": "checkbox",
                          "validator": "required",
                          "help_text1": "Always required",
                          "help_text2": "Required on a case by case basis",
                          "help_text3": "Available on a voluntary"
                        }]
                    }]
                  }]
              }
        ]
      };
      $scope.submitForm = function() {};
  }).directive("dynamicName", function($compile) {
      return {
          restrict: "A",
          terminal: true,
          priority: 1000,
          link: function(scope, element, attrs) {
              element.attr('name', scope.$eval(attrs.dynamicName));
              element.removeAttr("dynamic-name");
              $compile(element)(scope);
          }
      };
  });
