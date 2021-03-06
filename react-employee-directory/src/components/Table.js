import React from 'react';
import MaterialTable from 'material-table';

export default function Table() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Surname', field: 'surname' },
            { title: 'Employee ID', field: 'employeeID', type: 'numeric' },
            { title: 'Salary', field: 'salary', type: 'numeric' },
            { title: 'Location', field: 'location' },
            {
                title: 'Job Title',
                field: 'jobTitle',
                lookup: { 34: 'HR Specialist', 63: 'CEO', 1: 'Director', 2: 'Accounting', 3: 'Software Developer', 4: 'Contractor' },
            },
        ],
        data: [
            { name: 'Mehmet', surname: 'Baran', salary: 170000.56, location: 'Adelaide', employeeID: 981987, jobTitle: 63 },
            { name: 'Wolfgang', surname: 'Schreiber', salary: 89291.34, location: 'Hillcrest', employeeID: 284721, jobTitle: 3 },
            { name: 'Matilde', surname: 'Wilson', salary: 150000.89, location: 'Unley', employeeID: 329479, jobTitle: 1 },
            { name: 'Anthony', surname: 'Thomas', salary: 100820.53, location: 'Adelaide', employeeID: 902847, jobTitle: 3 },
            { name: 'Claire', surname: 'Underwood', salary: 91048.79, location: 'North Adelaide', employeeID: 832110, jobTitle: 4 },
            { name: 'Arya', surname: 'Stark', salary: 110382.45, location: 'Marion', employeeID: 768390, jobTitle: 34 },
            { name: 'Henry', surname: 'Hanks', salary: 78029.26, location: 'Glenelg', employeeID: 899003, jobTitle: 1 },
            { name: 'Maria', surname: 'Browder', salary: 79258.13, location: 'Adelaide', employeeID: 833271, jobTitle: 2 },
            { name: 'Joe', surname: 'Bradley', salary: 91002.46, location: 'Adelaide', employeeID: 786542, jobTitle: 34 },
            { name: 'Paul', surname: 'Green', salary: 39104.19, location: 'Sydney', employeeID: 382813, jobTitle: 3 },
            { name: 'Zerya', surname: 'Baran', salary: 74502.58, location: 'Adelaide', employeeID: 207717, jobTitle: 34 },
            { name: 'Rikke', surname: 'Hansen', salary: 89532.24, location: 'Norwood', employeeID: 393748, jobTitle: 2 },
            { name: 'Camil', surname: 'Chacon', salary: 74501.80, location: 'Melbourne',  employeeID: 653940, jobTitle: 63 },
            { name: 'Lynn', surname: 'Smith', salary: 93012.89, location: 'Brisbane', employeeID: 687432, jobTitle: 3 },
            { name: 'Amber', surname: 'Ly', salary: 70432.15, location: 'Adelaide', employeeID: 490021, jobTitle: 63 },
            { name: 'Kevin', surname: 'Garza', salary: 85943.20, location: 'West Beach', employeeID: 382941, jobTitle: 34 },
            { name: 'Israel', surname: 'Medina', salary: 40592.14, location: 'Sydney', employeeID: 583021, jobTitle: 5 },
        ],
    });

    return (
        <MaterialTable
            title="Employee Database"
            columns={state.columns}
            data={state.data}
            style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.75)', 
            }}
            options= {{ 
                headerStyle: {
                    backgroundColor: 'rgba(255, 255, 255, 0.4)',
                    fontSize: '18px',
                    fontWeight: 'bold'
                }
            }}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState(prevState => {
                                    // Copy previous state data to a new array
                                    const data = [...prevState.data];
                                    // Get edited row index
                                    const index = data.indexOf(oldData);
                                    // Replace old row with new one
                                    data[index] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                    onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                const index = data.indexOf(oldData);
                                data.splice(index, 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    );
}