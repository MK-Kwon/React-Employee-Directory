import React, { Component } from 'react';
import MaterialTable from 'material-table';

class Table extends Component {
    render() {
        return (
            <MaterialTable
                title='Employee Database'
                columns={[
                    { title: 'Name', field: 'name' },
                    { title: 'Surname', field: 'surname' },
                    { title: 'Employee ID', field: 'employeeID' },
                    { 
                        title: 'Job Title',
                        field: 'jobTitle',
                        lookup: { 30: 'Graphic Design', 70: 'IT', 1: 'CEO', 12: 'HR', 25: 'Accounting' },
                    },
                ]}
                data={[
                    { name: 'Katy', surname: 'Lee', employeeID: 981987, jobTitle: 63 },
                    { name: 'Tom', surname: 'Schreiber', employeeID: 284721, jobTitle: 3 },
                    { name: 'Jessica', surname: 'Wilson', employeeID: 329479, jobTitle: 1 },
                    { name: 'Susan', surname: 'Browder', employeeID: 833271, jobTitle: 2 },
                    { name: 'Joe', surname: 'Bradley', employeeID: 786542, jobTitle: 34 },
                    { name: 'Paul', surname: 'Green', employeeID: 382813, jobTitle: 3 },
                    { name: 'Zerya Betül', surname: 'Baran', employeeID: 207717, jobTitle: 34 },
                    { name: 'Rikke', surname: 'Hansen', employeeID: 393748, jobTitle: 2 },
                ]}
                options={{
                    sorting: true
                }}
            />
        )
    }
}

export default Table;