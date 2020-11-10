let helpers = {
  createObjects: (numOfObjects = 5) => {
    let list = [];
    for (let i = 0; i < 5; i++) {
      let obj = {
        serviceId: i,
        assignment: {
          assignmentNumber: i + 10,
          assignmentId: i * 2,
          customer: {
            name: "Customer " + i
          },
          project: {
            name: "Project " + i
          },
          internalReference: "Internal Reference " + i,
          address: {
            name: "Address " + i,
            address1: "Address1 " + i
          },
          caseHandler_Employee: {
            fullName: "caseHandler_Employee " + i
          }
        },
        startDateTimeUTC: "2020-10-27T00:00:00",
        wageCode: {
          wageCodeNumber: i * 3,
          wageCodeName: "wageCodeName " + i,
          combined_WageCodeNumber_WageCodeName: `${i * 3} wageCodeName ${i}`,
          wageCodeId: i * 4,
          enum_WageCodeQuantityPriceRuleId: "QuantityAndPrice"
        },
        serviceComment: `serviceComment ${i}`,
        quantity: i,
        costPrice: i * 100,
        wagePeriodId: i * 5,
        employeeId: i * 6
      };
      list.push(obj);
    }
    return list;
  }
};
export default helpers;
