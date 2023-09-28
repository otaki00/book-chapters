import Form from './Form';
const NewForm = (props) => {

    const handle = (enteredData) => {
        const user= {
            ...enteredData,
        }
    }

    return (
        <div>
            <Form onSaveUser = {handle}/>
        </div>
    )
}
export default NewForm;