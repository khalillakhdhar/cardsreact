import  React  from 'react';

class App extends React.Component
{
    // eslint-disable-next-line no-useless-constructor
    constructor(props)
    {
        super(props);
        this.state={
             numbers : [1, 2, 3, 4, 5],
             students : [
                {
                'id': 1,
                'name': 'Jack',
                'email': 'jack@gmail.com'
                },
                {
                'id': 2,
                'name': 'Mary',
                'email': 'mary@gmail.com'
                },
                {
                'id': 3,
                'name': 'John',
                'email': 'john@gmail.com'
                },
                ]
        }


    }
   
    render()
    {
        return(
            <><div>
                <ul>{this.state.numbers.map((num) => <li>{num}</li>)}</ul>
            </div>
            <h1 className='text-center'> List of student </h1>
<table className="table table-bordered">
<tr className='text-center'>
<th >ID</th>
<th>Name</th>
<th>Email</th></tr>
{this.state.students.map((student, index) => (
<tr className='text-center' data-index={index}>
<td>{student.id}</td>
<td>{student.name}</td>
<td>{student.email}</td>
</tr>
))}
</table>
<div>
                
                
                
                </div></>
        );
    }
}
export default App;
