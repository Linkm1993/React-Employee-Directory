function nameSort (object,sortDirection)  {

    let sortedEmployees;
    let sortDir=sortDirection;

    function compareAsc(a, b) {
        const employeeA = a.name.first;
        const employeeB = b.name.first;
      
        let comparison = 0;
        if (employeeA > employeeB) {
          comparison = 1;
        } else if (employeeA < employeeB) {
          comparison = -1;
        }
        return comparison;
    }

    function compareDsc(a, b) {
        const employeeA = a.name.first;
        const employeeB = b.name.first;
      
        let comparison = 0;
        if (employeeA < employeeB) {
          comparison = 1;
        } else if (employeeA > employeeB) {
          comparison = -1;
        }
        return comparison;
    }
    
    if (sortDir===1) {
        sortedEmployees= object.sort(compareAsc);
    } else if (sortDir===0){
        sortedEmployees= object.sort(compareDsc);
    }
    
    
    console.log(sortedEmployees)

    return sortedEmployees
}

module.exports={
    nameSort
}